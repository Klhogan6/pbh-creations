// TODO: Pull subscription status from Supabase — feature/portal-scaffold
// TODO: Wire Manage Billing button to /api/stripe/portal — feature/portal-scaffold
export default function DashboardPage() {
  return (
    <div className="p-8">
      <h1 className="text-2xl font-semibold text-[#1a1a1a]">
        Welcome back
      </h1>
      <p className="mt-2 text-gray-500 text-sm">
        Your subscription status and account details will appear here.
      </p>
      <button
        disabled
        className="mt-6 px-4 py-2 bg-[#334155] text-white text-sm rounded opacity-50 cursor-not-allowed"
      >
        Manage Billing
      </button>
    </div>
  );
}
