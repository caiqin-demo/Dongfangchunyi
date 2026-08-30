import Image, { type ImageProps } from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";
import { LuGraduationCap } from "react-icons/lu";

import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";
import { contentByLocale } from "@/content";
import type { ProductCardId, ServiceCardId } from "@/content/types";
import type { Locale } from "@/i18n/config";
import { productPaths } from "@/lib/product-paths";
import { servicePaths } from "@/lib/service-paths";

import aboutDna from "./_assets/landing/about-dna.webp";
import heroBackground from "./_assets/landing/hero-background.webp";
import productAntibody from "./_assets/landing/product-antibody.jpg";
import productElisa from "./_assets/landing/product-elisa.webp";
import productLabInstrument from "./_assets/landing/product-lab-instrument.webp";
import serviceGenomeSequencing from "./_assets/landing/service-genome-sequencing.webp";
import serviceYeastTwoHybrid from "./_assets/landing/service-yeast-two-hybrid.webp";

type HomeProps = Readonly<{
  lang: Locale;
}>;

const focusRingClass = "focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent";
const heroButtonClass = `inline-flex min-h-12 min-w-36 items-center justify-center rounded-action border px-6 text-button-label transition-[transform,background-color] duration-200 hover:-translate-y-px max-sm:w-full ${focusRingClass}`;
const skipLinkClass = `fixed top-3 left-3 z-50 -translate-y-24 rounded-action bg-white px-4 py-3 text-button-label text-ink shadow-about transition-transform focus:translate-y-0 motion-reduce:transition-none ${focusRingClass}`;
const panelContainerClass = "page-container mt-panel-gap";
const aboutPanelClass = `${panelContainerClass} min-h-panel-min-height p-[clamp(1.5rem,3vw,3rem)] max-page:p-6 max-sm:p-4`;
const corePanelClass = `${panelContainerClass} grid min-h-core-panel-min-height p-[clamp(1.25rem,2.3vw,2.25rem)] max-page:min-h-panel-min-height max-page:p-6 max-sm:p-4`;
const productImages = {
  "antibody-products": productAntibody,
  "elisa-kits": productElisa,
  "lab-instruments": productLabInstrument,
} satisfies Record<ProductCardId, ImageProps["src"]>;
const serviceImages = {
  "yeast-two-hybrid": serviceYeastTwoHybrid,
  "genome-sequencing": serviceGenomeSequencing,
  "other-business-services": null,
} satisfies Record<ServiceCardId, ImageProps["src"] | null>;
const serviceIcons = {
  "yeast-two-hybrid": null,
  "genome-sequencing": null,
  "other-business-services": LuGraduationCap,
} satisfies Record<ServiceCardId, typeof LuGraduationCap | null>;
const serviceActionPaths = {
  "yeast-two-hybrid": servicePaths["yeast-two-hybrid"],
  "genome-sequencing": null,
  "other-business-services": null,
} satisfies Record<ServiceCardId, `/${string}` | null>;

type CoreCardProps = Readonly<{
  actionHref?: string;
  actionLabel?: string;
  description: string;
  icon?: ReactNode;
  imageSrc?: ImageProps["src"];
  title: string;
}>;

function CoreCard({ actionHref, actionLabel, description, icon, imageSrc, title }: CoreCardProps) {
  return (
    <article className="core-card relative flex min-h-0 flex-col overflow-hidden rounded-product-card border border-line-dark px-7 py-5.5 max-page:min-h-78">
      <div className={`relative mt-2.5 size-[50px] shrink-0 overflow-hidden rounded-control border border-accent max-page:mt-3 ${icon ? "grid place-items-center bg-accent text-[25px] text-white" : "bg-black"}`} aria-hidden="true">
        {imageSrc ? <Image className="object-cover" src={imageSrc} alt="" fill sizes="50px" /> : icon}
      </div>
      <h3 className="mt-5 mb-3 text-[22px] leading-[1.25] font-bold max-page:mt-6 max-page:mb-3.5 max-page:text-[28px]">{title}</h3>
      <p className="mt-0 mb-3 max-w-[360px] text-[15px] leading-[1.65] text-on-dark-muted/90 max-page:text-base max-page:leading-[1.75]">{description}</p>
      {actionHref ? (
        <Link className={`card-action relative z-1 mt-auto grid min-h-8 w-full shrink-0 place-items-center rounded-action bg-accent text-[21px] leading-none font-extralight text-white transition-colors hover:bg-accent-hover ${focusRingClass}`} href={actionHref} aria-label={actionLabel}>+</Link>
      ) : (
        <span className="card-action relative z-1 mt-auto grid min-h-8 w-full shrink-0 place-items-center rounded-action bg-accent text-[21px] leading-none font-extralight text-white" aria-hidden="true">+</span>
      )}
    </article>
  );
}

