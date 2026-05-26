import { NextRequest, NextResponse } from "next/server";

// TODO: Create Stripe Customer Portal session and redirect — feature/stripe-checkout
export async function POST(_req: NextRequest) {
  return NextResponse.json(
    { error: "Not implemented yet" },
    { status: 501 }
  );
}
