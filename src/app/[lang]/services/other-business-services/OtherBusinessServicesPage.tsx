import type { Metadata } from "next";

import { ServicePageTemplate } from "@/components/service-pages/ServicePageTemplate";
import { contentByLocale } from "@/content";
import { zhOtherBusinessServicesContent } from "@/content/other-business-services";
import { defaultLocale, type Locale } from "@/i18n/config";
import { servicePaths } from "@/lib/service-paths";
import { getSiteUrl } from "@/lib/site-url";

import otherBusinessServicesHero from "./_assets/employee-training-is-important.png";

type PageProps = Readonly<{ lang: Locale }>;

const servicePath = servicePaths["other-business-services"];

export function getOtherBusinessServicesMetadata(lang: Locale): Metadata {
  const metadata = lang === "zh"
    ? zhOtherBusinessServicesContent.metadata
    : contentByLocale.ja.services.items[2];

  return {
    title: metadata.title,
    description: metadata.description,
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

export function OtherBusinessServicesPage({ lang }: PageProps) {
  const content = zhOtherBusinessServicesContent;

  return (
    <ServicePageTemplate
      heroAppearance="pale-dark-copy"
      heroContentLanguage="zh-CN"
      heroImageSrc={otherBusinessServicesHero}
      heroOverlay="pale"
      heroSupplement={
        <div className="page-container page:w-2/5">
          <ul className="mt-12 grid list-none gap-3 p-0 hero-copy:grid-cols-3 page:mt-0" lang="en">
            {content.panels.map((panel) => (
              <li className="bg-service-hero-panel px-3 py-1 text-center whitespace-pre-line text-service-card-body text-ink" key={panel.id}>{panel.label}</li>
            ))}
          </ul>
        </div>
      }
      heroSupplementPosition="wide-overlay"
      intro={content.intro}
      lang={lang}
      pagePath={servicePath}
      title={content.title}
    >
      <div className="bg-ui-subtle py-8">
        <div className="page-container" />
      </div>
    </ServicePageTemplate>
  );
}