export function LandingPage({ lang }: HomeProps) {
  const language = lang;
  const t = contentByLocale[language];
  return (
    <div className={`${language === "ja" ? "font-sans-jp" : "font-sans-sc"} bg-ui-canvas`}>
      <a className={skipLinkClass} href="#main-content">{t.skipToContent}</a>
      <SiteHeader lang={language} variant="landing" />

      <main id="main-content" tabIndex={-1}>
        <section className={`relative grid min-h-hero grid-cols-1 items-center justify-items-center overflow-hidden bg-ui-hero px-page-gutter pt-[114px] pb-[72px] text-white max-page:min-h-[432px] max-page:px-7 max-page:pt-24 max-page:pb-[60px] max-stack:pt-28 max-sm:min-h-[456px] ${language === "ja" ? "max-sm:pb-2.5" : "max-sm:pb-10"}`} id="top" aria-labelledby="hero-title">
          <Image
            alt=""
            aria-hidden="true"
            className="pointer-events-none object-cover object-center"
            fetchPriority="high"
            fill
            loading="eager"
            sizes="100vw"
            src={heroBackground}
          />
          <div className="relative z-2 mx-auto w-full max-w-[1120px] text-center max-page:max-w-[780px]">
            <h1 className="m-0 text-hero-title max-sm:text-[36px]" id="hero-title">{t.hero.title}</h1>
            <p className="mx-auto mt-[38px] max-w-[1120px] text-[clamp(22px,2.1vw,30px)] leading-[1.6] text-on-dark-muted max-page:max-w-[780px] max-sm:mt-[26px] max-sm:max-w-[320px] max-sm:text-lg max-sm:leading-[1.75]">{t.hero.description}</p>
            <div className="mt-12.5 flex justify-center gap-2.5 max-sm:mx-auto max-sm:mt-4.5 max-sm:w-54 max-sm:max-w-full max-sm:flex-col" aria-label={language === "ja" ? "ページ案内" : "页面快速入口"}>
              <a className={`${heroButtonClass} border-accent/90 bg-accent/90`} href="#products">{t.hero.productButton}</a>
              <a className={`${heroButtonClass} border-accent/80 bg-transparent text-accent`} href="#services">{t.hero.serviceButton}</a>
            </div>
          </div>
        </section>

        <section className={`relative grid grid-cols-2 items-stretch gap-[clamp(44px,5vw,80px)] bg-white shadow-about max-page:grid-cols-1 ${aboutPanelClass}`} id="about" aria-labelledby="about-title">
          <div className="relative min-h-about-media overflow-hidden rounded-control border border-line bg-ui-subtle shadow-media max-page:h-78 max-sm:min-h-60" aria-hidden="true">
            <Image className="object-cover object-center" src={aboutDna} alt="" fill loading="eager" sizes="(max-width: 960px) 100vw, 50vw" />
          </div>
          <div className="flex min-w-0 flex-col justify-center">
            <p className="mb-2 text-[15px] leading-[17px] font-extrabold tracking-[.22em] text-accent">{t.about.label}</p>
            <h2 className="m-0 max-w-[680px] text-about-title text-balance max-sm:text-[32px]" id="about-title">{t.about.title}</h2>
            <p className="my-2 text-[17px] leading-[1.8] font-normal text-ink-muted">{t.about.body}</p>
            <ul className="mt-2.5 grid list-none gap-[9.5px] p-0">
              {t.about.offerings.map(({ brand, description, id, registered }) => (
                <li className="flex items-center gap-[13px] text-lg leading-[1.55] font-normal text-ink/80" key={id}>
                  <span className="grid size-[26px] flex-[0_0_26px] place-items-center rounded-round border-[5px] border-accent bg-white text-xs leading-none font-extrabold text-accent" aria-hidden="true">✓</span>
                  <span>{brand}{registered && <sup className="relative top-[-.2em] ml-px text-[.62em] leading-none">®</sup>}{brand && " "}{description}</span>
                </li>
              ))}
            </ul>
            <a className={`mt-3 inline-flex min-h-11 w-fit min-w-42 items-center justify-center gap-3.5 rounded-action bg-accent px-7 text-button-label text-white transition-[transform,background-color] duration-200 hover:-translate-y-0.5 hover:bg-accent-hover ${focusRingClass}`} href="#products">
              <span>{t.about.more}</span>
              <span className="text-[25px] leading-none font-light" aria-hidden="true">→</span>
            </a>
          </div>
        </section>

        <section className={`bg-ui-section text-white ${corePanelClass}`} id="products" aria-labelledby="products-title">
          <div className="flex h-full flex-col max-page:h-auto">
            <div className="mx-auto mb-7.5 max-w-[760px] text-center max-page:mb-9 max-sm:text-left">
              <h2 className="m-0 text-about-title" id="products-title">{t.products.title}</h2>
            </div>
            <div className="grid flex-1 grid-cols-3 gap-5.5 max-page:grid-cols-1">
              {t.products.items.map((item) => (
                <CoreCard
                  actionHref={`/${language}${productPaths[item.id]}`}
                  actionLabel={item.title}
                  description={item.description}
                  imageSrc={productImages[item.id]}
                  key={item.id}
                  title={item.title}
                />
              ))}
            </div>
          </div>
        </section>

        <section className={`bg-ui-section text-white ${corePanelClass}`} id="services" aria-labelledby="services-title">
          <div className="flex h-full flex-col max-page:h-auto">
            <div className="mx-auto mb-7.5 max-w-[760px] text-center max-page:mb-9 max-sm:text-left">
              <h2 className="m-0 text-about-title" id="services-title">{t.services.title}</h2>
            </div>
            <div className="grid flex-1 grid-cols-3 gap-5.5 max-page:grid-cols-1">
              {t.services.items.map((item) => {
                const ServiceIcon = serviceIcons[item.id];
                const serviceActionPath = serviceActionPaths[item.id];
                return <CoreCard actionHref={serviceActionPath ? `/${language}${serviceActionPath}` : undefined} actionLabel={serviceActionPath ? item.title : undefined} description={item.description} icon={ServiceIcon ? <ServiceIcon /> : undefined} imageSrc={serviceImages[item.id] ?? undefined} key={item.id} title={item.title} />;
              })}
            </div>
          </div>
        </section>
      </main>

      <SiteFooter className="mt-panel-gap" lang={language} />
    </div>
  );
}
