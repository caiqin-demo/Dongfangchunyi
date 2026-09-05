import type { OtherBusinessServicesContent } from "@/content/other-business-services/types";

export const zhOtherBusinessServicesContent = {
  metadata: {
    title: "企业人效提升 | 东方纯一",
    description: "教练及领导力课程（中/英）",
  },
  title: "企业人效提升",
  intro: "教练及领导力课程（中/英）",
  panels: [
    { id: "business-consulting", label: "Business Consulting\nCH/EN" },
    { id: "self-coaching-workshop", label: "Self- Coaching\nWorkShop" },
    { id: "coaching-leadership-training", label: "Coaching\nLeadership Training" },
  ],
} as const satisfies OtherBusinessServicesContent;
