import type { ElisaReferenceProduct } from "@/content/elisa-kits/types";

export const elisaCompanyDetails = {
  name: "GNI Group LTD.",
  nameJa: "株式会社ジーエヌアイグループ",
  addressLines: [
    "Nihonbashi-Honcho YS Bldg. 3rd Floor, 2-2-2",
    "Nihonbashi-Honcho, Chuo-ku, Tokyo, Japan",
    "Zip code: 103-0023 TEL: +81-3-6214-3600",
  ],
} as const;

export const elisaReferenceProducts = [
  {
    id: "tnf-beta-human",
    chart: {
      responsiveSources: [
        { src: "/elisa-kits/charts/tnf-beta-human-standard-curve-288w.webp", width: 288 },
        { src: "/elisa-kits/charts/tnf-beta-human-standard-curve-576w.webp", width: 576 },
      ],
      src: "/elisa-kits/charts/tnf-beta-human-standard-curve.webp",
      width: 824,
      height: 680,
    },
    panelTone: "warm",
    product: "TNF-β (Human)",
    sensitivity: "22.1pg/mL",
    range: "78.1-5000pg/mL",
    standardStorage: "-20℃",
    otherReagentsStorage: "2-8℃",
    catalogAndPack: "#H99-E51432 - Regular X 96 (T)",
  },
  {
    id: "ifn-gamma-human",
    chart: {
      responsiveSources: [
        { src: "/elisa-kits/charts/ifn-gamma-human-standard-curve-288w.webp", width: 288 },
        { src: "/elisa-kits/charts/ifn-gamma-human-standard-curve-576w.webp", width: 576 },
      ],
      src: "/elisa-kits/charts/ifn-gamma-human-standard-curve-v2.webp",
      width: 1010,
      height: 814,
    },
    panelTone: "light",
    product: "IFN-γ (Human)",
    sensitivity: "5.8pg/mL",
    range: "15.6-1000pg/mL",
    standardStorage: "-20℃",
    otherReagentsStorage: "2-8℃",
    catalogAndPack: "#H99-E50422 - Regular X 96 (T)",
  },
  {
    id: "il-1-beta-mouse",
    chart: {
      responsiveSources: [
        { src: "/elisa-kits/charts/il-1-beta-mouse-standard-curve-288w.webp", width: 288 },
        { src: "/elisa-kits/charts/il-1-beta-mouse-standard-curve-576w.webp", width: 576 },
      ],
      src: "/elisa-kits/charts/il-1-beta-mouse-standard-curve-v2.webp",
      width: 1038,
      height: 824,
    },
    panelTone: "warm",
    product: "IL-1β (Mouse)",
    sensitivity: "7.4pg/mL",
    range: "15.6-1000pg/mL",
    standardStorage: "-20℃",
    otherReagentsStorage: "2-8℃",
    catalogAndPack: "#H95-E52142 - Regular X 96 (T)",
  },
  {
    id: "il-10-mouse",
    chart: {
      responsiveSources: [
        { src: "/elisa-kits/charts/il-10-mouse-standard-curve-288w.webp", width: 288 },
        { src: "/elisa-kits/charts/il-10-mouse-standard-curve-576w.webp", width: 576 },
      ],
      src: "/elisa-kits/charts/il-10-mouse-standard-curve-v2.webp",
      width: 1038,
      height: 834,
    },
    panelTone: "light",
    product: "IL-10 (Mouse)",
    sensitivity: "3.5pg/mL",
    range: "9.4-600pg/mL",
    standardStorage: "-20℃",
    otherReagentsStorage: "2-8℃",
    catalogAndPack: "#H95-E51952 - Regular X 96 (T)",
  },
  {
    id: "il-17a-monkey",
    chart: {
      responsiveSources: [
        { src: "/elisa-kits/charts/il-17a-monkey-standard-curve-288w.webp", width: 288 },
        { src: "/elisa-kits/charts/il-17a-monkey-standard-curve-576w.webp", width: 576 },
      ],
      src: "/elisa-kits/charts/il-17a-monkey-standard-curve-v2.webp",
      width: 1188,
      height: 856,
    },
    panelTone: "warm",
    product: "IL-17A (Monkey)",
    sensitivity: "1.7pg/mL",
    range: "6.3-400pg/mL",
    standardStorage: "-20℃",
    otherReagentsStorage: "2-8℃",
    catalogAndPack: "#H98-E51612 - Regular X 96 (T)",
  },
] as const satisfies readonly ElisaReferenceProduct[];
