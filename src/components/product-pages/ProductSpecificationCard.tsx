import type { ReactNode } from "react";

export type ProductSpecificationDetail = Readonly<{
  id: string;
  label: string;
  value: string;
}>;

type ProductSpecificationCardProps = Readonly<{
  children: ReactNode;
  details: readonly ProductSpecificationDetail[];
  footer?: ReactNode;
  subtitle: string;
  title: string;
}>;

export function ProductSpecificationCard({
  children,
  details,
  footer,
  subtitle,
  title,
}: ProductSpecificationCardProps) {
  return (
    <article className="flex h-full min-w-0 flex-col rounded-product-card border border-line bg-white p-[clamp(1rem,2.5vw,2rem)] shadow-media">
      <header className="min-h-36 shrink-0 max-[800px]:min-h-0">
        <h2 className="m-0 text-[clamp(1.55rem,2.7vw,2.25rem)] leading-[1.2] font-extrabold">{title}</h2>
        <p className="mt-2 mb-0 text-base leading-[1.6] font-semibold text-ink-muted" lang="en">{subtitle}</p>
      </header>

      {details.length > 0 ? (
        <dl className="grid min-h-0 flex-1 content-start gap-0 border-y border-line max-[800px]:mt-6" lang="en">
          {details.map((detail) => (
            <div className="grid grid-cols-[minmax(7rem,.38fr)_1fr] gap-4 border-b border-line py-3 last:border-b-0 max-[500px]:grid-cols-1 max-[500px]:gap-1" key={detail.id}>
              <dt className="font-bold [overflow-wrap:anywhere] text-ink">{detail.label}</dt>
              <dd className="m-0 min-w-0 leading-[1.65] whitespace-pre-line [overflow-wrap:anywhere] text-ink-muted">{detail.value}</dd>
            </div>
          ))}
        </dl>
      ) : null}

      {children}
      {footer}
    </article>
  );
}
