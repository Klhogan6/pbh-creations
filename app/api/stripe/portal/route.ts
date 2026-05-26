import { NextRequest, NextResponse } from "next/server";
import { getStripeClient } from "@/lib/stripe/client";

export async function POST(req: NextRequest) {
  // TODO: Get stripeCustomerId from authenticated Supabase session — feature/supabase-auth
  // For now, accept it from the request body for testing purposes
  let body: unknown;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: "Invalid request body" }, { status: 400 });
  }

  const customerId = (body as Record<string, unknown>).customerId as string | undefined;
  if (!customerId) {
    return NextResponse.json(
      { error: "Missing customerId — will be read from session after supabase-auth is complete" },
      { status: 400 }
    );
  }

  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000";
  const portalConfigId = process.env.STRIPE_PORTAL_CONFIGURATION_ID;

  const stripe = getStripeClient();
  const session = await stripe.billingPortal.sessions.create({
    customer: customerId,
    return_url: `${siteUrl}/portal/dashboard`,
    ...(portalConfigId ? { configuration: portalConfigId } : {}),
  });

  return NextResponse.json({ url: session.url });
}
