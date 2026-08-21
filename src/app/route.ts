import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";

export function GET(request: NextRequest) {
  const requestedLocale = request.nextUrl.searchParams.get("lang");
  const destination = request.nextUrl.clone();
  const hasLegacyLocale = requestedLocale === "zh" || requestedLocale === "ja";

  destination.pathname = requestedLocale === "ja" ? "/ja" : "/zh";
  destination.search = "";

  return NextResponse.redirect(destination, hasLegacyLocale ? 308 : 307);
}
