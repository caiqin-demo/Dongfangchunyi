import type { HomeContent } from "@/content/types";

export const jaContent = {
  brand: "東方純一株式会社",
  skipToContent: "メインコンテンツへ移動",
  nav: [
    { id: "home", label: "ホーム", href: "#top" },
    { id: "about", label: "会社案内", href: "#about" },
    { id: "products", label: "製品情報", href: "#products" },
    { id: "services", label: "サービス", href: "#services" },
    { id: "contact", label: "お問い合わせ", href: "#contact" },
  ],
  hero: {
    title: "日本市場開拓を支援する最初のエンジン",
    description: "ライフサイエンス分野の市場開拓に注力し、専門的な企業経営コンサルティングサービスを提供します",
    productButton: "製品を見る",
    serviceButton: "サービスを見る",
  },
  notFound: {
    title: "ページが見つかりません",
    description: "お探しのページは存在しないか、移動した可能性があります。",
    homeLink: "ホームへ戻る",
    productsLink: "主要製品を見る",
  },
  about: {
    label: "ABOUT US",
    title: "東方純一株式会社が上海睿星生物技術有限公司の日本正規販売代理店に",
    body: "上海睿星生物技術有限公司は、日本のGNI Group Ltd. (www.gnipharma.com)の子会社です。タグ抗体および対応する担体結合製品、ELISAキットを製造・販売しています。また、酵母ツーハイブリッド技術サービスも提供しています。",
    offerings: [
      { id: "gni", brand: "GNI", description: "抗体および対応する担体製品", registered: true },
      { id: "hannah", brand: "HannaH", description: "ELISAキット", registered: true },
      { id: "instruments", brand: "", description: "ライフサイエンス実験機器", registered: false },
      { id: "yeast-two-hybrid", brand: "Yeast Two Hybrid", description: "技術サービス", registered: false },
    ],
    more: "詳しく見る",
  },
  products: {
    title: "主要製品",
    items: [
      { id: "antibody-products", title: "抗体および対応する担体製品", description: "注目製品：Anti-Flagモノクローナル抗体 / Anti-Flag Affinity Gel / Anti-Flag Magnetic Beads" },
      { id: "elisa-kits", title: "ELISAキット", description: "約300種類の異なる遺伝子を検出するELISAキットを取り揃えています" },
      { id: "lab-instruments", title: "実験室用小型機器", description: "ライフサイエンス分野で一般的に使用される各種実験機器およびピペットを販売しています" },
    ],
  },
  services: {
    title: "主要サービス",
    items: [
      { id: "yeast-two-hybrid", title: "Yeast Two Hybrid", description: "酵母転写因子GAL4を基盤とするツーハイブリッドシステム。20年のサービス実績" },
      { id: "genome-sequencing", title: "ゲノムシーケンシング", description: "動植物および微生物分野における第二・第三世代ゲノムおよびトランスクリプトームシーケンシング関連サービスに注力" },
      { id: "other-business-services", title: "その他の企業向けサービス", description: "HRの有効性向上（コーチングおよびリーダーシップ研修を含む）" },
    ],
  },
  footer: {
    tagline: {
      primary: "ライフサイエンス分野の市場開拓に注力し",
      secondary: "専門的な企業経営コンサルティングサービスを提供します",
    },
    productsTitle: "関連製品",
    productLinks: [
      { id: "antibody-products", label: "抗体および対応する担体製品", href: "#products" },
      { id: "elisa-kits", label: "ELISAキット", href: "#products" },
      { id: "lab-instruments", label: "実験室用小型機器", href: "#products" },
    ],
    servicesTitle: "関連サービス",
    serviceLinks: [
      { id: "yeast-two-hybrid", label: "Yeast Two Hybrid", href: "#services" },
      { id: "genome-sequencing", label: "ゲノムシーケンシング", href: "#services" },
      { id: "other-business-services", label: "その他の企業向けサービス", href: "#services" },
    ],
    aboutTitle: "会社案内",
    aboutLinks: [
      { id: "company-profile", label: "会社紹介", href: "#about" },
      { id: "contact", label: "お問い合わせ", href: "#contact" },
    ],
    copyright: "© 2025 東方純一 All rights reserved.",
  },
} as const satisfies HomeContent;
