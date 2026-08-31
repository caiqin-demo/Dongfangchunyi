import Link from "next/link";

import type { Locale } from "@/i18n/config";

type SiteLocaleLinksProps = Readonly<{
  currentLocale: Locale;
  languageLinkClass: string;
  localizedPath: string;
  search: string;
}>;

export function SiteLocaleLinks({ currentLocale, languageLinkClass, localizedPath, search }: SiteLocaleLinksProps) {
  const searchSuffix = search === "" ? "" : `?${search}`;

  return (
    <>
      <Link aria-current={currentLocale === "ja" ? "page" : undefined} className={`${languageLinkClass} ${currentLocale === "ja" ? "!text-accent" : ""}`} href={`/ja${localizedPath}${searchSuffix}`} hrefLang="ja" lang="ja" prefetch={false}>日本語</Link>
      <span aria-hidden="true">/</span>
      <Link aria-current={currentLocale === "zh" ? "page" : undefined} className={`${languageLinkClass} ${currentLocale === "zh" ? "!text-accent" : ""}`} href={`/zh${localizedPath}${searchSuffix}`} hrefLang="zh-CN" lang="zh-CN" prefetch={false}>中文</Link>
    </>
  );
}
