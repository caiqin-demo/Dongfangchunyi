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
      label: "关于东方纯一",
      title: "立足上海，连接全球生命科学创新",
      lead: "上海睿星生物技术有限公司是日本 GNI Group Ltd. 旗下子公司。",
      body: "我们专注于生命科学研究产品的生产与销售，以专业能力响应科研与产业客户的实际需求，持续为 B2B 合作伙伴提供可靠的产品和技术服务。",
      art: "科学，连接重要之事。",
      facts: [["GNI", "集团旗下企业"], ["B2B", "专业客户服务"], ["上海", "本地团队支持"]],
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
      label: "東方純一について",
      title: "上海を拠点に、世界のライフサイエンス革新へ",
      lead: "上海睿星生物技術有限公司は、日本の GNI Group Ltd. 傘下企業です。",
      body: "ライフサイエンス研究製品の製造・販売に注力し、研究機関および産業分野のお客様のニーズに応え、法人パートナーへ信頼できる製品と技術サービスを提供します。",
      art: "科学が、大切なものをつなぐ。",
      facts: [["GNI", "グループ傘下企業"], ["法人", "専門的な顧客対応"], ["上海", "現地チームの支援"]],
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

export default async function Home({ searchParams }: HomeProps) {
  const params = await searchParams;
  const language = params.lang === "ja" ? "ja" : "zh";
  const t = content[language];

  return (
    <main lang={language === "ja" ? "ja" : "zh-CN"}>
      <header className="site-header">
        <a className="brand" href="#top" aria-label={t.brand}>
          <span className="brand-logo">
            <Image className="brand-mark" src="/eastern-purity-logo.jpg" width={100} height={100} alt="东方纯一 Logo" priority />
          </span>
          <span className="brand-name"><strong>{t.brand}</strong></span>
        </a>
        <div className="header-actions">
          <nav className="main-nav" aria-label={language === "ja" ? "メインナビゲーション" : "主要导航"}>
            <a className="active" href="#top">{t.nav[0]}</a>
            <a href="#about">{t.nav[1]}</a>
            <a href="#products">{t.nav[2]}</a>
            <a href="#services">{t.nav[3]}</a>
            <a href="#contact">{t.nav[4]}</a>
          </nav>
          <nav className="language-switcher" aria-label="语言 / 言語">
            <Link className={language === "zh" ? "active" : ""} href="/?lang=zh">中文</Link>
            <span aria-hidden="true">/</span>
            <Link className={language === "ja" ? "active" : ""} href="/?lang=ja">日本語</Link>
          </nav>
        </div>
      </header>

      <section className="hero" id="top" aria-labelledby="hero-title">
        <div className="hero-content">
          <h1 id="hero-title">{t.hero.title}</h1>
          <p className="hero-copy">{t.hero.description}</p>
          <div className="hero-links" aria-label={language === "ja" ? "ページ案内" : "页面快速入口"}>
            <a className="button primary" href="#products">{t.hero.productButton}</a>
            <a className="button secondary" href="#services">{t.hero.serviceButton}</a>
          </div>
        </div>
      </section>

      <section className="about section-light" id="about" aria-labelledby="about-title">
        <div className="section-marker" aria-hidden="true"><span>01</span><i /><small>ABOUT US</small></div>
        <div className="about-art" aria-hidden="true">
          <div className="lab-window">
            <span className="lab-line line-one" /><span className="lab-line line-two" />
            <span className="lab-cell cell-one" /><span className="lab-cell cell-two" /><span className="lab-cell cell-three" />
            <b>纯</b>
          </div>
          <p>{t.about.art}</p>
        </div>
        <div className="about-copy">
          <p className="eyebrow">{t.about.label}</p>
          <h2 id="about-title">{t.about.title}</h2>
          <p className="about-lead">{t.about.lead}</p>
          <p>{t.about.body}</p>
          <div className="about-facts">
            {t.about.facts.map(([value, label]) => <div key={value}><strong>{value}</strong><span>{label}</span></div>)}
          </div>
        </div>
      </section>

      <section className="products section-dark" id="products" aria-labelledby="products-title">
        <div className="section-heading centered">
          <h2 id="products-title">{t.products.title}</h2>
          <p>{t.products.intro}</p>
        </div>
        <div className="product-grid">
          {t.products.items.map(([number, title, label, description, symbol]) => (
            <article className="product-card" key={number}>
              <div className="product-topline"><span>{number}</span><i /></div>
              <div className="product-symbol" aria-hidden="true">{symbol}</div>
              <p className="product-kicker">{label}</p>
              <h3>{title}</h3><p>{description}</p>
              <span className="card-corner" aria-hidden="true">+</span>
            </article>
          ))}
        </div>
      </section>

      <section className="services section-light" id="services" aria-labelledby="services-title">
        <div className="services-copy">
          <p className="eyebrow">{t.services.label}</p>
          <h2 id="services-title">{t.services.title}</h2>
          <p className="service-intro">{t.services.intro}</p>
          <div className="service-steps">
            {t.services.steps.map(([number, title, description]) => (
              <div className="service-step" key={number}><span>{number}</span><div><h3>{title}</h3><p>{description}</p></div></div>
            ))}
          </div>
        </div>
        <div className="service-art" aria-hidden="true">
          <div className="protein protein-one"><span /></div><div className="protein protein-two"><span /></div><div className="protein protein-three"><span /></div>
          <div className="protein-link link-a" /><div className="protein-link link-b" />
          <p><strong>Y2H</strong><span>{t.services.art}</span></p>
        </div>
      </section>

      <footer className="site-footer" id="contact">
        <div className="footer-brand">
          <Image className="footer-mark" src="/eastern-purity-logo.jpg" width={76} height={76} alt="" />
          <div><strong>{t.brand}</strong><span>{t.footerTagline}</span></div>
        </div>
        <p>{t.footerCompany}</p>
        <nav aria-label={language === "ja" ? "フッターナビゲーション" : "页脚导航"}>
          <a href="#about">{t.nav[1]}</a><a href="#products">{t.nav[2]}</a><a href="#services">{t.nav[3]}</a>
        </nav>
        <div className="footer-bottom"><span>© {new Date().getFullYear()} 东方纯一</span><span>{t.footerTagline}</span></div>
      </footer>
    </main>
  );
}
