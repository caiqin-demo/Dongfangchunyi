import Image from "next/image";
import type { ReactNode } from "react";

export type ProductSpecificationDetail = Readonly<{
  id: string;
  label: string;
  value: string;
}>;

export type ProductSpecificationImage = Readonly<{
  alt: string;
  height: number;
  src: string;
  width: number;
}>;

type ProductSpecificationCardProps = Readonly<{
  alignRows?: boolean;
  children: ReactNode;
  details: readonly ProductSpecificationDetail[];
  experimentImage?: ProductSpecificationImage;
  logo?: ProductSpecificationImage;
  subtitle: string;
  title: string;
}>;

export function ProductSpecificationCard({
  alignRows = false,
  children,
  details,
  experimentImage,
  logo,
  subtitle,
  title,
}: ProductSpecificationCardProps) {
  const mediaAlignment = logo && experimentImage
    ? "justify-between"
    : experimentImage
      ? "justify-start @card-media/spec-card:justify-end"
      : "justify-start";

  return (
    <article className={`flex h-full min-w-0 flex-col rounded-product-card border border-line bg-white p-[clamp(1rem,2.5vw,2rem)] shadow-media ${alignRows ? "stack:row-span-4 stack:grid stack:grid-cols-1 stack:grid-rows-subgrid stack:gap-y-6" : ""}`}>
      <header className={alignRows ? "shrink-0" : "min-h-36 shrink-0 max-stack:min-h-0"}>
        <h2 className="m-0 text-product-section-title">{title}</h2>
        <p className="mt-2 mb-0 text-base leading-[1.6] font-semibold text-ink-muted" lang="en">{subtitle}</p>
      </header>

      {details.length > 0 ? (
        <dl className="@container/details-card grid min-h-0 flex-1 content-start gap-0 border-y border-line max-stack:mt-6" lang="en">
          {details.map((detail) => (
            <div className="grid grid-cols-1 gap-1 border-b border-line py-3 last:border-b-0 @card-details/details-card:grid-cols-[minmax(8.5rem,.38fr)_1fr] @card-details/details-card:gap-4" key={detail.id}>
              <dt className="font-bold text-ink">{detail.label}</dt>
              <dd className="m-0 min-w-0 text-product-section-body whitespace-pre-line [overflow-wrap:anywhere] text-ink-muted">{detail.value}</dd>
            </div>
          ))}
        </dl>
      ) : null}

      {children}
      {logo || experimentImage ? (
        <div className={`@container/spec-card mt-6 ${alignRows ? "stack:mt-0" : ""}`}>
          <div className={`flex shrink-0 flex-col items-start gap-4 @card-media/spec-card:flex-row @card-media/spec-card:items-end ${mediaAlignment}`}>
            {logo ? (
              <div className="h-16 w-40 max-w-full shrink-0">
                <Image
                  className="h-full w-full object-contain object-left-bottom"
                  src={logo.src}
                  width={logo.width}
                  height={logo.height}
                  alt={logo.alt}
                  sizes="160px"
                />
              </div>
            ) : null}
            {experimentImage ? (
              <div className="aspect-square w-60 max-w-full shrink-0">
                <Image
                  className="h-full w-full object-contain object-left-bottom @card-media/spec-card:object-right-bottom"
                  src={experimentImage.src}
                  width={experimentImage.width}
                  height={experimentImage.height}
                  alt={experimentImage.alt}
                  sizes="240px"
                />
              </div>
            ) : null}
          </div>
        </div>
      ) : null}
    </article>
  );
}
