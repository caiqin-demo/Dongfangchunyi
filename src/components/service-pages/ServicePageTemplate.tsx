import type { ImageProps } from "next/image";
import type { ReactNode } from "react";

import { NonLandingHeroMedia } from "@/components/page-heroes/NonLandingHeroMedia";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";
import { contentByLocale } from "@/content";
import type { Locale } from "@/i18n/config";

const focusRingClass = "focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent";

type ServicePageTemplateProps = Readonly<{
  backLinkLabel: string;
  children: ReactNode;
  contact: Readonly<{
    description: string;
    email: string;
    emailLabel: string;
    title: string;
  }>;
  heroImageSrc: ImageProps["src"];
  intro: string;
  lang: Locale;
  pagePath: `/${string}`;
  title: string;
}>;

export function ServicePageTemplate({
  backLinkLabel,
  children,
  contact,
  heroImageSrc,
  intro,
  lang,
  pagePath,
  title,
}: ServicePageTemplateProps) {
  const home = contentByLocale[lang];
  const fontClass = lang === "ja" ? "font-sans-jp" : "font-sans-sc";

  return (
    <div className={`${fontClass} min-h-screen bg-ui-section text-on-dark`}>
      <a className={`fixed top-3 left-3 z-50 -translate-y-24 rounded-action bg-white px-4 py-3 text-button-label text-ink shadow-about transition-transform focus:translate-y-0 motion-reduce:transition-none ${focusRingClass}`} href="#main-content">
        {home.skipToContent}
      </a>

      <SiteHeader backHref={`/${lang}#services`} backLinkLabel={backLinkLabel} lang={lang} localePath={pagePath} variant="subpage" />

      <main id="main-content" tabIndex={-1}>
        <section className="relative isolate overflow-hidden bg-ui-section py-[clamp(3.5rem,7vw,7rem)] text-on-dark" aria-labelledby="page-title">
          <NonLandingHeroMedia overlayVariant="service" src={heroImageSrc} />
          <div className="page-container relative z-10">
            <div className="max-w-[1120px]">
              <h1 className="m-0 max-w-[900px] text-service-hero-title" id="page-title">{title}</h1>
              <p className="mt-7 max-w-[860px] text-service-hero-body text-on-dark-muted">{intro}</p>
            </div>
          </div>
        </section>

        {children}

        <section className="page-container mb-16 rounded-product-card border border-line-dark bg-ui-card p-8 max-sm:mb-10 max-sm:p-6" aria-label={contact.title}>
          <h2 className="m-0 text-service-section-title">{contact.title}</h2>
          <p className="mt-4 text-service-body text-on-dark-muted">{contact.description}</p>
          <a className={`mt-6 inline-flex min-h-12 max-w-full items-center rounded-action border border-accent bg-ui-hero px-6 text-button-label break-all text-on-dark transition-colors hover:bg-ui-card-accent ${focusRingClass}`} href={`mailto:${contact.email}`} aria-label={`${contact.emailLabel}: ${contact.email}`}>{contact.email}</a>
        </section>
      </main>

      <SiteFooter currentPath={pagePath} lang={lang} />
    </div>
  );
}
