import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";

import { defaultLocale, isLocale } from "@/i18n/config";

export function GET(request: NextRequest) {
  const requestedLocale = request.nextUrl.searchParams.get("lang");
  const destination = request.nextUrl.clone();
  const hasLegacyLocale = requestedLocale !== null && isLocale(requestedLocale);

  destination.pathname = `/${hasLegacyLocale ? requestedLocale : defaultLocale}`;
  destination.search = "";

  return NextResponse.redirect(destination, hasLegacyLocale ? 308 : 307);
}
