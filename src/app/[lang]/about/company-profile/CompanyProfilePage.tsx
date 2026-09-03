import type { Metadata } from "next";
import Image from "next/image";
import type { IconType } from "react-icons";
import { LuGlobe, LuGraduationCap, LuPackageSearch } from "react-icons/lu";

import logo from "@/assets/brand/Logo.png";
import { AboutPageTemplate } from "@/components/about-pages/AboutPageTemplate";
import { companyProfileContentByLocale, type CompanyProfileCapabilityId } from "@/content/about/company-profile";
import { defaultLocale, type Locale } from "@/i18n/config";
import { aboutPaths } from "@/lib/about-paths";
import { getSiteUrl } from "@/lib/site-url";

import companyProfileBuilding from "./_assets/company-profile-building.jpg";
import companyProfileHero from "./_assets/company-profile-hero.jpg";
import companyProfileShanghai from "./_assets/company-profile-shanghai.jpeg";

type PageProps = Readonly<{ lang: Locale }>;

const capabilityIcons = {
  "international-market-development": LuGlobe,
  "international-material-procurement": LuPackageSearch,
  "employee-training": LuGraduationCap,
} satisfies Record<CompanyProfileCapabilityId, IconType>;

export function getCompanyProfilePageMetadata(lang: Locale): Metadata {
  const metadata = companyProfileContentByLocale[lang].metadata;

  return {
    ...metadata,
    metadataBase: getSiteUrl(),
    alternates: {
      canonical: `/${lang}${aboutPaths["company-profile"]}`,
      languages: {
        "zh-CN": `/zh${aboutPaths["company-profile"]}`,
        ja: `/ja${aboutPaths["company-profile"]}`,
        "x-default": `/${defaultLocale}${aboutPaths["company-profile"]}`,
      },
    },
  };
}

export function CompanyProfilePage({ lang }: PageProps) {
  const content = companyProfileContentByLocale[lang];

  return (
    <AboutPageTemplate
      backLinkLabel={content.backToAbout}
      heroImageSrc={companyProfileHero}
      intro={content.hero.intro}
      lang={lang}
      pagePath={aboutPaths["company-profile"]}
      title={content.hero.title}
    >
      <section className="page-container py-[clamp(3.5rem,7vw,7rem)]">
          <section className="grid items-center gap-[clamp(2.5rem,6vw,6rem)] min-page:grid-cols-2" aria-labelledby="company-introduction-title">
            <div className="min-w-0">
              <div className="flex items-center gap-3">
                <span className="grid size-12 shrink-0 place-items-center rounded-round bg-white" aria-hidden="true">
                  <Image className="h-9 w-auto object-contain" src={logo} width={36} height={37} alt="" />
                </span>
                <h2 className="m-0 text-about-page-section-title" id="company-introduction-title">{content.introduction.heading}</h2>
              </div>
              {content.introduction.paragraphs.map((paragraph) => <p className="mt-5 mb-0 text-about-page-section-body text-ink-muted" key={paragraph}>{paragraph}</p>)}
            </div>
            <Image className="h-auto w-full rounded-product-card min-page:w-1/2 min-page:justify-self-end" src={companyProfileShanghai} alt="" sizes="(min-width: 60rem) min(25vw, 350px), calc(100vw - 3rem)" />
          </section>

          <section className="@container/company-capabilities mt-[clamp(4rem,10vw,10rem)]" aria-labelledby="company-capabilities-title">
            <div className="grid gap-[clamp(2.5rem,6vw,6rem)] @min-company-capability-row/company-capabilities:grid-cols-2 @min-company-capability-row/company-capabilities:grid-rows-2 @min-company-capability-row/company-capabilities:gap-y-0">
              <div className="min-w-0 @min-company-capability-row/company-capabilities:col-start-2 @min-company-capability-row/company-capabilities:row-start-1 @min-company-capability-row/company-capabilities:self-center">
              <h2 className="m-0 text-about-page-section-title" id="company-capabilities-title">{content.capabilities.heading}</h2>
              </div>
              <ul className="mt-6 grid list-none gap-4 p-0 @min-company-capability-row/company-capabilities:col-start-2 @min-company-capability-row/company-capabilities:row-start-2 @min-company-capability-row/company-capabilities:mt-0 @min-company-capability-row/company-capabilities:h-full @min-company-capability-row/company-capabilities:grid-cols-3">
                {content.capabilities.items.map((capability) => {
                  const Icon = capabilityIcons[capability.id];

                  return (
                    <li className="h-full rounded-product-card border border-line bg-white p-[clamp(1.5rem,2.25vw,2.25rem)] text-center shadow-media" key={capability.id}>
                      <article className="flex h-full flex-col justify-center">
                        <span className="mx-auto grid size-12 place-items-center rounded-round bg-ui-subtle text-accent" aria-hidden="true">
                          <Icon aria-hidden="true" className="size-5" />
                        </span>
                        <h3 className="mt-5 mb-0 text-contact-page-section-title text-ink">{capability.title}</h3>
                        <p className="mt-3 mb-0 text-contact-page-section-body text-ink-muted">{capability.description}</p>
                      </article>
                    </li>
                  );
                })}
              </ul>
              <div className="order-2 min-w-0 @min-company-capability-row/company-capabilities:col-start-1 @min-company-capability-row/company-capabilities:row-span-2 @min-company-capability-row/company-capabilities:row-start-1 @min-company-capability-row/company-capabilities:order-none">
                <Image className="h-auto w-full rounded-product-card" src={companyProfileBuilding} alt="" sizes="(min-width: 75rem) min(45vw, 700px), (min-width: 60rem) calc(100vw - 4rem), (min-width: 40rem) calc(100vw - 2rem), calc(100vw - 1.5rem)" />
              </div>
            </div>
          </section>
      </section>
    </AboutPageTemplate>
  );
}
