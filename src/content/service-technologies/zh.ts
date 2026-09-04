import type { ServiceTechnologiesContent } from "@/content/service-technologies/types";

export const zhServiceTechnologiesContent = {
  metadata: {
    title: "服务相关的技术 | 东方纯一",
    description: "服务相关的技术",
  },
  title: "服务相关的技术",
  intro: "基因组测序技术应用及其它分子互作机制和表现调控",
  optionGroupLabel: "测序选项",
  options: [
    { id: "plant-and-cell", label: "植物及细胞" },
    { id: "animal-and-cell", label: "动物及细胞" },
    { id: "microorganism", label: "微生物" },
    { id: "multidimensional-analysis-platform", label: "多维度解析平台" },
  ],
  bodyCard: {
    categoryLabelMode: "source",
    placeholderLabel: "暂定",
    displayByItemId: {
      "single-cell-sequencing": { kind: "pending", label: "暂定" },
      "genome-de-novo-sequencing": { kind: "pending", label: "暂定" },
      "absolute-quantification-microbial-diversity-sequencing": {
        kind: "ready",
        assetId: "absolute-quantification-microbial-diversity-sequencing-zh",
        alt: "绝对定量微生物多样性测序技术路线图",
      },
      "dap-seq-technical-service": { kind: "pending", label: "暂定" },
      "genome-resequencing": {
        kind: "ready",
        assetId: "genome-resequencing-zh",
        alt: "基因组重测序技术路线图",
      },
      "whole-transcriptome-sequencing": { kind: "pending", label: "暂定" },
      "marine-microbiology-research": { kind: "pending", label: "暂定" },
      "epigenetics-service": { kind: "pending", label: "暂定" },
      "mrna-in-situ-hybridization": { kind: "pending", label: "暂定" },
      "yeast-two-hybrid": { kind: "pending", label: "暂定" },
      "spr-molecular-interaction-research": { kind: "pending", label: "暂定" },
      "proteomics-and-metabolomics": { kind: "pending", label: "暂定" },
      "multiomics-combined-analysis": { kind: "pending", label: "暂定" },
    },
  },
  contact: {
    label: "咨询请联系：",
    emails: ["market@easternpurity.com", "info@shanghaigenomics.com"],
  },
} as const satisfies ServiceTechnologiesContent;
