import type { ElisaKitsContent } from "@/content/elisa-kits/types";

export const zhElisaKitsContent = {
  metadata: {
    title: "ELISA试剂盒 | 东方纯一",
    description: "涵盖检测近300种不同种类基因的ELISA试剂盒。",
  },
  eyebrow: "HannaH®试剂盒系列",
  title: "ELISA检测试剂盒",
  intro: "涵盖多种热门标靶，如白介素, INF, TNF, VEGF等。以下技术参数按所提供的产品资料整理；实时库存与发货安排请联系确认。",
  backToProducts: "返回核心产品",
  overview: {
    heading: "产品概览",
    description: "上海睿星生物技术有限公司生产和销售HannaH® ELISA试剂盒，涵盖检测近300种不同种类基因的产品。",
  },
  product: {
    title: "ELISA检测试剂盒",
    subtitle: "ELISA Kit Series",
    details: [
      { id: "product-name", label: "PRODUCT NAME", value: "ELISA Kit" },
      { id: "species-reactivity", label: "SPECIES REACTIVITY", value: "Human/Mouse/Rat/Monkey/Porcine/Chicken/..." },
      { id: "description", label: "DESCRIPTION", value: "For serum, plasma and cell culture supernatant" },
      { id: "sensitivity", label: "SENSITIVITY", value: "Regular sensitivity & High sensitivity available" },
      { id: "packing", label: "PACKING", value: "KIT OF 96 WELLS (12 STRIPS X 8 WELLS)" },
    ],
    skus: [
      { id: "48-tests", packSize: "48 Tests", availability: "现货", shippingOrigin: "仅供中国大陆；发货地：上海" },
      { id: "96-tests", packSize: "96 Tests", availability: "现货", shippingOrigin: "发货地：上海／大阪" },
    ],
  },
  skuLabels: {
    title: "规格与供货信息",
    packSize: "规格",
    availability: "是否有货",
    shippingOrigin: "供货范围／发货地",
  },
  contact: {
    title: "索取更多产品信息",
    description: "如需进一步了解产品信息，请通过所提供的业务邮箱联系。",
    emailLabel: "产品咨询邮箱",
    email: "market@easternpurity.com",
  },
} as const satisfies ElisaKitsContent;
