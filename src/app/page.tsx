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
    footerCompany: "上海睿星生物技术有限公司",
    footerTagline: "生命科学产品与技术服务",
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
    footerCompany: "上海睿星生物技術有限公司",
    footerTagline: "ライフサイエンス製品・技術サービス",
  },
} as const;

type HomeProps = Readonly<{
  searchParams: Promise<{ lang?: string | string[] }>;
}>;

const navLinkClass = "whitespace-nowrap text-[clamp(15px,1.15vw,18px)] text-[#d5dbe5] transition-colors duration-200 hover:text-[#4d91e4] focus-visible:text-[#4d91e4] max-[640px]:text-xs";
const languageLinkClass = "text-[#8f9caf] transition-colors duration-200 hover:text-[#4d91e4] focus-visible:text-[#4d91e4]";
const heroButtonClass = "button inline-flex min-h-control min-w-[122.667px] items-center justify-center gap-5 rounded-[6.667px] border px-[18.667px] text-sm leading-[20.667px] font-normal transition-[transform,background-color] duration-200 hover:-translate-y-[1.333px] max-[640px]:min-h-control-mobile max-[640px]:w-full";
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
    <article className="core-card relative flex min-h-0 flex-col overflow-hidden rounded-product-card border border-[#1c385d] px-[30px] py-[21.76px] max-[960px]:min-h-[312px]">
      <div className={`core-card-icon relative mt-2.5 size-[50px] shrink-0 overflow-hidden rounded-control border border-[#4f9be8] max-[960px]:mt-3 ${icon ? "grid place-items-center bg-product-action text-[25px] text-white" : "bg-black"}`} aria-hidden="true">
        {icon ?? <Image className="object-contain" src="/product-antibody.jpg" alt="" fill sizes="50px" />}
      </div>
      <h3 className={`mt-[19.2px] mb-[11.52px] text-[22.4px] font-bold max-[960px]:mt-6 max-[960px]:mb-[14.4px] max-[960px]:text-[28px] ${isJapanese ? "leading-[1.2]" : "leading-[1.25]"}`}>{title}</h3>
      <p className="mt-0 mb-3 max-w-[360px] text-[15px] leading-[1.65] text-[#8f9db0] max-[960px]:text-base max-[960px]:leading-[1.75]">{description}</p>
      <span className="card-action relative z-1 mt-auto grid min-h-8 w-full shrink-0 place-items-center rounded-action bg-product-action text-[21px] leading-none font-extralight text-white" aria-hidden="true">+</span>
    </article>
  );
}

