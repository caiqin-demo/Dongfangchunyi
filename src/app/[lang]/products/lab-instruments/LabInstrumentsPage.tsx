import type { Metadata } from "next";

import { ProductPageSection } from "@/components/product-pages/ProductPageSection";
import { ProductPageTemplate } from "@/components/product-pages/ProductPageTemplate";
import { labInstrumentsContentByLocale } from "@/content/lab-instruments";
import { type Locale } from "@/i18n/config";
import { getLocalizedMetadata } from "@/lib/localized-metadata";
import { productPaths } from "@/lib/product-paths";

import labInstrumentsHero from "./_assets/lab-instruments-hero-wide-gradient.webp";
import { LabInstrumentPanels } from "./LabInstrumentPanels";

type PageProps = Readonly<{ lang: Locale }>;

const productPath = productPaths["lab-instruments"];

export function getLabInstrumentsMetadata(lang: Locale): Metadata {
  return getLocalizedMetadata(lang, productPath, labInstrumentsContentByLocale[lang].metadata);
}

export function LabInstrumentsPage({ lang }: PageProps) {
  const t = labInstrumentsContentByLocale[lang];

  return (
    <ProductPageTemplate
      contact={t.contact}
      eyebrow={t.eyebrow}
      heroImageSrc={labInstrumentsHero}
      intro={t.intro}
      lang={lang}
      pagePath={productPath}
      title={t.title}
    >
      <ProductPageSection aria-label={t.title}>
        <LabInstrumentPanels content={t} />
      </ProductPageSection>
    </ProductPageTemplate>
  );
}
