import type { SimpleProductPageContent } from "@/content/simple-product-pages/types";

type ElisaKitDetail = Readonly<{
  id: string;
  label: string;
  value: string;
}>;

export type ElisaKitSku = Readonly<{
  availability: string;
  id: "48-tests" | "96-tests";
  packSize: string;
  shippingOrigin: string;
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
    packSize: string;
    shippingOrigin: string;
    title: string;
  }>;
}>;
