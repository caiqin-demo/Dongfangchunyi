import type { ImageProps } from "next/image";
import type { ReactNode } from "react";

import { NonLandingHeroMedia } from "@/components/page-heroes/NonLandingHeroMedia";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";
import { contentByLocale } from "@/content";
import type { Locale } from "@/i18n/config";

const focusRingClass = "focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent";

type ProductPageTemplateProps = Readonly<{
  backLinkLabel: string;
  children: ReactNode;
  contact: Readonly<{
    description: string;
    email: string;
    emailLabel: string;
    title: string;
  }>;
  contactSupplement?: ReactNode;
  eyebrow?: string;
  heroImageSrc?: ImageProps["src"];
  intro: string;
  lang: Locale;
  pagePath: `/${string}`;
  title: string;
}>;

export function ProductPageTemplate({
  backLinkLabel,
  children,
  contact,
  contactSupplement,
  eyebrow,
  heroImageSrc,
  intro,
  lang,
  pagePath,
  title,
}: ProductPageTemplateProps) {
  const home = contentByLocale[lang];
  const fontClass = lang === "ja" ? "font-sans-jp" : "font-sans-sc";
  return (
    <div className={`${fontClass} min-h-screen bg-ui-subtle text-ink`}>
      <a className={`fixed top-3 left-3 z-50 -translate-y-24 rounded-action bg-white px-4 py-3 text-button-label text-ink shadow-about transition-transform focus:translate-y-0 motion-reduce:transition-none ${focusRingClass}`} href="#main-content">
        {home.skipToContent}
      </a>

      <SiteHeader backHref={`/${lang}#products`} backLinkLabel={backLinkLabel} lang={lang} localePath={pagePath} variant="subpage" />

      <main id="main-content" tabIndex={-1}>
        <section className="relative isolate overflow-hidden bg-ui-section py-[clamp(3.5rem,7vw,7rem)] text-on-dark" aria-labelledby="page-title">
          {heroImageSrc ? (
            <NonLandingHeroMedia overlayVariant="product" src={heroImageSrc} />
          ) : null}
          <div className="page-container relative z-10">
            <div className="max-w-[1120px]">
              {eyebrow ? (
                <p className={`mb-4 text-sm font-extrabold tracking-[.2em] text-accent ${heroImageSrc ? "w-fit rounded-action bg-ui-section px-2 py-1" : ""}`}>{eyebrow}</p>
              ) : null}
              <h1 className="m-0 max-w-[900px] text-[clamp(2.5rem,6vw,5rem)] leading-[1.08] font-extrabold tracking-[-.04em]" id="page-title">{title}</h1>
              <p className="mt-7 max-w-[860px] text-[clamp(1rem,1.5vw,1.25rem)] leading-[1.8] text-on-dark-muted">{intro}</p>
            </div>
          </div>
        </section>

        {children}

        <section className={`page-container grid gap-12 py-16 max-sm:py-10 ${contactSupplement ? "grid-cols-[.8fr_1.2fr] max-stack:grid-cols-1" : "grid-cols-1"}`} aria-label={contact.title}>
          <div>
            <h2 className="m-0 text-product-section-title">{contact.title}</h2>
            <p className="mt-4 text-product-section-body text-ink-muted">{contact.description}</p>
            <a className={`mt-6 inline-flex min-h-12 max-w-full items-center rounded-action border border-accent bg-brand-red px-6 text-button-label break-all text-on-dark transition-colors hover:bg-brand-red-hover ${focusRingClass}`} href={`mailto:${contact.email}`} aria-label={`${contact.emailLabel}: ${contact.email}`}>{contact.email}</a>
          </div>
          {contactSupplement}
        </section>
      </main>

      <SiteFooter currentPath={pagePath} lang={lang} />
    </div>
  );
}
