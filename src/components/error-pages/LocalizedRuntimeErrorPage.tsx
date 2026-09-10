"use client";

import { useEffect, useRef } from "react";

import { SiteFooter } from "@/components/SiteFooter";
import { runtimeErrorContentByLocale } from "@/content/runtime-error";
import { documentLanguages, type Locale } from "@/i18n/config";

const focusRingClass = "focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent";

const brandByLocale = {
  zh: "东方纯一株式会社",
  ja: "東方純一株式会社",
} satisfies Record<Locale, string>;

const skipLabelByLocale = {
  zh: "跳到主要内容",
  ja: "メインコンテンツへ移動",
} satisfies Record<Locale, string>;

type LocalizedRuntimeErrorPageProps = Readonly<{
  error: Error & { digest?: string };
  lang: Locale;
  retry: () => void;
}>;

export function LocalizedRuntimeErrorPage({ error, lang, retry }: LocalizedRuntimeErrorPageProps) {
  const content = runtimeErrorContentByLocale[lang];
  const titleRef = useRef<HTMLHeadingElement>(null);
  const announcementRef = useRef<HTMLParagraphElement>(null);

  useEffect(() => {
    titleRef.current?.focus();
    if (announcementRef.current) announcementRef.current.textContent = "";
    const frame = window.requestAnimationFrame(() => {
      if (announcementRef.current) announcementRef.current.textContent = content.announcement;
    });

    return () => window.cancelAnimationFrame(frame);
  }, [content.announcement, error]);

  return (
    <div className="flex min-h-screen flex-col bg-ui-subtle text-ink" lang={documentLanguages[lang]}>
      <a
        className={`sr-only fixed top-4 left-4 z-20 rounded-action bg-white px-4 py-3 text-body text-ink shadow-media focus:not-sr-only ${focusRingClass}`}
        href="#main-content"
        onClick={() => document.getElementById("main-content")?.focus()}
      >
        {skipLabelByLocale[lang]}
      </a>
      <header className="border-b border-accent/20 bg-ui-footer text-on-dark">
        <div className="page-container flex min-h-header items-center">
          <a className={`rounded-action text-section-title ${focusRingClass}`} href={`/${lang}`}>
            {brandByLocale[lang]}
          </a>
        </div>
      </header>

      <main className="grid flex-1 place-items-center px-6 py-16 text-center" id="main-content" tabIndex={-1}>
        <section className="w-full max-w-3xl rounded-product-card border border-line bg-white px-[clamp(1.5rem,5vw,4rem)] py-[clamp(3rem,7vw,6rem)] shadow-media" aria-labelledby="runtime-error-title">
          <h1
            className="m-0 rounded-action text-section-title-prominent focus:outline-2 focus:outline-offset-4 focus:outline-accent"
            id="runtime-error-title"
            ref={titleRef}
            tabIndex={-1}
          >
            {content.title}
          </h1>
          <p className="mx-auto mt-6 mb-0 max-w-2xl text-body-relaxed text-ink-muted">{content.description}</p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <button className={`inline-flex min-h-12 min-w-36 items-center justify-center rounded-action bg-brand-red px-6 text-button-label text-on-dark transition-colors hover:bg-brand-red-hover ${focusRingClass}`} onClick={retry} type="button">
              {content.retryLabel}
            </button>
            <button className={`inline-flex min-h-12 min-w-36 items-center justify-center rounded-action border border-line-dark px-6 text-button-label text-ink transition-colors hover:border-accent hover:text-accent ${focusRingClass}`} onClick={() => window.location.reload()} type="button">
              {content.reloadLabel}
            </button>
            <a className={`inline-flex min-h-12 min-w-36 items-center justify-center rounded-action border border-line-dark px-6 text-button-label text-ink transition-colors hover:border-accent hover:text-accent ${focusRingClass}`} href={`/${lang}`}>
              {content.homeLabel}
            </a>
          </div>
          <p aria-atomic="true" aria-live="polite" className="sr-only" ref={announcementRef} role="status" />
        </section>
      </main>

      <SiteFooter lang={lang} />
    </div>
  );
}
