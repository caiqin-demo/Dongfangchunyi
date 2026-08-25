import Image from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";

import { SiteHeader } from "@/components/SiteHeader";
import { contentByLocale } from "@/content";
import type { Locale } from "@/i18n/config";
import { productPaths } from "@/lib/product-paths";

const focusRingClass = "focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent";

type ProductPageTemplateProps = Readonly<{
  backToProducts: string;
  children: ReactNode;
  contact: Readonly<{
    description: string;
    email: string;
    emailLabel: string;
    title: string;
  }>;
  contactSupplement?: ReactNode;
  eyebrow: string;
  intro: string;
  lang: Locale;
  productPath: `/${string}`;
  title: string;
}>;

export function ProductPageTemplate({
  backToProducts,
  children,
  contact,
  contactSupplement,
  eyebrow,
  intro,
  lang,
  productPath,
  title,
}: ProductPageTemplateProps) {
  const home = contentByLocale[lang];
  const fontClass = lang === "ja" ? "font-sans-jp" : "font-sans-sc";
  const brandFontClass = lang === "ja" ? "font-brand-serif-jp" : "font-brand-serif-sc";

  return (
    <div className={`${fontClass} min-h-screen bg-ui-subtle text-ink`}>
      <a className={`fixed top-3 left-3 z-50 -translate-y-24 rounded-action bg-white px-4 py-3 text-base font-semibold text-ink shadow-about transition-transform focus:translate-y-0 motion-reduce:transition-none ${focusRingClass}`} href="#main-content">
        {home.skipToContent}
      </a>

      <SiteHeader backLinkLabel={backToProducts} lang={lang} localePath={productPath} variant="subpage" />

      <main id="main-content" tabIndex={-1}>
        <section className="bg-ui-section px-8 py-[clamp(3.5rem,7vw,7rem)] text-on-dark max-[640px]:px-4" aria-labelledby="page-title">
          <div className="mx-auto max-w-[1120px]">
            <p className="mb-4 text-sm font-extrabold tracking-[.2em] text-accent">{eyebrow}</p>
            <h1 className="m-0 max-w-[900px] text-[clamp(2.5rem,6vw,5rem)] leading-[1.08] font-extrabold tracking-[-.04em]" id="page-title">{title}</h1>
            <p className="mt-7 max-w-[860px] text-[clamp(1rem,1.5vw,1.25rem)] leading-[1.8] text-on-dark-muted">{intro}</p>
          </div>
        </section>

        {children}

        <section className={`mx-auto grid w-[calc(100%-4rem)] max-w-panel gap-12 py-16 max-[960px]:w-[calc(100%-2rem)] max-[640px]:w-[calc(100%-1.5rem)] max-[640px]:py-10 ${contactSupplement ? "grid-cols-[.8fr_1.2fr] max-[800px]:grid-cols-1" : "grid-cols-1"}`} aria-label={contact.title}>
          <div>
            <h2 className="m-0 text-product-section-title">{contact.title}</h2>
            <p className="mt-4 text-product-section-body text-ink-muted">{contact.description}</p>
            <a className={`mt-6 inline-flex min-h-12 max-w-full items-center rounded-action border border-accent bg-brand-red px-6 text-base font-semibold break-all text-on-dark transition-colors hover:bg-brand-red-hover ${focusRingClass}`} href={`mailto:${contact.email}`} aria-label={`${contact.emailLabel}: ${contact.email}`}>{contact.email}</a>
          </div>
          {contactSupplement}
        </section>
      </main>

      <footer className="bg-ui-footer px-8 py-10 text-on-dark-muted max-[640px]:px-4">
        <div className="mx-auto flex max-w-panel items-center justify-between gap-8 max-[700px]:flex-col max-[700px]:items-start">
          <div className="flex items-center gap-3 text-on-dark">
            <Image className="h-9 w-auto object-contain" src="/Logo.png" width={36} height={37} alt="" />
            <span className={`${brandFontClass} text-base tracking-[.06em]`}>{home.brand}</span>
          </div>
          <nav className="flex flex-wrap gap-x-6 gap-y-2 text-sm" aria-label={home.footer.productsTitle}>
            {home.footer.productLinks.map((item) => (
              <Link aria-current={productPaths[item.id] === productPath ? "page" : undefined} className={`inline-flex min-h-8 items-center rounded-action hover:text-accent ${focusRingClass}`} href={`/${lang}${productPaths[item.id]}`} key={item.id}>{item.label}</Link>
            ))}
          </nav>
          <p className="m-0 text-xs">{home.footer.copyright}</p>
        </div>
      </footer>
    </div>
  );
}
