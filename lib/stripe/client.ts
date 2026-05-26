import Stripe from "stripe";

function getStripe(): Stripe {
  const key = process.env.STRIPE_SECRET_KEY;
  if (!key) throw new Error("Missing STRIPE_SECRET_KEY environment variable");
  return new Stripe(key, { apiVersion: "2026-04-22.dahlia" });
}

// Lazy singleton — only initializes when a route handler calls it
let _stripe: Stripe | null = null;
export function getStripeClient(): Stripe {
  if (!_stripe) _stripe = getStripe();
  return _stripe;
}

export const PRICE_IDS: Record<"starter" | "hands_off", string | undefined> = {
  starter: process.env.STRIPE_STARTER_PRICE_ID,
  hands_off: process.env.STRIPE_HANDS_OFF_PRICE_ID,
};
