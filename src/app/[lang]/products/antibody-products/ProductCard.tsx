import Image from "next/image";

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
      details={product.details}
      footer={(
        <div className="mt-6 flex h-60 shrink-0 items-end justify-between gap-4 max-[800px]:min-h-60 max-[500px]:h-auto max-[500px]:min-h-0 max-[500px]:flex-col max-[500px]:items-start">
          <Image className="h-auto w-28 shrink-0 bg-transparent max-[900px]:w-16" src="/antibody-products/gni-logo.png" width={398} height={156} alt="" aria-hidden="true" />
          <div className="h-60 w-60 shrink-0 max-[500px]:h-52 max-[500px]:w-full">
            <Image
              className="h-full w-full object-contain object-right-bottom"
              src={experimentImage.src}
              width={experimentImage.width}
              height={experimentImage.height}
              alt={product.experimentImageAlt}
            />
          </div>
        </div>
      )}
      subtitle={product.subtitle}
      title={product.title}
    >
      <ProductSkuTable
        ariaLabel={`${product.title} ${skuLabels.title}`}
        columns={skuColumns}
        emptyMessage={skuLabels.incompleteSource}
        getRowKey={(sku) => sku.catalogNumber}
        rows={product.skus}
        sectionClassName="h-[21rem] max-[800px]:h-auto"
        tableMinWidthClassName="min-w-[560px]"
        title={skuLabels.title}
        titleId={`${product.id}-sku-title`}
      />
    </ProductSpecificationCard>
  );
}
