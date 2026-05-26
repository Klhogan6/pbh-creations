import { NextRequest, NextResponse } from "next/server";

// TODO: Handle Stripe webhook events — feature/stripe-checkout
// Events to handle:
//   checkout.session.completed  → create/update profile in Supabase
//   customer.subscription.deleted → update subscription_status
//   customer.subscription.updated  → sync plan changes
export async function POST(_req: NextRequest) {
  return NextResponse.json(
    { error: "Not implemented yet" },
    { status: 501 }
  );
}
