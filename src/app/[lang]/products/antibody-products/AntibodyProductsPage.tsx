import type { Metadata } from "next";

import { ProductAvailabilityMatrix } from "@/components/product-pages/ProductAvailabilityMatrix";
import { ProductPageSection } from "@/components/product-pages/ProductPageSection";
import { ProductPageTemplate } from "@/components/product-pages/ProductPageTemplate";
import { antibodyProductsContentByLocale } from "@/content/antibody-products";
import type { AntibodyProductId } from "@/content/antibody-products/types";
import { defaultLocale, type Locale } from "@/i18n/config";
import { productPaths } from "@/lib/product-paths";
import { getSiteUrl } from "@/lib/site-url";

import antibodyProductsHero from "./_assets/antibody-products-hero.jpg";
import { ProductCard } from "./ProductCard";

type PageProps = Readonly<{ lang: Locale }>;

const productPath = productPaths["antibody-products"];
const productIds = ["mab", "hrp", "affinity-gel", "magnetic-beads"] as const satisfies readonly AntibodyProductId[];

export function getAntibodyProductsMetadata(lang: Locale): Metadata {
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

export function AntibodyProductsPage({ lang }: PageProps) {
  const t = antibodyProductsContentByLocale[lang];
  const matrixColumns = productIds.map((id) => ({
    id,
    label: t.matrix.productLabels[id],
    sublabel: t.matrix.availabilityHeader,
  }));
  const matrixRows = t.matrix.rows.map((row) => ({
    availableFor: productIds.filter((productId) => row.availability[productId]),
    id: row.id,
    label: row.label,
  }));

  return (
    <ProductPageTemplate
      contact={t.contact}
      contactSupplement={(
        <div>
          <h2 className="m-0 text-product-section-title">{t.publications.title}</h2>
          <ul className="mt-5 grid list-none gap-5 p-0">
            {t.publications.items.map((publication) => (
              <li className="rounded-control border border-line bg-white p-5" key={publication.id}>
                <p className="m-0 text-sm font-bold leading-[1.6] text-accent">{publication.citation}</p>
                <a className="mt-2 inline-block rounded-action leading-[1.7] text-ink-muted underline decoration-line underline-offset-4 hover:text-ink focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent" href={publication.url} rel="noreferrer" target="_blank">{publication.articleTitle}</a>
              </li>
            ))}
          </ul>
        </div>
      )}
      eyebrow={t.eyebrow}
      heroImageSrc={antibodyProductsHero}
      intro={t.intro}
      lang={lang}
      pagePath={productPath}
      title={t.title}
    >
      <ProductPageSection>
        <div className="grid grid-cols-1 items-stretch gap-6 stack:grid-cols-2">
          {t.products.map((product) => (
            <ProductCard key={product.id} product={product} skuLabels={t.skuLabels} />
          ))}
        </div>

        <ProductAvailabilityMatrix
          availableLabel={t.matrix.available}
          className="mt-6"
          columnGroupCount={2}
          columnLanguage="en"
          columns={matrixColumns}
          idPrefix="antibody-matrix"
          note={t.matrix.originNote}
          rows={matrixRows}
          rowHeaderLabel={t.matrix.tagType}
          tableMinWidthClassName="min-w-[540px]"
          title={t.matrix.title}
          unavailableLabel={t.matrix.unavailable}
        />
      </ProductPageSection>
    </ProductPageTemplate>
  );
}
