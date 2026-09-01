import type { ContactPageContent } from "./types";

export const jaContactPageContent = {
  backToAbout: "暂定",
  details: [
    { id: "email", label: "暂定" },
    { id: "phone", label: "暂定" },
    { id: "address", label: "暂定" },
  ],
  hero: {
    title: "暂定",
    intro: "暂定",
  },
  main: {
    title: "暂定",
    subtitle: "暂定",
  },
  metadata: {
    title: "暂定",
    description: "暂定",
  },
} as const satisfies ContactPageContent;
