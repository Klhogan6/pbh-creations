import { NextRequest, NextResponse } from "next/server";

// TODO: Implement Stripe Checkout session creation — feature/stripe-checkout
export async function POST(_req: NextRequest) {
  return NextResponse.json(
    { error: "Not implemented yet" },
    { status: 501 }
  );
}
