import Image from "next/image";

import {
  ProductSkuTable,
  type ProductSkuTableColumn,
} from "@/components/product-pages/ProductSkuTable";
import type {
  LabInstrumentFeature,
  LabInstrumentsPageContent,
  LabInstrumentSku,
} from "@/content/lab-instruments/types";

function FeatureList({
  features,
  showAccent = true,
}: Readonly<{
  features: readonly LabInstrumentFeature[];
  showAccent?: boolean;
}>) {
  return (
    <ul className="m-0 grid list-none gap-4 p-0">
      {features.map((feature) => (
        <li className={showAccent ? "border-l-4 border-accent pl-4" : undefined} key={feature.id}>
          <h3 className="m-0 text-lg font-extrabold leading-[1.4] text-ink">{feature.title}</h3>
          <p className="mt-1 mb-0 text-product-section-body text-ink-muted">{feature.description}</p>
        </li>
      ))}
    </ul>
  );
}

function createSkuColumns(
  labels: LabInstrumentsPageContent["skuLabels"],
): readonly ProductSkuTableColumn<LabInstrumentSku>[] {
  return [
    {
      id: "specification",
      label: labels.specification,
      getValue: (sku) => sku.specification,
      cellClassName: "font-semibold",
      rowHeader: true,
      weight: 28,
    },
    {
      id: "catalog-number",
      label: labels.catalogNumber,
      getValue: (sku) => sku.catalogNumber,
      weight: 24,
    },
    {
      id: "availability",
      label: labels.availability,
      getValue: (sku) => sku.availability,
      weight: 24,
    },
    {
      id: "shipping-origin",
      label: labels.shippingOrigin,
      getValue: (sku) => sku.shippingOrigin,
      weight: 24,
    },
  ];
}

export function LabInstrumentPanels({ content }: Readonly<{ content: LabInstrumentsPageContent }>) {
  const skuColumns = createSkuColumns(content.skuLabels);

  return (
    <div className="grid gap-8 max-sm:gap-6">
      <article className="@container/instrument overflow-hidden rounded-product-card border border-line bg-white shadow-media" aria-labelledby="pipette-title">
        <div className="grid grid-cols-[.82fr_1.18fr] max-stack:grid-cols-1">
          <div className="relative isolate min-h-[30rem] overflow-hidden bg-ui-footer max-stack:aspect-[8/5] max-stack:min-h-0 max-compact:aspect-[4/3]">
            <Image
              alt={content.pipette.imageAlt}
              className="-z-10 object-cover object-center"
              fill
              loading="eager"
              sizes="(max-width: 800px) 100vw, 42vw"
              src="/lab-instruments/pipette-product.webp"
            />
            <header className="absolute inset-0 text-white">
              <h2 className="absolute top-1/2 left-1/2 m-0 w-[calc(100%-2.5rem)] -translate-x-1/2 -translate-y-1/2 text-center text-product-feature-display-title" id="pipette-title">
                {content.pipette.title}
              </h2>
              <p className="absolute right-[clamp(1.25rem,3vw,2.5rem)] bottom-[clamp(1.25rem,3vw,2.5rem)] left-[clamp(1.25rem,3vw,2.5rem)] m-0 text-center text-product-feature-display-body text-white">
                {content.pipette.tagline}
              </p>
            </header>
          </div>

          <div className="grid grid-cols-[minmax(8rem,.38fr)_1fr] items-center gap-6 border-l border-line p-[clamp(1.25rem,3vw,2.5rem)] max-stack:border-t max-stack:border-l-0 max-compact:grid-cols-1">
            <div className="mx-auto w-full max-w-52">
              <Image
                alt=""
                className="h-auto w-full object-contain"
                height={1862}
                sizes="(max-width: 500px) 13rem, 12vw"
                src="/lab-instruments/pipette-core-transparent.webp"
                width={845}
              />
            </div>
            <div>
              <p className="m-0 text-sm font-extrabold tracking-[.16em] text-accent">{content.pipette.coreLabel}</p>
              <h3 className="mt-2 mb-0 text-2xl font-extrabold text-ink">{content.pipette.coreTitle}</h3>
              <p className="mt-4 mb-0 text-product-section-body text-ink-muted">{content.pipette.coreDescription}</p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-[.8fr_1.2fr] gap-8 border-t border-line p-[clamp(1.25rem,3vw,2.5rem)] @max-instrument-stack/instrument:grid-cols-1">
          <div className="grid grid-cols-[minmax(7.5rem,.46fr)_1fr] items-center gap-[clamp(1rem,2.5vw,2rem)]">
            <Image
              alt={content.pipette.imageAlt}
              className="mx-auto h-auto w-full max-w-48 object-contain"
              height={1462}
              sizes="(max-width: 800px) 38vw, 15vw"
              src="/lab-instruments/pipette-body-transparent-source.webp"
              width={438}
            />
            <FeatureList features={content.pipette.features} showAccent={false} />
          </div>
          <ProductSkuTable
            ariaLabel={`${content.pipette.title} ${content.skuLabels.title}`}
            columns={skuColumns}
            getRowKey={(sku) => sku.id}
            rows={content.pipette.skus}
            sectionClassName="pt-0"
            tableMinWidthClassName="min-w-[560px]"
            title={content.skuLabels.title}
            titleId="pipette-sku-title"
          />
        </div>
      </article>

      <section className="rounded-product-card border border-line bg-white p-[clamp(1.25rem,3vw,2.5rem)] shadow-media" aria-labelledby="compact-instruments-title">
        <h2 className="m-0 text-product-section-title" id="compact-instruments-title">{content.compactInstruments.title}</h2>
        <div className="mt-7 grid grid-cols-2 gap-6 max-stack:grid-cols-1">
          {content.compactInstruments.products.map((product) => {
            const isDomi = product.id === "domi-metal-bath";

            return (
              <article className="flex min-w-0 flex-col rounded-product-card border border-line bg-ui-subtle p-[clamp(1rem,2.5vw,2rem)]" key={product.id}>
                <h3 className={`m-0 text-product-brand-title ${isDomi ? "text-brand-domi" : "text-brand-wordmark-accent"}`}>
                  {product.title}
                </h3>
                <div className="mt-6">
                  <FeatureList features={product.features} showAccent={false} />
                </div>
                <ProductSkuTable
                  ariaLabel={`${product.title} ${content.skuLabels.title}`}
                  columns={skuColumns}
                  getRowKey={(sku) => sku.id}
                  rows={product.skus}
                  tableMinWidthClassName="min-w-[460px]"
                  title={content.skuLabels.title}
                  titleId={`compact-sku-title-${product.id}`}
                />
                <Image
                  alt={product.imageAlt}
                  className="mt-7 h-auto w-full object-contain"
                  height={isDomi ? 546 : 1332}
                  sizes="(max-width: 800px) 100vw, 50vw"
                  src={isDomi
                    ? "/lab-instruments/domi-metal-bath-transparent.webp"
                    : "/lab-instruments/curling-vortex-mixer-transparent.webp"}
                  width={isDomi ? 1628 : 3086}
                />
              </article>
            );
          })}
        </div>
      </section>
    </div>
  );
}
