const differentiators = [
  {
    icon: "📍",
    title: "Local to Lexington, SC",
    body: "I'm not a remote team in another time zone. I'm a real person in your community who understands local business.",
  },
  {
    icon: "📊",
    title: "Data-informed, not guesswork",
    body: "Every decision is backed by real metrics. You'll always know what's working and why — in plain English.",
  },
  {
    icon: "🔓",
    title: "No long-term contracts",
    body: "Month-to-month. If it's not working for you, you're free to leave. I'd rather earn your business every month.",
  },
  {
    icon: "💬",
    title: "You're never in the dark",
    body: "Monthly reports, direct access, and honest updates. No vague agency-speak or disappearing project managers.",
  },
  {
    icon: "🏗️",
    title: "Built for small businesses",
    body: "Not enterprise software. Not bloated retainers. Services sized for businesses like yours — practical and effective.",
  },
  {
    icon: "⚡",
    title: "One person accountable",
    body: "When you have a question, you reach me — not a support ticket queue. Decisions get made fast.",
  },
];

export default function WhyPBH() {
  return (
    <section className="bg-white py-20 md:py-28">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="max-w-2xl mb-14">
          <p className="text-sm font-semibold tracking-widest uppercase text-[#334155] mb-4">
            Why PBH
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-[#1a1a1a] leading-tight mb-5">
            You deserve a partner, not a vendor.
          </h2>
          <p className="text-gray-500 text-lg leading-relaxed">
            I started PBH Creations because I was tired of seeing local
            businesses get oversold and underserved. Here's what I do
            differently.
          </p>
        </div>

        {/* Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {differentiators.map((item) => (
            <div
              key={item.title}
              className="group p-6 rounded-xl border border-gray-100 hover:border-[#334155]/30 hover:shadow-sm transition-all duration-200"
            >
              <span className="text-2xl mb-4 block" aria-hidden="true">
                {item.icon}
              </span>
              <h3 className="text-base font-bold text-[#1a1a1a] mb-2">
                {item.title}
              </h3>
              <p className="text-sm text-gray-500 leading-relaxed">{item.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
