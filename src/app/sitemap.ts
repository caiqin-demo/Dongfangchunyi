import type { MetadataRoute } from "next";

import { defaultLocale, locales } from "@/i18n/config";
import { aboutPaths } from "@/lib/about-paths";
import { productPaths } from "@/lib/product-paths";
import {
  genomeSequencingServiceTechnologiesPath,
  servicePaths,
} from "@/lib/service-paths";
import { getSiteUrl } from "@/lib/site-url";

export default function sitemap(): MetadataRoute.Sitemap {
  const siteUrl = getSiteUrl();
  const paths = ["", ...Object.values(productPaths), ...Object.values(servicePaths), genomeSequencingServiceTechnologiesPath, ...Object.values(aboutPaths)] as const;

  return paths.flatMap((path) => {
    const languages = {
      "zh-CN": new URL(`/zh${path}`, siteUrl).toString(),
      ja: new URL(`/ja${path}`, siteUrl).toString(),
      "x-default": new URL(`/${defaultLocale}${path}`, siteUrl).toString(),
    };

    return locales.map((lang) => ({
      url: new URL(`/${lang}${path}`, siteUrl).toString(),
      changeFrequency: "monthly" as const,
      priority: path === "" ? 1 : 0.8,
      alternates: { languages },
    }));
  });
}
