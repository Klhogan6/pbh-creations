"use client";

import { Suspense, useState } from "react";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import { createSupabaseBrowserClient } from "@/lib/supabase/client";

function LoginForm() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const redirect = searchParams.get("redirect") ?? "/portal/dashboard";

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    setError(null);

    const supabase = createSupabaseBrowserClient();
    const { error: authError } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    if (authError) {
      setError(authError.message);
      setLoading(false);
      return;
    }

    router.push(redirect);
    router.refresh();
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      {error && (
        <div
          role="alert"
          className="text-sm text-red-600 bg-red-50 border border-red-200 rounded-lg px-4 py-3"
        >
          {error}
        </div>
      )}

      <div>
        <label
          htmlFor="email"
          className="block text-sm font-medium text-[#1a1a1a] mb-1.5"
        >
          Email address
        </label>
        <input
          id="email"
          type="email"
          autoComplete="email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full px-4 py-2.5 text-sm border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#334155]/30 focus:border-[#334155] transition-colors"
        />
      </div>

      <div>
        <label
          htmlFor="password"
          className="block text-sm font-medium text-[#1a1a1a] mb-1.5"
        >
          Password
        </label>
        <input
          id="password"
          type="password"
          autoComplete="current-password"
          required
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full px-4 py-2.5 text-sm border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#334155]/30 focus:border-[#334155] transition-colors"
        />
      </div>

      <button
        type="submit"
        disabled={loading}
        className="w-full py-3 px-6 bg-[#334155] text-white text-sm font-semibold rounded-lg hover:bg-[#1e293b] transition-colors duration-150 disabled:opacity-60 disabled:cursor-not-allowed"
      >
        {loading ? "Signing in…" : "Sign in"}
      </button>
    </form>
  );
}

export default function LoginPage() {
  return (
    <main className="min-h-screen bg-[#f5f5f5] flex items-center justify-center px-6 py-16">
      <div className="w-full max-w-md">
        <Link
          href="/"
          className="block text-[#1a1a1a] font-bold text-lg tracking-tight mb-8 hover:opacity-70 transition-opacity"
        >
          PBH Creations
        </Link>

        <div className="bg-white rounded-2xl border border-gray-200 p-8">
          <h1 className="text-2xl font-bold text-[#1a1a1a] mb-1">
            Sign in to your account
          </h1>
          <p className="text-sm text-gray-500 mb-8">
            Don&apos;t have an account?{" "}
            <Link href="/signup" className="text-[#334155] font-medium hover:underline">
              Sign up
            </Link>
          </p>

          <Suspense fallback={<div className="h-48 animate-pulse bg-gray-50 rounded-lg" />}>
            <LoginForm />
          </Suspense>
        </div>
      </div>
    </main>
  );
}
