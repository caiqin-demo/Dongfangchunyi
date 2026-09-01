import type { ContactPageContent } from "./types";

export const zhContactPageContent = {
  backToAbout: "关于我们",
  details: [
    { id: "email", label: "邮箱" },
    { id: "phone", label: "电话" },
    { id: "address", label: "地址" },
  ],
  hero: {
    title: "东方纯一株式会社",
    intro: "为生命科学市场的跨国界延申铺路",
  },
  main: {
    title: "联系我们",
    subtitle: "有任何问题，欢迎随时与我们联系",
  },
  metadata: {
    title: "联系我们 | 东方纯一株式会社",
    description: "如有任何问题，欢迎联系东方纯一株式会社。",
  },
} as const satisfies ContactPageContent;