export default async function Home({ searchParams }: HomeProps) {
  const params = await searchParams;
  const language = params.lang === "ja" ? "ja" : "zh";
  const t = content[language];

  return (
    <main
      className={`${language === "ja" ? "font-sans-jp" : "font-sans-sc"} bg-brand-canvas`}
      lang={language === "ja" ? "ja" : "zh-CN"}
    >
      <header className="site-header absolute top-0 left-0 z-10 flex h-header w-full items-center justify-between border-b border-[rgba(80,117,166,.24)] bg-[rgba(6,17,35,.96)] px-header-gutter text-white max-[960px]:px-6 max-[640px]:h-header-mobile max-[640px]:items-start max-[640px]:px-5 max-[640px]:pt-3">
        <a className="brand flex items-center gap-4" href="#top" aria-label={t.brand}>
          <span className="brand-logo relative block size-12 flex-[0_0_48px] overflow-hidden bg-white max-[640px]:size-[46px] max-[640px]:flex-[0_0_46px]">
            <Image className="brand-mark absolute top-1/2 left-1/2 size-[88px] max-w-none -translate-x-1/2 -translate-y-1/2 object-cover max-[640px]:size-[84px]" src="/eastern-purity-logo.jpg" width={100} height={100} alt="东方纯一 Logo" priority />
          </span>
          <span className="brand-name block"><strong className="font-brand-serif text-[clamp(20px,1.45vw,26px)] font-normal tracking-[.06em] whitespace-nowrap text-[#f4f6fa] max-[960px]:text-xl max-[640px]:text-[19px]">{t.brand}</strong></span>
        </a>
        <div className="header-actions flex items-center gap-[clamp(20px,2vw,32px)] max-[960px]:gap-3.5 max-[640px]:static">
          <nav className="main-nav flex items-center gap-[clamp(26px,2.7vw,48px)] max-[960px]:gap-5 max-[640px]:absolute max-[640px]:top-[70px] max-[640px]:left-5 max-[640px]:w-[calc(100%-40px)] max-[640px]:justify-between max-[640px]:gap-0 max-[640px]:overflow-visible max-[640px]:pb-3" aria-label={language === "ja" ? "メインナビゲーション" : "主要导航"}>
            <a className={`${navLinkClass} active !text-[#4d91e4]`} href="#top">{t.nav[0]}</a>
            <a className={navLinkClass} href="#about">{t.nav[1]}</a>
            <a className={navLinkClass} href="#products">{t.nav[2]}</a>
            <a className={navLinkClass} href="#services">{t.nav[3]}</a>
            <a className={navLinkClass} href="#contact">{t.nav[4]}</a>
          </nav>
          <nav className="language-switcher flex items-center gap-1.5 text-xs whitespace-nowrap text-[#72839b] max-[960px]:text-[11px] max-[640px]:absolute max-[640px]:top-[27px] max-[640px]:right-5" aria-label="语言 / 言語">
            <Link className={`${languageLinkClass} ${language === "zh" ? "active !text-[#4d91e4]" : ""}`} href="/?lang=zh">中文</Link>
            <span aria-hidden="true">/</span>
            <Link className={`${languageLinkClass} ${language === "ja" ? "active !text-[#4d91e4]" : ""}`} href="/?lang=ja">日本語</Link>
          </nav>
        </div>
      </header>

      <section className={`hero relative grid min-h-hero grid-cols-1 items-center justify-items-center overflow-hidden bg-[#0b203f] bg-[url('/hero-background.png')] bg-cover bg-center bg-no-repeat px-page-gutter pt-[114px] pb-[72px] text-white max-[960px]:min-h-[432px] max-[960px]:px-7 max-[960px]:pt-24 max-[960px]:pb-[60px] max-[640px]:min-h-[456px] ${language === "ja" ? "max-[640px]:pb-[10px]" : "max-[640px]:pb-[38.7px]"}`} id="top" aria-labelledby="hero-title">
        <div className="hero-content relative z-2 mx-auto w-full max-w-[1120px] text-center max-[960px]:max-w-[780px]">
          <h1 className={`m-0 text-hero-title max-[640px]:text-[36px] ${language === "ja" ? "min-[641px]:text-[clamp(44px,4.2vw,56px)]" : ""}`} id="hero-title">{t.hero.title}</h1>
          <p className={`hero-copy mx-auto mt-[38px] max-w-none leading-[1.6] whitespace-nowrap text-[#b7c5d6] max-[640px]:mt-[26px] max-[640px]:max-w-[320px] max-[640px]:text-lg max-[640px]:leading-[1.75] max-[640px]:whitespace-normal ${language === "ja" ? "text-[clamp(20px,1.7vw,24px)]" : "text-[clamp(22px,2.1vw,30px)]"}`}>{t.hero.description}</p>
          <div className="hero-links mt-[50px] flex justify-center gap-[9.333px] max-[640px]:mx-auto max-[640px]:mt-[18px] max-[640px]:w-[min(100%,213.333px)] max-[640px]:flex-col" aria-label={language === "ja" ? "ページ案内" : "页面快速入口"}>
            <a className={`${heroButtonClass} primary border-[rgba(49,157,238,.92)] bg-[rgba(39,145,229,.92)]`} href="#products">{t.hero.productButton}</a>
            <a className={`${heroButtonClass} secondary border-[rgba(43,151,230,.82)] bg-transparent text-[rgba(66,158,230,.95)]`} href="#services">{t.hero.serviceButton}</a>
          </div>
        </div>
      </section>

      <section className={`about relative grid grid-cols-2 items-stretch gap-[clamp(44px,5vw,80px)] bg-white shadow-about max-[960px]:grid-cols-1 ${aboutPanelClass}`} id="about" aria-labelledby="about-title">
        <div className="about-art relative min-h-about-media overflow-hidden rounded-control border border-[#e3e7eb] bg-[#f7f8f9] shadow-media max-[960px]:h-[309.6px] max-[640px]:min-h-[237.6px]" aria-hidden="true">
          <Image className="about-image p-3 object-contain object-center" src="/about-authorization.jpg" alt="" fill sizes="(max-width: 960px) 100vw, 50vw" />
        </div>
        <div className="about-copy flex min-w-0 flex-col justify-center">
          <p className="eyebrow mb-2 text-[15px] leading-[17px] font-extrabold tracking-[.22em] text-brand-blue-about">{t.about.label}</p>
          <h2 className={`m-0 max-w-[680px] text-about-title text-balance max-[640px]:text-[32px] ${language === "ja" ? "leading-[1.05]" : ""}`} id="about-title">{t.about.title}</h2>
          <p className={`my-2 text-[17px] font-normal text-brand-muted ${language === "ja" ? "leading-[1.6]" : "leading-[1.8]"}`}>{t.about.body}</p>
          <ul className="about-offerings mt-2.5 grid list-none gap-[9.5px] p-0">
            {t.about.offerings.map(([brand, description, registered]) => (
              <li className={`flex items-center gap-[13px] text-lg font-normal text-[#37404d] ${language === "ja" ? "leading-[1.4]" : "leading-[1.55]"}`} key={`${brand}-${description}`}>
                <span className="offering-check grid size-[26px] flex-[0_0_26px] place-items-center rounded-round border-[5px] border-brand-blue-about bg-white text-xs leading-none font-extrabold text-brand-blue-about" aria-hidden="true">✓</span>
                <span>{brand}{registered && <sup className="relative top-[-.2em] ml-px text-[.62em] leading-none">®</sup>}{brand && " "}{description}</span>
              </li>
            ))}
          </ul>
          <a className="about-more mt-3 inline-flex min-h-[43.2px] w-fit min-w-[168px] items-center justify-center gap-3.5 rounded-action bg-brand-blue-about px-7 text-lg leading-none font-normal text-white transition-[transform,background-color] duration-200 hover:-translate-y-0.5 hover:bg-[#3f7ed8]" href="#products">
            <span>{t.about.more}</span>
            <span className="about-more-arrow text-[25px] leading-none font-light" aria-hidden="true">→</span>
          </a>
        </div>
      </section>

      <section className={`products section-dark bg-brand-products text-white ${corePanelClass}`} id="products" aria-labelledby="products-title">
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

      <section className={`services section-dark bg-brand-products text-white ${corePanelClass}`} id="services" aria-labelledby="services-title">
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

      <footer className="site-footer bg-[#061021] px-page-gutter pt-16 pb-[26px] text-[#a5b2c2]" id="contact">
        <div className="footer-brand flex items-center gap-[18px] text-white">
          <Image className="footer-mark rounded-round object-cover shadow-[0_0_0_1px_rgba(255,255,255,.18)]" src="/eastern-purity-logo.jpg" width={76} height={76} alt="" />
          <div className="grid gap-[7px]"><strong className="text-[23px] leading-[32px] tracking-[.1em]">{t.brand}</strong><span className="text-[10px] leading-[normal] tracking-[.22em] text-[#73849a]">{t.footerTagline}</span></div>
        </div>
        <p className="mt-7 mb-[34px] text-sm leading-[normal] text-[#73849a]">{t.footerCompany}</p>
        <nav className="flex gap-[42px] border-t border-[#15253c] py-[26px] leading-[22px] text-[#d2d9e3] max-[640px]:flex-wrap max-[640px]:gap-x-[30px] max-[640px]:gap-y-5" aria-label={language === "ja" ? "フッターナビゲーション" : "页脚导航"}>
          <a href="#about">{t.nav[1]}</a><a href="#products">{t.nav[2]}</a><a href="#services">{t.nav[3]}</a>
        </nav>
        <div className="footer-bottom flex justify-between border-t border-[#15253c] pt-[22px] text-xs leading-[normal] text-[#53637a] max-[640px]:flex-col max-[640px]:gap-[9px]"><span>© {new Date().getFullYear()} 东方纯一</span><span>{t.footerTagline}</span></div>
      </footer>
    </main>
  );
}
