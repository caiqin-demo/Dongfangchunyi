import type { ContactPageContent } from "./types";

export const jaContactPageContent = {
  details: [
    { id: "email", label: "メール" },
    { id: "phone", label: "電話" },
    { id: "address", label: "所在地" },
  ],
  hero: {
    title: "東方純一株式会社",
    intro: "ライフサイエンス市場の国境を越えた展開への道を切り拓きます。",
  },
  main: {
    title: "お問い合わせ",
    subtitle: "ご不明な点がございましたら、お気軽にお問い合わせください。",
  },
  metadata: {
    title: "お問い合わせ | 東方純一株式会社",
    description: "ご不明な点がございましたら、東方純一株式会社までお気軽にお問い合わせください。",
  },
} as const satisfies ContactPageContent;
