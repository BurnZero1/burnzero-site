import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

/**
 * Temporary: serve redesigned landing from app/inicio/page.tsx at "/".
 * Valid App Router pattern (internal rewrite; URL stays "/").
 * Remove this file after copying app/page.redesign.tsx → app/page.tsx
 * (and optionally deleting app/inicio).
 *
 * Also rewrites /logo.png → /brand-logo.png because public/logo.png is
 * macOS TCC-locked and several pages still hardcode the old path.
 */
export function middleware(request: NextRequest) {
  const url = request.nextUrl.clone();

  if (url.pathname === "/logo.png") {
    url.pathname = "/brand-logo.png";
    return NextResponse.rewrite(url);
  }

  if (url.pathname === "/") {
    url.pathname = "/inicio";
    return NextResponse.rewrite(url);
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/", "/logo.png"],
};
