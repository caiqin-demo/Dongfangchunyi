import { elisaCatalogRows } from "@/content/elisa-kits/source-catalog";
import { elisaReferenceProducts } from "@/content/elisa-kits/source-reference-products";
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
      { id: "48-tests", packSize: "48 Tests", availability: "现货", shippingOrigin: "上海" },
      { id: "96-tests", packSize: "96 Tests", availability: "现货", shippingOrigin: "上海／大阪" },
    ],
  },
  skuLabels: {
    title: "规格与货号",
    packSize: "规格",
    catalogNumber: "货号",
    availability: "是否有货",
    shippingOrigin: "发货地",
  },
  reference: {
    title: "ELISA试剂盒产品资料",
    regionLabel: "五种ELISA试剂盒产品资料，可横向滚动查看",
    labels: {
      series: "ELISA Kit Series",
      userManual: "User Manual",
      sensitivity: "Sensitivity",
      range: "Range",
      storage: "Storage",
      standard: "标准品",
      otherReagents: "其它试剂",
    },
    productCopy: {
      "tnf-beta-human": { kitTitle: "TNF-β（人）ELISA Kit", manualLabel: "试剂盒操作手册", chartAlt: "TNF-β（人）ELISA试剂盒标准曲线" },
      "ifn-gamma-human": { kitTitle: "IFN-γ（人）ELISA Kit", manualLabel: "试剂盒操作手册", chartAlt: "IFN-γ（人）ELISA试剂盒标准曲线" },
      "il-1-beta-mouse": { kitTitle: "IL-1β（小鼠）ELISA Kit", manualLabel: "试剂盒操作手册", chartAlt: "IL-1β（小鼠）ELISA试剂盒标准曲线" },
      "il-10-mouse": { kitTitle: "IL-10（小鼠）ELISA Kit", manualLabel: "试剂盒操作手册", chartAlt: "IL-10（小鼠）ELISA试剂盒标准曲线" },
      "il-17a-monkey": { kitTitle: "IL-17A（非人灵长类）ELISA Kit", manualLabel: "试剂盒操作手册", chartAlt: "IL-17A（非人灵长类）ELISA试剂盒标准曲线" },
    },
    products: elisaReferenceProducts,
  },
  catalog: {
    title: "ELISA试剂盒供货目录",
    regionLabel: "ELISA试剂盒细胞因子与物种供货矩阵，可横向滚动查看",
    rowHeaderLabel: "细胞因子",
    columnLabels: {
      human: "Human",
      mouse: "Mouse",
      rat: "Rat",
      bovine: "Bovine",
      canine: "Canine",
      chicken: "Chicken",
      goat: "Goat",
      monkey: "Monkey",
      porcine: "Porcine",
      "non-human": "Non-Human",
    },
    available: "可提供",
    unavailable: "资料未标注",
    note: "货号、产品具体信息、价格与货期请咨询 market@easternpurity.com。",
    rows: elisaCatalogRows,
  },
  contact: {
    title: "索取更多产品信息",
    description: "如需进一步了解产品信息，请通过所提供的业务邮箱联系。",
    emailLabel: "产品咨询邮箱",
    email: "market@easternpurity.com",
  },
} as const satisfies ElisaKitsContent;
