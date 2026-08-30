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
    title: "诱饵载体选择",
  },
  specifications: {
    title: "技术优势",
  },
  systemSelectorLabel: "双杂交体系",
  systems: [
    {
      id: "membrane",
      label: "膜体系双杂交",
      subtitle: "Split-Ubiquitin",
      body: "在膜蛋白酵母双杂交系统中，泛素的C端相当于传统酵母双杂交中使用的转录蛋白GAL4的DNA结合结构域，连接上Bait和一个Transcription Activator LexA-VP16。而泛素的N端（113G变异）相当于传统酵母双杂交中使用的GAL4的转录激活域，可以连上Prey或者一个Library。",
      consultation: {
        title: "咨询详细服务内容",
        emails: [
          { id: "market", email: "market@easternpurity.com" },
          { id: "shanghai-genomics", email: "info@shanghaigenomics.com" },
        ],
      },
      features: [
        { id: "feature-1", title: "pBT3-SUC", description: "N-Ter/Lumenal\nC-Ter/Cytosolic" },
        { id: "feature-2", title: "pBT3-STE", description: "N-Ter/Lumenal/Cytosolic\nC-Ter/Cytosolic" },
        { id: "feature-3", title: "pBT3-N", description: "N-Ter/Cytosolic\nC-Ter/Lumenal/Cytosolic" },
        { id: "feature-4", title: "pDHB1", description: "N-Ter/Cytosolic\nC-Ter/Cytosolic" },
      ],
      specifications: [
        { id: "specification-1", label: "泛素定位于细胞质中，蛋白无需进核" },
        { id: "specification-2", label: "泛素分子量很小，对蛋白相互作用的影响也较小" },
        { id: "specification-3", label: "可在活细胞生理状态下研究蛋白的相互作用" },
        { id: "specification-4", label: "保持了蛋白翻译后的修饰过程" },
        { id: "specification-5", label: "不同的膜蛋白结构采用不同的亚细胞定位信号载体" },
      ],
    },
    {
      id: "nuclear",
      label: "核体系双杂交",
      subtitle: "暂定",
      body: "暂定",
      consultation: {
        title: "咨询详细服务内容",
        emails: [
          { id: "market", email: "market@easternpurity.com" },
          { id: "shanghai-genomics", email: "info@shanghaigenomics.com" },
        ],
      },
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
      ],
    },
  ],
} as const satisfies YeastTwoHybridContent;
