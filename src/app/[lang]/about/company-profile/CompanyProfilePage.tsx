import type { Metadata } from "next";
import Image from "next/image";
import type { IconType } from "react-icons";
import { LuGlobe, LuGraduationCap, LuPackageSearch } from "react-icons/lu";

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
              <h2 className="m-0 text-about-page-section-title" id="company-introduction-title">{content.introduction.heading}</h2>
              {content.introduction.paragraphs.map((paragraph) => <p className="mt-5 mb-0 text-about-page-section-body text-ink-muted" key={paragraph}>{paragraph}</p>)}
            </div>
            <Image className="h-auto w-full rounded-product-card min-page:w-1/2 min-page:justify-self-end" src={companyProfileShanghai} alt="" sizes="(min-width: 60rem) min(25vw, 350px), calc(100vw - 3rem)" />
          </section>

          <section className="mt-[clamp(4rem,10vw,10rem)] grid items-center gap-[clamp(2.5rem,6vw,6rem)] min-page:grid-cols-2" aria-labelledby="company-capabilities-title">
            <div className="order-1 min-w-0 min-page:order-2">
              <h2 className="m-0 text-about-page-section-title" id="company-capabilities-title">{content.capabilities.heading}</h2>
              <ul className="mt-6 grid list-none gap-4 p-0">
                {content.capabilities.items.map((capability) => {
                  const Icon = capabilityIcons[capability.id];

                  return (
                    <li className="rounded-product-card border border-line-dark bg-ui-card p-5" key={capability.id}>
                      <article>
                        <span className="grid size-10 place-items-center rounded-round bg-ui-card-accent text-accent" aria-hidden="true">
                          <Icon aria-hidden="true" className="size-5" />
                        </span>
                        <h3 className="mt-5 mb-0 text-contact-page-section-title text-on-dark">{capability.title}</h3>
                        <p className="mt-2 mb-0 text-contact-page-section-body text-on-dark-muted">{capability.description}</p>
                      </article>
                    </li>
                  );
                })}
              </ul>
            </div>
            <Image className="order-2 h-auto w-full rounded-product-card min-page:order-1 min-page:w-1/2 min-page:justify-self-start" src={companyProfileBuilding} alt="" sizes="(min-width: 60rem) min(25vw, 350px), calc(100vw - 3rem)" />
          </section>
      </section>
    </AboutPageTemplate>
  );
}
