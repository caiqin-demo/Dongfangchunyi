import type { CompanyProfileContent } from "./types";

export const jaCompanyProfileContent = {
  backToAbout: "下一步",
  hero: {
    title: "下一步",
    intro: "下一步",
  },
  introduction: {
    heading: "下一步",
    paragraphs: ["下一步"],
  },
  capabilities: {
    heading: "下一步",
    items: [
      { id: "international-market-development", title: "下一步", description: "下一步" },
      { id: "international-material-procurement", title: "下一步", description: "下一步" },
      { id: "employee-training", title: "下一步", description: "下一步" },
    ],
  },
  metadata: {
    title: "下一步",
    description: "下一步",
  },
} as const satisfies CompanyProfileContent;
