import type { Metadata } from "next";

import { GenomeSequencingOptions } from "@/app/[lang]/services/genome-sequencing/GenomeSequencingOptions";
import { GenomeSequencingBodyFrame } from "@/app/[lang]/services/genome-sequencing/GenomeSequencingBodyFrame";
import { ServicePageTemplate } from "@/components/service-pages/ServicePageTemplate";
import { serviceTechnologiesContentByLocale } from "@/content/service-technologies";
import { defaultLocale, type Locale } from "@/i18n/config";
import { genomeSequencingServiceTechnologiesPath } from "@/lib/service-paths";
import { getSiteUrl } from "@/lib/site-url";

import serviceTechnologiesHero from "./_assets/service-technologies-hero.jpg";

type PageProps = Readonly<{ lang: Locale }>;

export function getServiceTechnologiesMetadata(lang: Locale): Metadata {
  return {
    ...serviceTechnologiesContentByLocale[lang].metadata,
    metadataBase: getSiteUrl(),
    alternates: {
      canonical: `/${lang}${genomeSequencingServiceTechnologiesPath}`,
      languages: {
        "zh-CN": `/zh${genomeSequencingServiceTechnologiesPath}`,
        ja: `/ja${genomeSequencingServiceTechnologiesPath}`,
        "x-default": `/${defaultLocale}${genomeSequencingServiceTechnologiesPath}`,
      },
    },
  };
}

export function ServiceTechnologiesPage({ lang }: PageProps) {
  const content = serviceTechnologiesContentByLocale[lang];

  return (
    <ServicePageTemplate
      heroImageSrc={serviceTechnologiesHero}
      heroOverlay="none"
      intro={content.intro}
      lang={lang}
      pagePath={genomeSequencingServiceTechnologiesPath}
      title={content.title}
    >
      <GenomeSequencingOptions
        optionGroupLabel={content.optionGroupLabel}
        options={content.options}
      />
      <GenomeSequencingBodyFrame contact={content.contact}>
        <div aria-hidden="true" className="min-h-[clamp(16rem,30vw,24rem)] rounded-product-card border border-line bg-white shadow-media" />
      </GenomeSequencingBodyFrame>
    </ServicePageTemplate>
  );
}
