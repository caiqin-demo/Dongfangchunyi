import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Fragment } from "react";

import { antibodyProductsContentByLocale } from "@/content/antibody-products";
import type { AntibodyProductId } from "@/content/antibody-products/types";
import { contentByLocale } from "@/content";
import { isLocale, locales } from "@/i18n/config";
import { getSiteUrl } from "@/lib/site-url";

import { ProductCard } from "./ProductCard";

type PageProps = Readonly<{ params: Promise<{ lang: string }> }>;

const productPath = "/products/antibody-products";
const focusRingClass = "focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent";
const productIds = ["mab", "hrp", "affinity-gel", "magnetic-beads"] as const satisfies readonly AntibodyProductId[];

export const dynamicParams = false;

export function generateStaticParams() {
  return locales.map((lang) => ({ lang }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { lang } = await params;
  if (!isLocale(lang)) notFound();

  const metadata = antibodyProductsContentByLocale[lang].metadata;
  return {
    ...metadata,
    metadataBase: getSiteUrl(),
    alternates: {
      canonical: `/${lang}${productPath}`,
      languages: {
        "zh-CN": `/zh${productPath}`,
        ja: `/ja${productPath}`,
        "x-default": `/zh${productPath}`,
      },
    },
  };
}

export default async function AntibodyProductsPage({ params }: PageProps) {
  const { lang } = await params;
  if (!isLocale(lang)) notFound();

  const t = antibodyProductsContentByLocale[lang];
  const home = contentByLocale[lang];
  const fontClass = lang === "ja" ? "font-sans-jp" : "font-sans-sc";
  const brandFontClass = lang === "ja" ? "font-brand-serif-jp" : "font-brand-serif-sc";
  const homeHref = `/${lang}`;

  return (
    <div className={`${fontClass} min-h-screen bg-ui-subtle text-ink`}>
      <a className={`fixed top-3 left-3 z-50 -translate-y-24 rounded-action bg-white px-4 py-3 text-base font-semibold text-ink shadow-about transition-transform focus:translate-y-0 motion-reduce:transition-none ${focusRingClass}`} href="#main-content">
        {home.skipToContent}
      </a>

      <header className="border-b border-line-dark bg-ui-footer text-on-dark">
        <div className="mx-auto flex min-h-20 w-[calc(100%-4rem)] max-w-panel items-center justify-between gap-6 py-3 max-[640px]:w-[calc(100%-1.5rem)] max-[640px]:flex-wrap max-[640px]:gap-3">
          <Link className={`flex min-h-12 items-center gap-3 rounded-action ${focusRingClass}`} href={homeHref} aria-label={home.brand}>
            <Image className="h-11 w-auto object-contain" src="/Logo.png" width={44} height={45} alt="" priority />
            <span className={`${brandFontClass} text-xl tracking-[.06em]`}>{home.brand}</span>
          </Link>
          <div className="flex items-center gap-5 max-[640px]:w-full max-[640px]:justify-between">
            <Link className={`inline-flex min-h-11 items-center rounded-action text-sm text-on-dark-muted transition-colors hover:text-accent ${focusRingClass}`} href={`${homeHref}#products`}>
              ← {t.backToProducts}
            </Link>
            <nav className="flex items-center gap-1.5 text-xs text-on-dark-muted" aria-label="语言 / 言語">
              <Link aria-current={lang === "zh" ? "page" : undefined} className={`inline-flex min-h-8 min-w-8 items-center justify-center rounded-action hover:text-accent ${lang === "zh" ? "text-accent" : ""} ${focusRingClass}`} href={`/zh${productPath}`} hrefLang="zh-CN" lang="zh-CN">中文</Link>
              <span aria-hidden="true">/</span>
              <Link aria-current={lang === "ja" ? "page" : undefined} className={`inline-flex min-h-8 min-w-8 items-center justify-center rounded-action hover:text-accent ${lang === "ja" ? "text-accent" : ""} ${focusRingClass}`} href={`/ja${productPath}`} hrefLang="ja" lang="ja">日本語</Link>
            </nav>
          </div>
        </div>
      </header>

      <main id="main-content" tabIndex={-1}>
        <section className="bg-ui-section px-8 py-[clamp(3.5rem,7vw,7rem)] text-on-dark max-[640px]:px-4" aria-labelledby="page-title">
          <div className="mx-auto max-w-[1120px]">
            <p className="mb-4 text-sm font-extrabold tracking-[.2em] text-accent">{t.eyebrow}</p>
            <h1 className="m-0 max-w-[900px] text-[clamp(2.5rem,6vw,5rem)] leading-[1.08] font-extrabold tracking-[-.04em]" id="page-title">{t.title}</h1>
            <p className="mt-7 max-w-[860px] text-[clamp(1rem,1.5vw,1.25rem)] leading-[1.8] text-on-dark-muted">{t.intro}</p>
          </div>
        </section>

        <section className="mx-auto w-[calc(100%-4rem)] max-w-panel py-16 max-[960px]:w-[calc(100%-2rem)] max-[640px]:w-[calc(100%-1.5rem)] max-[640px]:py-10">
          <div className="grid auto-rows-fr grid-cols-2 items-stretch gap-6 max-[800px]:grid-cols-1">
            {t.products.map((product) => (
              <ProductCard key={product.id} product={product} skuLabels={t.skuLabels} />
            ))}
          </div>

          <article className="mt-6 min-w-0 rounded-product-card border border-line bg-white p-[clamp(1rem,2.5vw,2rem)] shadow-media" aria-labelledby="matrix-title">
            <h2 className="m-0 text-[clamp(1.55rem,2.7vw,2.25rem)] leading-[1.2] font-extrabold" id="matrix-title">{t.matrix.title}</h2>
            <div className={`mt-7 overflow-x-auto rounded-control border border-line [contain:paint] ${focusRingClass}`} role="region" aria-labelledby="matrix-title" tabIndex={0}>
              <table className="w-full min-w-[540px] table-fixed border-collapse text-center text-sm">
                <thead className="bg-table-header text-ink">
                  <tr>
                    {(["left", "right"] as const).map((group) => (
                      <Fragment key={group}>
                        <th className="w-[14%] px-2 py-4 [overflow-wrap:anywhere]" id={`${group}-tag-type`} scope="col">{t.matrix.tagType}</th>
                        {productIds.map((id) => (
                          <th className="w-[9%] px-1.5 py-4 text-center leading-snug [overflow-wrap:anywhere]" id={`${group}-${id}`} key={`${group}-${id}`} scope="col">
                            <span className="block font-bold">{t.matrix.productLabels[id]}</span>
                            <span className="mt-1 block font-normal" lang="en">{t.matrix.availabilityHeader}</span>
                          </th>
                        ))}
                      </Fragment>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {t.matrix.rows.slice(0, 9).map((leftRow, index) => {
                    const rightRow = t.matrix.rows[index + 9];
                    return (
                      <tr className="border-t border-line" key={leftRow.id}>
                        {([leftRow, rightRow] as const).map((row, groupIndex) => {
                          const group = groupIndex === 0 ? "left" : "right";
                          return (
                          <Fragment key={row.id}>
                            <th className="px-2 py-3 font-semibold [overflow-wrap:anywhere]" id={`${group}-tag-${row.id}`} scope="row">{row.label}</th>
                            {productIds.map((productId) => (
                              <td className="px-1.5 py-3 text-center" headers={`${group}-tag-${row.id} ${group}-${productId}`} key={productId}>
                                <span aria-hidden="true" className="text-xl font-bold text-accent">{row.availability[productId] ? "✓" : ""}</span>
                                <span className="sr-only">{row.availability[productId] ? t.matrix.available : t.matrix.unavailable}</span>
                              </td>
                            ))}
                          </Fragment>
                          );
                        })}
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
            <p className="mt-4 mb-0 font-semibold text-ink">{t.matrix.originNote}</p>
          </article>
        </section>

        <section className="mx-auto grid w-[calc(100%-4rem)] max-w-panel grid-cols-[.8fr_1.2fr] gap-12 py-16 max-[960px]:w-[calc(100%-2rem)] max-[800px]:grid-cols-1 max-[640px]:w-[calc(100%-1.5rem)] max-[640px]:py-10" aria-label={t.contact.title}>
          <div>
            <h2 className="m-0 text-about-title">{t.contact.title}</h2>
            <p className="mt-4 leading-[1.75] text-ink-muted">{t.contact.description}</p>
            <a className={`mt-6 inline-flex min-h-12 max-w-full items-center rounded-action border border-accent bg-ui-footer px-6 text-base font-semibold break-all text-on-dark transition-colors hover:bg-ui-hero ${focusRingClass}`} href={`mailto:${t.contact.email}`} aria-label={`${t.contact.emailLabel}: ${t.contact.email}`}>{t.contact.email}</a>
          </div>
          <div>
            <h2 className="m-0 text-2xl font-extrabold">{t.publications.title}</h2>
            <ul className="mt-5 grid list-none gap-5 p-0">
              {t.publications.items.map((publication) => (
                <li className="rounded-control border border-line bg-white p-5" key={publication.id}>
                  <p className="m-0 text-sm font-bold leading-[1.6] text-accent">{publication.citation}</p>
                  <a className={`mt-2 inline-block rounded-action leading-[1.7] text-ink-muted underline decoration-line underline-offset-4 hover:text-ink ${focusRingClass}`} href={publication.url} rel="noreferrer" target="_blank">{publication.articleTitle}</a>
                </li>
              ))}
            </ul>
          </div>
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
              <Link className={`inline-flex min-h-8 items-center rounded-action hover:text-accent ${focusRingClass}`} href={item.id === "antibody-products" ? `/${lang}${productPath}` : `${homeHref}${item.href}`} key={item.id}>{item.label}</Link>
            ))}
          </nav>
          <p className="m-0 text-xs">{home.footer.copyright}</p>
        </div>
      </footer>
    </div>
  );
}
