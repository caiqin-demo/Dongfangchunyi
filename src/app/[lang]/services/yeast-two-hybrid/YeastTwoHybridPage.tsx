import type { Metadata } from "next";

import { ServicePageTemplate } from "@/components/service-pages/ServicePageTemplate";
import { yeastTwoHybridContentByLocale } from "@/content/yeast-two-hybrid";
import { defaultLocale, type Locale } from "@/i18n/config";
import { servicePaths } from "@/lib/service-paths";
import { getSiteUrl } from "@/lib/site-url";

import yeastTwoHybridHero from "./_assets/yeast-two-hybrid-hero.jpg";
import { YeastTwoHybridSystems } from "./YeastTwoHybridSystems";

type PageProps = Readonly<{ lang: Locale }>;

const servicePath = servicePaths["yeast-two-hybrid"];

export function getYeastTwoHybridMetadata(lang: Locale): Metadata {
  return {
    ...yeastTwoHybridContentByLocale[lang].metadata,
    metadataBase: getSiteUrl(),
    alternates: {
      canonical: `/${lang}${servicePath}`,
      languages: {
        "zh-CN": `/zh${servicePath}`,
        ja: `/ja${servicePath}`,
        "x-default": `/${defaultLocale}${servicePath}`,
      },
    },
  };
}

export function YeastTwoHybridPage({ lang }: PageProps) {
  const t = yeastTwoHybridContentByLocale[lang];

  return (
    <ServicePageTemplate
      backLinkLabel={t.backToServices}
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
