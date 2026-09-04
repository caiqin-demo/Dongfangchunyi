import type { ServiceTechnologiesContent } from "@/content/service-technologies/types";

export const jaServiceTechnologiesContent = {
  metadata: {
    title: "暂定",
    description: "暂定",
  },
  title: "暂定",
  intro: "暂定",
  optionGroupLabel: "暂定",
  options: [
    { id: "plant-and-cell", label: "暂定" },
    { id: "animal-and-cell", label: "暂定" },
    { id: "microorganism", label: "暂定" },
    { id: "multidimensional-analysis-platform", label: "暂定" },
  ],
  bodyCard: {
    categoryLabelMode: "placeholder",
    placeholderLabel: "暂定",
    displayByItemId: {
      "single-cell-sequencing": { kind: "pending", label: "暂定" },
      "genome-de-novo-sequencing": { kind: "pending", label: "暂定" },
      "absolute-quantification-microbial-diversity-sequencing": { kind: "pending", label: "暂定" },
      "dap-seq-technical-service": { kind: "pending", label: "暂定" },
      "genome-resequencing": { kind: "pending", label: "暂定" },
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
    label: "暂定",
    emails: ["market@easternpurity.com", "info@shanghaigenomics.com"],
  },
} as const satisfies ServiceTechnologiesContent;
