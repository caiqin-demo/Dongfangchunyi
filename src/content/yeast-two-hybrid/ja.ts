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
    title: "ベイトベクターの選択",
  },
  specifications: {
    title: "技術的特長",
  },
  systemSelectorLabel: "ツーハイブリッド系",
  systems: [
    {
      id: "membrane",
      label: "膜系ツーハイブリッド",
      subtitle: "Split-Ubiquitin",
      body: "膜タンパク質酵母ツーハイブリッドシステムでは、ユビキチンC末端は、従来の酵母ツーハイブリッドで用いられる転写タンパク質GAL4のDNA結合ドメインに相当し、BaitおよびTranscription Activator LexA-VP16と連結されます。一方、ユビキチンN末端（113G変異）は、従来の酵母ツーハイブリッドで用いられるGAL4の転写活性化ドメインに相当し、PreyまたはLibraryと連結できます。",
      consultation: {
        title: "サービス内容の詳細に関するお問い合わせ",
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
        { id: "specification-1", label: "ユビキチンは細胞質に局在するため、タンパク質は核内に移行する必要がありません" },
        { id: "specification-2", label: "ユビキチンは分子量が小さく、タンパク質相互作用への影響も比較的小さい" },
        { id: "specification-3", label: "生細胞の生理的状態でタンパク質相互作用を研究できます" },
        { id: "specification-4", label: "タンパク質の翻訳後修飾の過程を保持します" },
        { id: "specification-5", label: "異なる膜タンパク質構造には、異なる細胞内局在シグナルベクターを用います" },
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
