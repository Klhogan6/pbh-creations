import { createSupabaseServerClient } from "@/lib/supabase/server";
import ManageBillingButton from "@/components/portal/ManageBillingButton";
import type { Profile } from "@/lib/supabase/types";

const tierLabels: Record<string, string> = {
  starter: "Starter — $125/mo",
  hands_off: "Hands Off — $625/mo",
};

const statusColors: Record<string, string> = {
  active: "bg-green-100 text-green-700",
  canceled: "bg-gray-100 text-gray-500",
  past_due: "bg-red-100 text-red-600",
};

export default async function DashboardPage() {
  const supabase = await createSupabaseServerClient();
  const { data: { user } } = await supabase.auth.getUser();

  // Fetch profile from Supabase
  const { data: profile } = (await supabase
    .from("profiles")
    .select("*")
    .eq("id", user!.id)
    .single()) as { data: Profile | null; error: unknown };

  const displayName = profile?.full_name ?? user?.email ?? "there";
  const status = profile?.subscription_status ?? null;
  const tier = profile?.subscription_tier ?? null;
  const stripeCustomerId = profile?.stripe_customer_id ?? null;

  return (
    <div>
      <h1 className="text-2xl font-bold text-[#1a1a1a] mb-1">
        Welcome back, {typeof displayName === "string" ? displayName.split(" ")[0] : displayName}.
      </h1>
      <p className="text-gray-500 text-sm mb-8">
        Here&apos;s a summary of your account.
      </p>

      {/* Subscription card */}
      <div className="bg-white rounded-2xl border border-gray-200 p-6 mb-6">
        <div className="flex items-start justify-between flex-wrap gap-4">
          <div>
            <p className="text-xs text-gray-400 uppercase tracking-wider font-semibold mb-1">
              Your Plan
            </p>
            <p className="text-lg font-bold text-[#1a1a1a]">
              {tier ? tierLabels[tier] ?? tier : "No active plan"}
            </p>
          </div>

          {status && (
            <span
              className={`text-xs font-semibold px-3 py-1 rounded-full capitalize ${
                statusColors[status] ?? "bg-gray-100 text-gray-500"
              }`}
            >
              {status.replace("_", " ")}
            </span>
          )}
        </div>

        {stripeCustomerId ? (
          <div className="mt-6">
            <ManageBillingButton stripeCustomerId={stripeCustomerId} />
          </div>
        ) : (
          <p className="mt-4 text-sm text-gray-400">
            No billing information on file yet. Complete checkout to activate your plan.
          </p>
        )}
      </div>

      {/* Quick links */}
      <div className="grid sm:grid-cols-2 gap-4">
        <a
          href="/portal/reports"
          className="bg-white rounded-xl border border-gray-200 p-5 hover:border-[#334155]/40 hover:shadow-sm transition-all group"
        >
          <p className="font-semibold text-[#1a1a1a] mb-1 group-hover:text-[#334155] transition-colors">
            Monthly Reports
          </p>
          <p className="text-sm text-gray-400">
            View your performance snapshots and analytics.
          </p>
        </a>
        <a
          href="/portal/site-updates"
          className="bg-white rounded-xl border border-gray-200 p-5 hover:border-[#334155]/40 hover:shadow-sm transition-all group"
        >
          <p className="font-semibold text-[#1a1a1a] mb-1 group-hover:text-[#334155] transition-colors">
            Site Updates
          </p>
          <p className="text-sm text-gray-400">
            See the history of changes made to your website.
          </p>
        </a>
      </div>
    </div>
  );
}
