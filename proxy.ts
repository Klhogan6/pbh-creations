import { NextRequest, NextResponse } from "next/server";

// TODO: Replace with Supabase session check — feature/supabase-auth
// Protect all /portal/* routes; redirect unauthenticated users to /login
export function proxy(_req: NextRequest) {
  return NextResponse.next();
}

export const config = {
  matcher: ["/portal/:path*"],
};
