import type { SimpleProductPageContent } from "@/content/simple-product-pages/types";

export const zhElisaKitsContent = {
  metadata: {
    title: "ELISA试剂盒 | 东方纯一",
    description: "涵盖检测近300种不同种类基因的ELISA试剂盒。",
  },
  eyebrow: "HannaH® ELISA试剂盒",
  title: "ELISA试剂盒",
  intro: "涵盖检测近300种不同种类基因的ELISA试剂盒。",
  backToProducts: "返回核心产品",
  overview: {
    heading: "产品概览",
    description: "上海睿星生物技术有限公司生产和销售HannaH® ELISA试剂盒，涵盖检测近300种不同种类基因的产品。",
  },
  contact: {
    title: "索取更多产品信息",
    description: "如需进一步了解产品信息，请通过所提供的业务邮箱联系。",
    emailLabel: "产品咨询邮箱",
    email: "market@easternpurity.com",
  },
} as const satisfies SimpleProductPageContent;
