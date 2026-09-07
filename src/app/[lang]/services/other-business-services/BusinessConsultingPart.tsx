import Image, { type ImageProps } from "next/image";

import type { OtherBusinessServicesContent } from "@/content/other-business-services";

type BusinessConsultingPartProps = Readonly<{
  content: OtherBusinessServicesContent["businessConsulting"];
  image: ImageProps["src"];
}>;

export function BusinessConsultingPart({ content, image }: BusinessConsultingPartProps) {
  return (
    <section aria-labelledby="business-consulting-title" lang="zh-CN">
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
          <p className="mt-2 mb-0 text-base leading-[1.6] font-semibold text-ink-muted">{content.subtitle}</p>

          <ul className="mt-8 grid list-none gap-6 p-0 page:grid-cols-4 page:grid-rows-[auto_auto] page:gap-y-0">
            {content.offerings.map((offering) => (
              <li className="grid min-w-0 grid-cols-[min-content_minmax(0,1fr)] gap-x-3 page:row-span-2 page:grid-rows-subgrid" key={offering.id}>
                <span className="col-start-1 row-start-1 size-3 self-center rounded-round border border-ink-muted" aria-hidden="true" />
                <h3 className="col-start-2 row-start-1 m-0 font-bold text-ink">{offering.title}</h3>
                <p className="col-start-2 row-start-2 mt-3 mb-0 text-product-section-body [overflow-wrap:anywhere] text-ink-muted">{offering.description}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
