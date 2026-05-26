export default function Hero() {
  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden bg-white">
      {/* Subtle dot grid background */}
      <div
        aria-hidden="true"
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "radial-gradient(circle, #334155 1px, transparent 1px)",
          backgroundSize: "28px 28px",
        }}
      />

      <div className="relative max-w-6xl mx-auto px-6">
        <div className="max-w-3xl">
          {/* Eyebrow */}
          <p className="text-sm font-semibold tracking-widest uppercase text-[#334155] mb-6">
            Web Design &amp; Digital Marketing · Lexington, SC
          </p>

          {/* Headline */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#1a1a1a] leading-[1.1] tracking-tight mb-6">
            A professional web presence{" "}
            <span className="text-[#334155]">without the agency nonsense.</span>
          </h1>

          {/* Subheadline */}
          <p className="text-lg md:text-xl text-gray-500 leading-relaxed mb-10 max-w-2xl">
            Most agencies overcharge, lock you into long contracts, and leave
            you guessing. PBH Creations builds your site for free, handles your
            marketing, and keeps you in the loop — starting at $125/month.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-3">
            <a
              href="#pricing"
              className="inline-flex items-center justify-center px-6 py-3.5 bg-[#334155] text-white text-sm font-semibold rounded-lg hover:bg-[#1e293b] transition-colors duration-150 shadow-sm"
            >
              See Our Plans
            </a>
            <a
              href="#how-it-works"
              className="inline-flex items-center justify-center px-6 py-3.5 text-[#334155] text-sm font-semibold rounded-lg border border-gray-200 hover:border-[#334155] hover:bg-gray-50 transition-colors duration-150"
            >
              Learn More
            </a>
          </div>

          {/* Social proof nudge */}
          <p className="mt-8 text-xs text-gray-400">
            No setup fees. No long-term contracts. Cancel anytime.
          </p>
        </div>
      </div>
    </section>
  );
}
