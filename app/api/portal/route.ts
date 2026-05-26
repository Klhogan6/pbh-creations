import { NextRequest, NextResponse } from "next/server";

// TODO: Portal data endpoints — feature/portal-scaffold
export async function GET(_req: NextRequest) {
  return NextResponse.json(
    { error: "Not implemented yet" },
    { status: 501 }
  );
}
