import { NextRequest, NextResponse } from "next/server";
import Stripe from "stripe";
import { getStripeClient } from "@/lib/stripe/client";

// Disable body parsing — Stripe needs the raw body for signature verification
export const runtime = "nodejs";

async function handleCheckoutCompleted(
  session: Stripe.Checkout.Session
): Promise<void> {
  const email = session.customer_details?.email ?? session.customer_email;
  const customerId =
    typeof session.customer === "string" ? session.customer : null;
  const subscriptionId =
    typeof session.subscription === "string" ? session.subscription : null;

  if (!email || !customerId) return;

  // Determine tier from the price ID on the subscription
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

  // TODO: Upsert profile in Supabase — feature/supabase-auth
  // await upsertProfile({ email, stripeCustomerId: customerId, tier, status: "active" });
  console.log("[webhook] checkout.session.completed", { email, customerId, tier });
}

async function handleSubscriptionDeleted(
  subscription: Stripe.Subscription
): Promise<void> {
  const customerId =
    typeof subscription.customer === "string" ? subscription.customer : null;
  if (!customerId) return;

  // TODO: Update subscription_status to "canceled" in Supabase — feature/supabase-auth
  // await updateSubscriptionStatus({ stripeCustomerId: customerId, status: "canceled" });
  console.log("[webhook] customer.subscription.deleted", { customerId });
}

async function handleSubscriptionUpdated(
  subscription: Stripe.Subscription
): Promise<void> {
  const customerId =
    typeof subscription.customer === "string" ? subscription.customer : null;
  if (!customerId) return;

  const status = subscription.status as string;
  const priceId = subscription.items.data[0]?.price.id;
  const tier =
    priceId === process.env.STRIPE_HANDS_OFF_PRICE_ID ? "hands_off" : "starter";

  // TODO: Sync plan changes in Supabase — feature/supabase-auth
  // await updateSubscription({ stripeCustomerId: customerId, tier, status });
  console.log("[webhook] customer.subscription.updated", { customerId, tier, status });
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
