import type {
  AntibodyProductContent,
  AntibodyProductId,
} from "@/content/antibody-products/types";

const technicalFieldLabels = {
  "product-name": "PRODUCT NAME",
  source: "SOURCE",
  "bead-size": "BEAD SIZE",
  concentration: "CONCENTRATION",
  applications: "APPLICATIONS",
  dilution: "RECOMMENDED DILUTION",
  "storage-antibody-bound": "STORAGE / ANTIBODY BOUND",
  "binding-capacity": "BINDING CAPACITY",
  capacity: "CAPACITY",
  isotype: "ISOTYPE",
  "form-storage-specificity": "FORM / STORAGE / SPECIFICITY",
} as const;

type TechnicalFieldId = keyof typeof technicalFieldLabels;
type TechnicalFieldValues = Readonly<
  Partial<Record<TechnicalFieldId, string>> &
  Record<"product-name", string>
>;

const technicalFieldOrder = Object.keys(technicalFieldLabels) as TechnicalFieldId[];

function createTechnicalDetails(values: TechnicalFieldValues) {
  return technicalFieldOrder.flatMap((id) => {
    const value = values[id];
    return value === undefined ? [] : [{ id, label: technicalFieldLabels[id], value }];
  });
}

type SkuVariant = "small" | "medium" | "bulk";
type SkuVariantParameters = Readonly<{
  suffix: string;
  packSize: string;
  shippingOrigin: string;
}>;

const skuVariantOrder = ["small", "medium", "bulk"] as const satisfies readonly SkuVariant[];

function createSkuRows(
  catalogBase: string,
  variants: Readonly<Record<SkuVariant, SkuVariantParameters>>,
) {
  return skuVariantOrder.map((variant) => ({
    packSize: variants[variant].packSize,
    catalogNumber: `${catalogBase}-${variants[variant].suffix}`,
    shippingOrigin: variants[variant].shippingOrigin,
  }));
}

type SourceProductData = Readonly<{
  subtitle: string;
  details: readonly Readonly<{ id: string; label: string; value: string }>[];
  skus: readonly Readonly<{
    catalogNumber: string;
    packSize: string;
    shippingOrigin: string;
  }>[];
}>;

export const sourceProductData = {
  mab: {
    subtitle: "Anti-Flag Mouse Monoclonal Antibody",
    details: createTechnicalDetails({
      "product-name": "Anti-Flag Tag (1E6) Monoclonal Antibody\nProduced in Mouse",
      source: "This antibody is produced by immunizing animals with a synthetic Flag tag peptide coupled to KLH",
      concentration: "0.5mg/ml in PBS, pH7.4, containing 50% glycerol",
      applications: "WB; Dot; ELISA",
      dilution: "1:500-1:5000",
      isotype: "Mouse IgG2b",
      "form-storage-specificity": "Liquid / -20℃ / All species",
    }),
    skus: createSkuRows("GNI4110-FG", {
      small: { suffix: "S", packSize: "50ug/100ul", shippingOrigin: "大阪" },
      medium: { suffix: "L", packSize: "1mg/2ml", shippingOrigin: "大阪" },
      bulk: { suffix: "Bulk", packSize: "5mg-1g", shippingOrigin: "上海" },
    }),
  },
  hrp: {
    subtitle: "Anti-Flag-HRP Mouse Monoclonal Antibody",
    details: createTechnicalDetails({
      "product-name": "Anti-Flag-Tag Antibody\nPeroxidase (HRP) Conjugated",
      source: "Monoclonal antibody that was produced by immunizing mouse was conjugated to HRP on optimal condition",
      concentration: "1mg/ml in PBS, pH7.4, containing 50% glycerol",
      applications: "WB; Dot; ELISA",
      dilution: "1:500-1:5000",
      isotype: "Mouse IgG2b",
      "form-storage-specificity": "Liquid / -20℃ / All species",
    }),
    skus: createSkuRows("GNI4310-FG", {
      small: { suffix: "S", packSize: "100ul", shippingOrigin: "大阪" },
      medium: { suffix: "L", packSize: "1ml", shippingOrigin: "大阪" },
      bulk: { suffix: "Bulk", packSize: "5-10ml", shippingOrigin: "上海" },
    }),
  },
  "affinity-gel": {
    subtitle: "Anti-Flag Affinity Gel",
    details: createTechnicalDetails({
      "product-name": "Anti-Flag Tag (1E6) Affinity Gel",
      source: "Anti-Flag Affinity Gel is a Protein A purified mouse IgG2b Monoclonal antibody covalently attached to sepharose 4B",
      concentration: "Supplied as a 50% suspension in 50% glycerol with 10mM sodium phosphate, 150mM sodium chloride, pH 7.4, containing 0.02% (v/v) ProClin 300",
      applications: "rProtein Purification, Immunoprecipitation",
      "storage-antibody-bound": "-20℃ / NLT 7.5 grams antibody per liter gel",
      "binding-capacity": "Minimum 1.1mg of a Flag fusion protein eluted per ml of packed resin\nIP: 5μl gel for 500μl crude protein solution",
    }),
    skus: createSkuRows("GNI4510-FG", {
      small: { suffix: "S", packSize: "1ml/PV-2ml", shippingOrigin: "大阪" },
      medium: { suffix: "M", packSize: "5ml/PV-10ml", shippingOrigin: "大阪" },
      bulk: { suffix: "Bulk", packSize: "10ml-1L", shippingOrigin: "上海" },
    }),
  },
  "magnetic-beads": {
    subtitle: "Anti-Flag Magnetic Beads",
    details: createTechnicalDetails({
      "product-name": "Anti-Flag Tag (1E6) Monoclonal Antibody conjugate with Magnetic Beads",
      "bead-size": "200nm",
      concentration: "10mg/ml in PBS, pH7.4, containing with ProClin-300",
      applications: "Affinity Chromatography; Immunoprecipitation (IP)",
      capacity: "≥0.6 mg/mL Binding Capacity",
      isotype: "Mouse IgG2b",
      "form-storage-specificity": "Suspension / 2-8℃ / All species",
    }),
    skus: createSkuRows("GNI4710-FG", {
      small: { suffix: "S", packSize: "1ml", shippingOrigin: "大阪" },
      medium: { suffix: "M", packSize: "5ml", shippingOrigin: "大阪" },
      bulk: { suffix: "Bulk", packSize: "10ml-100ml", shippingOrigin: "上海" },
    }),
  },
} as const satisfies Record<AntibodyProductId, SourceProductData>;

type LocalizedProductPresentation = Readonly<
  Record<AntibodyProductId, Readonly<{ title: string; experimentImageAlt: string }>>
>;

function createProductContent(
  id: AntibodyProductId,
  presentation: LocalizedProductPresentation,
): AntibodyProductContent {
  return {
    id,
    title: presentation[id].title,
    subtitle: sourceProductData[id].subtitle,
    experimentImageAlt: presentation[id].experimentImageAlt,
    details: sourceProductData[id].details,
    skus: sourceProductData[id].skus,
  };
}

export function createAntibodyProducts(presentation: LocalizedProductPresentation) {
  return [
    createProductContent("mab", presentation),
    createProductContent("hrp", presentation),
    createProductContent("affinity-gel", presentation),
    createProductContent("magnetic-beads", presentation),
  ] as const;
}
