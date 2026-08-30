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
    title: "サービスの特長",
  },
  specifications: {
    title: "技術範囲",
  },
  systemSelectorLabel: "ツーハイブリッド系",
  systems: [
    {
      id: "membrane",
      label: "膜系ツーハイブリッド",
      overview: "暫定",
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
        { id: "specification-6", label: "暫定" },
      ],
    },
    {
      id: "nuclear",
      label: "核系ツーハイブリッド",
      overview: "暫定",
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
        { id: "specification-6", label: "暫定" },
      ],
    },
  ],
  contact: {
    title: "サービスについてのお問い合わせ",
    description: "暫定",
    emailLabel: "サービスお問い合わせメール",
    email: "market@easternpurity.com",
  },
} as const satisfies YeastTwoHybridContent;
