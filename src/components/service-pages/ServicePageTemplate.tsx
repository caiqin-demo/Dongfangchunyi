import type { ImageProps } from "next/image";
import type { ReactNode } from "react";

import { NonLandingHeroMedia } from "@/components/page-heroes/NonLandingHeroMedia";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";
import { contentByLocale } from "@/content";
import type { Locale } from "@/i18n/config";

const focusRingClass = "focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent";

type ServicePageTemplateProps = Readonly<{
  children: ReactNode;
  heroAppearance?: "default" | "pale-dark-copy";
  heroContentLanguage?: string;
  heroImageSrc: ImageProps["src"];
  heroOverlay?: "default" | "none" | "pale";
  heroSupplement?: ReactNode;
  heroSupplementPosition?: "flow" | "wide-overlay";
  intro: string;
  lang: Locale;
  pagePath: `/${string}`;
  preserveLocaleSearchParamKeys?: readonly string[];
  title: string;
}>;

export function ServicePageTemplate({
  children,
  heroAppearance = "default",
  heroContentLanguage,
  heroImageSrc,
  heroOverlay,
  heroSupplement,
  heroSupplementPosition = "flow",
  intro,
  lang,
  pagePath,
  preserveLocaleSearchParamKeys,
  title,
}: ServicePageTemplateProps) {
  const home = contentByLocale[lang];
  const fontClass = lang === "ja" ? "font-sans-jp" : "font-sans-sc";
  const usesDarkHeroCopy = heroAppearance === "pale-dark-copy";

  return (
    <div className={`${fontClass} min-h-screen bg-ui-subtle text-ink`}>
      <a className={`fixed top-3 left-3 z-50 -translate-y-24 rounded-action bg-white px-4 py-3 text-button-label text-ink shadow-about transition-transform focus:translate-y-0 motion-reduce:transition-none ${focusRingClass}`} href="#main-content">
        {home.skipToContent}
      </a>

      <SiteHeader lang={lang} localePath={pagePath} preserveLocaleSearchParamKeys={preserveLocaleSearchParamKeys} variant="subpage" />

      <main id="main-content" tabIndex={-1}>
        <section className={`relative isolate overflow-hidden bg-ui-section py-[clamp(3.5rem,7vw,7rem)] ${usesDarkHeroCopy ? "text-ink" : "text-on-dark"}`} aria-labelledby="page-title">
          <NonLandingHeroMedia overlay={heroOverlay} src={heroImageSrc} />
          <div className="page-container relative z-10">
            <div className="non-landing-hero-copy-layout">
              <div className="min-w-0" lang={heroContentLanguage}>
                <h1 className="m-0 max-w-full text-service-hero-title" id="page-title">{title}</h1>
                <p className={`mt-7 max-w-full text-service-hero-body ${usesDarkHeroCopy ? "text-ink" : "text-on-dark-muted"}`}>{intro}</p>
              </div>
            </div>
          </div>
          {heroSupplement ? (
            <div className={heroSupplementPosition === "wide-overlay" ? "static page:absolute page:inset-x-0 page:bottom-5 page:z-10" : undefined}>
            {heroSupplement}
            </div>
          ) : null}
        </section>

        {children}
      </main>

      <SiteFooter currentPath={pagePath} lang={lang} />
    </div>
  );
}
