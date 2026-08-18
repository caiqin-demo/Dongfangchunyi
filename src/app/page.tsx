import Image from "next/image";
import Link from "next/link";

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
      intro: "围绕蛋白研究与实验检测，提供专业、清晰的产品组合。",
      items: [
        ["01", "标签抗体", "抗体产品", "面向生命科学研究场景的标签抗体产品，为蛋白表达、检测与分析提供稳定支持。", "抗"],
        ["02", "填料偶联产品", "纯化产品", "提供与标签抗体相匹配的填料偶联产品，服务于目标蛋白的分离与纯化流程。", "填"],
        ["03", "ELISA 试剂盒", "检测试剂", "面向实验室检测需求的 ELISA 试剂盒，为研究工作提供清晰、便捷的实验工具。", "酶"],
      ],
    },
    services: {
      label: "技术服务",
      title: "酵母双杂交技术服务",
      intro: "Yeast Two-Hybrid 技术服务，面向蛋白互作研究需求，由专业团队协助推进实验项目。",
      steps: [
        ["01", "需求沟通", "围绕研究目标与实验需求进行前期沟通。"],
        ["02", "技术实施", "由专业团队推进酵母双杂交实验流程。"],
        ["03", "结果交付", "整理项目结果，为后续研究提供参考。"],
      ],
      art: "酵母双杂交",
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
      intro: "タンパク質研究と実験検出を支える、専門的で明確な製品群を提供します。",
      items: [
        ["01", "タグ抗体", "抗体製品", "タンパク質の発現・検出・解析など、ライフサイエンス研究を支えるタグ抗体製品です。", "抗"],
        ["02", "担体結合製品", "精製製品", "タグ抗体に対応する担体結合製品を提供し、標的タンパク質の分離・精製工程を支援します。", "担"],
        ["03", "ELISA キット", "検出試薬", "研究現場での検出ニーズに応える、明確で使いやすい ELISA キットです。", "酵"],
      ],
    },
    services: {
      label: "技術サービス",
      title: "酵母ツーハイブリッド技術サービス",
      intro: "Yeast Two-Hybrid 技術により、タンパク質間相互作用の研究プロジェクトを専門チームが支援します。",
      steps: [
        ["01", "要件確認", "研究目的と実験要件を事前に確認します。"],
        ["02", "技術実施", "専門チームが酵母ツーハイブリッド実験を進行します。"],
        ["03", "結果報告", "結果を整理し、その後の研究に役立つ情報を提供します。"],
      ],
      art: "酵母ツーハイブリッド",
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
const heroButtonClass = "button inline-flex min-h-control min-w-[184px] items-center justify-center gap-[30px] rounded-control border px-7 text-lg font-normal transition-[transform,background-color] duration-200 hover:-translate-y-0.5 max-[640px]:min-h-control-mobile max-[640px]:w-full";

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

      <section className="hero relative grid min-h-hero grid-cols-1 items-center justify-items-center overflow-hidden bg-[#0b203f] bg-[url('/hero-background.png')] bg-cover bg-center bg-no-repeat px-page-gutter pt-[190px] pb-[120px] text-white max-[960px]:min-h-[720px] max-[960px]:px-7 max-[960px]:pt-40 max-[960px]:pb-[100px] max-[640px]:min-h-[760px] max-[640px]:pt-[190px]" id="top" aria-labelledby="hero-title">
        <div className="hero-content relative z-2 mx-auto w-full max-w-[1120px] text-center max-[960px]:max-w-[780px]">
          <h1 className="m-0 text-hero-title max-[640px]:text-[36px]" id="hero-title">{t.hero.title}</h1>
          <p className={`hero-copy mx-auto mt-[38px] max-w-none leading-[1.6] whitespace-nowrap text-[#b7c5d6] max-[640px]:mt-[26px] max-[640px]:max-w-[320px] max-[640px]:text-lg max-[640px]:leading-[1.75] max-[640px]:whitespace-normal ${language === "ja" ? "text-[clamp(20px,1.7vw,24px)]" : "text-[clamp(22px,2.1vw,30px)]"}`}>{t.hero.description}</p>
          <div className="hero-links mt-[50px] flex justify-center gap-3.5 max-[640px]:w-[min(100%,320px)] max-[640px]:flex-col" aria-label={language === "ja" ? "ページ案内" : "页面快速入口"}>
            <a className={`${heroButtonClass} primary border-[rgba(49,157,238,.92)] bg-[rgba(39,145,229,.92)]`} href="#products">{t.hero.productButton}</a>
            <a className={`${heroButtonClass} secondary border-[rgba(43,151,230,.82)] bg-transparent text-[rgba(66,158,230,.95)]`} href="#services">{t.hero.serviceButton}</a>
          </div>
        </div>
      </section>

      <section className="about relative mx-auto mt-[2mm] grid min-h-[680px] w-[min(calc(100%-64px),1500px)] grid-cols-2 items-stretch gap-[clamp(44px,5vw,80px)] bg-white p-[clamp(36px,4vw,64px)] shadow-about max-[960px]:w-[calc(100%-32px)] max-[960px]:grid-cols-1 max-[960px]:p-[34px] max-[640px]:w-[calc(100%-24px)] max-[640px]:p-[22px]" id="about" aria-labelledby="about-title">
        <div className="about-art relative min-h-about-media overflow-hidden rounded-control border border-[#e3e7eb] bg-[#f7f8f9] shadow-media max-[960px]:h-[430px] max-[640px]:min-h-[330px]" aria-hidden="true">
          <Image className="about-image p-3 object-contain object-center" src="/about-authorization.jpg" alt="" fill sizes="(max-width: 960px) 100vw, 50vw" />
        </div>
        <div className="about-copy flex min-w-0 flex-col justify-center">
          <p className="eyebrow mb-[18px] text-[15px] leading-[17px] font-extrabold tracking-[.22em] text-brand-blue-about">{t.about.label}</p>
          <h2 className="m-0 max-w-[680px] text-about-title text-balance max-[640px]:text-[32px]" id="about-title">{t.about.title}</h2>
          <p className="my-[17px] text-[17px] leading-[1.8] font-normal text-brand-muted">{t.about.body}</p>
          <ul className="about-offerings mt-6 grid list-none gap-[13px] p-0">
            {t.about.offerings.map(([brand, description, registered]) => (
              <li className="flex items-center gap-[13px] text-lg leading-[1.55] font-normal text-[#37404d]" key={`${brand}-${description}`}>
                <span className="offering-check grid size-[26px] flex-[0_0_26px] place-items-center rounded-round border-[5px] border-brand-blue-about bg-white text-xs leading-none font-extrabold text-brand-blue-about" aria-hidden="true">✓</span>
                <span>{brand}{registered && <sup className="relative top-[-.2em] ml-px text-[.62em] leading-none">®</sup>}{brand && " "}{description}</span>
              </li>
            ))}
          </ul>
          <a className="about-more mt-7 inline-flex min-h-[54px] w-fit min-w-[168px] items-center justify-center gap-3.5 rounded-action bg-brand-blue-about px-7 text-lg leading-none font-normal text-white transition-[transform,background-color] duration-200 hover:-translate-y-0.5 hover:bg-[#3f7ed8]" href="#products">
            <span>{t.about.more}</span>
            <span className="about-more-arrow text-[25px] leading-none font-light" aria-hidden="true">→</span>
          </a>
        </div>
      </section>

      <section className="products section-dark bg-brand-navy-950 px-page-gutter py-section-y text-white max-[960px]:px-7 max-[960px]:py-[92px]" id="products" aria-labelledby="products-title">
        <div className="section-heading centered mx-auto mb-[60px] max-w-[760px] text-center max-[640px]:text-left">
          <h2 className="m-0 text-[clamp(42px,5vw,66px)] leading-[1.394] font-bold" id="products-title">{t.products.title}</h2>
          <p className="mt-4 mb-0 text-base leading-[22px] text-[#8292a8]">{t.products.intro}</p>
        </div>
        <div className="product-grid grid grid-cols-3 gap-[22px] max-[960px]:grid-cols-1">
          {t.products.items.map(([number, title, label, description, symbol]) => (
            <article className="product-card relative min-h-[470px] overflow-hidden border border-[#1c385d] p-[34px] max-[960px]:min-h-[390px] max-[640px]:p-[26px]" key={number}>
              <div className="product-topline flex items-center gap-[18px] text-[11px] text-[#657995]"><span>{number}</span><i className="h-px flex-1 bg-[#223a59]" /></div>
              <div className="product-symbol mt-11 grid size-[76px] place-items-center border border-[#4f9be8] bg-[linear-gradient(145deg,#347ed0,#164d88)] font-symbol text-[28px] text-[#86c3ff]" aria-hidden="true">{symbol}</div>
              <p className="product-kicker mt-[30px] mb-2 text-[13px] tracking-[.08em] text-[#518ed3]">{label}</p>
              <h3 className="mt-0 mb-[18px] text-[28px] leading-[normal] font-bold">{title}</h3><p className="m-0 max-w-[360px] text-[15px] leading-[1.8] text-[#8f9db0]">{description}</p>
              <span className="card-corner absolute right-0 bottom-0 grid size-[60px] place-items-center bg-brand-blue text-[26px] font-extralight text-white" aria-hidden="true">+</span>
            </article>
          ))}
        </div>
      </section>

      <section className="services section-light grid min-h-[720px] grid-cols-[1fr_.92fr] items-center gap-[clamp(70px,8vw,140px)] bg-brand-paper px-page-gutter py-section-y max-[960px]:grid-cols-1 max-[960px]:px-7 max-[960px]:py-[92px]" id="services" aria-labelledby="services-title">
        <div className="services-copy">
          <p className="eyebrow mb-6 text-xs font-extrabold tracking-[.22em] text-brand-blue">{t.services.label}</p>
          <h2 className="m-0 max-w-[660px] text-[clamp(38px,4vw,62px)] leading-[1.15] font-bold tracking-[-.035em] max-[640px]:text-[38px]" id="services-title">{t.services.title}</h2>
          <p className="service-intro mt-7 mb-[38px] max-w-[650px] text-base leading-[32.3px] text-brand-muted max-[960px]:text-[17px]">{t.services.intro}</p>
          <div className="service-steps border-t border-brand-line">
            {t.services.steps.map(([number, title, description]) => (
              <div className="service-step grid grid-cols-[54px_1fr] items-start border-b border-brand-line py-[22px]" key={number}><span className="text-xs font-extrabold text-brand-blue">{number}</span><div><h3 className="mt-0 mb-[7px] text-lg leading-[25px] font-bold">{title}</h3><p className={`m-0 text-sm leading-[1.7] text-[#74808f] ${language === "ja" ? "max-[640px]:max-w-[250px]" : ""}`}>{description}</p></div></div>
            ))}
          </div>
        </div>
        <div className="service-art relative min-h-[480px] overflow-hidden shadow-service-offset max-[640px]:min-h-[390px] max-[640px]:shadow-service-offset-mobile" aria-hidden="true">
          <div className="protein protein-one"><span /></div><div className="protein protein-two"><span /></div><div className="protein protein-three"><span /></div>
          <div className="protein-link link-a" /><div className="protein-link link-b" />
          <p className="absolute right-8 bottom-8 z-2 grid m-0 text-right text-white"><strong className="text-[64px] tracking-[-.06em]">Y2H</strong><span className="text-[10px] tracking-[.2em] text-[#6c90b8]">{t.services.art}</span></p>
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
