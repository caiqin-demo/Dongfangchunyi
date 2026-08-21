import type { MetadataRoute } from "next";

import { locales } from "@/i18n/config";
import { getSiteUrl } from "@/lib/site-url";

export default function sitemap(): MetadataRoute.Sitemap {
  const siteUrl = getSiteUrl();
  const languages = {
    "zh-CN": new URL("/zh", siteUrl).toString(),
    ja: new URL("/ja", siteUrl).toString(),
    "x-default": new URL("/zh", siteUrl).toString(),
  };

  return locales.map((lang) => ({
    url: new URL(`/${lang}`, siteUrl).toString(),
    changeFrequency: "monthly",
    priority: 1,
    alternates: { languages },
  }));
}
