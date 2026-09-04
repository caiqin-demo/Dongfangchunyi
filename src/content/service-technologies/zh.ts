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
  contact: {
    label: "咨询请联系：",
    emails: ["market@easternpurity.com", "info@shanghaigenomics.com"],
  },
} as const satisfies ServiceTechnologiesContent;
