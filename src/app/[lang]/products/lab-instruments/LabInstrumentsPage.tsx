import type { Metadata } from "next";

import { ProductPageSection } from "@/components/product-pages/ProductPageSection";
import { ProductPageTemplate } from "@/components/product-pages/ProductPageTemplate";
import { labInstrumentsContentByLocale } from "@/content/lab-instruments";
import { defaultLocale, type Locale } from "@/i18n/config";
import { productPaths } from "@/lib/product-paths";
import { getSiteUrl } from "@/lib/site-url";

import { LabInstrumentPanels } from "./LabInstrumentPanels";

type PageProps = Readonly<{ lang: Locale }>;

const productPath = productPaths["lab-instruments"];

export function getLabInstrumentsMetadata(lang: Locale): Metadata {
  return {
    ...labInstrumentsContentByLocale[lang].metadata,
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

export function LabInstrumentsPage({ lang }: PageProps) {
  const t = labInstrumentsContentByLocale[lang];

  return (
    <ProductPageTemplate
      backToProducts={t.backToProducts}
      contact={t.contact}
      eyebrow={t.eyebrow}
      heroImageSrc="/lab-instruments/lab-instruments-hero-wide-gradient.png"
      heroImageTreatment="clear-right"
      intro={t.intro}
      lang={lang}
      productPath={productPath}
      title={t.title}
    >
      <ProductPageSection aria-label={t.title}>
        <LabInstrumentPanels content={t} />
      </ProductPageSection>
    </ProductPageTemplate>
  );
}
