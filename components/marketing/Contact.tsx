"use client";

// TODO: Wire form submission to email service or Supabase
export default function Contact() {
  return (
    <section id="contact" className="bg-[#f5f5f5] py-20 md:py-28">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Left: copy */}
          <div>
            <p className="text-sm font-semibold tracking-widest uppercase text-[#334155] mb-4">
              Get in touch
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-[#1a1a1a] leading-tight mb-5">
              Ready to get started? Let's talk.
            </h2>
            <p className="text-gray-500 text-lg leading-relaxed">
              Not sure which plan is right for you? Fill out the form and I'll
              follow up within one business day — no pressure, no pitch.
            </p>
            <div className="mt-8 space-y-3 text-sm text-gray-500">
              <p>
                <span className="font-medium text-[#1a1a1a]">Location:</span>{" "}
                Lexington, SC
              </p>
              <p>
                <span className="font-medium text-[#1a1a1a]">Response time:</span>{" "}
                Within 1 business day
              </p>
            </div>
          </div>

          {/* Right: form */}
          <form
            onSubmit={(e) => e.preventDefault()}
            className="bg-white rounded-2xl border border-gray-200 p-8 space-y-5"
            aria-label="Contact form"
          >
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium text-[#1a1a1a] mb-1.5"
              >
                Your name
              </label>
              <input
                id="name"
                name="name"
                type="text"
                autoComplete="name"
                required
                placeholder="Jane Smith"
                className="w-full px-4 py-2.5 text-sm border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#334155]/30 focus:border-[#334155] transition-colors placeholder:text-gray-300"
              />
            </div>

            <div>
              <label
                htmlFor="business"
                className="block text-sm font-medium text-[#1a1a1a] mb-1.5"
              >
                Business name
              </label>
              <input
                id="business"
                name="business"
                type="text"
                placeholder="Smith's Hardware"
                className="w-full px-4 py-2.5 text-sm border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#334155]/30 focus:border-[#334155] transition-colors placeholder:text-gray-300"
              />
            </div>

            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-[#1a1a1a] mb-1.5"
              >
                Email address
              </label>
              <input
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                required
                placeholder="jane@smithshardware.com"
                className="w-full px-4 py-2.5 text-sm border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#334155]/30 focus:border-[#334155] transition-colors placeholder:text-gray-300"
              />
            </div>

            <div>
              <label
                htmlFor="message"
                className="block text-sm font-medium text-[#1a1a1a] mb-1.5"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows={4}
                placeholder="Tell me a bit about your business and what you're looking for…"
                className="w-full px-4 py-2.5 text-sm border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#334155]/30 focus:border-[#334155] transition-colors resize-none placeholder:text-gray-300"
              />
            </div>

            <button
              type="submit"
              className="w-full py-3 px-6 bg-[#334155] text-white text-sm font-semibold rounded-lg hover:bg-[#1e293b] transition-colors duration-150"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
