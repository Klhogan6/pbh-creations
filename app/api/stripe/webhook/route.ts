import { NextRequest, NextResponse } from "next/server";
import Stripe from "stripe";
import { getStripeClient } from "@/lib/stripe/client";
import { createSupabaseServiceClient } from "@/lib/supabase/server";
import type { Database } from "@/lib/supabase/types";

export const runtime = "nodejs";

type ProfileUpdate = Database["public"]["Tables"]["profiles"]["Update"];

async function handleCheckoutCompleted(
  session: Stripe.Checkout.Session
): Promise<void> {
  const email = session.customer_details?.email ?? session.customer_email;
  const customerId =
    typeof session.customer === "string" ? session.customer : null;
  const subscriptionId =
    typeof session.subscription === "string" ? session.subscription : null;

  if (!email || !customerId) return;

  let tier: "starter" | "hands_off" = "starter";
  if (subscriptionId) {
    const stripe = getStripeClient();
    const subscription = await stripe.subscriptions.retrieve(subscriptionId, {
      expand: ["items.data.price"],
    });
    const priceId = subscription.items.data[0]?.price.id;
    if (priceId === process.env.STRIPE_HANDS_OFF_PRICE_ID) {
      tier = "hands_off";
    }
  }

  const supabase = createSupabaseServiceClient();

  // Find the auth user by email
  const { data: users } = await supabase.auth.admin.listUsers();
  const user = users?.users.find((u) => u.email === email);

  if (user) {
    const update: ProfileUpdate = {
      stripe_customer_id: customerId,
      subscription_status: "active",
      subscription_tier: tier,
      subscribed_at: new Date().toISOString(),
    };
    await supabase.from("profiles").update(update).eq("id", user.id);
  }
  // If no user exists yet, the profile is created on sign-up via the
  // handle_new_user trigger; stripe_customer_id is linked via subscription.updated.
}

async function handleSubscriptionDeleted(
  subscription: Stripe.Subscription
): Promise<void> {
  const customerId =
    typeof subscription.customer === "string" ? subscription.customer : null;
  if (!customerId) return;

  const supabase = createSupabaseServiceClient();
  const update: ProfileUpdate = { subscription_status: "canceled" };
  await supabase
    .from("profiles")
    .update(update)
    .eq("stripe_customer_id", customerId);
}

async function handleSubscriptionUpdated(
  subscription: Stripe.Subscription
): Promise<void> {
  const customerId =
    typeof subscription.customer === "string" ? subscription.customer : null;
  if (!customerId) return;

  const rawStatus = subscription.status;
  const validStatuses = ["active", "canceled", "past_due"] as const;
  const status = validStatuses.includes(rawStatus as (typeof validStatuses)[number])
    ? (rawStatus as "active" | "canceled" | "past_due")
    : null;

  const priceId = subscription.items.data[0]?.price.id;
  const tier: "starter" | "hands_off" =
    priceId === process.env.STRIPE_HANDS_OFF_PRICE_ID ? "hands_off" : "starter";

  const supabase = createSupabaseServiceClient();
  const update: ProfileUpdate = {
    subscription_status: status,
    subscription_tier: tier,
  };
  await supabase
    .from("profiles")
    .update(update)
    .eq("stripe_customer_id", customerId);
}

export async function POST(req: NextRequest) {
  const body = await req.text();
  const sig = req.headers.get("stripe-signature");
  const webhookSecret = process.env.STRIPE_WEBHOOK_SECRET;

  if (!sig || !webhookSecret) {
    return NextResponse.json(
      { error: "Missing stripe-signature header or webhook secret" },
      { status: 400 }
    );
  }

  const stripe = getStripeClient();

  let event: Stripe.Event;
  try {
    event = stripe.webhooks.constructEvent(body, sig, webhookSecret);
  } catch (err) {
    const message = err instanceof Error ? err.message : "Unknown error";
    return NextResponse.json(
      { error: `Webhook signature verification failed: ${message}` },
      { status: 400 }
    );
  }

  try {
    switch (event.type) {
      case "checkout.session.completed":
        await handleCheckoutCompleted(event.data.object as Stripe.Checkout.Session);
        break;
      case "customer.subscription.deleted":
        await handleSubscriptionDeleted(event.data.object as Stripe.Subscription);
        break;
      case "customer.subscription.updated":
        await handleSubscriptionUpdated(event.data.object as Stripe.Subscription);
        break;
      default:
        break;
    }
  } catch (err) {
    const message = err instanceof Error ? err.message : "Unknown error";
    console.error(`[webhook] handler error for ${event.type}:`, message);
    return NextResponse.json({ error: "Webhook handler failed" }, { status: 500 });
  }

  return NextResponse.json({ received: true });
}
