import Image from "next/image";

import type {
  AntibodyProductContent,
  AntibodyProductId,
  AntibodyProductsContent,
} from "@/content/antibody-products/types";

import { SkuTable } from "./SkuTable";

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

  return (
    <article className="flex h-full min-w-0 flex-col rounded-product-card border border-line bg-white p-[clamp(1rem,2.5vw,2rem)] shadow-media">
      <header className="min-h-36 shrink-0 max-[800px]:min-h-0">
        <h2 className="m-0 text-[clamp(1.55rem,2.7vw,2.25rem)] leading-[1.2] font-extrabold">{product.title}</h2>
        <p className="mt-2 mb-0 text-base leading-[1.6] font-semibold text-ink-muted" lang="en">{product.subtitle}</p>
      </header>

      {product.details.length > 0 ? (
        <dl className="grid min-h-0 flex-1 content-start gap-0 border-y border-line max-[800px]:mt-6" lang="en">
          {product.details.map((detail) => (
            <div className="grid grid-cols-[minmax(7rem,.38fr)_1fr] gap-4 border-b border-line py-3 last:border-b-0 max-[500px]:grid-cols-1 max-[500px]:gap-1" key={detail.id}>
              <dt className="font-bold text-ink">{detail.label}</dt>
              <dd className="m-0 min-w-0 leading-[1.65] whitespace-pre-line text-ink-muted">{detail.value}</dd>
            </div>
          ))}
        </dl>
      ) : null}

      <SkuTable
        labels={skuLabels}
        productId={product.id}
        productTitle={product.title}
        skus={product.skus}
      />

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
    </article>
  );
}
