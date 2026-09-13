import type { Metadata } from "next";

import { ServicePageTemplate } from "@/components/service-pages/ServicePageTemplate";
import { yeastTwoHybridContentByLocale } from "@/content/yeast-two-hybrid";
import { type Locale } from "@/i18n/config";
import { getLocalizedMetadata } from "@/lib/localized-metadata";
import { servicePaths } from "@/lib/service-paths";

import yeastTwoHybridHero from "./_assets/yeast-two-hybrid-hero.jpg";
import { YeastTwoHybridSystems } from "./YeastTwoHybridSystems";

type PageProps = Readonly<{ lang: Locale }>;

const servicePath = servicePaths["yeast-two-hybrid"];

export function getYeastTwoHybridMetadata(lang: Locale): Metadata {
  return getLocalizedMetadata(lang, servicePath, yeastTwoHybridContentByLocale[lang].metadata);
}

export function YeastTwoHybridPage({ lang }: PageProps) {
  const t = yeastTwoHybridContentByLocale[lang];

  return (
    <ServicePageTemplate
      heroImageSrc={yeastTwoHybridHero}
      intro={t.intro}
      lang={lang}
      pagePath={servicePath}
      preserveLocaleSearchParamKeys={["system"]}
      title={t.title}
    >
      <YeastTwoHybridSystems
        selectorLabel={t.systemSelectorLabel}
        systems={t.systems}
      />
    </ServicePageTemplate>
  );
}
