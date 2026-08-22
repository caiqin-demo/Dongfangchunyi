import type { MetadataRoute } from "next";

import { locales } from "@/i18n/config";
import { getSiteUrl } from "@/lib/site-url";

export default function sitemap(): MetadataRoute.Sitemap {
  const siteUrl = getSiteUrl();
  const homeLanguages = {
    "zh-CN": new URL("/zh", siteUrl).toString(),
    ja: new URL("/ja", siteUrl).toString(),
    "x-default": new URL("/zh", siteUrl).toString(),
  };

  const productPath = "/products/antibody-products";
  const antibodyProductLanguages = {
    "zh-CN": new URL(`/zh${productPath}`, siteUrl).toString(),
    ja: new URL(`/ja${productPath}`, siteUrl).toString(),
    "x-default": new URL(`/zh${productPath}`, siteUrl).toString(),
  };

  return locales.flatMap((lang) => [
    {
      url: new URL(`/${lang}`, siteUrl).toString(),
      changeFrequency: "monthly" as const,
      priority: 1,
      alternates: { languages: homeLanguages },
    },
    {
      url: new URL(`/${lang}${productPath}`, siteUrl).toString(),
      changeFrequency: "monthly" as const,
      priority: 0.8,
      alternates: { languages: antibodyProductLanguages },
    },
  ]);
}
