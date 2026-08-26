import {
  ProductSkuTable,
  type ProductSkuTableColumn,
} from "@/components/product-pages/ProductSkuTable";
import { ProductSpecificationCard } from "@/components/product-pages/ProductSpecificationCard";
import type {
  AntibodyProductContent,
  AntibodyProductId,
  AntibodyProductsContent,
} from "@/content/antibody-products/types";

const experimentImages = {
  mab: { src: "/antibody-products/experiment-mab-unified.png", width: 1024, height: 1024 },
  hrp: { src: "/antibody-products/experiment-hrp-unified.png", width: 1024, height: 1024 },
  "affinity-gel": { src: "/antibody-products/experiment-gel-unified.png", width: 1024, height: 1024 },
  "magnetic-beads": { src: "/antibody-products/experiment-beads-unified.png", width: 1024, height: 1024 },
} as const satisfies Record<AntibodyProductId, Readonly<{ src: string; width: number; height: number }>>;

type ProductCardProps = Readonly<{
  product: AntibodyProductContent;
  skuLabels: AntibodyProductsContent["skuLabels"];
}>;

export function ProductCard({ product, skuLabels }: ProductCardProps) {
  const experimentImage = experimentImages[product.id];
  const skuColumns: readonly ProductSkuTableColumn<AntibodyProductContent["skus"][number]>[] = [
    {
      id: "pack-size",
      label: skuLabels.packSize,
      getValue: (sku) => sku.packSize,
      cellClassName: "font-semibold",
      rowHeader: true,
      weight: 18,
    },
    {
      id: "catalog-number",
      label: skuLabels.catalogNumber,
      getValue: (sku) => sku.catalogNumber,
      weight: 24,
    },
    {
      id: "shipping-origin",
      label: skuLabels.shippingOrigin,
      getValue: (sku) => sku.shippingOrigin,
      headerClassName: "whitespace-nowrap",
      cellClassName: "whitespace-nowrap",
      weight: 17,
    },
    {
      id: "availability",
      label: skuLabels.availability,
      getValue: () => skuLabels.availabilityNote,
      cellClassName: "leading-5 text-ink-muted",
      weight: 41,
    },
  ];

  return (
    <ProductSpecificationCard
      alignRows
      details={product.details}
      experimentImage={{
        alt: product.experimentImageAlt,
        height: experimentImage.height,
        src: experimentImage.src,
        width: experimentImage.width,
      }}
      logo={{
        alt: "GNI",
        height: 156,
        src: "/antibody-products/gni-logo.png",
        width: 398,
      }}
      subtitle={product.subtitle}
      title={product.title}
    >
      <ProductSkuTable
        ariaLabel={`${product.title} ${skuLabels.title}`}
        columns={skuColumns}
        emptyMessage={skuLabels.incompleteSource}
        getRowKey={(sku) => sku.catalogNumber}
        rows={product.skus}
        sectionClassName="stack:pt-0"
        tableMinWidthClassName="min-w-[560px]"
        title={skuLabels.title}
        titleId={`${product.id}-sku-title`}
      />
    </ProductSpecificationCard>
  );
}
