import type { SimpleProductPageContent } from "@/content/simple-product-pages/types";

export const jaLabInstrumentsContent = {
  metadata: {
    title: "実験室用小型機器 | 東方純一",
    description: "ライフサイエンス分野で一般的に使用される各種実験機器およびピペットを販売しています。",
  },
  eyebrow: "ライフサイエンス実験機器",
  title: "実験室用小型機器",
  intro: "ライフサイエンス分野で一般的に使用される各種実験機器およびピペットを販売しています。",
  backToProducts: "主要製品へ戻る",
  overview: {
    heading: "製品概要",
    description: "ライフサイエンス研究室向けに、一般的に使用される実験機器およびピペット製品を提供しています。",
  },
  contact: {
    title: "製品情報を問い合わせる",
    description: "製品の詳細については、提供された窓口メールへお問い合わせください。",
    emailLabel: "製品お問い合わせメール",
    email: "market@easternpurity.com",
  },
} as const satisfies SimpleProductPageContent;
