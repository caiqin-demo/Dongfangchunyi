import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import type { ReactNode } from "react";
import { LuGraduationCap } from "react-icons/lu";

import { contentByLocale } from "@/content";
import type { ProductCardId, ServiceCardId } from "@/content/types";
import { isLocale } from "@/i18n/config";

type HomeProps = Readonly<{
  params: Promise<{ lang: string }>;
}>;

const focusRingClass = "focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent";
const navLinkClass = `inline-flex min-h-6 items-center justify-center rounded-action whitespace-nowrap text-[clamp(15px,1.15vw,18px)] text-on-dark/85 transition-colors duration-200 hover:text-accent focus-visible:text-accent max-[640px]:text-xs ${focusRingClass}`;
const languageLinkClass = `inline-flex min-h-6 min-w-6 items-center justify-center rounded-action text-on-dark-muted/85 transition-colors duration-200 hover:text-accent focus-visible:text-accent ${focusRingClass}`;
const footerLinkClass = `inline-flex min-h-6 items-center rounded-action text-[15px] leading-[1.7] text-on-dark-muted/90 transition-colors duration-200 hover:text-accent focus-visible:text-accent ${focusRingClass}`;
const heroButtonClass = `inline-flex min-h-12 min-w-36 items-center justify-center rounded-action border px-6 text-base leading-6 font-normal transition-[transform,background-color] duration-200 hover:-translate-y-px max-[640px]:w-full ${focusRingClass}`;
const skipLinkClass = `fixed top-3 left-3 z-50 -translate-y-24 rounded-action bg-white px-4 py-3 text-base font-semibold text-ink shadow-about transition-transform focus:translate-y-0 motion-reduce:transition-none ${focusRingClass}`;
const panelContainerClass = "mx-auto mt-panel-gap w-[calc(100%-4rem)] max-w-panel max-[960px]:w-[calc(100%-2rem)] max-[640px]:w-[calc(100%-1.5rem)]";
const aboutPanelClass = `${panelContainerClass} min-h-panel-min-height p-[clamp(1.5rem,3vw,3rem)] max-[960px]:p-6 max-[640px]:p-4`;
const corePanelClass = `${panelContainerClass} grid min-h-core-panel-min-height p-[clamp(1.25rem,2.3vw,2.25rem)] max-[960px]:min-h-panel-min-height max-[960px]:p-6 max-[640px]:p-4`;
const productImages = {
  "antibody-products": "/product-antibody.jpg",
  "elisa-kits": "/product-elisa.webp",
  "lab-instruments": "/product-lab-instrument.webp",
} satisfies Record<ProductCardId, string>;
const serviceImages = {
  "yeast-two-hybrid": "/service-yeast-two-hybrid.webp",
  "genome-sequencing": "/service-genome-sequencing.webp",
  "other-business-services": null,
} satisfies Record<ServiceCardId, string | null>;
const serviceIcons = {
  "yeast-two-hybrid": null,
  "genome-sequencing": null,
  "other-business-services": LuGraduationCap,
} satisfies Record<ServiceCardId, typeof LuGraduationCap | null>;

type CoreCardProps = Readonly<{
  actionHref?: string;
  actionLabel?: string;
  description: string;
  icon?: ReactNode;
  imageSrc?: string;
  title: string;
}>;

function CoreCard({ actionHref, actionLabel, description, icon, imageSrc, title }: CoreCardProps) {
  return (
    <article className="core-card relative flex min-h-0 flex-col overflow-hidden rounded-product-card border border-line-dark px-7 py-5.5 max-[960px]:min-h-78">
      <div className={`relative mt-2.5 size-[50px] shrink-0 overflow-hidden rounded-control border border-accent max-[960px]:mt-3 ${icon ? "grid place-items-center bg-accent text-[25px] text-white" : "bg-black"}`} aria-hidden="true">
        {imageSrc ? <Image className="object-cover" src={imageSrc} alt="" fill sizes="50px" /> : icon}
      </div>
      <h3 className="mt-5 mb-3 text-[22px] leading-[1.25] font-bold max-[960px]:mt-6 max-[960px]:mb-3.5 max-[960px]:text-[28px]">{title}</h3>
      <p className="mt-0 mb-3 max-w-[360px] text-[15px] leading-[1.65] text-on-dark-muted/90 max-[960px]:text-base max-[960px]:leading-[1.75]">{description}</p>
      {actionHref ? (
        <Link className={`card-action relative z-1 mt-auto grid min-h-8 w-full shrink-0 place-items-center rounded-action bg-accent text-[21px] leading-none font-extralight text-white transition-colors hover:bg-accent-hover ${focusRingClass}`} href={actionHref} aria-label={actionLabel}>+</Link>
      ) : (
        <span className="card-action relative z-1 mt-auto grid min-h-8 w-full shrink-0 place-items-center rounded-action bg-accent text-[21px] leading-none font-extralight text-white" aria-hidden="true">+</span>
      )}
    </article>
  );
}

