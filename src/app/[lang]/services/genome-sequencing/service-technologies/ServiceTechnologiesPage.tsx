import type { Metadata } from "next";

import { GenomeSequencingOptions } from "@/app/[lang]/services/genome-sequencing/GenomeSequencingOptions";
import { GenomeSequencingBodyFrame } from "@/app/[lang]/services/genome-sequencing/GenomeSequencingBodyFrame";
import { ServicePageTemplate } from "@/components/service-pages/ServicePageTemplate";
import { genomeSequencingContentByLocale } from "@/content/genome-sequencing";
import { serviceTechnologiesContentByLocale } from "@/content/service-technologies";
import { defaultLocale, type Locale } from "@/i18n/config";
import { genomeSequencingServiceTechnologiesPath } from "@/lib/service-paths";
import { getSiteUrl } from "@/lib/site-url";

import serviceTechnologiesHero from "./_assets/service-technologies-hero.jpg";
import absoluteQuantificationMicrobialDiversitySequencingZh from "./_assets/absolute-quantification-microbial-diversity-sequencing-zh.jpg";
import genomeResequencingZh from "./_assets/genome-resequencing-zh.jpg";
import marineMicrobiologyResearchZh from "./_assets/marine-microbiology-research-zh.jpg";
import multidimensionalAnalysisPlatformZh from "./_assets/multidimensional-analysis-platform-zh.jpg";
import multidimensionalAnalysisPlatformInteractionsZh from "./_assets/multidimensional-analysis-platform-interactions-zh.jpg";
import multidimensionalAnalysisPlatformMultiomicsZh from "./_assets/multidimensional-analysis-platform-multiomics-zh.jpg";
import singleCellSequencingZh from "./_assets/single-cell-sequencing-zh.jpg";
import { ServiceTechnologiesBodyCard } from "./ServiceTechnologiesBodyCard";

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
  const categories = genomeSequencingContentByLocale[lang].body.categories;

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
        <ServiceTechnologiesBodyCard
          assets={{
            "absolute-quantification-microbial-diversity-sequencing-zh":
              absoluteQuantificationMicrobialDiversitySequencingZh,
            "genome-resequencing-zh": genomeResequencingZh,
            "marine-microbiology-research-zh": marineMicrobiologyResearchZh,
            "multidimensional-analysis-platform-zh":
              multidimensionalAnalysisPlatformZh,
            "multidimensional-analysis-platform-interactions-zh":
              multidimensionalAnalysisPlatformInteractionsZh,
            "multidimensional-analysis-platform-multiomics-zh":
              multidimensionalAnalysisPlatformMultiomicsZh,
            "single-cell-sequencing-zh": singleCellSequencingZh,
          }}
          card={content.bodyCard}
          categories={categories}
        />
      </GenomeSequencingBodyFrame>
    </ServicePageTemplate>
  );
}
