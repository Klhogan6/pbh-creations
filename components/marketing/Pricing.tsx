import CheckoutButton from "@/components/ui/CheckoutButton";

const starterFeatures = [
  "Free website build*",
  "3 content updates / month",
  "Google Business Profile setup & management",
  "Apple Maps setup & management",
  "Basic on-page SEO",
  "Monthly performance snapshot",
];

const handsOffFeatures = [
  "Everything in Starter",
  "Unlimited content updates",
  "Social media management (2–3 posts/week)",
  "Email marketing (2 campaigns/month)",
  "Paid ads management†",
  "Integrated business dashboards",
  "Monthly strategy call",
  "Priority turnaround",
];

function FeatureItem({ text }: { text: string }) {
  return (
    <li className="flex items-start gap-3 text-sm text-gray-600">
      <svg
        className="mt-0.5 w-4 h-4 shrink-0 text-[#334155]"
        viewBox="0 0 16 16"
        fill="none"
        aria-hidden="true"
      >
        <circle cx="8" cy="8" r="8" fill="#334155" fillOpacity="0.1" />
        <path
          d="M5 8l2 2 4-4"
          stroke="#334155"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
      {text}
    </li>
  );
}

export default function Pricing() {
  return (
    <section id="pricing" className="bg-[#f5f5f5] py-20 md:py-28">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="max-w-xl mb-14">
          <p className="text-sm font-semibold tracking-widest uppercase text-[#334155] mb-4">
            Pricing
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-[#1a1a1a] leading-tight mb-4">
            Simple, transparent pricing.
          </h2>
          <p className="text-gray-500 text-lg">
            No setup fees. No hidden costs. Pick the plan that fits where your
            business is right now.
          </p>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-2 gap-6 max-w-4xl">
          {/* Starter */}
          <div className="bg-white rounded-2xl border border-gray-200 p-8 flex flex-col">
            <div className="mb-6">
              <p className="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-2">
                Starter
              </p>
              <div className="flex items-baseline gap-1">
                <span className="text-4xl font-bold text-[#1a1a1a]">$125</span>
                <span className="text-gray-400 text-sm">/month</span>
              </div>
              <p className="mt-2 text-sm text-gray-500">
                Everything you need to get online and get found.
              </p>
            </div>

            <ul className="space-y-3 mb-8 flex-1">
              {starterFeatures.map((f) => (
                <FeatureItem key={f} text={f} />
              ))}
            </ul>

            <CheckoutButton
              plan="starter"
              className="w-full py-3 px-6 rounded-lg border-2 border-[#334155] text-[#334155] text-sm font-semibold hover:bg-[#334155] hover:text-white transition-colors duration-150 disabled:opacity-60 disabled:cursor-not-allowed"
            >
              Get Started
            </CheckoutButton>
          </div>

          {/* Hands Off */}
          <div className="bg-[#334155] rounded-2xl p-8 flex flex-col text-white relative overflow-hidden">
            {/* Popular badge */}
            <div className="absolute top-5 right-5">
              <span className="text-xs font-semibold bg-white/20 text-white px-3 py-1 rounded-full">
                Most Popular
              </span>
            </div>

            {/* Subtle background texture */}
            <div
              aria-hidden="true"
              className="absolute inset-0 opacity-5"
              style={{
                backgroundImage:
                  "radial-gradient(circle, #fff 1px, transparent 1px)",
                backgroundSize: "20px 20px",
              }}
            />

            <div className="relative mb-6">
              <p className="text-sm font-semibold text-white/60 uppercase tracking-wider mb-2">
                Hands Off
              </p>
              <div className="flex items-baseline gap-1">
                <span className="text-4xl font-bold text-white">$625</span>
                <span className="text-white/60 text-sm">/month</span>
              </div>
              <p className="mt-2 text-sm text-white/70">
                Full-service marketing so you can focus on your business.
              </p>
            </div>

            <ul className="relative space-y-3 mb-8 flex-1">
              {handsOffFeatures.map((f) => (
                <li key={f} className="flex items-start gap-3 text-sm text-white/90">
                  <svg
                    className="mt-0.5 w-4 h-4 shrink-0 text-white"
                    viewBox="0 0 16 16"
                    fill="none"
                    aria-hidden="true"
                  >
                    <circle cx="8" cy="8" r="8" fill="rgba(255,255,255,0.2)" />
                    <path
                      d="M5 8l2 2 4-4"
                      stroke="white"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  {f}
                </li>
              ))}
            </ul>

            <div className="relative">
              <CheckoutButton
                plan="hands_off"
                className="w-full py-3 px-6 rounded-lg bg-white text-[#334155] text-sm font-semibold hover:bg-gray-100 transition-colors duration-150 disabled:opacity-60 disabled:cursor-not-allowed"
              >
                Get Started
              </CheckoutButton>
            </div>
          </div>
        </div>

        {/* Disclosure */}
        <p className="mt-8 text-xs text-gray-400 max-w-2xl leading-relaxed">
          *Free website build included with subscription. Website files transfer
          to client after 3 months at no cost. Early cancellation: files
          available for purchase at $625. †Ad spend not included in Hands Off
          plan pricing.
        </p>
      </div>
    </section>
  );
}
