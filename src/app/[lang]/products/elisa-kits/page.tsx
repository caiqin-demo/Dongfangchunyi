import type { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";

import { ProductPageTemplate } from "@/components/product-pages/ProductPageTemplate";
import { ProductSpecificationCard } from "@/components/product-pages/ProductSpecificationCard";
import { elisaKitsContentByLocale } from "@/content/elisa-kits";
import { defaultLocale, isLocale, locales } from "@/i18n/config";
import { productPaths } from "@/lib/product-paths";
import { getSiteUrl } from "@/lib/site-url";

import { ElisaSkuTable } from "./ElisaSkuTable";

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
      <section className="mx-auto w-[calc(100%-4rem)] max-w-panel py-16 max-[960px]:w-[calc(100%-2rem)] max-[640px]:w-[calc(100%-1.5rem)] max-[640px]:py-10" aria-label={t.product.title}>
        <ProductSpecificationCard
          details={t.product.details}
          footer={(
            <div className="mt-6 flex h-60 shrink-0 items-end">
              <Image
                className="h-auto w-40 max-w-full object-contain object-left-bottom"
                src="/elisa-kits/hannah-logo.png"
                width={342}
                height={132}
                alt="HannaH®"
              />
            </div>
          )}
          subtitle={t.product.subtitle}
          title={t.product.title}
        >
          <ElisaSkuTable labels={t.skuLabels} productTitle={t.product.title} skus={t.product.skus} />
        </ProductSpecificationCard>
      </section>
    </ProductPageTemplate>
  );
}
