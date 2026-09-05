import type { ServiceTechnologiesContent } from "@/content/service-technologies/types";

export const jaServiceTechnologiesContent = {
  metadata: {
    title: "サービス関連技術 | 東方純一",
    description: "ゲノムシーケンシング技術の応用およびその他の分子間相互作用機構と発現制御",
  },
  title: "サービス関連技術",
  intro: "ゲノムシーケンシング技術の応用およびその他の分子間相互作用機構と発現制御",
  optionGroupLabel: "シーケンシングの選択肢",
  options: [
    { id: "plant-and-cell", label: "植物・細胞" },
    { id: "animal-and-cell", label: "動物・細胞" },
    { id: "microorganism", label: "微生物" },
    { id: "multidimensional-analysis-platform", label: "多次元解析プラットフォーム" },
  ],
  bodyCard: {
    categoryLabelMode: "source",
    placeholderLabel: "準備中",
    displayByItemId: {
      "single-cell-sequencing": {
        kind: "ready",
        assetId: "single-cell-sequencing-ja",
        alt: "シングルセルシーケンシング技術のフロー図",
      },
      "genome-de-novo-sequencing": {
        kind: "ready",
        assetId: "genome-de-novo-sequencing-ja",
        alt: "de novoゲノムシーケンシング技術のフロー図",
      },
      "absolute-quantification-microbial-diversity-sequencing": {
        kind: "ready",
        assetId: "absolute-quantification-microbial-diversity-sequencing-ja",
        alt: "微生物多様性の絶対定量シーケンシング技術のフロー図",
      },
      "dap-seq-technical-service": {
        kind: "ready",
        assetId: "dap-seq-technical-service-ja",
        alt: "DAP-seq技術サービスのフロー図",
      },
      "genome-resequencing": {
        kind: "ready",
        assetId: "genome-resequencing-ja",
        alt: "ゲノムリシーケンシング技術のフロー図",
      },
      "whole-transcriptome-sequencing": {
        kind: "ready",
        assetId: "whole-transcriptome-sequencing-ja",
        alt: "全トランスクリプトームシーケンシング技術のフロー図",
      },
      "marine-microbiology-research": {
        kind: "ready",
        assetId: "marine-microbiology-research-ja",
        alt: "海洋微生物研究技術のフロー図",
      },
      "epigenetics-service": {
        kind: "ready",
        assetId: "multidimensional-analysis-platform-ja",
        alt: "エピジェネティクスサービスとin situハイブリダイゼーションの技術図",
      },
      "mrna-in-situ-hybridization": {
        kind: "ready",
        assetId: "multidimensional-analysis-platform-ja",
        alt: "エピジェネティクスサービスとin situハイブリダイゼーションの技術図",
      },
      "yeast-two-hybrid": {
        kind: "ready",
        assetId: "multidimensional-analysis-platform-interactions-ja",
        alt: "酵母ツーハイブリッドとSPR分子間相互作用解析技術の図",
      },
      "spr-molecular-interaction-research": {
        kind: "ready",
        assetId: "multidimensional-analysis-platform-interactions-ja",
        alt: "酵母ツーハイブリッドとSPR分子間相互作用解析技術の図",
      },
      "proteomics-and-metabolomics": {
        kind: "ready",
        assetId: "multidimensional-analysis-platform-multiomics-ja",
        alt: "プロテオミクス・メタボロミクスとマルチオミクス統合解析の図",
      },
      "multiomics-combined-analysis": {
        kind: "ready",
        assetId: "multidimensional-analysis-platform-multiomics-ja",
        alt: "プロテオミクス・メタボロミクスとマルチオミクス統合解析の図",
      },
    },
  },
  contact: {
    label: "お問い合わせ",
    emails: ["market@easternpurity.com", "info@shanghaigenomics.com"],
  },
} as const satisfies ServiceTechnologiesContent;
