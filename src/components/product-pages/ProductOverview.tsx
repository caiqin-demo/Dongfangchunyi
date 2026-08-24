import Image from "next/image";

type ProductOverviewProps = Readonly<{
  description: string;
  heading: string;
  imageSrc: string;
  title: string;
}>;

export function ProductOverview({ description, heading, imageSrc, title }: ProductOverviewProps) {
  return (
    <section className="mx-auto grid w-[calc(100%-4rem)] max-w-panel grid-cols-[1fr_1.1fr] items-stretch gap-12 py-16 max-[960px]:w-[calc(100%-2rem)] max-[800px]:grid-cols-1 max-[640px]:w-[calc(100%-1.5rem)] max-[640px]:gap-7 max-[640px]:py-10" aria-labelledby="overview-title">
      <div className="relative min-h-96 overflow-hidden rounded-product-card border border-line bg-white shadow-media max-[640px]:min-h-72" aria-hidden="true">
        <Image className="object-contain" src={imageSrc} alt="" fill sizes="(max-width: 800px) 100vw, 48vw" />
      </div>
      <article className="flex min-w-0 flex-col justify-center rounded-product-card border border-line bg-white p-[clamp(1.5rem,4vw,3rem)] shadow-media">
        <p className="mb-3 text-sm font-extrabold tracking-[.2em] text-accent">{heading}</p>
        <h2 className="m-0 text-about-title" id="overview-title">{title}</h2>
        <p className="mt-6 mb-0 text-[clamp(1rem,1.5vw,1.125rem)] leading-[1.8] text-ink-muted">{description}</p>
      </article>
    </section>
  );
}
