import type { Metadata } from "next";

import { defaultLocale, type Locale } from "@/i18n/config";
import { getSiteUrl } from "@/lib/site-url";

const localizedMetadata: Record<Locale, Pick<Metadata, "title" | "description">> = {
  zh: {
    title: "东方纯一 | 生命科学产品与技术服务",
    description:
      "东方纯一专注标签抗体、填料偶联产品、ELISA 试剂盒及酵母双杂交技术服务。",
  },
  ja: {
    title: "東方純一 | ライフサイエンス製品・技術サービス",
    description:
      "東方純一は、タグ抗体、担体結合製品、ELISAキット、酵母ツーハイブリッド技術サービスを提供しています。",
  },
};

export function getLandingMetadata(lang: Locale): Metadata {
  return {
    ...localizedMetadata[lang],
    metadataBase: getSiteUrl(),
    alternates: {
      canonical: `/${lang}`,
      languages: {
        "zh-CN": "/zh",
        ja: "/ja",
        "x-default": `/${defaultLocale}`,
      },
    },
  };
}
