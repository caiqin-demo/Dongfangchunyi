import Image from "next/image";

import { elisaCompanyDetails } from "@/content/elisa-kits/source-reference-products";
import type { ElisaKitsContent } from "@/content/elisa-kits/types";

type ElisaManualSeriesProps = Readonly<{
  content: ElisaKitsContent["reference"];
}>;

export function ElisaManualSeries({ content }: ElisaManualSeriesProps) {
  return (
    <article className="min-w-0 overflow-hidden rounded-product-card border border-line bg-white shadow-media">
      <header className="p-[clamp(1.25rem,3vw,2.5rem)]">
        <h2 className="m-0 text-product-section-title">
          H<span className="text-brand-wordmark-accent">a</span>nn<span className="text-brand-wordmark-accent">a</span>H
        </h2>
        <address className="mt-5 text-product-section-body not-italic text-ui-hero">
          <p className="m-0 font-extrabold">{elisaCompanyDetails.name}</p>
          <p className="m-0 font-bold" lang="ja">{elisaCompanyDetails.nameJa}</p>
          <p className="mt-2 mb-0">
            {elisaCompanyDetails.addressLines.map((line) => <span className="block" key={line}>{line}</span>)}
          </p>
        </address>
      </header>

      <div
        aria-label={content.regionLabel}
        className="overflow-x-auto outline-none focus-visible:ring-4 focus-visible:ring-accent focus-visible:ring-inset"
        role="region"
        tabIndex={0}
      >
        <div className="grid min-w-[75rem] grid-cols-5 items-stretch">
          {content.products.map((product) => {
            const copy = content.productCopy[product.id];
            const panelBackground = product.panelTone === "warm" ? "bg-manual-panel-warm" : "bg-white";
            const headingId = `elisa-manual-${product.id}`;
            const chartSrcSet = [
              ...product.chart.responsiveSources,
              { src: product.chart.src, width: product.chart.width },
            ].map(({ src, width }) => `${src} ${width}w`).join(", ");

            return (
              <section
                aria-labelledby={headingId}
                className={`flex min-w-0 flex-col px-4 pt-8 pb-6 ${panelBackground}`}
                key={product.id}
              >
                <header className="min-h-28 text-center" lang="en">
                  <p className="m-0 text-xl leading-tight font-extrabold">{content.labels.series}</p>
                  <h3 className="mt-2 mb-0 text-[1.35rem] leading-[1.2] font-extrabold" id={headingId}>
                    {product.product} {content.labels.userManual}
                  </h3>
                </header>

                <p className="mt-10 mb-0 min-h-24 text-xl leading-[1.55]">
                  <span className="block">{copy.kitTitle}</span>
                  <span className="block">{copy.manualLabel}</span>
                </p>

                <dl className="mt-7 grid min-w-0 grid-cols-[4.75rem_1fr] gap-x-2 gap-y-2 text-product-section-body">
                  <dt lang="en">{content.labels.sensitivity}</dt>
                  <dd className="m-0">{product.sensitivity}</dd>
                  <dt lang="en">{content.labels.range}</dt>
                  <dd className="m-0">{product.range}</dd>
                  <dt lang="en">{content.labels.storage}</dt>
                  <dd className="m-0 grid min-w-0 grid-cols-[1fr_auto] gap-x-2 gap-y-2">
                    <span>{content.labels.standard}</span><span>{product.standardStorage}</span>
                    <span>{content.labels.otherReagents}</span><span>{product.otherReagentsStorage}</span>
                  </dd>
                </dl>

                <p className="mt-9 mb-0 text-product-section-body" lang="en">{product.catalogAndPack}</p>

                <div className="mt-auto pt-12">
                  <picture>
                    <source sizes="288px" srcSet={chartSrcSet} type="image/webp" />
                    <Image
                      alt={copy.chartAlt}
                      className="h-auto w-full object-contain"
                      height={product.chart.height}
                      src={product.chart.src}
                      unoptimized
                      width={product.chart.width}
                    />
                  </picture>
                </div>
              </section>
            );
          })}
        </div>
      </div>
    </article>
  );
}
