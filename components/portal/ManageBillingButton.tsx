"use client";

import { useState } from "react";

interface ManageBillingButtonProps {
  stripeCustomerId: string;
}

export default function ManageBillingButton({
  stripeCustomerId,
}: ManageBillingButtonProps) {
  const [loading, setLoading] = useState(false);

  async function handleClick() {
    setLoading(true);
    try {
      const res = await fetch("/api/stripe/portal", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ customerId: stripeCustomerId }),
      });
      const data = await res.json() as { url?: string };
      if (data.url) window.location.href = data.url;
    } finally {
      setLoading(false);
    }
  }

  return (
    <button
      onClick={handleClick}
      disabled={loading}
      className="px-4 py-2 bg-[#334155] text-white text-sm font-semibold rounded-lg hover:bg-[#1e293b] transition-colors disabled:opacity-60 disabled:cursor-not-allowed"
    >
      {loading ? "Opening…" : "Manage Billing"}
    </button>
  );
}
