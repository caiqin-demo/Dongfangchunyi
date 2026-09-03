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
} as const satisfies GenomeSequencingContent;
