import type { YeastTwoHybridContent } from "@/content/yeast-two-hybrid/types";

export const zhYeastTwoHybridContent = {
  metadata: {
    title: "Yeast Two Hybrid | 东方纯一",
    description: "基于酵母转录基因子GAL4的双杂交系统，20年服务经验",
  },
  title: "Yeast Two Hybrid",
  intro: "基于酵母转录基因子GAL4的双杂交系统，20年服务经验",
  backToServices: "返回核心服务",
  overview: {
    title: "服务概述",
  },
  features: {
    title: "服务特点",
  },
  specifications: {
    title: "技术范围",
  },
  systemSelectorLabel: "双杂交体系",
  systems: [
    {
      id: "membrane",
      label: "膜体系双杂交",
      overview: "暂定",
      features: [
        { id: "feature-1", title: "暂定", description: "暂定" },
        { id: "feature-2", title: "暂定", description: "暂定" },
        { id: "feature-3", title: "暂定", description: "暂定" },
        { id: "feature-4", title: "暂定", description: "暂定" },
      ],
      specifications: [
        { id: "specification-1", label: "暂定" },
        { id: "specification-2", label: "暂定" },
        { id: "specification-3", label: "暂定" },
        { id: "specification-4", label: "暂定" },
        { id: "specification-5", label: "暂定" },
        { id: "specification-6", label: "暂定" },
      ],
    },
    {
      id: "nuclear",
      label: "核体系双杂交",
      overview: "暂定",
      features: [
        { id: "feature-1", title: "暂定", description: "暂定" },
        { id: "feature-2", title: "暂定", description: "暂定" },
        { id: "feature-3", title: "暂定", description: "暂定" },
        { id: "feature-4", title: "暂定", description: "暂定" },
      ],
      specifications: [
        { id: "specification-1", label: "暂定" },
        { id: "specification-2", label: "暂定" },
        { id: "specification-3", label: "暂定" },
        { id: "specification-4", label: "暂定" },
        { id: "specification-5", label: "暂定" },
        { id: "specification-6", label: "暂定" },
      ],
    },
  ],
  contact: {
    title: "咨询服务",
    description: "暂定",
    emailLabel: "服务咨询邮箱",
    email: "market@easternpurity.com",
  },
} as const satisfies YeastTwoHybridContent;
