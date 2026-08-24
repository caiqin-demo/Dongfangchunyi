import Image from "next/image";
import Link from "next/link";

import { contentByLocale } from "@/content";
import type { Locale } from "@/i18n/config";

const focusRingClass = "focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent";
const navLinkClass = `inline-flex min-h-6 items-center justify-center rounded-action whitespace-nowrap text-[clamp(15px,1.15vw,18px)] text-on-dark/85 transition-colors duration-200 hover:text-accent focus-visible:text-accent max-[640px]:text-xs ${focusRingClass}`;
const languageLinkClass = `inline-flex min-h-6 min-w-6 items-center justify-center rounded-action text-on-dark-muted/85 transition-colors duration-200 hover:text-accent focus-visible:text-accent ${focusRingClass}`;

type SiteHeaderProps = Readonly<{
  backLinkLabel?: string;
  lang: Locale;
  localePath?: `/${string}`;
  variant: "landing" | "subpage";
}>;

export function SiteHeader({ backLinkLabel, lang, localePath = "/", variant }: SiteHeaderProps) {
  const content = contentByLocale[lang];
  const brandFontClass = lang === "ja" ? "font-brand-serif-jp" : "font-brand-serif-sc";
  const isLanding = variant === "landing";
  const localizedPath = localePath === "/" ? "" : localePath;
  const brandHref = isLanding ? "#top" : `/${lang}`;

  return (
    <header className={`${isLanding ? "absolute" : "relative"} top-0 left-0 z-10 flex h-header w-full items-center justify-between border-b border-accent/20 bg-ui-footer/96 px-header-gutter text-white max-[960px]:px-6 max-[799px]:h-header-mobile max-[799px]:items-start max-[799px]:px-5 max-[799px]:pt-3`}>
      <Link className={`flex items-center gap-4 rounded-action ${focusRingClass}`} href={brandHref} aria-label={content.brand}>
        <span className="relative grid size-12 flex-[0_0_48px] place-items-center overflow-hidden max-[640px]:size-[46px] max-[640px]:flex-[0_0_46px]">
          <Image className="h-full w-auto object-contain" src="/Logo.png" width={530} height={539} alt="" priority />
        </span>
        <span className={`${brandFontClass} text-[clamp(20px,1.45vw,26px)] font-normal tracking-[.06em] whitespace-nowrap text-on-dark max-[960px]:text-xl max-[640px]:text-[19px]`}>{content.brand}</span>
      </Link>

      <div className="flex items-center gap-[clamp(20px,2vw,32px)] max-[960px]:gap-3.5 max-[640px]:static">
        <nav className="flex items-center gap-[clamp(26px,2.7vw,48px)] max-[960px]:gap-5 max-[799px]:absolute max-[799px]:top-16 max-[799px]:left-5 max-[799px]:w-[calc(100%-2.5rem)] max-[799px]:justify-between max-[799px]:gap-0 max-[799px]:overflow-visible max-[799px]:pb-3" aria-label={lang === "ja" ? "メインナビゲーション" : "主要导航"}>
          {isLanding ? content.nav.map((item) => (
            <a
              aria-current={item.id === "home" ? "page" : undefined}
              className={`${navLinkClass} ${item.id === "home" ? "!text-accent" : ""}`}
              href={item.href}
              key={item.id}
            >
              {item.label}
            </a>
          )) : (
            <Link className={navLinkClass} href={`/${lang}#products`}>← {backLinkLabel}</Link>
          )}
        </nav>

        <nav className="flex items-center gap-1.5 text-xs whitespace-nowrap text-on-dark-muted/85 max-[960px]:text-[11px] max-[799px]:absolute max-[799px]:top-7 max-[799px]:right-5" aria-label="语言 / 言語">
          <Link aria-current={lang === "ja" ? "page" : undefined} className={`${languageLinkClass} ${lang === "ja" ? "!text-accent" : ""}`} href={`/ja${localizedPath}`} hrefLang="ja" lang="ja">日本語</Link>
          <span aria-hidden="true">/</span>
          <Link aria-current={lang === "zh" ? "page" : undefined} className={`${languageLinkClass} ${lang === "zh" ? "!text-accent" : ""}`} href={`/zh${localizedPath}`} hrefLang="zh-CN" lang="zh-CN">中文</Link>
        </nav>
      </div>
    </header>
  );
}
