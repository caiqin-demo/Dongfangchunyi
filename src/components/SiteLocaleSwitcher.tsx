"use client";

import { useSearchParams } from "next/navigation";

import type { Locale } from "@/i18n/config";

import { SiteLocaleLinks } from "./SiteLocaleLinks";

type SiteLocaleSwitcherProps = Readonly<{
  currentLocale: Locale;
  languageLinkClass: string;
  localizedPath: string;
  preserveLocaleSearchParamKeys: readonly string[];
}>;

export function SiteLocaleSwitcher({
  currentLocale,
  languageLinkClass,
  localizedPath,
  preserveLocaleSearchParamKeys,
}: SiteLocaleSwitcherProps) {
  const searchParams = useSearchParams();
  const preservedSearchParams = new URLSearchParams();

  for (const key of preserveLocaleSearchParamKeys) {
    for (const value of searchParams.getAll(key)) {
      preservedSearchParams.append(key, value);
    }
  }

  return (
    <SiteLocaleLinks
      currentLocale={currentLocale}
      languageLinkClass={languageLinkClass}
      localizedPath={localizedPath}
      search={preservedSearchParams.toString()}
    />
  );
}
