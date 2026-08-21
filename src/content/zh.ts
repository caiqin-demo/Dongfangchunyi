import type { HomeContent } from "@/content/types";

export const zhContent = {
  brand: "东方纯一株式会社",
  skipToContent: "跳到主要内容",
  nav: [
    { id: "home", label: "首页", href: "#top" },
    { id: "about", label: "关于我们", href: "#about" },
    { id: "products", label: "关于产品", href: "#products" },
    { id: "services", label: "关于服务", href: "#services" },
    { id: "contact", label: "联系我们", href: "#contact" },
  ],
  hero: {
    title: "协助企业开拓日本市场的初始引擎",
    description: "专注在生命科学领域的市场开拓并提供专业的企业管理咨询服务",
    productButton: "了解产品",
    serviceButton: "了解服务",
  },
  about: {
    label: "ABOUT US",
    title: "东方纯一株式会社成为上海睿星生物技术有限公司日本授权经销商",
    body: "上海睿星生物技术有限公司是日本GNI Group Ltd. (www.gnipharma.com)旗下子公司。生产和销售标签抗体及相应填料偶联产品和ELISA试剂盒。同时也提供酵母双杂交技术服务。",
    offerings: [
      { id: "gni", brand: "GNI", description: "抗体及相应填料产品", registered: true },
      { id: "hannah", brand: "HannaH", description: "ELISA试剂盒", registered: true },
      { id: "instruments", brand: "", description: "生命科学实验仪器", registered: false },
      { id: "yeast-two-hybrid", brand: "Yeast Two Hybrid", description: "技术服务", registered: false },
    ],
    more: "了解更多",
  },
  products: {
    title: "核心产品",
    items: [
      { id: "antibody-products", title: "抗体及相应填料产品", description: "明星产品：Anti-Flag单抗/Anti-Flag Affinity Gel/Anti-Flag Magnetic Beads" },
      { id: "elisa-kits", title: "ELISA试剂盒", description: "涵盖检测近300种不同种类基因的ELISA试剂盒" },
      { id: "lab-instruments", title: "实验室小仪器", description: "销售多种生命科学常用实验仪器和移液器" },
    ],
  },
  services: {
    title: "核心服务",
    items: [
      { id: "yeast-two-hybrid", title: "Yeast Two Hybrid", description: "基于酵母转录基因子GAL4的双杂交系统，20年服务经验" },
      { id: "business-consulting", title: "企业咨询", description: "专注于企业人力资源系统的搭建" },
      { id: "personal-coaching", title: "个人教练", description: "教练及领导力课程" },
    ],
  },
  footer: {
    tagline: {
      primary: "专注在生命科学领域的市场开拓",
      secondary: "并提供专业的企业管理咨询服务",
    },
    productsTitle: "相关产品",
    productLinks: [
      { id: "antibody-products", label: "抗体及相应填料产品", href: "#products" },
      { id: "elisa-kits", label: "ELISA 试剂盒", href: "#products" },
      { id: "lab-instruments", label: "实验室小仪器", href: "#products" },
    ],
    servicesTitle: "相关服务",
    serviceLinks: [
      { id: "yeast-two-hybrid", label: "Yeast Two Hybrid", href: "#services" },
      { id: "business-consulting", label: "企业咨询", href: "#services" },
      { id: "personal-coaching", label: "个人教练", href: "#services" },
    ],
    aboutTitle: "关于我们",
    aboutLinks: [
      { id: "company-profile", label: "公司介绍", href: "#about" },
      { id: "contact", label: "联系我们", href: "#contact" },
    ],
    copyright: "© 2025 东方纯一 All rights reserved.",
  },
} as const satisfies HomeContent;
