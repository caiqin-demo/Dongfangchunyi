import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Fragment } from "react";

import { ProductPageTemplate } from "@/components/product-pages/ProductPageTemplate";
import { antibodyProductsContentByLocale } from "@/content/antibody-products";
import type { AntibodyProductId } from "@/content/antibody-products/types";
import { defaultLocale, isLocale, locales } from "@/i18n/config";
import { productPaths } from "@/lib/product-paths";
import { getSiteUrl } from "@/lib/site-url";

import { ProductCard } from "./ProductCard";

type PageProps = Readonly<{ params: Promise<{ lang: string }> }>;

const productPath = productPaths["antibody-products"];
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
        "x-default": `/${defaultLocale}${productPath}`,
      },
    },
  };
}

export default async function AntibodyProductsPage({ params }: PageProps) {
  const { lang } = await params;
  if (!isLocale(lang)) notFound();

  const t = antibodyProductsContentByLocale[lang];

  return (
    <ProductPageTemplate
      backToProducts={t.backToProducts}
      contact={t.contact}
      contactSupplement={(
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
      )}
      eyebrow={t.eyebrow}
      intro={t.intro}
      lang={lang}
      productPath={productPath}
      title={t.title}
    >
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
    </ProductPageTemplate>
  );
}
