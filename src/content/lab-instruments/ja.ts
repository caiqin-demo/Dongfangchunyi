import {
  createCompactInstrumentSkus,
  createPipetteSkus,
} from "@/content/lab-instruments/source-products";
import type { LabInstrumentsPageContent } from "@/content/lab-instruments/types";

const availability = { availability: "在庫あり", shippingOrigin: "大阪" } as const;

export const jaLabInstrumentsContent = {
  metadata: {
    title: "実験室用小型機器 | 東方純一",
    description: "CISTRO ピペット、Domi ミニメタルバス、Curling ミニボルテックスミキサーの製品情報。",
  },
  eyebrow: "",
  title: "実験室用小型機器",
  intro: "実験台をもっとカラフルで生き生きと",
  skuLabels: {
    title: "仕様・品番",
    specification: "仕様 / 製品",
    catalogNumber: "品番",
    availability: "在庫状況",
    shippingOrigin: "発送地",
  },
  pipette: {
    title: "CISTRO Pipette",
    tagline: "絹糸のような精密さ、思いのままの操作｜テクノロジーの力で生命科学の無限の可能性を探る",
    imageAlt: "白とオレンジを基調とした CISTRO ピペット",
    coreLabel: "堅牢な内部構造",
    coreTitle: "精密鋳造",
    coreDescription: "高精度の金属製調整ねじ、スクリューシャフト、ピストンを使用したオールメタルの内部構造により、容量調整の長期安定性を確保します。高平滑ステンレス製ピストンが液残りを効果的に減らし、毎回の分注の一貫性と精度を支えます。",
    features: [
      {
        id: "light-touch-button",
        title: "軽いタッチのボタン",
        description: "押下力を精密に調整し、軽く柔らかな操作感を実現。指先に力を入れやすく、押下による疲労を大幅に軽減します。",
      },
      {
        id: "damped-return",
        title: "穏やかなダンピングリターン",
        description: "適度なダンピング構造により、途切れのないスムーズな吸引を実現。初心者や高頻度のピペッティングに適しています。",
      },
    ],
    skus: createPipetteSkus(availability),
  },
  compactInstruments: {
    title: "小型実験機器",
    products: [
      {
        id: "domi-metal-bath",
        title: "Domi ミニメタルバス",
        imageAlt: "ターコイズカラーの Domi ミニメタルバス",
        features: [
          { id: "side-heating", title: "側面加熱", description: "液面の温度差を抑え、より速く昇温します。" },
          { id: "compact-design", title: "手のひらサイズ", description: "小型で美しく、30–100°C の中高温インキュベーション反応に対応します。" },
          { id: "well-layout", title: "ウェル構成", description: "1.5 mL ウェル × 20 + 0.2 mL ウェル × 9。" },
        ],
        skus: createCompactInstrumentSkus("domi-metal-bath", availability),
      },
      {
        id: "curling-vortex-mixer",
        title: "Curling ミニボルテックスミキサー",
        imageAlt: "手のひらに載せた黄色の Curling ミニボルテックスミキサー",
        features: [
          { id: "speed", title: "最高回転数", description: "5000 rpm。" },
          { id: "anti-slip", title: "底面滑り止め設計", description: "特殊なシリコン外装と部分的な厚肉設計を採用しています。" },
          { id: "silicone-body", title: "全面シリコン素材", description: "防水・防塵仕様です。" },
        ],
        skus: createCompactInstrumentSkus("curling-vortex-mixer", availability),
      },
    ],
  },
  contact: {
    title: "製品情報を問い合わせる",
    description: "製品の詳細については、提供された窓口メールへお問い合わせください。",
    emailLabel: "製品お問い合わせメール",
    email: "market@easternpurity.com",
  },
} as const satisfies LabInstrumentsPageContent;
