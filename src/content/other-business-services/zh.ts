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
  coachingPrograms: [
    {
      id: "self-coaching-workshop",
      title: "自我教练工作坊",
      subtitle: "成为自己的教练，创造想要的精彩",
      lead: "自我教练是一种能以教练的状态与自己对话的能力。",
      bullets: [
        "看见问题背后真正的观点",
        "觉察自己如何诠释局势",
        "打开突破困境的全新视角",
      ],
      courseStructure: {
        kind: "plan",
        label: "课程结构：",
        description: "一日自我教练工作坊 + 30天自我教练计划",
      },
    },
    {
      id: "coaching-leadership-training",
      title: "教练型领导力",
      subtitle: "领导的本质，是启动人心与集体智慧",
      lead: "教练型领导力所关注的核心",
      bullets: [
        "让多维度的观点被听见与融合",
        "让问题被送上台面思考",
        "让人愿意为决策与行动共同承担",
      ],
      courseStructure: {
        kind: "levels",
        label: "课程结构：",
        levels: [
          { id: "basic", label: "基础课程", description: "学会去信任身教带人" },
          { id: "advanced", label: "进阶课程", description: "讲组织构架，从有效运作走向高度启动" },
        ],
      },
    },
  ],
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
