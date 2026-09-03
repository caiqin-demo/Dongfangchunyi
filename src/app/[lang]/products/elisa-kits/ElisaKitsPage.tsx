import type { Metadata } from "next";

import { ProductAvailabilityMatrix } from "@/components/product-pages/ProductAvailabilityMatrix";
import { ProductPageSection } from "@/components/product-pages/ProductPageSection";
import { ProductPageTemplate } from "@/components/product-pages/ProductPageTemplate";
import {
  ProductSkuTable,
  type ProductSkuTableColumn,
} from "@/components/product-pages/ProductSkuTable";
import { ProductSpecificationCard } from "@/components/product-pages/ProductSpecificationCard";
import { elisaKitsContentByLocale } from "@/content/elisa-kits";
import { elisaCatalogColumnIds } from "@/content/elisa-kits/source-catalog";
import type { ElisaKitSku } from "@/content/elisa-kits/types";
import { defaultLocale, type Locale } from "@/i18n/config";
import { productPaths } from "@/lib/product-paths";
import { getSiteUrl } from "@/lib/site-url";

import elisaKitsHero from "./_assets/elisa-kits-hero.jpg";
import { ElisaManualSeries } from "./ElisaManualSeries";

type PageProps = Readonly<{ lang: Locale }>;

const productPath = productPaths["elisa-kits"];

export function getElisaKitsMetadata(lang: Locale): Metadata {
  return {
    ...elisaKitsContentByLocale[lang].metadata,
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

export function ElisaKitsPage({ lang }: PageProps) {
  const t = elisaKitsContentByLocale[lang];
  const catalogColumns = elisaCatalogColumnIds.map((id) => ({
    id,
    label: t.catalog.columnLabels[id],
  }));
  const skuColumns: readonly ProductSkuTableColumn<ElisaKitSku>[] = [
    {
      id: "pack-size",
      label: t.skuLabels.packSize,
      getValue: (sku) => sku.packSize,
      cellClassName: "font-semibold",
      rowHeader: true,
      weight: 28,
    },
    {
      id: "catalog-number",
      label: t.skuLabels.catalogNumber,
      getValue: (sku) => sku.catalogNumber,
      weight: 24,
    },
    {
      id: "shipping-origin",
      label: t.skuLabels.shippingOrigin,
      getValue: (sku) => sku.shippingOrigin,
      cellClassName: "leading-5 text-ink-muted",
      weight: 26,
    },
    {
      id: "availability",
      label: t.skuLabels.availability,
      getValue: (sku) => sku.availability,
      weight: 50,
    },
  ];
  return (
    <ProductPageTemplate
      contact={t.contact}
      eyebrow={t.eyebrow}
      heroImageSrc={elisaKitsHero}
      intro={t.intro}
      lang={lang}
      pagePath={productPath}
      title={t.title}
    >
      <ProductPageSection className="grid gap-6" aria-label={t.product.title}>
        <ProductSpecificationCard
          details={t.product.details}
          logo={{
            alt: "HannaH®",
            height: 132,
            src: "/elisa-kits/hannah-logo.png",
            width: 342,
          }}
          subtitle={t.product.subtitle}
          title={t.product.title}
        >
          <ProductSkuTable
            ariaLabel={`${t.product.title} ${t.skuLabels.title}`}
            columns={skuColumns}
            getRowKey={(sku) => sku.id}
            rows={t.product.skus}
            sectionClassName="max-w-[420px]"
            tableMinWidthClassName="min-w-[420px]"
            title={t.skuLabels.title}
            titleId="elisa-sku-title"
          />
        </ProductSpecificationCard>
        <ElisaManualSeries content={t.reference} />
        <ProductAvailabilityMatrix
          availableLabel={t.catalog.available}
          columnLanguage="en"
          columns={catalogColumns}
          idPrefix="elisa-catalog"
          note={t.catalog.note}
          regionLabel={t.catalog.regionLabel}
          rows={t.catalog.rows}
          rowHeaderLabel={t.catalog.rowHeaderLabel}
          tableMinWidthClassName="min-w-[1040px]"
          title={t.catalog.title}
          unavailableLabel={t.catalog.unavailable}
        />
      </ProductPageSection>
    </ProductPageTemplate>
  );
}
