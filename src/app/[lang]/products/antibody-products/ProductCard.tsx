import Image from "next/image";

import type {
  AntibodyProductContent,
  AntibodyProductId,
  AntibodyProductsContent,
} from "@/content/antibody-products/types";

const experimentImages = {
  mab: { src: "/antibody-products/experiment-mab.png", width: 678, height: 734 },
  hrp: { src: "/antibody-products/experiment-hrp.png", width: 1400, height: 870 },
  "affinity-gel": { src: "/antibody-products/experiment-gel.png", width: 1300, height: 850 },
  "magnetic-beads": { src: "/antibody-products/experiment-beads.png", width: 620, height: 720 },
} as const satisfies Record<AntibodyProductId, Readonly<{ src: string; width: number; height: number }>>;

type ProductCardProps = Readonly<{
  product: AntibodyProductContent;
  skuLabels: AntibodyProductsContent["skuLabels"];
}>;

export function ProductCard({ product, skuLabels }: ProductCardProps) {
  const experimentImage = experimentImages[product.id];

  return (
    <article className="flex h-full min-w-0 flex-col rounded-product-card border border-line bg-white p-[clamp(1rem,2.5vw,2rem)] shadow-media">
      <h2 className="m-0 text-[clamp(1.55rem,2.7vw,2.25rem)] leading-[1.2] font-extrabold">{product.title}</h2>
      <p className="mt-2 mb-0 text-base leading-[1.6] font-semibold text-ink-muted" lang="en">{product.subtitle}</p>

      <dl className="mt-6 grid gap-0 border-y border-line">
        {product.details.map((detail) => (
          <div className="grid grid-cols-[minmax(7rem,.38fr)_1fr] gap-4 border-b border-line py-3 last:border-b-0 max-[500px]:grid-cols-1 max-[500px]:gap-1" key={detail.id}>
            <dt className="font-bold text-ink">{detail.label}</dt>
            <dd className="m-0 min-w-0 leading-[1.65] text-ink-muted">{detail.value}</dd>
          </div>
        ))}
      </dl>

      <section className="mt-auto pt-7" aria-labelledby={`${product.id}-sku-title`}>
        <h3 className="mb-3 text-lg font-bold" id={`${product.id}-sku-title`}>{skuLabels.title}</h3>
        {product.skus.length > 0 ? (
          <div className="overflow-x-auto rounded-control border border-line [contain:paint]" role="region" aria-label={`${product.title} ${skuLabels.title}`} tabIndex={0}>
            <table className="w-full min-w-[620px] border-collapse text-left text-sm">
              <thead className="bg-ui-card text-on-dark">
                <tr>
                  <th className="px-4 py-3" scope="col">{skuLabels.packSize}</th>
                  <th className="px-4 py-3" scope="col">{skuLabels.catalogNumber}</th>
                  <th className="px-4 py-3" scope="col">{skuLabels.shippingOrigin}</th>
                  <th className="px-4 py-3" scope="col">{skuLabels.availability}</th>
                </tr>
              </thead>
              <tbody>
                {product.skus.map((sku) => (
                  <tr className="border-t border-line" key={sku.catalogNumber}>
                    <td className="px-4 py-3 font-semibold">{sku.packSize}</td>
                    <td className="px-4 py-3">{sku.catalogNumber}</td>
                    <td className="px-4 py-3">{sku.shippingOrigin}</td>
                    <td className="px-4 py-3 text-ink-muted">{skuLabels.availabilityNote}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        ) : <p className="rounded-control border border-line bg-ui-subtle p-4 leading-[1.7] text-ink-muted">{skuLabels.incompleteSource}</p>}
      </section>

      <div className="mt-6 flex min-h-60 items-end justify-between gap-4">
        <Image className="h-auto w-28 shrink-0 bg-transparent" src="/antibody-products/gni-logo.png" width={398} height={156} alt="" aria-hidden="true" />
        <Image
          className="h-auto max-h-60 w-auto max-w-[58%] object-contain object-right-bottom"
          src={experimentImage.src}
          width={experimentImage.width}
          height={experimentImage.height}
          alt={product.experimentImageAlt}
        />
      </div>
    </article>
  );
}
