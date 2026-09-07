import type { OtherBusinessServicesContent } from "@/content/other-business-services/types";

export const zhOtherBusinessServicesContent = {
  businessConsulting: {
    title: "企业咨询",
    subtitle: "销售/市场/人力资源",
    offerings: [
      { id: "strategy-consulting", title: "战略咨询", description: "明确企业战略方向，构建核心竞争力" },
      { id: "organization-talent-development", title: "组织与人才发展", description: "优化组织架构，激发团队效能" },
      { id: "operations-management", title: "运营管理", description: "优化流程与管理，提升运营效率" },
      { id: "market-brand", title: "市场与品牌", description: "洞察市场趋势，打造品牌影响力" },
    ],
  },
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
