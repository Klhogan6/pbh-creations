import Link from "next/link";

const footerLinks = [
  { label: "Services", href: "#services" },
  { label: "Pricing", href: "#pricing" },
  { label: "Contact", href: "#contact" },
];

export default function Footer() {
  return (
    <footer className="bg-[#1a1a1a] text-white py-12">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
          {/* Brand */}
          <div>
            <Link href="/" className="text-white font-bold text-lg tracking-tight">
              PBH Creations
            </Link>
            <p className="mt-1 text-sm text-gray-400">
              Web Design &amp; Digital Marketing · Lexington, SC
            </p>
          </div>

          {/* Nav links */}
          <nav aria-label="Footer navigation" className="flex flex-wrap gap-6">
            {footerLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm text-gray-400 hover:text-white transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>
        </div>

        {/* Bottom bar */}
        <div className="mt-8 pt-8 border-t border-white/10">
          <p className="text-xs text-gray-500">
            &copy; 2025 PBH Creations. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
