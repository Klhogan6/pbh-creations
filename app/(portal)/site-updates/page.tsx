// TODO: GitHub integration — pull commit history for client's site repository
export default function SiteUpdatesPage() {
  return (
    <div>
      <h1 className="text-2xl font-bold text-[#1a1a1a] mb-1">Site Updates</h1>
      <p className="text-gray-500 text-sm mb-8">
        A log of all changes made to your website.
      </p>

      <div className="bg-white rounded-2xl border border-gray-200 p-10 text-center">
        <div className="text-4xl mb-4">🔧</div>
        <p className="font-semibold text-[#1a1a1a] mb-2">
          Updates will show up here.
        </p>
        <p className="text-sm text-gray-400 max-w-sm mx-auto">
          Every change made to your site — new pages, content edits, fixes —
          will be logged here so you always know what's been done.
        </p>
      </div>
    </div>
  );
}
