import type { Metadata } from "next";
import type { IconType } from "react-icons";
import { LuMail, LuMapPin, LuPhone } from "react-icons/lu";

import { AboutPageTemplate } from "@/components/about-pages/AboutPageTemplate";
import { contactDetails, contactPageContentByLocale, type ContactDetailId, type ContactDetailValue } from "@/content/about/contact";
import { defaultLocale, type Locale } from "@/i18n/config";
import { aboutPaths } from "@/lib/about-paths";
import { getSiteUrl } from "@/lib/site-url";

import yeastTwoHybridHero from "../../services/yeast-two-hybrid/_assets/yeast-two-hybrid-hero.jpg";

type PageProps = Readonly<{ lang: Locale }>;

const contactDetailIcons = {
  email: LuMail,
  phone: LuPhone,
  address: LuMapPin,
} satisfies Record<ContactDetailId, IconType>;

function getContactDetails(lang: Locale): Record<ContactDetailId, ContactDetailValue> {
  if (lang === "ja") {
    return {
      email: { lines: ["暂定"] },
      phone: { lines: ["暂定"] },
      address: { lines: ["暂定"] },
    };
  }

  return contactDetails;
}

export function getContactPageMetadata(lang: Locale): Metadata {
  const metadata = contactPageContentByLocale[lang].metadata;

  return {
    ...metadata,
    metadataBase: getSiteUrl(),
    alternates: {
      canonical: `/${lang}${aboutPaths.contact}`,
      languages: {
        "zh-CN": `/zh${aboutPaths.contact}`,
        ja: `/ja${aboutPaths.contact}`,
        "x-default": `/${defaultLocale}${aboutPaths.contact}`,
      },
    },
  };
}

export function ContactPage({ lang }: PageProps) {
  const content = contactPageContentByLocale[lang];
  const details = getContactDetails(lang);

  return (
    <AboutPageTemplate
      backLinkLabel={content.backToAbout}
      heroImageSrc={yeastTwoHybridHero}
      intro={content.hero.intro}
      lang={lang}
      pagePath={aboutPaths.contact}
      title={content.hero.title}
    >
      <section className="page-container py-[clamp(3.5rem,7vw,7rem)] text-center" aria-labelledby="contact-page-title">
        <h2 className="m-0 text-about-page-section-title" id="contact-page-title">{content.main.title}</h2>
        <p className="mx-auto mt-4 mb-0 max-w-2xl text-about-page-section-body text-ink-muted">{content.main.subtitle}</p>

        <ul className="m-0 mt-[clamp(2.5rem,5vw,4rem)] grid list-none gap-6 p-0 min-page:grid-cols-3">
          {content.details.map((detail) => {
            const Icon = contactDetailIcons[detail.id];
            const value = details[detail.id];
            const ValueElement = detail.id === "address" ? "address" : "p";

            return (
              <li className="rounded-product-card border border-line-dark bg-ui-card p-[clamp(2rem,3vw,3rem)] text-on-dark" key={detail.id}>
                <span className="mx-auto grid size-16 place-items-center rounded-round bg-ui-card-accent text-accent" aria-hidden="true">
                  <Icon aria-hidden="true" className="size-8" />
                </span>
                <h3 className="mt-6 mb-0 text-about-page-section-title text-on-dark">{detail.label}</h3>
                <ValueElement className="mt-4 mb-0 break-words text-about-page-section-body not-italic text-on-dark-muted" lang={value.language}>
                  {value.lines.map((line) => <span className="block" key={line}>{line}</span>)}
                </ValueElement>
              </li>
            );
          })}
        </ul>
      </section>
    </AboutPageTemplate>
  );
}
