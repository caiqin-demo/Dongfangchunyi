import Image from "next/image";
import Link from "next/link";

import logo from "@/assets/brand/Logo.png";
import { SiteFooter } from "@/components/SiteFooter";
import { contentByLocale } from "@/content";
import { documentLanguages, type Locale } from "@/i18n/config";

const focusRingClass = "focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent";

export function LocalizedNotFoundPage({ lang }: Readonly<{ lang: Locale }>) {
  const content = contentByLocale[lang];
  const fontClass = lang === "ja" ? "font-sans-jp" : "font-sans-sc";
  const brandFontClass = lang === "ja" ? "font-brand-serif-jp" : "font-brand-serif-sc";

  return (
    <div className={`${fontClass} flex min-h-screen flex-col bg-ui-subtle text-ink`} lang={documentLanguages[lang]}>
      <header className="border-b border-accent/20 bg-ui-footer text-on-dark">
        <div className="page-container flex min-h-header items-center">
          <Link className={`flex items-center gap-4 rounded-action ${focusRingClass}`} href={`/${lang}`} aria-label={content.brand}>
            <span className="relative grid size-12 flex-[0_0_48px] place-items-center overflow-hidden">
              <Image className="h-full w-auto object-contain" src={logo} width={530} height={539} alt="" preload />
            </span>
            <span className={`${brandFontClass} text-[clamp(20px,1.45vw,26px)] tracking-[.06em] whitespace-nowrap`}>{content.brand}</span>
          </Link>
        </div>
      </header>

      <main className="grid flex-1 place-items-center px-6 py-16 text-center" id="main-content">
        <section className="w-full max-w-3xl rounded-product-card border border-line bg-white px-[clamp(1.5rem,5vw,4rem)] py-[clamp(3rem,7vw,6rem)] shadow-media" aria-labelledby="not-found-title">
          <p className="m-0 text-sm font-extrabold tracking-[.2em] text-accent">404</p>
          <h1 className="mt-4 mb-0 text-[clamp(2.5rem,6vw,5rem)] leading-[1.08] font-extrabold tracking-[-.04em]" id="not-found-title">{content.notFound.title}</h1>
          <p className="mx-auto mt-6 mb-0 max-w-2xl text-product-section-body text-ink-muted">{content.notFound.description}</p>
          <nav className="mt-8 flex flex-wrap justify-center gap-4" aria-label={content.notFound.title}>
            <Link className={`inline-flex min-h-12 min-w-36 items-center justify-center rounded-action bg-brand-red px-6 text-base font-semibold text-on-dark transition-colors hover:bg-brand-red-hover ${focusRingClass}`} href={`/${lang}`}>{content.notFound.homeLink}</Link>
            <Link className={`inline-flex min-h-12 min-w-36 items-center justify-center rounded-action border border-line-dark px-6 text-base font-semibold text-ink transition-colors hover:border-accent hover:text-accent ${focusRingClass}`} href={`/${lang}#products`}>{content.notFound.productsLink}</Link>
          </nav>
        </section>
      </main>

      <SiteFooter lang={lang} />
    </div>
  );
}
