"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { createSupabaseBrowserClient } from "@/lib/supabase/client";

export default function SignupPage() {
  const router = useRouter();

  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    setError(null);

    const supabase = createSupabaseBrowserClient();
    const { error: authError } = await supabase.auth.signUp({
      email,
      password,
      options: {
        data: { full_name: fullName },
      },
    });

    if (authError) {
      setError(authError.message);
      setLoading(false);
      return;
    }

    setSuccess(true);
    setLoading(false);
    // Most Supabase projects require email confirmation before sign-in
    // After confirmation, redirect to /portal/dashboard
    setTimeout(() => router.push("/portal/dashboard"), 3000);
  }

  if (success) {
    return (
      <main className="min-h-screen bg-[#f5f5f5] flex items-center justify-center px-6 py-16">
        <div className="w-full max-w-md bg-white rounded-2xl border border-gray-200 p-8 text-center">
          <div className="text-3xl mb-4">📬</div>
          <h1 className="text-xl font-bold text-[#1a1a1a] mb-2">
            Check your email
          </h1>
          <p className="text-sm text-gray-500">
            We sent a confirmation link to <strong>{email}</strong>. Click it
            to activate your account and access your portal.
          </p>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-[#f5f5f5] flex items-center justify-center px-6 py-16">
      <div className="w-full max-w-md">
        {/* Logo */}
        <Link
          href="/"
          className="block text-[#1a1a1a] font-bold text-lg tracking-tight mb-8 hover:opacity-70 transition-opacity"
        >
          PBH Creations
        </Link>

        <div className="bg-white rounded-2xl border border-gray-200 p-8">
          <h1 className="text-2xl font-bold text-[#1a1a1a] mb-1">
            Create your account
          </h1>
          <p className="text-sm text-gray-500 mb-8">
            Already have an account?{" "}
            <Link
              href="/login"
              className="text-[#334155] font-medium hover:underline"
            >
              Sign in
            </Link>
          </p>

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
                htmlFor="full-name"
                className="block text-sm font-medium text-[#1a1a1a] mb-1.5"
              >
                Full name
              </label>
              <input
                id="full-name"
                type="text"
                autoComplete="name"
                required
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
                className="w-full px-4 py-2.5 text-sm border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#334155]/30 focus:border-[#334155] transition-colors"
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
                autoComplete="new-password"
                required
                minLength={8}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-4 py-2.5 text-sm border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#334155]/30 focus:border-[#334155] transition-colors"
              />
              <p className="mt-1 text-xs text-gray-400">Minimum 8 characters</p>
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full py-3 px-6 bg-[#334155] text-white text-sm font-semibold rounded-lg hover:bg-[#1e293b] transition-colors duration-150 disabled:opacity-60 disabled:cursor-not-allowed"
            >
              {loading ? "Creating account…" : "Create account"}
            </button>
          </form>
        </div>
      </div>
    </main>
  );
}
