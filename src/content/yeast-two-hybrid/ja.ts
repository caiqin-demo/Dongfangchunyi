import type { YeastTwoHybridContent } from "@/content/yeast-two-hybrid/types";

export const jaYeastTwoHybridContent = {
  metadata: {
    title: "Yeast Two Hybrid | 東方純一",
    description: "酵母転写因子GAL4を基盤とするツーハイブリッドシステム。20年のサービス実績",
  },
  title: "Yeast Two Hybrid",
  intro: "酵母転写因子GAL4を基盤とするツーハイブリッドシステム。20年のサービス実績",
  backToServices: "主要サービスへ戻る",
  overview: {
    title: "サービス概要",
  },
  features: {
    title: "暫定",
  },
  specifications: {
    title: "暫定",
  },
  systemSelectorLabel: "ツーハイブリッド系",
  systems: [
    {
      id: "membrane",
      label: "膜系ツーハイブリッド",
      subtitle: "暫定",
      body: "暫定",
      consultation: {
        title: "暫定",
        emails: [
          { id: "market", email: "market@easternpurity.com" },
          { id: "shanghai-genomics", email: "info@shanghaigenomics.com" },
        ],
      },
      features: [
        { id: "feature-1", title: "暫定", description: "暫定" },
        { id: "feature-2", title: "暫定", description: "暫定" },
        { id: "feature-3", title: "暫定", description: "暫定" },
        { id: "feature-4", title: "暫定", description: "暫定" },
      ],
      specifications: [
        { id: "specification-1", label: "暫定" },
        { id: "specification-2", label: "暫定" },
        { id: "specification-3", label: "暫定" },
        { id: "specification-4", label: "暫定" },
        { id: "specification-5", label: "暫定" },
      ],
    },
    {
      id: "nuclear",
      label: "核系ツーハイブリッド",
      subtitle: "暫定",
      body: "暫定",
      consultation: {
        title: "暫定",
        emails: [
          { id: "market", email: "market@easternpurity.com" },
          { id: "shanghai-genomics", email: "info@shanghaigenomics.com" },
        ],
      },
      features: [
        { id: "feature-1", title: "暫定", description: "暫定" },
        { id: "feature-2", title: "暫定", description: "暫定" },
        { id: "feature-3", title: "暫定", description: "暫定" },
        { id: "feature-4", title: "暫定", description: "暫定" },
      ],
      specifications: [
        { id: "specification-1", label: "暫定" },
        { id: "specification-2", label: "暫定" },
        { id: "specification-3", label: "暫定" },
        { id: "specification-4", label: "暫定" },
        { id: "specification-5", label: "暫定" },
      ],
    },
  ],
} as const satisfies YeastTwoHybridContent;
