import type { Metadata } from "next";

import { ServicePageTemplate } from "@/components/service-pages/ServicePageTemplate";
import { contentByLocale } from "@/content";
import { zhOtherBusinessServicesContent } from "@/content/other-business-services";
import { defaultLocale, type Locale } from "@/i18n/config";
import { servicePaths } from "@/lib/service-paths";
import { getSiteUrl } from "@/lib/site-url";

import businessConsultingPort from "./_assets/business-consulting-port.png";
import coachingLeadershipTraining from "./_assets/coaching-leadership-training.png";
import otherBusinessServicesHero from "./_assets/employee-training-is-important.png";
import selfCoachingWorkshop from "./_assets/self-coaching-workshop.jpeg";
import { OtherBusinessServicesBody } from "./OtherBusinessServicesBody";

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
              <li className="bg-service-hero-panel px-3 py-1 text-center text-card-body text-ink" key={panel.id}>
                <span className="block">{panel.title}</span>
                {panel.qualifier ? <span className="block">{panel.qualifier}</span> : null}
              </li>
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
      <OtherBusinessServicesBody
        businessConsultingImage={businessConsultingPort}
        coachingLeadershipImage={coachingLeadershipTraining}
        content={content}
        selfCoachingImage={selfCoachingWorkshop}
      />
    </ServicePageTemplate>
  );
}
