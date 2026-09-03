import type { GenomeSequencingContent } from "@/content/genome-sequencing/types";

export const zhGenomeSequencingContent = {
  metadata: {
    title: "基因组测序 | 东方纯一",
    description: "专注于动植物和微生物领域的二代/三代基因组及转录组测序相关服务",
  },
  title: "基因组测序",
  intro: "专注于动植物和微生物领域的二代/三代基因组及转录组测序相关服务",
  optionGroupLabel: "测序选项",
  options: [
    { id: "plant-and-cell", label: "植物及细胞" },
    { id: "animal-and-cell", label: "动物及细胞" },
    { id: "microorganism", label: "微生物" },
    { id: "multidimensional-analysis-platform", label: "多维度解析平台" },
  ],
} as const satisfies GenomeSequencingContent;
