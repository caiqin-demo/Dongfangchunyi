import type { AntibodyProductsContent } from "@/content/antibody-products/types";
import { createAntibodyProducts } from "@/content/antibody-products/source-products";

const allFour = { mab: true, hrp: true, "affinity-gel": true, "magnetic-beads": true } as const;
const mabAndHrp = { mab: true, hrp: true, "affinity-gel": false, "magnetic-beads": false } as const;
const mabOnly = { mab: true, hrp: false, "affinity-gel": false, "magnetic-beads": false } as const;

export const zhAntibodyProductsContent = {
  metadata: {
    title: "抗体及相应填料产品 | 东方纯一",
    description: "GNI Anti-Flag 单克隆抗体、HRP 偶联抗体、亲和凝胶、磁珠及全系列标签抗体。",
  },
  eyebrow: "GNI® 抗体系列",
  title: "抗体及相应填料产品",
  intro: "标签抗体、HRP 偶联抗体、Affinity Gel 与 Magnetic Beads 产品信息。以下技术参数按所提供的产品资料整理；实时库存与发货安排请联系确认。",
  backToProducts: "返回核心产品",
  products: createAntibodyProducts({
    mab: {
      title: "Anti-Flag 鼠单克隆抗体",
      experimentImageAlt: "Anti-Flag 鼠单克隆抗体实验条带图",
    },
    hrp: {
      title: "Anti-Flag-HRP 鼠单克隆抗体",
      experimentImageAlt: "Anti-Flag-HRP 鼠单克隆抗体实验条带图",
    },
    "affinity-gel": {
      title: "Anti-Flag 亲和凝胶",
      experimentImageAlt: "Anti-Flag 亲和凝胶实验图",
    },
    "magnetic-beads": {
      title: "Anti-Flag 磁珠",
      experimentImageAlt: "Anti-Flag 磁珠酸洗脱实验图",
    },
  }),
  skuLabels: {
    title: "规格与货号",
    packSize: "规格",
    catalogNumber: "货号",
    availability: "是否有货",
    availabilityNote: "现货",
    shippingOrigin: "发货地",
    incompleteSource: "源图中的规格与货号未完整显示，需由产品方确认后补充。",
  },
  matrix: {
    title: "全系列抗体",
    originNote: "抗体由小鼠制备。",
    tagType: "标签类型",
    availabilityHeader: "Available",
    productLabels: { mab: "MAB", hrp: "HRP", "affinity-gel": "Affinity Gel", "magnetic-beads": "Magnetic Beads" },
    available: "可提供",
    unavailable: "资料未标注",
    rows: [
      { id: "flag", label: "Anti-Flag", availability: allFour },
      { id: "myc", label: "Anti-Myc", availability: allFour },
      { id: "his", label: "Anti-His", availability: allFour },
      { id: "ha", label: "Anti-HA", availability: allFour },
      { id: "v5", label: "Anti-V5", availability: allFour },
      { id: "gst", label: "Anti-GST", availability: allFour },
      { id: "gfp", label: "Anti-GFP", availability: allFour },
      { id: "beta-actin", label: "Anti-β-actin", availability: mabAndHrp },
      { id: "gamma-actin", label: "Anti-γ-actin", availability: mabAndHrp },
      { id: "gapdh", label: "Anti-GAPDH", availability: mabAndHrp },
      { id: "beta-tubulin", label: "Anti-β-Tubulin", availability: mabAndHrp },
      { id: "alpha-tubulin", label: "Anti-α-Tubulin", availability: mabAndHrp },
      { id: "pa", label: "Anti-PA", availability: mabOnly },
      { id: "target", label: "Anti-Target", availability: mabOnly },
      { id: "mbp", label: "Anti-MBP", availability: mabOnly },
      { id: "strepii", label: "Anti-StrepII", availability: mabOnly },
      { id: "avi", label: "Anti-AVI", availability: mabOnly },
      { id: "dsred", label: "Anti-DsRed", availability: mabOnly },
    ],
  },
  contact: {
    title: "索取更多产品信息",
    description: "如需规格、实时库存、发货安排或批量包装信息，请通过所提供的业务邮箱联系。",
    emailLabel: "产品咨询邮箱",
    email: "market@easternpurity.com",
  },
  publications: {
    title: "使用GNI抗体系列产品发表的文章",
    items: [
      { id: "cell-2025", citation: "CELL, Volume 188, Issue 26, p7378-7396.E23, December 24, 2025", articleTitle: "A stepwise decoding mechanism for heat sensing in plants connects lipid remodeling to a nuclear signaling cascade", url: "https://doi.org/10.1016/j.cell.2025.11.003" },
      { id: "pnas-2022", citation: "PNAS, October 3, 2022, 119 (41) e2208441119", articleTitle: "DNA polymerase epsilon interacts with SUVH2/9 to repress the expression of genes associated with meiotic DSB hotspot in Arabidopsis", url: "https://doi.org/10.1073/pnas.2208441119" },
    ],
  },
} as const satisfies AntibodyProductsContent;
