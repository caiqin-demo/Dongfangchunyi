import type { SimpleProductPageContent } from "@/content/simple-product-pages/types";
import type { ElisaCatalogColumnId, ElisaCatalogRow } from "@/content/elisa-kits/source-catalog";

type ElisaKitDetail = Readonly<{
  id: string;
  label: string;
  value: string;
}>;

export type ElisaKitSku = Readonly<{
  availability: string;
  catalogNumber?: string;
  id: "48-tests" | "96-tests";
  packSize: string;
  shippingOrigin: string;
}>;

export type ElisaReferenceProductId =
  | "tnf-beta-human"
  | "ifn-gamma-human"
  | "il-1-beta-mouse"
  | "il-10-mouse"
  | "il-17a-monkey";

export type ElisaReferenceProduct = Readonly<{
  catalogAndPack: string;
  chart: Readonly<{
    height: number;
    src: string;
    width: number;
  }>;
  id: ElisaReferenceProductId;
  otherReagentsStorage: string;
  panelTone: "warm" | "light";
  product: string;
  range: string;
  sensitivity: string;
  standardStorage: string;
}>;

export type ElisaKitsContent = SimpleProductPageContent & Readonly<{
  product: Readonly<{
    details: readonly ElisaKitDetail[];
    skus: readonly [ElisaKitSku, ElisaKitSku];
    subtitle: string;
    title: string;
  }>;
  skuLabels: Readonly<{
    availability: string;
    catalogNumber: string;
    packSize: string;
    shippingOrigin: string;
    title: string;
  }>;
  reference: Readonly<{
    labels: Readonly<{
      otherReagents: string;
      range: string;
      sensitivity: string;
      series: string;
      standard: string;
      storage: string;
      userManual: string;
    }>;
    productCopy: Readonly<Record<ElisaReferenceProductId, Readonly<{
      chartAlt: string;
      kitTitle: string;
      manualLabel: string;
    }>>>;
    products: readonly ElisaReferenceProduct[];
    regionLabel: string;
    title: string;
  }>;
  catalog: Readonly<{
    available: string;
    columnLabels: Readonly<Record<ElisaCatalogColumnId, string>>;
    note: string;
    regionLabel: string;
    rowHeaderLabel: string;
    rows: readonly ElisaCatalogRow[];
    title: string;
    unavailable: string;
  }>;
}>;
