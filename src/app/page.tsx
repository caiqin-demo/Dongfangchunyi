import Image from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";
import { LuFlaskConical, LuGraduationCap, LuUsersRound } from "react-icons/lu";

const content = {
  zh: {
    brand: "东方纯一株式会社",
    nav: ["首页", "关于我们", "关于产品", "关于服务", "联系我们"],
    hero: {
      title: "协助企业开拓日本市场的初始引擎",
      description: "专注在生命科学领域的市场开拓并提供专业的企业管理咨询服务",
      productButton: "了解产品",
      serviceButton: "了解服务",
    },
    about: {
      label: "ABOUT US",
      title: "东方纯一株式会社成为上海睿星生物技术有限公司日本授权经销商",
      body: "上海睿星生物技术有限公司是日本GNI Group Ltd. (www.gnipharma.com)旗下子公司。生产和销售标签抗体及相应填料偶联产品和ELISA试剂盒。同时也提供酵母双杂交技术服务。",
      offerings: [["GNI", "抗体及相应填料产品", true], ["HannaH", "ELISA试剂盒", true], ["", "生命科学实验仪器", false], ["Yeast Two Hybrid", "技术服务", false]],
      more: "了解更多",
    },
    products: {
      title: "核心产品",
      items: [
        ["抗体及相应填料产品", "明星产品：Anti-Flag单抗/Anti-Flag Affinity Gel/Anti-Flag Magnetic Beads"],
        ["ELISA试剂盒", "涵盖检测近300种不同种类基因的ELISA试剂盒"],
        ["实验室小仪器", "销售多种生命科学常用实验仪器和移液器"],
      ],
    },
    services: {
      title: "核心服务",
      items: [
        ["Yeast Two Hybrid", "基于酵母转录基因子GAL4的双杂交系统，20年服务经验"],
        ["企业咨询", "专注于企业人力资源系统的搭建"],
        ["个人教练", "教练及领导力课程"],
      ],
    },
    footer: {
      tagline: ["专注在生命科学领域的市场开拓", "并提供专业的企业管理咨询服务"],
      productsTitle: "相关产品",
      productLinks: ["抗体及相应填料产品", "ELISA 试剂盒", "实验室小仪器"],
      servicesTitle: "相关服务",
      serviceLinks: ["Yeast Two Hybrid", "企业咨询", "个人教练"],
      aboutTitle: "关于我们",
      aboutLinks: ["公司介绍", "联系我们"],
      copyright: "© 2025 东方纯一 All rights reserved.",
    },
  },
  ja: {
    brand: "東方純一株式会社",
    nav: ["ホーム", "会社案内", "製品情報", "サービス", "お問い合わせ"],
    hero: {
      title: "日本市場開拓を支援する最初のエンジン",
      description: "ライフサイエンス分野の市場開拓に注力し、専門的な企業経営コンサルティングサービスを提供します",
      productButton: "製品を見る",
      serviceButton: "サービスを見る",
    },
    about: {
      label: "ABOUT US",
      title: "東方純一株式会社が上海睿星生物技術有限公司の日本正規販売代理店に",
      body: "上海睿星生物技術有限公司は、日本のGNI Group Ltd. (www.gnipharma.com)の子会社です。タグ抗体および対応する担体結合製品、ELISAキットを製造・販売しています。また、酵母ツーハイブリッド技術サービスも提供しています。",
      offerings: [["GNI", "抗体および対応する担体製品", true], ["HannaH", "ELISAキット", true], ["", "ライフサイエンス実験機器", false], ["Yeast Two Hybrid", "技術サービス", false]],
      more: "詳しく見る",
    },
    products: {
      title: "主要製品",
      items: [
        ["抗体および対応する担体製品", "注目製品：Anti-Flagモノクローナル抗体 / Anti-Flag Affinity Gel / Anti-Flag Magnetic Beads"],
        ["ELISAキット", "約300種類の異なる遺伝子を検出するELISAキットを取り揃えています"],
        ["実験室用小型機器", "ライフサイエンス分野で一般的に使用される各種実験機器およびピペットを販売しています"],
      ],
    },
    services: {
      title: "主要サービス",
      items: [
        ["Yeast Two Hybrid", "酵母転写因子GAL4を基盤とするツーハイブリッドシステム。20年のサービス実績"],
        ["企業コンサルティング", "企業の人事システム構築に注力"],
        ["パーソナルコーチング", "コーチングおよびリーダーシップ研修"],
      ],
    },
    footer: {
      tagline: ["ライフサイエンス分野の市場開拓に注力し", "専門的な企業経営コンサルティングサービスを提供します"],
      productsTitle: "関連製品",
      productLinks: ["抗体および対応する担体製品", "ELISAキット", "実験室用小型機器"],
      servicesTitle: "関連サービス",
      serviceLinks: ["Yeast Two Hybrid", "企業コンサルティング", "パーソナルコーチング"],
      aboutTitle: "会社案内",
      aboutLinks: ["会社紹介", "お問い合わせ"],
      copyright: "© 2025 東方純一 All rights reserved.",
    },
  },
} as const;

