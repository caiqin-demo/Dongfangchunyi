import { elisaCatalogRows } from "@/content/elisa-kits/source-catalog";
import { elisaReferenceProducts } from "@/content/elisa-kits/source-reference-products";
import type { ElisaKitsContent } from "@/content/elisa-kits/types";

export const jaElisaKitsContent = {
  metadata: {
    title: "ELISAキット | 東方純一",
    description: "約300種類の異なる遺伝子を検出するELISAキットを取り揃えています。",
  },
  eyebrow: "HannaH®キットシリーズ",
  title: "ELISA検出キット",
  intro: "インターロイキン、INF、TNF、VEGFなど、多くの注目標的をカバーしています。以下の技術仕様は提供された製品資料に基づいて整理しています。最新の在庫状況と出荷予定については、お問い合わせください。",
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
      { id: "48-tests", packSize: "48 Tests", availability: "在庫あり", shippingOrigin: "上海" },
      { id: "96-tests", packSize: "96 Tests", availability: "在庫あり", shippingOrigin: "上海／大阪" },
    ],
  },
  skuLabels: {
    title: "包装規格・カタログ番号",
    packSize: "規格",
    catalogNumber: "カタログ番号",
    availability: "在庫状況",
    shippingOrigin: "出荷地",
  },
  reference: {
    title: "ELISAキット製品資料",
    regionLabel: "5種類のELISAキット製品資料、横方向にスクロールして閲覧できます",
    labels: {
      series: "ELISA Kit Series",
      userManual: "User Manual",
      sensitivity: "Sensitivity",
      range: "Range",
      storage: "Storage",
      standard: "標準品",
      otherReagents: "その他試薬",
    },
    productCopy: {
      "tnf-beta-human": { kitTitle: "TNF-β（ヒト）ELISA Kit", manualLabel: "操作マニュアル", chartAlt: "TNF-β（ヒト）ELISAキットの標準曲線" },
      "ifn-gamma-human": { kitTitle: "IFN-γ（ヒト）ELISA Kit", manualLabel: "操作マニュアル", chartAlt: "IFN-γ（ヒト）ELISAキットの標準曲線" },
      "il-1-beta-mouse": { kitTitle: "IL-1β（マウス）ELISA Kit", manualLabel: "操作マニュアル", chartAlt: "IL-1β（マウス）ELISAキットの標準曲線" },
      "il-10-mouse": { kitTitle: "IL-10（マウス）ELISA Kit", manualLabel: "操作マニュアル", chartAlt: "IL-10（マウス）ELISAキットの標準曲線" },
      "il-17a-monkey": { kitTitle: "IL-17A（サル）ELISA Kit", manualLabel: "操作マニュアル", chartAlt: "IL-17A（サル）ELISAキットの標準曲線" },
    },
    products: elisaReferenceProducts,
  },
  catalog: {
    title: "ELISAキット供給カタログ",
    regionLabel: "ELISAキットのサイトカインと生物種別の供給マトリクス。横方向にスクロールして閲覧できます",
    rowHeaderLabel: "サイトカイン",
    columnLabels: {
      human: "Human",
      mouse: "Mouse",
      rat: "Rat",
      bovine: "Bovine",
      canine: "Canine",
      chicken: "Chicken",
      goat: "Goat",
      monkey: "Monkey",
      porcine: "Porcine",
      "non-human": "Non-Human",
    },
    available: "提供可能",
    unavailable: "資料に記載なし",
    note: "",
    rows: elisaCatalogRows,
  },
  contact: {
    title: "製品情報を問い合わせる",
    description: "製品の詳細については、提供された窓口メールへお問い合わせください。",
    emailLabel: "製品お問い合わせメール",
    email: "market@easternpurity.com",
  },
} as const satisfies ElisaKitsContent;
