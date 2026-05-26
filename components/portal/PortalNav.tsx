"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { createSupabaseBrowserClient } from "@/lib/supabase/client";

const navItems = [
  { label: "Dashboard", href: "/portal/dashboard" },
  { label: "Reports", href: "/portal/reports" },
  { label: "Site Updates", href: "/portal/site-updates" },
];

export default function PortalNav() {
  const pathname = usePathname();
  const router = useRouter();

  async function handleSignOut() {
    const supabase = createSupabaseBrowserClient();
    await supabase.auth.signOut();
    router.push("/");
    router.refresh();
  }

  return (
    <nav
      className="bg-white border-b border-gray-100 px-6 py-0 flex items-center justify-between h-14"
      aria-label="Portal navigation"
    >
      <div className="flex items-center gap-6">
        <Link
          href="/"
          className="text-[#1a1a1a] font-bold text-base tracking-tight hover:opacity-70 transition-opacity mr-4"
        >
          PBH Creations
        </Link>
        {navItems.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className={`text-sm font-medium transition-colors pb-0.5 border-b-2 ${
              pathname === item.href
                ? "text-[#334155] border-[#334155]"
                : "text-gray-500 border-transparent hover:text-[#1a1a1a]"
            }`}
          >
            {item.label}
          </Link>
        ))}
      </div>
      <button
        onClick={handleSignOut}
        className="text-xs text-gray-400 hover:text-[#1a1a1a] transition-colors font-medium"
      >
        Sign out
      </button>
    </nav>
  );
}
