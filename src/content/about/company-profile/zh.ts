import type { CompanyProfileContent } from "./types";

export const zhCompanyProfileContent = {
  backToAbout: "下一步",
  hero: {
    title: "关于我们",
    intro: "专注于生命科学产品和服务在海外市场开拓",
  },
  introduction: {
    heading: "公司简介",
    paragraphs: ["东方纯一株式会社是一家专注于生命科学产品和服务在海外市场开拓的公司，成立于2025年，位于大阪。作为一家初创公司，我们很荣幸获得上海睿星生物技术有限公司的支持，协助其产品和服务在日本市场的推广。为其牵起上海和大阪之间一条市场的纽带。"],
  },
  capabilities: {
    heading: "我们可以做的更多",
    items: [
      { id: "international-market-development", title: "海外市场开拓", description: "生命科学领域" },
      { id: "international-material-procurement", title: "海外原材料采购", description: "生命科学领域" },
      { id: "employee-training", title: "企业外派员工培训", description: "领导力训练" },
    ],
  },
  metadata: {
    title: "公司介绍 | 东方纯一株式会社",
    description: "东方纯一株式会社专注于生命科学产品和服务在海外市场开拓。",
  },
} as const satisfies CompanyProfileContent;