type HomeProps = Readonly<{
  searchParams: Promise<{ lang?: string | string[] }>;
}>;

const navLinkClass = "whitespace-nowrap text-[clamp(15px,1.15vw,18px)] text-on-dark/85 transition-colors duration-200 hover:text-accent focus-visible:text-accent max-[640px]:text-xs";
const languageLinkClass = "text-on-dark-muted/85 transition-colors duration-200 hover:text-accent focus-visible:text-accent";
const footerLinkClass = "text-[15px] leading-[1.7] text-on-dark-muted/90 transition-colors duration-200 hover:text-accent focus-visible:text-accent";
const heroButtonClass = "button inline-flex min-h-12 min-w-36 items-center justify-center rounded-[6.667px] border px-6 text-base leading-6 font-normal transition-[transform,background-color] duration-200 hover:-translate-y-[1.333px] max-[640px]:w-full";
const aboutPanelClass = "mx-auto mt-[2mm] min-h-[489.6px] w-[min(calc(100%-64px),1500px)] p-[clamp(25.92px,2.88vw,46.08px)] max-[960px]:w-[calc(100%-32px)] max-[960px]:p-[24.48px] max-[640px]:w-[calc(100%-24px)] max-[640px]:p-[15.84px]";
const corePanelClass = "mx-auto mt-[2mm] h-[406.2px] w-[min(calc(100%-64px),1500px)] p-[clamp(20.736px,2.304vw,36.864px)] max-[960px]:h-auto max-[960px]:min-h-[489.6px] max-[960px]:w-[calc(100%-32px)] max-[960px]:p-[24.48px] max-[640px]:w-[calc(100%-24px)] max-[640px]:p-[15.84px]";
const serviceIcons = [LuFlaskConical, LuUsersRound, LuGraduationCap] as const;

type CoreCardProps = Readonly<{
  description: string;
  icon?: ReactNode;
  isJapanese: boolean;
  title: string;
}>;

function CoreCard({ description, icon, isJapanese, title }: CoreCardProps) {
  return (
    <article className="core-card relative flex min-h-0 flex-col overflow-hidden rounded-product-card border border-line-dark px-[30px] py-[21.76px] max-[960px]:min-h-[312px]">
      <div className={`core-card-icon relative mt-2.5 size-[50px] shrink-0 overflow-hidden rounded-control border border-accent max-[960px]:mt-3 ${icon ? "grid place-items-center bg-accent text-[25px] text-white" : "bg-black"}`} aria-hidden="true">
        {icon ?? <Image className="object-contain" src="/product-antibody.jpg" alt="" fill sizes="50px" />}
      </div>
      <h3 className={`mt-[19.2px] mb-[11.52px] text-[22.4px] font-bold max-[960px]:mt-6 max-[960px]:mb-[14.4px] max-[960px]:text-[28px] ${isJapanese ? "leading-[1.2]" : "leading-[1.25]"}`}>{title}</h3>
      <p className="mt-0 mb-3 max-w-[360px] text-[15px] leading-[1.65] text-on-dark-muted/90 max-[960px]:text-base max-[960px]:leading-[1.75]">{description}</p>
      <span className="card-action relative z-1 mt-auto grid min-h-8 w-full shrink-0 place-items-center rounded-action bg-accent text-[21px] leading-none font-extralight text-white" aria-hidden="true">+</span>
    </article>
  );
}

