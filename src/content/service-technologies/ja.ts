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
      "single-cell-sequencing": { kind: "pending", label: "準備中" },
      "genome-de-novo-sequencing": { kind: "pending", label: "準備中" },
      "absolute-quantification-microbial-diversity-sequencing": { kind: "pending", label: "準備中" },
      "dap-seq-technical-service": { kind: "pending", label: "準備中" },
      "genome-resequencing": { kind: "pending", label: "準備中" },
      "whole-transcriptome-sequencing": { kind: "pending", label: "準備中" },
      "marine-microbiology-research": { kind: "pending", label: "準備中" },
      "epigenetics-service": { kind: "pending", label: "準備中" },
      "mrna-in-situ-hybridization": { kind: "pending", label: "準備中" },
      "yeast-two-hybrid": { kind: "pending", label: "準備中" },
      "spr-molecular-interaction-research": { kind: "pending", label: "準備中" },
      "proteomics-and-metabolomics": { kind: "pending", label: "準備中" },
      "multiomics-combined-analysis": { kind: "pending", label: "準備中" },
    },
  },
  contact: {
    label: "お問い合わせ",
    emails: ["market@easternpurity.com", "info@shanghaigenomics.com"],
  },
} as const satisfies ServiceTechnologiesContent;
