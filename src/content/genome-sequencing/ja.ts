import type { GenomeSequencingContent } from "@/content/genome-sequencing/types";

export const jaGenomeSequencingContent = {
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
  body: {
    contact: {
      label: "暂定",
      emails: ["暂定", "暂定"],
    },
    categories: [
      { id: "plant-and-cell", label: "暂定", items: [{ id: "single-cell-sequencing", label: "暂定" }, { id: "genome-de-novo-sequencing", label: "暂定" }, { id: "absolute-quantification-microbial-diversity-sequencing", label: "暂定" }, { id: "dap-seq-technical-service", label: "暂定" }, { id: "genome-resequencing", label: "暂定" }] },
      { id: "animal-and-cell", label: "暂定", items: [{ id: "single-cell-sequencing", label: "暂定" }, { id: "genome-de-novo-sequencing", label: "暂定" }, { id: "absolute-quantification-microbial-diversity-sequencing", label: "暂定" }, { id: "dap-seq-technical-service", label: "暂定" }, { id: "whole-transcriptome-sequencing", label: "暂定" }] },
      { id: "microorganism", label: "暂定", items: [{ id: "single-cell-sequencing", label: "暂定" }, { id: "genome-de-novo-sequencing", label: "暂定" }, { id: "absolute-quantification-microbial-diversity-sequencing", label: "暂定" }, { id: "dap-seq-technical-service", label: "暂定" }, { id: "marine-microbiology-research", label: "暂定" }] },
      { id: "multidimensional-analysis-platform", label: "暂定", items: [{ id: "epigenetics-service", label: "暂定" }, { id: "mrna-in-situ-hybridization", label: "暂定" }, { id: "yeast-two-hybrid", label: "暂定" }, { id: "spr-molecular-interaction-research", label: "暂定" }, { id: "proteomics-and-metabolomics", label: "暂定" }, { id: "multiomics-combined-analysis", label: "暂定" }] },
    ],
    publications: {
      title: "暂定",
      items: [
        { id: "heng-xu-2026-07-15", citation: "暂定", title: "暂定" },
        { id: "hui-lin-2026-04-08", citation: "暂定", title: "暂定" },
        { id: "hongjiao-xu-2026-03-09", citation: "暂定", title: "暂定" },
        { id: "ertao-wang-2026-01-30", citation: "暂定", title: "暂定" },
        { id: "xianmiao-zhu-2025-12-04", citation: "暂定", title: "暂定" },
        { id: "mengshuang-li-2025-10-31", citation: "暂定", title: "暂定" },
        { id: "hao-chen-xue-2025-08-18", citation: "暂定", title: "暂定" },
        { id: "chaocheng-guo-2025-03-17", citation: "暂定", title: "暂定" },
      ],
    },
    team: {
      title: "暂定",
      paragraphs: ["暂定", "暂定"],
    },
  },
} as const satisfies GenomeSequencingContent;
