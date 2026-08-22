import Image from "next/image";

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

  return (
    <article className="flex h-full min-w-0 flex-col rounded-product-card border border-line bg-white p-[clamp(1rem,2.5vw,2rem)] shadow-media">
      <header className="min-h-36 shrink-0 max-[800px]:min-h-0">
        <h2 className="m-0 text-[clamp(1.55rem,2.7vw,2.25rem)] leading-[1.2] font-extrabold">{product.title}</h2>
        <p className="mt-2 mb-0 text-base leading-[1.6] font-semibold text-ink-muted" lang="en">{product.subtitle}</p>
      </header>

      <dl className="grid min-h-0 flex-1 content-start gap-0 border-y border-line max-[800px]:mt-6">
        {product.details.map((detail) => (
          <div className="grid grid-cols-[minmax(7rem,.38fr)_1fr] gap-4 border-b border-line py-3 last:border-b-0 max-[500px]:grid-cols-1 max-[500px]:gap-1" key={detail.id}>
            <dt className="font-bold text-ink">{detail.label}</dt>
            <dd className="m-0 min-w-0 leading-[1.65] text-ink-muted">{detail.value}</dd>
          </div>
        ))}
      </dl>

      <section className="h-[21rem] shrink-0 pt-7 max-[800px]:h-auto" aria-labelledby={`${product.id}-sku-title`}>
        <h3 className="mb-3 text-lg font-bold" id={`${product.id}-sku-title`}>{skuLabels.title}</h3>
        {product.skus.length > 0 ? (
          <div className="overflow-x-auto rounded-control border border-line [contain:paint]" role="region" aria-label={`${product.title} ${skuLabels.title}`} tabIndex={0}>
            <table className="w-full min-w-[560px] table-fixed border-collapse text-left text-sm">
              <colgroup>
                <col className="w-[18%]" />
                <col className="w-[24%]" />
                <col className="w-[17%]" />
                <col className="w-[41%]" />
              </colgroup>
              <thead className="bg-ui-card text-on-dark">
                <tr className="h-14">
                  <th className="px-3 py-2" scope="col">{skuLabels.packSize}</th>
                  <th className="px-3 py-2" scope="col">{skuLabels.catalogNumber}</th>
                  <th className="px-3 py-2 whitespace-nowrap" scope="col">{skuLabels.shippingOrigin}</th>
                  <th className="px-3 py-2" scope="col">{skuLabels.availability}</th>
                </tr>
              </thead>
              <tbody>
                {product.skus.map((sku) => (
                  <tr className="h-16 border-t border-line" key={sku.catalogNumber}>
                    <td className="px-3 py-2 font-semibold">{sku.packSize}</td>
                    <td className="px-3 py-2">{sku.catalogNumber}</td>
                    <td className="px-3 py-2 whitespace-nowrap">{sku.shippingOrigin}</td>
                    <td className="px-3 py-2 leading-5 text-ink-muted">{skuLabels.availabilityNote}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        ) : <p className="rounded-control border border-line bg-ui-subtle p-4 leading-[1.7] text-ink-muted">{skuLabels.incompleteSource}</p>}
      </section>

      <div className="mt-6 flex h-60 shrink-0 items-end justify-between gap-4 max-[800px]:min-h-60">
        <Image className="h-auto w-28 shrink-0 bg-transparent max-[900px]:w-16" src="/antibody-products/gni-logo.png" width={398} height={156} alt="" aria-hidden="true" />
        <div className="h-60 w-60 shrink-0">
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
