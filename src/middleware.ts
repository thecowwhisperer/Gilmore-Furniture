import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  const hostname = request.headers.get("host") || "";
  const { pathname } = request.nextUrl;

  // Handle defense subdomain: defense.gilmorefurnitureinc.com → /defense/*
  if (hostname.startsWith("defense.")) {
    if (!pathname.startsWith("/defense")) {
      const url = request.nextUrl.clone();
      url.pathname = `/defense${pathname}`;
      return NextResponse.rewrite(url);
    }
  }

  // Prevent direct /defense access from the main domain in production
  // (allow in development for testing)
  if (
    pathname.startsWith("/defense") &&
    !hostname.startsWith("defense.") &&
    !hostname.includes("localhost") &&
    !hostname.includes("127.0.0.1")
  ) {
    return NextResponse.redirect(new URL("/", request.url), 308);
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/((?!api|_next/static|_next/image|images|favicon.ico).*)"],
};
