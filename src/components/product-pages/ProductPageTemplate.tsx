import Image, { type ImageProps } from "next/image";
import type { ReactNode } from "react";

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
  variant?: "product" | "service";
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
  variant = "product",
}: ProductPageTemplateProps) {
  const home = contentByLocale[lang];
  const fontClass = lang === "ja" ? "font-sans-jp" : "font-sans-sc";
  const isService = variant === "service";
  return (
    <div className={`${fontClass} min-h-screen ${isService ? "bg-ui-section text-on-dark" : "bg-ui-subtle text-ink"}`}>
      <a className={`fixed top-3 left-3 z-50 -translate-y-24 rounded-action bg-white px-4 py-3 text-base font-semibold text-ink shadow-about transition-transform focus:translate-y-0 motion-reduce:transition-none ${focusRingClass}`} href="#main-content">
        {home.skipToContent}
      </a>

      <SiteHeader backHref={`/${lang}#${isService ? "services" : "products"}`} backLinkLabel={backLinkLabel} lang={lang} localePath={pagePath} variant="subpage" />

      <main id="main-content" tabIndex={-1}>
        <section className="relative isolate overflow-hidden bg-ui-section py-[clamp(3.5rem,7vw,7rem)] text-on-dark" aria-labelledby="page-title">
          {heroImageSrc ? (
            <>
              <Image alt="" className="-z-20 object-cover object-center" fetchPriority="high" fill loading="eager" sizes="100vw" src={heroImageSrc} />
              <div
                aria-hidden="true"
                className={`absolute inset-0 -z-10 bg-linear-to-r ${isService ? "from-ui-section/85 via-ui-section/55 to-transparent max-sm:from-ui-section/85 max-sm:via-ui-section/80 max-sm:to-ui-section/60" : "from-ui-section/85 via-ui-section/80 to-ui-section/20 max-sm:from-ui-section/85 max-sm:via-ui-section/80 max-sm:to-ui-section/60"}`}
              />
            </>
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

        <section className={`page-container grid gap-12 ${isService ? "mb-16 rounded-product-card border border-line-dark bg-ui-card p-8 max-sm:mb-10 max-sm:p-6" : "py-16 max-sm:py-10"} ${contactSupplement ? "grid-cols-[.8fr_1.2fr] max-stack:grid-cols-1" : "grid-cols-1"}`} aria-label={contact.title}>
          <div>
            <h2 className="m-0 text-product-section-title">{contact.title}</h2>
            <p className={`mt-4 text-product-section-body ${isService ? "text-on-dark-muted" : "text-ink-muted"}`}>{contact.description}</p>
            <a className={`mt-6 inline-flex min-h-12 max-w-full items-center rounded-action border border-accent px-6 text-base font-semibold break-all text-on-dark transition-colors ${isService ? "bg-ui-hero hover:bg-ui-card-accent" : "bg-brand-red hover:bg-brand-red-hover"} ${focusRingClass}`} href={`mailto:${contact.email}`} aria-label={`${contact.emailLabel}: ${contact.email}`}>{contact.email}</a>
          </div>
          {contactSupplement}
        </section>
      </main>

      <SiteFooter currentPath={pagePath} lang={lang} />
    </div>
  );
}
