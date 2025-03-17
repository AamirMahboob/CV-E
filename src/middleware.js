import { NextResponse } from "next/server";

// Default language
const DEFAULT_LOCALE = "en";

// Define paths to exclude from localization (e.g., static files, API routes)
const PUBLIC_FILE = /\.(.*)$/;

export function middleware(req) {
  const { pathname, searchParams } = req.nextUrl;

  // Ignore API routes and static files
  if (pathname.startsWith("/api") || PUBLIC_FILE.test(pathname)) {
    return NextResponse.next();
  }

  // Check if the user is accessing `/` (root)
  if (pathname === "/") {
    // Get user's preferred language from the "Accept-Language" header
    const acceptLanguage = req.headers.get("accept-language") || DEFAULT_LOCALE;
    const userLang = acceptLanguage.split(",")[0].split("-")[0]; // Extract "en" or "de"
    
    // Set the locale based on user's browser, default to English if not supported
    const redirectLocale = userLang === "de" ? "de" : DEFAULT_LOCALE;

    return NextResponse.redirect(new URL(`/${redirectLocale}${searchParams ? "?" + searchParams : ""}`, req.url));
  }

  return NextResponse.next();
}

// Apply middleware to all routes except static files & Next.js internals
export const config = {
  matcher: "/((?!_next|favicon.ico|api).*)",
};
