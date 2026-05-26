// TODO: Notion integration — pull monthly performance reports per client
export default function ReportsPage() {
  return (
    <div>
      <h1 className="text-2xl font-bold text-[#1a1a1a] mb-1">Reports</h1>
      <p className="text-gray-500 text-sm mb-8">
        Monthly performance snapshots for your business.
      </p>

      <div className="bg-white rounded-2xl border border-gray-200 p-10 text-center">
        <div className="text-4xl mb-4">📊</div>
        <p className="font-semibold text-[#1a1a1a] mb-2">
          Your reports are on their way.
        </p>
        <p className="text-sm text-gray-400 max-w-sm mx-auto">
          Monthly performance reports will appear here once your subscription
          is active and your first billing cycle completes.
        </p>
      </div>
    </div>
  );
}
