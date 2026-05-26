const problems = [
  {
    before: "Agencies charge $5,000+ upfront",
    after: "Your site is built free with any plan",
  },
  {
    before: "12-month contracts you can't escape",
    after: "Month-to-month. Cancel anytime.",
  },
  {
    before: "Reports that raise more questions than answers",
    after: "Plain-English updates you can actually use",
  },
];

export default function ProblemSolution() {
  return (
    <section id="services" className="bg-[#f5f5f5] py-20 md:py-28">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="max-w-2xl mb-14">
          <p className="text-sm font-semibold tracking-widest uppercase text-[#334155] mb-4">
            The problem
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-[#1a1a1a] leading-tight mb-5">
            The old agency model is broken for small businesses.
          </h2>
          <p className="text-gray-500 text-lg leading-relaxed">
            Big retainers. Locked contracts. Deliverables that take weeks and
            explanations that take longer. If you've been burned by an agency
            before, you're not alone — and you're not crazy for expecting
            better.
          </p>
        </div>

        {/* Problem vs Solution grid */}
        <div className="grid gap-4 sm:grid-cols-3">
          {problems.map((item) => (
            <div
              key={item.before}
              className="bg-white rounded-xl p-6 border border-gray-100"
            >
              <p className="text-sm text-gray-400 line-through mb-2">
                {item.before}
              </p>
              <p className="text-sm font-semibold text-[#334155]">
                ✓ {item.after}
              </p>
            </div>
          ))}
        </div>

        {/* Transition statement */}
        <p className="mt-10 text-base text-gray-500 max-w-xl">
          PBH Creations was built specifically for local businesses that are
          tired of being treated like an afterthought. Here's how we do it
          differently.
        </p>
      </div>
    </section>
  );
}
