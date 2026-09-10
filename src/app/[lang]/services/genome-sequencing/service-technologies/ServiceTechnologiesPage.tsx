import type { Metadata } from "next";
import type { StaticImageData } from "next/image";

import { GenomeSequencingOptions } from "@/app/[lang]/services/genome-sequencing/GenomeSequencingOptions";
import { GenomeSequencingBodyFrame } from "@/app/[lang]/services/genome-sequencing/GenomeSequencingBodyFrame";
import { ServicePageTemplate } from "@/components/service-pages/ServicePageTemplate";
import { genomeSequencingContentByLocale } from "@/content/genome-sequencing";
import { serviceTechnologiesContentByLocale } from "@/content/service-technologies";
import type { ServiceTechnologyAssetId } from "@/content/service-technologies/types";
import { defaultLocale, type Locale } from "@/i18n/config";
import { genomeSequencingServiceTechnologiesPath } from "@/lib/service-paths";
import { getSiteUrl } from "@/lib/site-url";

import serviceTechnologiesHero from "./_assets/service-technologies-hero.jpg";
import absoluteQuantificationMicrobialDiversitySequencingZh from "./_assets/absolute-quantification-microbial-diversity-sequencing-zh.jpg";
import absoluteQuantificationMicrobialDiversitySequencingJa from "./_assets/absolute-quantification-microbial-diversity-sequencing-ja.jpg";
import dapSeqTechnicalServiceZh from "./_assets/dap-seq-technical-service-zh.jpg";
import dapSeqTechnicalServiceJa from "./_assets/dap-seq-technical-service-ja.jpg";
import genomeDeNovoSequencingZh from "./_assets/genome-de-novo-sequencing-zh.jpg";
import genomeDeNovoSequencingJa from "./_assets/genome-de-novo-sequencing-ja.jpg";
import genomeResequencingZh from "./_assets/genome-resequencing-zh.jpg";
import genomeResequencingJa from "./_assets/genome-resequencing-ja.jpg";
import marineMicrobiologyResearchZh from "./_assets/marine-microbiology-research-zh.jpg";
import marineMicrobiologyResearchJa from "./_assets/marine-microbiology-research-ja.jpg";
import multidimensionalAnalysisPlatformZh from "./_assets/multidimensional-analysis-platform-zh.jpg";
import multidimensionalAnalysisPlatformJa from "./_assets/multidimensional-analysis-platform-ja.jpg";
import multidimensionalAnalysisPlatformInteractionsZh from "./_assets/multidimensional-analysis-platform-interactions-zh.jpg";
import multidimensionalAnalysisPlatformInteractionsJa from "./_assets/multidimensional-analysis-platform-interactions-ja.jpg";
import multidimensionalAnalysisPlatformMultiomicsZh from "./_assets/multidimensional-analysis-platform-multiomics-zh.jpg";
import multidimensionalAnalysisPlatformMultiomicsJa from "./_assets/multidimensional-analysis-platform-multiomics-ja.jpg";
import singleCellSequencingZh from "./_assets/single-cell-sequencing-zh.jpg";
import singleCellSequencingJa from "./_assets/single-cell-sequencing-ja.jpg";
import wholeTranscriptomeSequencingZh from "./_assets/whole-transcriptome-sequencing-zh.jpg";
import wholeTranscriptomeSequencingJa from "./_assets/whole-transcriptome-sequencing-ja.jpg";
import { ServiceTechnologiesBodyCard } from "./ServiceTechnologiesBodyCard";

type PageProps = Readonly<{ lang: Locale }>;

const serviceTechnologyAssetsByLocale = {
  zh: {
    "absolute-quantification-microbial-diversity-sequencing-zh":
      absoluteQuantificationMicrobialDiversitySequencingZh,
    "dap-seq-technical-service-zh": dapSeqTechnicalServiceZh,
    "genome-de-novo-sequencing-zh": genomeDeNovoSequencingZh,
    "genome-resequencing-zh": genomeResequencingZh,
    "marine-microbiology-research-zh": marineMicrobiologyResearchZh,
    "multidimensional-analysis-platform-zh": multidimensionalAnalysisPlatformZh,
    "multidimensional-analysis-platform-interactions-zh":
      multidimensionalAnalysisPlatformInteractionsZh,
    "multidimensional-analysis-platform-multiomics-zh":
      multidimensionalAnalysisPlatformMultiomicsZh,
    "single-cell-sequencing-zh": singleCellSequencingZh,
    "whole-transcriptome-sequencing-zh": wholeTranscriptomeSequencingZh,
  },
  ja: {
    "absolute-quantification-microbial-diversity-sequencing-ja":
      absoluteQuantificationMicrobialDiversitySequencingJa,
    "dap-seq-technical-service-ja": dapSeqTechnicalServiceJa,
    "genome-de-novo-sequencing-ja": genomeDeNovoSequencingJa,
    "genome-resequencing-ja": genomeResequencingJa,
    "marine-microbiology-research-ja": marineMicrobiologyResearchJa,
    "multidimensional-analysis-platform-ja": multidimensionalAnalysisPlatformJa,
    "multidimensional-analysis-platform-interactions-ja":
      multidimensionalAnalysisPlatformInteractionsJa,
    "multidimensional-analysis-platform-multiomics-ja":
      multidimensionalAnalysisPlatformMultiomicsJa,
    "single-cell-sequencing-ja": singleCellSequencingJa,
    "whole-transcriptome-sequencing-ja": wholeTranscriptomeSequencingJa,
  },
} satisfies {
  [Lang in Locale]: Readonly<
    Record<Extract<ServiceTechnologyAssetId, `${string}-${Lang}`>, StaticImageData>
  >;
};

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
      preserveLocaleSearchParamKeys={["technology"]}
      title={content.title}
    >
      <GenomeSequencingOptions
        optionGroupLabel={content.optionGroupLabel}
        options={content.options}
      />
      <GenomeSequencingBodyFrame contact={content.contact}>
        <ServiceTechnologiesBodyCard
          assets={serviceTechnologyAssetsByLocale[lang]}
          card={content.bodyCard}
          categories={categories}
          lang={lang}
        />
      </GenomeSequencingBodyFrame>
    </ServicePageTemplate>
  );
}
