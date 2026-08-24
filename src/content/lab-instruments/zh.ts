import type { SimpleProductPageContent } from "@/content/simple-product-pages/types";

export const zhLabInstrumentsContent = {
  metadata: {
    title: "实验室小仪器 | 东方纯一",
    description: "销售多种生命科学常用实验仪器和移液器。",
  },
  eyebrow: "生命科学实验仪器",
  title: "实验室小仪器",
  intro: "销售多种生命科学常用实验仪器和移液器。",
  backToProducts: "返回核心产品",
  overview: {
    heading: "产品概览",
    description: "面向生命科学实验室提供常用实验仪器和移液器产品。",
  },
  contact: {
    title: "索取更多产品信息",
    description: "如需进一步了解产品信息，请通过所提供的业务邮箱联系。",
    emailLabel: "产品咨询邮箱",
    email: "market@easternpurity.com",
  },
} as const satisfies SimpleProductPageContent;