export default async function Home({ params }: HomeProps) {
  const { lang } = await params;

  if (!isLocale(lang)) {
    notFound();
  }

  const language = lang;
  const t = contentByLocale[language];
  const brandFontClass = language === "ja" ? "font-brand-serif-jp" : "font-brand-serif-sc";

  return (
    <div className={`${language === "ja" ? "font-sans-jp" : "font-sans-sc"} bg-ui-canvas`}>
      <a className={skipLinkClass} href="#main-content">{t.skipToContent}</a>
      <header className="absolute top-0 left-0 z-10 flex h-header w-full items-center justify-between border-b border-accent/20 bg-ui-footer/96 px-header-gutter text-white max-[960px]:px-6 max-[799px]:h-header-mobile max-[799px]:items-start max-[799px]:px-5 max-[799px]:pt-3">
        <a className={`flex items-center gap-4 rounded-action ${focusRingClass}`} href="#top" aria-label={t.brand}>
          <span className="relative grid size-12 flex-[0_0_48px] place-items-center overflow-hidden max-[640px]:size-[46px] max-[640px]:flex-[0_0_46px]">
            <Image className="h-full w-auto object-contain" src="/Logo.png" width={530} height={539} alt="东方纯一 Logo" priority />
          </span>
          <span className="block"><strong className={`${brandFontClass} text-[clamp(20px,1.45vw,26px)] font-normal tracking-[.06em] whitespace-nowrap text-on-dark max-[960px]:text-xl max-[640px]:text-[19px]`}>{t.brand}</strong></span>
        </a>
        <div className="flex items-center gap-[clamp(20px,2vw,32px)] max-[960px]:gap-3.5 max-[640px]:static">
          <nav className="flex items-center gap-[clamp(26px,2.7vw,48px)] max-[960px]:gap-5 max-[799px]:absolute max-[799px]:top-16 max-[799px]:left-5 max-[799px]:w-[calc(100%-2.5rem)] max-[799px]:justify-between max-[799px]:gap-0 max-[799px]:overflow-visible max-[799px]:pb-3" aria-label={language === "ja" ? "メインナビゲーション" : "主要导航"}>
            {t.nav.map((item) => (
              <a
                aria-current={item.id === "home" ? "page" : undefined}
                className={`${navLinkClass} ${item.id === "home" ? "!text-accent" : ""}`}
                href={item.href}
                key={item.id}
              >
                {item.label}
              </a>
            ))}
          </nav>
          <nav className="flex items-center gap-1.5 text-xs whitespace-nowrap text-on-dark-muted/85 max-[960px]:text-[11px] max-[799px]:absolute max-[799px]:top-7 max-[799px]:right-5" aria-label="语言 / 言語">
            <Link aria-current={language === "zh" ? "page" : undefined} className={`${languageLinkClass} ${language === "zh" ? "!text-accent" : ""}`} href="/zh" hrefLang="zh-CN" lang="zh-CN">中文</Link>
            <span aria-hidden="true">/</span>
            <Link aria-current={language === "ja" ? "page" : undefined} className={`${languageLinkClass} ${language === "ja" ? "!text-accent" : ""}`} href="/ja" hrefLang="ja" lang="ja">日本語</Link>
          </nav>
        </div>
      </header>

      <main id="main-content" tabIndex={-1}>
        <section className={`relative grid min-h-hero grid-cols-1 items-center justify-items-center overflow-hidden bg-ui-hero bg-[url('/hero-background.png')] bg-cover bg-center bg-no-repeat px-page-gutter pt-[114px] pb-[72px] text-white max-[960px]:min-h-[432px] max-[960px]:px-7 max-[960px]:pt-24 max-[960px]:pb-[60px] max-[799px]:pt-28 max-[640px]:min-h-[456px] ${language === "ja" ? "max-[640px]:pb-2.5" : "max-[640px]:pb-10"}`} id="top" aria-labelledby="hero-title">
          <div className="relative z-2 mx-auto w-full max-w-[1120px] text-center max-[960px]:max-w-[780px]">
            <h1 className="m-0 text-hero-title max-[640px]:text-[36px]" id="hero-title">{t.hero.title}</h1>
            <p className="mx-auto mt-[38px] max-w-[1120px] text-[clamp(22px,2.1vw,30px)] leading-[1.6] text-on-dark-muted max-[960px]:max-w-[780px] max-[640px]:mt-[26px] max-[640px]:max-w-[320px] max-[640px]:text-lg max-[640px]:leading-[1.75]">{t.hero.description}</p>
            <div className="mt-12.5 flex justify-center gap-2.5 max-[640px]:mx-auto max-[640px]:mt-4.5 max-[640px]:w-54 max-[640px]:max-w-full max-[640px]:flex-col" aria-label={language === "ja" ? "ページ案内" : "页面快速入口"}>
              <a className={`${heroButtonClass} border-accent/90 bg-accent/90`} href="#products">{t.hero.productButton}</a>
              <a className={`${heroButtonClass} border-accent/80 bg-transparent text-accent`} href="#services">{t.hero.serviceButton}</a>
            </div>
          </div>
        </section>

        <section className={`relative grid grid-cols-2 items-stretch gap-[clamp(44px,5vw,80px)] bg-white shadow-about max-[960px]:grid-cols-1 ${aboutPanelClass}`} id="about" aria-labelledby="about-title">
          <div className="relative min-h-about-media overflow-hidden rounded-control border border-line bg-ui-subtle shadow-media max-[960px]:h-78 max-[640px]:min-h-60" aria-hidden="true">
            <Image className="object-cover object-center" src="/about-dna.webp" alt="" fill loading="eager" sizes="(max-width: 960px) 100vw, 50vw" />
          </div>
          <div className="flex min-w-0 flex-col justify-center">
            <p className="mb-2 text-[15px] leading-[17px] font-extrabold tracking-[.22em] text-accent">{t.about.label}</p>
            <h2 className="m-0 max-w-[680px] text-about-title text-balance max-[640px]:text-[32px]" id="about-title">{t.about.title}</h2>
            <p className="my-2 text-[17px] leading-[1.8] font-normal text-ink-muted">{t.about.body}</p>
            <ul className="mt-2.5 grid list-none gap-[9.5px] p-0">
              {t.about.offerings.map(({ brand, description, id, registered }) => (
                <li className="flex items-center gap-[13px] text-lg leading-[1.55] font-normal text-ink/80" key={id}>
                  <span className="grid size-[26px] flex-[0_0_26px] place-items-center rounded-round border-[5px] border-accent bg-white text-xs leading-none font-extrabold text-accent" aria-hidden="true">✓</span>
                  <span>{brand}{registered && <sup className="relative top-[-.2em] ml-px text-[.62em] leading-none">®</sup>}{brand && " "}{description}</span>
                </li>
              ))}
            </ul>
            <a className={`mt-3 inline-flex min-h-11 w-fit min-w-42 items-center justify-center gap-3.5 rounded-action bg-accent px-7 text-lg leading-none font-normal text-white transition-[transform,background-color] duration-200 hover:-translate-y-0.5 hover:bg-accent-hover ${focusRingClass}`} href="#products">
              <span>{t.about.more}</span>
              <span className="text-[25px] leading-none font-light" aria-hidden="true">→</span>
            </a>
          </div>
        </section>

        <section className={`bg-ui-section text-white ${corePanelClass}`} id="products" aria-labelledby="products-title">
          <div className="flex h-full flex-col max-[960px]:h-auto">
            <div className="mx-auto mb-7.5 max-w-[760px] text-center max-[960px]:mb-9 max-[640px]:text-left">
              <h2 className="m-0 text-about-title" id="products-title">{t.products.title}</h2>
            </div>
            <div className="grid flex-1 grid-cols-3 gap-5.5 max-[960px]:grid-cols-1">
              {t.products.items.map((item) => (
                <CoreCard
                  actionHref={item.id === "antibody-products" ? `/${language}/products/antibody-products` : undefined}
                  actionLabel={item.id === "antibody-products" ? item.title : undefined}
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
          <div className="flex h-full flex-col max-[960px]:h-auto">
            <div className="mx-auto mb-7.5 max-w-[760px] text-center max-[960px]:mb-9 max-[640px]:text-left">
              <h2 className="m-0 text-about-title" id="services-title">{t.services.title}</h2>
            </div>
            <div className="grid flex-1 grid-cols-3 gap-5.5 max-[960px]:grid-cols-1">
              {t.services.items.map((item) => {
                const ServiceIcon = serviceIcons[item.id];
                return <CoreCard description={item.description} icon={ServiceIcon ? <ServiceIcon /> : undefined} imageSrc={serviceImages[item.id] ?? undefined} key={item.id} title={item.title} />;
              })}
            </div>
          </div>
        </section>
      </main>

      <footer className={`${panelContainerClass} bg-ui-footer px-[clamp(2rem,4vw,4rem)] pt-13 pb-7 text-on-dark-muted max-[960px]:px-8 max-[640px]:px-6 max-[640px]:pt-10`} id="contact">
        <div className="grid grid-cols-[1.4fr_1fr_1fr_.8fr] gap-[clamp(44px,5vw,88px)] max-[960px]:grid-cols-2 max-[960px]:gap-x-12 max-[960px]:gap-y-11 max-[640px]:grid-cols-1 max-[640px]:gap-10">
          <section aria-labelledby="footer-company-title">
            <div className="flex items-center gap-[11.5px] text-white">
              <Image className="h-9 w-auto shrink-0 object-contain" src="/Logo.png" width={36} height={37} alt="" />
              <h2 className={`m-0 ${brandFontClass} text-base leading-[1.4] font-normal tracking-[.06em]`} id="footer-company-title">{t.brand}</h2>
            </div>
            <p className="mt-7 mb-0 text-[15px] leading-[1.85] text-on-dark-muted/90">
              <span className="block">{t.footer.tagline.primary}</span>
              <span className="block">{t.footer.tagline.secondary}</span>
            </p>
          </section>

          <nav aria-labelledby="footer-products-title">
            <h2 className="mt-0 mb-5 text-[15px] leading-[1.7] font-bold text-white" id="footer-products-title">{t.footer.productsTitle}</h2>
            <ul className="m-0 grid list-none gap-3 p-0">
              {t.footer.productLinks.map((item) => (
                <li key={item.id}>
                  {item.id === "antibody-products"
                    ? <Link className={footerLinkClass} href={`/${language}/products/antibody-products`}>{item.label}</Link>
                    : <a className={footerLinkClass} href={item.href}>{item.label}</a>}
                </li>
              ))}
            </ul>
          </nav>

          <nav aria-labelledby="footer-services-title">
            <h2 className="mt-0 mb-5 text-[15px] leading-[1.7] font-bold text-white" id="footer-services-title">{t.footer.servicesTitle}</h2>
            <ul className="m-0 grid list-none gap-3 p-0">
              {t.footer.serviceLinks.map((item) => <li key={item.id}><a className={footerLinkClass} href={item.href}>{item.label}</a></li>)}
            </ul>
          </nav>

          <nav aria-labelledby="footer-about-title">
            <h2 className="mt-0 mb-5 text-[15px] leading-[1.7] font-bold text-white" id="footer-about-title">{t.footer.aboutTitle}</h2>
            <ul className="m-0 grid list-none gap-3 p-0">
              {t.footer.aboutLinks.map((item) => <li key={item.id}><a className={footerLinkClass} href={item.href}>{item.label}</a></li>)}
            </ul>
          </nav>
        </div>

        <div className="mt-11 border-t border-line-dark/70 pt-7 text-center text-xs leading-[1.7] text-on-dark-muted/85">
          <p className="m-0">{t.footer.copyright}</p>
        </div>
      </footer>
    </div>
  );
}
