import type { SimpleProductPageContent } from "@/content/simple-product-pages/types";

export const jaElisaKitsContent = {
  metadata: {
    title: "ELISAキット | 東方純一",
    description: "約300種類の異なる遺伝子を検出するELISAキットを取り揃えています。",
  },
  eyebrow: "HannaH® ELISAキット",
  title: "ELISAキット",
  intro: "約300種類の異なる遺伝子を検出するELISAキットを取り揃えています。",
  backToProducts: "主要製品へ戻る",
  overview: {
    heading: "製品概要",
    description: "上海睿星生物技術有限公司は、約300種類の異なる遺伝子を検出するHannaH® ELISAキットを製造・販売しています。",
  },
  contact: {
    title: "製品情報を問い合わせる",
    description: "製品の詳細については、提供された窓口メールへお問い合わせください。",
    emailLabel: "製品お問い合わせメール",
    email: "market@easternpurity.com",
  },
} as const satisfies SimpleProductPageContent;
