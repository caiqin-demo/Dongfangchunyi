import type { Metadata } from "next";
import type { IconType } from "react-icons";
import { LuMail, LuMapPin, LuPhone } from "react-icons/lu";

import { AboutPageTemplate } from "@/components/about-pages/AboutPageTemplate";
import { contactDetails, contactPageContentByLocale, type ContactDetailId } from "@/content/about/contact";
import { defaultLocale, type Locale } from "@/i18n/config";
import { aboutPaths } from "@/lib/about-paths";
import { getSiteUrl } from "@/lib/site-url";

import contactHero from "./_assets/contact-hero.jpg";

type PageProps = Readonly<{ lang: Locale }>;

const contactDetailIcons = {
  email: LuMail,
  phone: LuPhone,
  address: LuMapPin,
} satisfies Record<ContactDetailId, IconType>;

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

  return (
    <AboutPageTemplate
      backLinkLabel={content.backToAbout}
      heroImageSrc={contactHero}
      intro={content.hero.intro}
      lang={lang}
      pagePath={aboutPaths.contact}
      title={content.hero.title}
    >
      <section className="page-container py-[clamp(3.5rem,7vw,7rem)] text-center" aria-labelledby="contact-page-title">
        <h2 className="m-0 text-about-page-section-title" id="contact-page-title">{content.main.title}</h2>
        <p className="mx-auto mt-4 mb-0 max-w-2xl text-about-page-section-body text-ink-muted">{content.main.subtitle}</p>

        <ul className="mx-auto mt-[clamp(2.5rem,5vw,4rem)] grid list-none gap-5 p-0 min-page:w-3/4 min-page:grid-cols-3">
          {content.details.map((detail) => {
            const Icon = contactDetailIcons[detail.id];
            const value = contactDetails[detail.id];
            const ValueElement = detail.id === "address" ? "address" : "p";

            return (
              <li className="rounded-product-card border border-line bg-white p-[clamp(1.5rem,2.25vw,2.25rem)] shadow-media" key={detail.id}>
                <span className="mx-auto grid size-12 place-items-center rounded-round bg-ui-subtle text-accent" aria-hidden="true">
                  <Icon aria-hidden="true" className="size-6" />
                </span>
                <h3 className="mt-5 mb-0 text-contact-page-section-title text-ink">{detail.label}</h3>
                <ValueElement className="mt-3 mb-0 break-words text-contact-page-section-body not-italic text-ink-muted" lang={value.language}>
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
