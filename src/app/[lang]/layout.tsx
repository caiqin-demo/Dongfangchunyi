import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Noto_Sans_JP, Noto_Sans_SC, Noto_Serif_JP, Noto_Serif_SC } from "next/font/google";
import type { ReactNode } from "react";

import { defaultLocale, documentLanguages, isLocale, locales, type Locale } from "@/i18n/config";
import { getSiteUrl } from "@/lib/site-url";

import "../globals.css";

const notoSansSc = Noto_Sans_SC({
  variable: "--font-noto-sans-sc",
  weight: "variable",
  display: "swap",
  preload: false,
  adjustFontFallback: false,
  fallback: ["Arial", "PingFang SC", "Microsoft YaHei", "sans-serif"],
});

const notoSansJp = Noto_Sans_JP({
  variable: "--font-noto-sans-jp",
  weight: "variable",
  display: "swap",
  preload: false,
  adjustFontFallback: false,
  fallback: ["Arial", "Hiragino Kaku Gothic ProN", "Yu Gothic", "sans-serif"],
});

const notoSerifSc = Noto_Serif_SC({
  variable: "--font-noto-serif-sc",
  weight: "400",
  display: "swap",
  preload: false,
  adjustFontFallback: false,
  fallback: ["Songti SC", "STSong", "SimSun", "serif"],
});

const notoSerifJp = Noto_Serif_JP({
  variable: "--font-noto-serif-jp",
  weight: "400",
  display: "swap",
  preload: false,
  adjustFontFallback: false,
  fallback: ["Hiragino Mincho ProN", "Yu Mincho", "serif"],
});

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

type RootLayoutProps = Readonly<{
  children: ReactNode;
  params: Promise<{ lang: string }>;
}>;

export const dynamicParams = false;

export function generateStaticParams() {
  return locales.map((lang) => ({ lang }));
}

export async function generateMetadata({ params }: Pick<RootLayoutProps, "params">): Promise<Metadata> {
  const { lang } = await params;

  if (!isLocale(lang)) {
    notFound();
  }

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

export default async function RootLayout({ children, params }: RootLayoutProps) {
  const { lang } = await params;

  if (!isLocale(lang)) {
    notFound();
  }

  const fontVariables = lang === "ja"
    ? `${notoSansJp.variable} ${notoSerifJp.variable}`
    : `${notoSansSc.variable} ${notoSerifSc.variable}`;

  return (
    <html data-scroll-behavior="smooth" lang={documentLanguages[lang]}>
      <body className={fontVariables}>{children}</body>
    </html>
  );
}
