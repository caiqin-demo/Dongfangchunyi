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
      "single-cell-sequencing": {
        kind: "ready",
        assetId: "single-cell-sequencing-zh",
        alt: "单细胞测序技术路线图",
      },
      "genome-de-novo-sequencing": {
        kind: "ready",
        assetId: "genome-de-novo-sequencing-zh",
        alt: "基因组de novo测序技术路线图",
      },
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
      "whole-transcriptome-sequencing": {
        kind: "ready",
        assetId: "whole-transcriptome-sequencing-zh",
        alt: "全转录组测序技术路线图",
      },
      "marine-microbiology-research": {
        kind: "ready",
        assetId: "marine-microbiology-research-zh",
        alt: "海洋微生物研究技术路线图",
      },
      "epigenetics-service": {
        kind: "ready",
        assetId: "multidimensional-analysis-platform-zh",
        alt: "多维度解析平台技术路线图",
      },
      "mrna-in-situ-hybridization": {
        kind: "ready",
        assetId: "multidimensional-analysis-platform-zh",
        alt: "多维度解析平台技术路线图",
      },
      "yeast-two-hybrid": {
        kind: "ready",
        assetId: "multidimensional-analysis-platform-interactions-zh",
        alt: "酵母双杂交和 SPR 分子互作研究技术路线图",
      },
      "spr-molecular-interaction-research": {
        kind: "ready",
        assetId: "multidimensional-analysis-platform-interactions-zh",
        alt: "酵母双杂交和 SPR 分子互作研究技术路线图",
      },
      "proteomics-and-metabolomics": {
        kind: "ready",
        assetId: "multidimensional-analysis-platform-multiomics-zh",
        alt: "蛋白质组学与多组学联合分析技术路线图",
      },
      "multiomics-combined-analysis": {
        kind: "ready",
        assetId: "multidimensional-analysis-platform-multiomics-zh",
        alt: "蛋白质组学与多组学联合分析技术路线图",
      },
    },
  },
  contact: {
    label: "咨询请联系：",
    emails: ["market@easternpurity.com", "info@shanghaigenomics.com"],
  },
} as const satisfies ServiceTechnologiesContent;