export default async function Home({ searchParams }: HomeProps) {
  const params = await searchParams;
  const language = params.lang === "ja" ? "ja" : "zh";
  const t = content[language];
  const brandFontClass = language === "ja" ? "font-brand-serif-jp" : "font-brand-serif-sc";

  return (
    <main
      className={`${language === "ja" ? "font-sans-jp" : "font-sans-sc"} bg-ui-canvas`}
      lang={language === "ja" ? "ja" : "zh-CN"}
    >
      <header className="site-header absolute top-0 left-0 z-10 flex h-header w-full items-center justify-between border-b border-accent/20 bg-ui-footer/96 px-header-gutter text-white max-[960px]:px-6 max-[640px]:h-header-mobile max-[640px]:items-start max-[640px]:px-5 max-[640px]:pt-3">
        <a className="brand flex items-center gap-4" href="#top" aria-label={t.brand}>
          <span className="brand-logo relative grid size-12 flex-[0_0_48px] place-items-center overflow-hidden max-[640px]:size-[46px] max-[640px]:flex-[0_0_46px]">
            <Image className="brand-mark h-full w-auto object-contain" src="/Logo.png" width={530} height={539} alt="东方纯一 Logo" priority />
          </span>
          <span className="brand-name block"><strong className={`${brandFontClass} text-[clamp(20px,1.45vw,26px)] font-normal tracking-[.06em] whitespace-nowrap text-on-dark max-[960px]:text-xl max-[640px]:text-[19px]`}>{t.brand}</strong></span>
        </a>
        <div className="header-actions flex items-center gap-[clamp(20px,2vw,32px)] max-[960px]:gap-3.5 max-[640px]:static">
          <nav className="main-nav flex items-center gap-[clamp(26px,2.7vw,48px)] max-[960px]:gap-5 max-[640px]:absolute max-[640px]:top-[70px] max-[640px]:left-5 max-[640px]:w-[calc(100%-40px)] max-[640px]:justify-between max-[640px]:gap-0 max-[640px]:overflow-visible max-[640px]:pb-3" aria-label={language === "ja" ? "メインナビゲーション" : "主要导航"}>
            <a className={`${navLinkClass} active !text-accent`} href="#top">{t.nav[0]}</a>
            <a className={navLinkClass} href="#about">{t.nav[1]}</a>
            <a className={navLinkClass} href="#products">{t.nav[2]}</a>
            <a className={navLinkClass} href="#services">{t.nav[3]}</a>
            <a className={navLinkClass} href="#contact">{t.nav[4]}</a>
          </nav>
          <nav className="language-switcher flex items-center gap-1.5 text-xs whitespace-nowrap text-on-dark-muted/85 max-[960px]:text-[11px] max-[640px]:absolute max-[640px]:top-[27px] max-[640px]:right-5" aria-label="语言 / 言語">
            <Link className={`${languageLinkClass} ${language === "zh" ? "active !text-accent" : ""}`} href="/?lang=zh">中文</Link>
            <span aria-hidden="true">/</span>
            <Link className={`${languageLinkClass} ${language === "ja" ? "active !text-accent" : ""}`} href="/?lang=ja">日本語</Link>
          </nav>
        </div>
      </header>

      <section className={`hero relative grid min-h-hero grid-cols-1 items-center justify-items-center overflow-hidden bg-ui-hero bg-[url('/hero-background.png')] bg-cover bg-center bg-no-repeat px-page-gutter pt-[114px] pb-[72px] text-white max-[960px]:min-h-[432px] max-[960px]:px-7 max-[960px]:pt-24 max-[960px]:pb-[60px] max-[640px]:min-h-[456px] ${language === "ja" ? "max-[640px]:pb-[10px]" : "max-[640px]:pb-[38.7px]"}`} id="top" aria-labelledby="hero-title">
        <div className="hero-content relative z-2 mx-auto w-full max-w-[1120px] text-center max-[960px]:max-w-[780px]">
          <h1 className={`m-0 text-hero-title max-[640px]:text-[36px] ${language === "ja" ? "min-[641px]:text-[clamp(44px,4.2vw,56px)]" : ""}`} id="hero-title">{t.hero.title}</h1>
          <p className={`hero-copy mx-auto mt-[38px] max-w-[1120px] leading-[1.6] text-on-dark-muted max-[960px]:max-w-[780px] max-[640px]:mt-[26px] max-[640px]:max-w-[320px] max-[640px]:text-lg max-[640px]:leading-[1.75] ${language === "ja" ? "text-[clamp(20px,1.7vw,24px)]" : "text-[clamp(22px,2.1vw,30px)]"}`}>{t.hero.description}</p>
          <div className="hero-links mt-[50px] flex justify-center gap-[9.333px] max-[640px]:mx-auto max-[640px]:mt-[18px] max-[640px]:w-[min(100%,213.333px)] max-[640px]:flex-col" aria-label={language === "ja" ? "ページ案内" : "页面快速入口"}>
            <a className={`${heroButtonClass} primary border-accent/90 bg-accent/90`} href="#products">{t.hero.productButton}</a>
            <a className={`${heroButtonClass} secondary border-accent/80 bg-transparent text-accent`} href="#services">{t.hero.serviceButton}</a>
          </div>
        </div>
      </section>

      <section className={`about relative grid grid-cols-2 items-stretch gap-[clamp(44px,5vw,80px)] bg-white shadow-about max-[960px]:grid-cols-1 ${aboutPanelClass}`} id="about" aria-labelledby="about-title">
        <div className="about-art relative min-h-about-media overflow-hidden rounded-control border border-line bg-ui-subtle shadow-media max-[960px]:h-[309.6px] max-[640px]:min-h-[237.6px]" aria-hidden="true">
          <Image className="about-image p-3 object-contain object-center" src="/about-authorization.jpg" alt="" fill sizes="(max-width: 960px) 100vw, 50vw" />
        </div>
        <div className="about-copy flex min-w-0 flex-col justify-center">
          <p className="eyebrow mb-2 text-[15px] leading-[17px] font-extrabold tracking-[.22em] text-accent">{t.about.label}</p>
          <h2 className={`m-0 max-w-[680px] text-about-title text-balance max-[640px]:text-[32px] ${language === "ja" ? "leading-[1.05]" : ""}`} id="about-title">{t.about.title}</h2>
          <p className={`my-2 text-[17px] font-normal text-ink-muted ${language === "ja" ? "leading-[1.6]" : "leading-[1.8]"}`}>{t.about.body}</p>
          <ul className="about-offerings mt-2.5 grid list-none gap-[9.5px] p-0">
            {t.about.offerings.map(([brand, description, registered]) => (
              <li className={`flex items-center gap-[13px] text-lg font-normal text-ink/80 ${language === "ja" ? "leading-[1.4]" : "leading-[1.55]"}`} key={`${brand}-${description}`}>
                <span className="offering-check grid size-[26px] flex-[0_0_26px] place-items-center rounded-round border-[5px] border-accent bg-white text-xs leading-none font-extrabold text-accent" aria-hidden="true">✓</span>
                <span>{brand}{registered && <sup className="relative top-[-.2em] ml-px text-[.62em] leading-none">®</sup>}{brand && " "}{description}</span>
              </li>
            ))}
          </ul>
          <a className="about-more mt-3 inline-flex min-h-[43.2px] w-fit min-w-[168px] items-center justify-center gap-3.5 rounded-action bg-accent px-7 text-lg leading-none font-normal text-white transition-[transform,background-color] duration-200 hover:-translate-y-0.5 hover:bg-accent-hover" href="#products">
            <span>{t.about.more}</span>
            <span className="about-more-arrow text-[25px] leading-none font-light" aria-hidden="true">→</span>
          </a>
        </div>
      </section>

      <section className={`products section-dark bg-ui-section text-white ${corePanelClass}`} id="products" aria-labelledby="products-title">
        <div className="flex h-full flex-col max-[960px]:h-auto">
          <div className="section-heading centered mx-auto mb-[29.44px] max-w-[760px] text-center max-[960px]:mb-[36.8px] max-[640px]:text-left">
            <h2 className="m-0 text-about-title" id="products-title">{t.products.title}</h2>
          </div>
          <div className="product-grid grid flex-1 grid-cols-3 gap-[22px] max-[960px]:grid-cols-1">
            {t.products.items.map(([title, description]) => (
              <CoreCard description={description} isJapanese={language === "ja"} key={title} title={title} />
            ))}
          </div>
        </div>
      </section>

      <section className={`services section-dark bg-ui-section text-white ${corePanelClass}`} id="services" aria-labelledby="services-title">
        <div className="flex h-full flex-col max-[960px]:h-auto">
          <div className="section-heading centered mx-auto mb-[29.44px] max-w-[760px] text-center max-[960px]:mb-[36.8px] max-[640px]:text-left">
            <h2 className="m-0 text-about-title" id="services-title">{t.services.title}</h2>
          </div>
          <div className="service-grid grid flex-1 grid-cols-3 gap-[22px] max-[960px]:grid-cols-1">
            {t.services.items.map(([title, description], index) => {
              const ServiceIcon = serviceIcons[index];
              return <CoreCard description={description} icon={<ServiceIcon />} isJapanese={language === "ja"} key={title} title={title} />;
            })}
          </div>
        </div>
      </section>

      <footer className="site-footer mx-auto mt-[2mm] w-[min(calc(100%-64px),1500px)] bg-ui-footer px-[clamp(32px,4vw,64px)] pt-[52px] pb-7 text-on-dark-muted max-[960px]:w-[calc(100%-32px)] max-[960px]:px-8 max-[640px]:w-[calc(100%-24px)] max-[640px]:px-6 max-[640px]:pt-10" id="contact">
        <div className="grid grid-cols-[1.4fr_1fr_1fr_.8fr] gap-[clamp(44px,5vw,88px)] max-[960px]:grid-cols-2 max-[960px]:gap-x-12 max-[960px]:gap-y-11 max-[640px]:grid-cols-1 max-[640px]:gap-10">
          <section aria-labelledby="footer-company-title">
            <div className="flex items-center gap-[11.5px] text-white">
              <Image className="h-9 w-auto shrink-0 object-contain" src="/Logo.png" width={36} height={37} alt="" />
              <h2 className={`m-0 ${brandFontClass} text-base leading-[1.4] font-normal tracking-[.06em]`} id="footer-company-title">{t.brand}</h2>
            </div>
            <p className="mt-7 mb-0 text-[15px] leading-[1.85] text-on-dark-muted/90">
              <span className="block">{t.footer.tagline[0]}</span>
              <span className="block">{t.footer.tagline[1]}</span>
            </p>
          </section>

          <nav aria-labelledby="footer-products-title">
            <h2 className="mt-0 mb-5 text-[15px] leading-[1.7] font-bold text-white" id="footer-products-title">{t.footer.productsTitle}</h2>
            <ul className="m-0 grid list-none gap-3 p-0">
              {t.footer.productLinks.map((label) => <li key={label}><a className={footerLinkClass} href="#products">{label}</a></li>)}
            </ul>
          </nav>

          <nav aria-labelledby="footer-services-title">
            <h2 className="mt-0 mb-5 text-[15px] leading-[1.7] font-bold text-white" id="footer-services-title">{t.footer.servicesTitle}</h2>
            <ul className="m-0 grid list-none gap-3 p-0">
              {t.footer.serviceLinks.map((label) => <li key={label}><a className={footerLinkClass} href="#services">{label}</a></li>)}
            </ul>
          </nav>

          <nav aria-labelledby="footer-about-title">
            <h2 className="mt-0 mb-5 text-[15px] leading-[1.7] font-bold text-white" id="footer-about-title">{t.footer.aboutTitle}</h2>
            <ul className="m-0 grid list-none gap-3 p-0">
              <li><a className={footerLinkClass} href="#about">{t.footer.aboutLinks[0]}</a></li>
              <li><a className={footerLinkClass} href="#contact">{t.footer.aboutLinks[1]}</a></li>
            </ul>
          </nav>
        </div>

        <div className="mt-11 border-t border-line-dark/70 pt-7 text-center text-xs leading-[1.7] text-on-dark-muted/85">
          <p className="m-0">{t.footer.copyright}</p>
        </div>
      </footer>
    </main>
  );
}
