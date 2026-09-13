import type { Metadata } from "next";

import { GenomeSequencingBody } from "@/app/[lang]/services/genome-sequencing/GenomeSequencingBody";
import { GenomeSequencingOptions } from "@/app/[lang]/services/genome-sequencing/GenomeSequencingOptions";
import { ServicePageTemplate } from "@/components/service-pages/ServicePageTemplate";
import { genomeSequencingContentByLocale } from "@/content/genome-sequencing";
import { type Locale } from "@/i18n/config";
import { getLocalizedMetadata } from "@/lib/localized-metadata";
import {
  genomeSequencingServiceTechnologiesPath,
  servicePaths,
} from "@/lib/service-paths";

import genomeSequencingHero from "./_assets/genome-sequencing-hero.jpeg";
import genomeSequencingTeam from "./_assets/genome-sequencing-team.jpg";

type PageProps = Readonly<{ lang: Locale }>;

const servicePath = servicePaths["genome-sequencing"];

export function getGenomeSequencingMetadata(lang: Locale): Metadata {
  return getLocalizedMetadata(lang, servicePath, genomeSequencingContentByLocale[lang].metadata);
}

export function GenomeSequencingPage({ lang }: PageProps) {
  const t = genomeSequencingContentByLocale[lang];

  return (
    <ServicePageTemplate
      heroImageSrc={genomeSequencingHero}
      intro={t.intro}
      lang={lang}
      pagePath={servicePath}
      title={t.title}
    >
      <GenomeSequencingOptions
        optionGroupLabel={t.optionGroupLabel}
        options={t.options}
      />
      <GenomeSequencingBody
        body={t.body}
        technicalRoutePath={`/${lang}${genomeSequencingServiceTechnologiesPath}`}
        teamImage={genomeSequencingTeam}
      />
    </ServicePageTemplate>
  );
}
