import type { ElisaKitsContent } from "@/content/elisa-kits/types";

export const jaElisaKitsContent = {
  metadata: {
    title: "ELISAキット | 東方純一",
    description: "約300種類の異なる遺伝子を検出するELISAキットを取り揃えています。",
  },
  eyebrow: "HannaH®キットシリーズ",
  title: "ELISA検出キット",
  intro: "インターロイキン、INF、TNF、VEGFなど、多くの注目標的をカバーしています。以下の技術仕様は提供された製品資料に基づいて整理しています。最新の在庫状況と出荷予定については、お問い合わせください。",
  backToProducts: "主要製品へ戻る",
  overview: {
    heading: "製品概要",
    description: "上海睿星生物技術有限公司は、約300種類の異なる遺伝子を検出するHannaH® ELISAキットを製造・販売しています。",
  },
  product: {
    title: "ELISA検出キット",
    subtitle: "ELISA Kit Series",
    details: [
      { id: "product-name", label: "PRODUCT NAME", value: "ELISA Kit" },
      { id: "species-reactivity", label: "SPECIES REACTIVITY", value: "Human/Mouse/Rat/Monkey/Porcine/Chicken/..." },
      { id: "description", label: "DESCRIPTION", value: "For serum, plasma and cell culture supernatant" },
      { id: "sensitivity", label: "SENSITIVITY", value: "Regular sensitivity & High sensitivity available" },
      { id: "packing", label: "PACKING", value: "KIT OF 96 WELLS (12 STRIPS X 8 WELLS)" },
    ],
    skus: [
      { id: "48-tests", packSize: "48 Tests", availability: "在庫あり", shippingOrigin: "中国本土のみ／上海から発送" },
      { id: "96-tests", packSize: "96 Tests", availability: "在庫あり", shippingOrigin: "上海／大阪から発送" },
    ],
  },
  skuLabels: {
    title: "包装規格・供給情報",
    packSize: "規格",
    availability: "在庫状況",
    shippingOrigin: "供給範囲／出荷地",
  },
  contact: {
    title: "製品情報を問い合わせる",
    description: "製品の詳細については、提供された窓口メールへお問い合わせください。",
    emailLabel: "製品お問い合わせメール",
    email: "market@easternpurity.com",
  },
} as const satisfies ElisaKitsContent;
