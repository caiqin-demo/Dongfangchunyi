import {
  createCompactInstrumentSkus,
  createPipetteSkus,
} from "@/content/lab-instruments/source-products";
import type { LabInstrumentsPageContent } from "@/content/lab-instruments/types";

const availability = { availability: "现货", shippingOrigin: "大阪" } as const;

export const zhLabInstrumentsContent = {
  metadata: {
    title: "实验室小仪器 | 东方纯一",
    description: "CISTRO 移液器、Domi 迷你金属浴与 Curling 迷你涡旋仪产品信息。",
  },
  eyebrow: "",
  title: "实验室小仪器",
  intro: "让实验桌面变得更加多彩和生动",
  backToProducts: "返回核心产品",
  skuLabels: {
    title: "规格与货号",
    specification: "规格 / 产品",
    catalogNumber: "货号",
    availability: "是否有货",
    shippingOrigin: "发货地",
  },
  pipette: {
    title: "CISTRO Pipette",
    tagline: "精准如丝 · 掌控随心｜以科技之力，探索生命科学的无限可能",
    imageAlt: "白色与橙色外观的 CISTRO 移液器",
    coreLabel: "硬核内芯",
    coreTitle: "精密铸造",
    coreDescription: "全金属核心结构采用高精度金属调节螺杆、丝杆与活塞，确保量程调节的长期稳定。高度光滑的不锈钢活塞设计，有效减少液体残留，保障每一次移液的一致性与精准度。",
    features: [
      {
        id: "light-touch-button",
        title: "轻触式按键",
        description: "按压力度经过精密调校，触感轻盈柔和，指尖发力更轻松，大幅减少按压疲劳。",
      },
      {
        id: "damped-return",
        title: "柔和阻尼回弹",
        description: "配备适度阻尼结构，吸液流畅无断层，特别适合新手及高频次移液场景。",
      },
    ],
    skus: createPipetteSkus(availability),
  },
  compactInstruments: {
    title: "迷你实验仪器",
    products: [
      {
        id: "domi-metal-bath",
        title: "Domi 迷你金属浴",
        imageAlt: "青绿色 Domi 迷你金属浴",
        features: [
          { id: "side-heating", title: "侧面加热", description: "无液面温差，升温速度更快。" },
          { id: "compact-design", title: "掌中金属浴", description: "小巧美观，专注于 30–100°C 的中高温孵育反应。" },
          { id: "well-layout", title: "孔位配置", description: "20 个 1.5 mL 孔 + 9 个 0.2 mL 孔。" },
        ],
        skus: createCompactInstrumentSkus("domi-metal-bath", availability),
      },
      {
        id: "curling-vortex-mixer",
        title: "Curling 迷你涡旋仪",
        imageAlt: "放在手掌上的黄色 Curling 迷你涡旋仪",
        features: [
          { id: "speed", title: "最高转速", description: "5000 rpm。" },
          { id: "anti-slip", title: "底部防滑设计", description: "特殊的硅胶外壳并采用局部加厚设计。" },
          { id: "silicone-body", title: "通体硅胶材质", description: "防水防尘。" },
        ],
        skus: createCompactInstrumentSkus("curling-vortex-mixer", availability),
      },
    ],
  },
  contact: {
    title: "索取更多产品信息",
    description: "如需进一步了解产品信息，请通过所提供的业务邮箱联系。",
    emailLabel: "产品咨询邮箱",
    email: "market@easternpurity.com",
  },
} as const satisfies LabInstrumentsPageContent;
