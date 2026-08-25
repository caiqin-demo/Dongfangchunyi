import type { SimpleProductPageContent } from "@/content/simple-product-pages/types";

export type LabInstrumentSku = Readonly<{
  availability: string;
  catalogNumber: string;
  id: string;
  shippingOrigin: string;
  specification: string;
}>;

export type LabInstrumentFeature = Readonly<{
  description: string;
  id: string;
  title: string;
}>;

type CompactInstrument<Id extends string> = Readonly<{
  features: readonly LabInstrumentFeature[];
  id: Id;
  imageAlt: string;
  skus: readonly LabInstrumentSku[];
  title: string;
}>;

export type LabInstrumentsPageContent = Omit<SimpleProductPageContent, "overview"> & Readonly<{
  compactInstruments: Readonly<{
    products: readonly [
      CompactInstrument<"domi-metal-bath">,
      CompactInstrument<"curling-vortex-mixer">,
    ];
    title: string;
  }>;
  pipette: Readonly<{
    coreDescription: string;
    coreLabel: string;
    coreTitle: string;
    features: readonly [LabInstrumentFeature, LabInstrumentFeature];
    imageAlt: string;
    sectionTitle: string;
    skus: readonly LabInstrumentSku[];
    tagline: string;
    title: string;
  }>;
  skuLabels: Readonly<{
    availability: string;
    catalogNumber: string;
    shippingOrigin: string;
    specification: string;
    title: string;
  }>;
}>;
