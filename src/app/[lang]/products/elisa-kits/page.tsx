import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { ProductPageSection } from "@/components/product-pages/ProductPageSection";
import { ProductPageTemplate } from "@/components/product-pages/ProductPageTemplate";
import {
  ProductSkuTable,
  type ProductSkuTableColumn,
} from "@/components/product-pages/ProductSkuTable";
import { ProductSpecificationCard } from "@/components/product-pages/ProductSpecificationCard";
import { elisaKitsContentByLocale } from "@/content/elisa-kits";
import type { ElisaKitSku } from "@/content/elisa-kits/types";
import { defaultLocale, isLocale, locales } from "@/i18n/config";
import { productPaths } from "@/lib/product-paths";
import { getSiteUrl } from "@/lib/site-url";

import { ElisaManualSeries } from "./ElisaManualSeries";

type PageProps = Readonly<{ params: Promise<{ lang: string }> }>;

const productPath = productPaths["elisa-kits"];

export const dynamicParams = false;

export function generateStaticParams() {
  return locales.map((lang) => ({ lang }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { lang } = await params;
  if (!isLocale(lang)) notFound();

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

export default async function ElisaKitsPage({ params }: PageProps) {
  const { lang } = await params;
  if (!isLocale(lang)) notFound();

  const t = elisaKitsContentByLocale[lang];
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
      weight: 22,
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
      backToProducts={t.backToProducts}
      contact={t.contact}
      eyebrow={t.eyebrow}
      intro={t.intro}
      lang={lang}
      productPath={productPath}
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
            title={t.skuLabels.title}
            titleId="elisa-sku-title"
          />
        </ProductSpecificationCard>
        <ElisaManualSeries content={t.reference} />
      </ProductPageSection>
    </ProductPageTemplate>
  );
}
