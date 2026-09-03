import { createAntibodyProducts } from "@/content/antibody-products/source-products";
import type { AntibodyProductsContent } from "@/content/antibody-products/types";
import { zhAntibodyProductsContent } from "@/content/antibody-products/zh";

export const jaAntibodyProductsContent = {
  metadata: {
    title: "抗体および対応担体製品 | 東方純一",
    description: "GNI Anti-Flag モノクローナル抗体、HRP結合抗体、アフィニティゲル、磁気ビーズ、全タグ抗体シリーズ。",
  },
  eyebrow: "GNI® 抗体シリーズ",
  title: "抗体および対応担体製品",
  intro: "タグ抗体、HRP結合抗体、Affinity Gel、Magnetic Beadsの製品情報です。技術仕様は提供資料に基づきます。在庫と出荷予定はお問い合わせ時にご確認ください。",
  products: createAntibodyProducts({
    mab: {
      title: "Anti-Flag マウスモノクローナル抗体",
      experimentImageAlt: "Anti-Flagマウスモノクローナル抗体の実験バンド画像",
    },
    hrp: {
      title: "Anti-Flag-HRP マウスモノクローナル抗体",
      experimentImageAlt: "Anti-Flag-HRPマウスモノクローナル抗体の実験バンド画像",
    },
    "affinity-gel": {
      title: "Anti-Flag アフィニティゲル",
      experimentImageAlt: "Anti-Flagアフィニティゲルの実験画像",
    },
    "magnetic-beads": {
      title: "Anti-Flag 磁気ビーズ",
      experimentImageAlt: "Anti-Flag磁気ビーズの酸溶出実験画像",
    },
  }),
  skuLabels: {
    title: "包装規格・カタログ番号",
    packSize: "規格",
    catalogNumber: "カタログ番号",
    availability: "在庫状況",
    availabilityNote: "在庫あり",
    shippingOrigin: "出荷地",
    incompleteSource: "元画像では規格とカタログ番号が途中で切れているため、製品担当者の確認後に追記が必要です。",
  },
  matrix: {
    title: "全抗体シリーズ",
    originNote: "抗体はマウスで作製されています",
    tagType: "タグタイプ",
    availabilityHeader: "Available",
    productLabels: { mab: "MAB", hrp: "HRP", "affinity-gel": "Affinity Gel", "magnetic-beads": "Magnetic Beads" },
    available: "提供可",
    unavailable: "資料に記載なし",
    rows: zhAntibodyProductsContent.matrix.rows,
  },
  contact: {
    title: "製品情報を問い合わせる",
    description: "規格、最新在庫、出荷予定、バルク包装については、提供された窓口メールへお問い合わせください。",
    emailLabel: "製品お問い合わせメール",
    email: "market@easternpurity.com",
  },
  publications: {
    title: "GNI抗体シリーズ製品を使用して発表された論文",
    items: zhAntibodyProductsContent.publications.items,
  },
} as const satisfies AntibodyProductsContent;
