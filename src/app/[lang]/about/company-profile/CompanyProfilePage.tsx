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
      <section className="page-container pt-[clamp(1.75rem,3.5vw,3.5rem)] pb-[clamp(3.5rem,7vw,7rem)]">
          <section className="mx-auto grid max-w-6xl items-center gap-[clamp(2.5rem,6vw,6rem)] min-page:grid-cols-2" aria-labelledby="company-introduction-title">
            <div className="min-w-0">
              <div className="flex items-center gap-3">
                <span className="grid size-12 shrink-0 place-items-center rounded-round bg-white" aria-hidden="true">
                  <Image className="h-9 w-auto object-contain" src={logo} width={36} height={37} alt="" />
                </span>
                <h2 className="m-0 text-about-page-section-title" id="company-introduction-title">{content.introduction.heading}</h2>
              </div>
              {content.introduction.paragraphs.map((paragraph) => <p className="mt-5 mb-0 text-about-page-section-body text-ink-muted" key={paragraph}>{paragraph}</p>)}
            </div>
            <div className="relative aspect-[4/3] w-2/3 overflow-hidden rounded-product-card min-page:justify-self-end">
              <Image className="object-cover object-center" src={companyProfileShanghai} alt="" fill sizes="(min-width: 75rem) min(30vw, 400px), (min-width: 60rem) calc(31.333vw - 21.333px), calc(66.667vw - 1rem)" />
            </div>
          </section>

          <section className="@container/company-capabilities mt-[clamp(2rem,5vw,5rem)]" aria-labelledby="company-capabilities-title">
            <div className="mx-auto @min-company-capability-row/company-capabilities:max-w-[75rem]">
              <div className="grid gap-[clamp(2.5rem,6vw,6rem)] @min-company-capability-row/company-capabilities:grid-cols-[minmax(0,.38fr)_minmax(0,1fr)] @min-company-capability-row/company-capabilities:items-start @min-company-capability-row/company-capabilities:gap-x-12">
              <div className="min-w-0 @min-company-capability-row/company-capabilities:col-start-2 @min-company-capability-row/company-capabilities:row-start-1 @min-company-capability-row/company-capabilities:pt-10">
                <h2 className="m-0 text-about-page-section-title" id="company-capabilities-title">{content.capabilities.heading}</h2>
                <ul className="mt-6 grid list-none gap-4 p-0 @min-company-capability-row/company-capabilities:mt-7 @min-company-capability-row/company-capabilities:grid-cols-3 @min-company-capability-row/company-capabilities:gap-10">
                  {content.capabilities.items.map((capability) => {
                    const Icon = capabilityIcons[capability.id];

                    return (
                      <li className="rounded-product-card border border-line bg-white p-[clamp(1.5rem,2.25vw,2.25rem)] text-center shadow-media @min-company-capability-row/company-capabilities:px-6 @min-company-capability-row/company-capabilities:py-2.5" key={capability.id}>
                        <article className="flex h-full flex-col justify-center">
                          <span className="mx-auto grid size-12 place-items-center rounded-round bg-ui-subtle text-accent" aria-hidden="true">
                            <Icon aria-hidden="true" className="size-5" />
                          </span>
                          <h3 className="mt-5 mb-0 text-contact-page-section-title text-ink @min-company-capability-row/company-capabilities:mt-4">{capability.title}</h3>
                          <p className="mt-3 mb-0 text-contact-page-section-body text-ink-muted @min-company-capability-row/company-capabilities:mt-2">{capability.description}</p>
                        </article>
                      </li>
                    );
                  })}
                </ul>
              </div>
              <div className="order-2 min-w-0 w-2/3 @min-company-capability-row/company-capabilities:col-start-1 @min-company-capability-row/company-capabilities:row-start-1 @min-company-capability-row/company-capabilities:order-none @min-company-capability-row/company-capabilities:w-full">
                <Image className="h-auto w-full rounded-product-card" src={companyProfileBuilding} alt="" sizes="(min-width: 79rem) 320px, (min-width: 60rem) calc(66.667vw - 42.667px), (min-width: 40rem) calc(66.667vw - 21.333px), calc(66.667vw - 1rem)" />
              </div>
              </div>
            </div>
          </section>
      </section>
    </AboutPageTemplate>
  );
}
