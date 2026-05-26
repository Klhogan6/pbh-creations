const steps = [
  {
    number: "01",
    title: "Pick a plan",
    description:
      "Choose Starter or Hands Off based on how much support you want. No hidden tiers, no upsells — what you see is what you get.",
  },
  {
    number: "02",
    title: "We build your site — free",
    description:
      "We design and develop your website at no extra cost as part of your subscription. Most sites are live within two weeks.",
  },
  {
    number: "03",
    title: "Ongoing support, no contracts",
    description:
      "Content updates, SEO, social media, and more — handled every month. Stay because it's working, not because you're locked in.",
  },
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="bg-white py-20 md:py-28">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="max-w-xl mb-14">
          <p className="text-sm font-semibold tracking-widest uppercase text-[#334155] mb-4">
            How it works
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-[#1a1a1a] leading-tight">
            Three steps. No surprises.
          </h2>
        </div>

        {/* Steps */}
        <div className="grid gap-8 md:grid-cols-3">
          {steps.map((step, i) => (
            <div key={step.number} className="relative flex flex-col">
              {/* Connector line — desktop only, between cards */}
              {i < steps.length - 1 && (
                <div
                  aria-hidden="true"
                  className="hidden md:block absolute top-6 left-[calc(100%+1px)] w-8 border-t border-dashed border-gray-200 z-10"
                  style={{ right: "-2rem" }}
                />
              )}

              {/* Step number */}
              <span className="text-4xl font-bold text-gray-100 select-none mb-4">
                {step.number}
              </span>

              <h3 className="text-lg font-bold text-[#1a1a1a] mb-3">
                {step.title}
              </h3>
              <p className="text-gray-500 leading-relaxed text-sm">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
