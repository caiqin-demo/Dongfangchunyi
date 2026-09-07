import Image, { type ImageProps } from "next/image";

import type { OtherBusinessServicesContent } from "@/content/other-business-services";

type SelfCoachingWorkshopPartProps = Readonly<{
  content: OtherBusinessServicesContent["coachingPrograms"][0];
  image: ImageProps["src"];
}>;

export function SelfCoachingWorkshopPart({ content, image }: SelfCoachingWorkshopPartProps) {
  return (
    <section className="border-t border-line" aria-labelledby={`${content.id}-title`} lang="zh-CN">
      <div className="grid page:grid-cols-[5fr_2fr]">
        <div className="relative isolate aspect-[161/100] overflow-hidden bg-ui-subtle page:order-2 page:aspect-auto">
          <Image
            alt=""
            className="-z-10 object-cover object-center"
            fill
            sizes="(min-width: 1280px) 26vw, (min-width: 960px) 29vw, 100vw"
            src={image}
          />
        </div>

        <div className="min-w-0 border-t border-line bg-other-business-service-workshop p-[clamp(1.25rem,3vw,2.5rem)] text-on-dark page:border-t-0 page:border-r">
          <h2 className="m-0 text-product-section-title" id={`${content.id}-title`}>{content.title}</h2>
          <p className="mt-2 mb-0 text-base leading-[1.6] font-normal">{content.subtitle}</p>
          <p className="mt-6 mb-0 text-product-section-body font-normal">{content.lead}</p>

          <ul className="mt-6 list-none space-y-3 p-0 page:grid page:grid-cols-[repeat(3,max-content)] page:justify-between page:gap-x-1 page:space-y-0">
            {content.bullets.map((bullet) => (
              <li className="grid grid-cols-[min-content_minmax(0,1fr)] gap-x-3 text-product-section-body font-normal page:text-service-card-body page:whitespace-nowrap" key={bullet}>
                <span className="mt-[0.45em] size-3 rounded-round border border-on-dark" aria-hidden="true" />
                <span>{bullet}</span>
              </li>
            ))}
          </ul>

          <div className="mt-8 flex flex-wrap items-baseline gap-x-2 gap-y-1">
            <h3 className="m-0 font-normal">{content.courseStructure.label}</h3>
            {content.courseStructure.kind === "plan" ? (
              <p className="m-0 text-product-section-body font-normal">{content.courseStructure.description}</p>
            ) : null}
          </div>
        </div>
      </div>
    </section>
  );
}
