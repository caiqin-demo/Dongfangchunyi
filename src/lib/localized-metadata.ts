import type { Metadata } from "next";

import {
  defaultLocale,
  documentLanguages,
  locales,
  type Locale,
} from "@/i18n/config";
import { getSiteUrl } from "@/lib/site-url";

export type LocalizedPagePath = "" | `/${string}`;

export function getLocalizedMetadata(
  lang: Locale,
  path: LocalizedPagePath,
  metadata: Pick<Metadata, "title" | "description">,
): Metadata {
  return {
    ...metadata,
    metadataBase: getSiteUrl(),
    alternates: {
      canonical: `/${lang}${path}`,
      languages: {
        ...Object.fromEntries(
          locales.map((locale) => [documentLanguages[locale], `/${locale}${path}`]),
        ),
        "x-default": `/${defaultLocale}${path}`,
      },
    },
  };
}
