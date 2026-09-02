import type { CompanyProfileContent } from "./types";

export const jaCompanyProfileContent = {
  backToAbout: "会社案内へ戻る",
  hero: {
    title: "会社紹介",
    intro: "ライフサイエンス製品・サービスの海外市場開拓に注力しています。",
  },
  introduction: {
    heading: "会社概要",
    paragraphs: ["東方純一株式会社は、ライフサイエンス製品・サービスの海外市場開拓に注力する会社です。2025年に設立され、大阪に所在しています。スタートアップ企業として、上海睿星生物技術有限公司の支援を受け、同社の製品・サービスの日本市場における展開を支援しています。上海と大阪を結ぶ市場の架け橋となります。"],
  },
  capabilities: {
    heading: "提供できるサービス",
    items: [
      { id: "international-market-development", title: "海外市場開拓", description: "ライフサイエンス分野" },
      { id: "international-material-procurement", title: "海外原材料調達", description: "ライフサイエンス分野" },
      { id: "employee-training", title: "海外派遣社員研修", description: "リーダーシップ研修" },
    ],
  },
  metadata: {
    title: "会社紹介 | 東方純一株式会社",
    description: "東方純一株式会社は、ライフサイエンス製品・サービスの海外市場開拓に注力しています。",
  },
} as const satisfies CompanyProfileContent;
