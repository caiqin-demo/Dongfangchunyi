import Image, { type ImageProps } from "next/image";

import type { OtherBusinessServicesContent } from "@/content/other-business-services";

type BusinessConsultingCardProps = Readonly<{
  content: OtherBusinessServicesContent["businessConsulting"];
  image: ImageProps["src"];
}>;

export function BusinessConsultingCard({ content, image }: BusinessConsultingCardProps) {
  return (
    <section className="bg-ui-subtle py-8" aria-labelledby="business-consulting-title" lang="zh-CN">
      <article className="page-container overflow-hidden rounded-product-card border border-line bg-white shadow-media">
        <div className="grid page:grid-cols-[2fr_5fr]">
          <div className="relative isolate aspect-[161/100] overflow-hidden bg-ui-subtle page:aspect-auto">
          <Image
            alt=""
            className="-z-10 object-cover object-center"
            fill
            sizes="(min-width: 1280px) 26vw, (min-width: 960px) 29vw, 100vw"
            src={image}
          />
          </div>

          <div className="min-w-0 border-t border-line p-[clamp(1.25rem,3vw,2.5rem)] page:border-t-0 page:border-l">
          <h2 className="m-0 text-product-section-title" id="business-consulting-title">{content.title}</h2>
          <p className="mt-2 mb-0 text-service-current-title text-ink-muted">{content.subtitle}</p>

          <ul className="mt-8 grid list-none gap-6 p-0 page:grid-cols-4">
            {content.offerings.map((offering) => (
              <li className="min-w-0" key={offering.id}>
                <div className="flex items-center gap-3">
                  <span className="size-3 shrink-0 rounded-round border border-ink-muted" aria-hidden="true" />
                  <h3 className="m-0 text-service-current-title">{offering.title}</h3>
                </div>
                <p className="mt-3 mb-0 text-service-body text-ink-muted">{offering.description}</p>
              </li>
            ))}
          </ul>
        </div>
        </div>
      </article>
    </section>
  );
}
