export type AntibodyProductId = "mab" | "hrp" | "affinity-gel" | "magnetic-beads";

export type AntibodyTagId =
  | "flag" | "myc" | "his" | "ha" | "v5" | "gst" | "gfp"
  | "beta-actin" | "gamma-actin" | "gapdh" | "beta-tubulin" | "alpha-tubulin"
  | "pa" | "target" | "mbp" | "strepii" | "avi" | "dsred";

type Detail = Readonly<{ id: string; label: string; value: string }>;
type Sku = Readonly<{ catalogNumber: string; packSize: string; shippingOrigin: string }>;

export type AntibodyProductContent = Readonly<{
  id: AntibodyProductId;
  title: string;
  subtitle: string;
  experimentImageAlt: string;
  details: readonly Detail[];
  skus: readonly Sku[];
}>;

export type AntibodyProductsContent = Readonly<{
  metadata: Readonly<{ title: string; description: string }>;
  eyebrow: string;
  title: string;
  intro: string;
  products: readonly [
    AntibodyProductContent,
    AntibodyProductContent,
    AntibodyProductContent,
    AntibodyProductContent,
  ];
  skuLabels: Readonly<{
    title: string;
    packSize: string;
    catalogNumber: string;
    availability: string;
    availabilityNote: string;
    shippingOrigin: string;
    incompleteSource: string;
  }>;
  matrix: Readonly<{
    title: string;
    originNote: string;
    tagType: string;
    availabilityHeader: string;
    productLabels: Record<AntibodyProductId, string>;
    available: string;
    unavailable: string;
    rows: readonly Readonly<{
      id: AntibodyTagId;
      label: string;
      availability: Readonly<Record<AntibodyProductId, boolean>>;
    }>[];
  }>;
  contact: Readonly<{ title: string; description: string; emailLabel: string; email: string }>;
  publications: Readonly<{
    title: string;
    items: readonly Readonly<{ id: string; citation: string; articleTitle: string; url: string }>[];
  }>;
}>;
