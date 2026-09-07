import Image, { type ImageProps } from "next/image";

import type { CoachingProgram } from "@/content/other-business-services";

type CoachingProgramPartProps = Readonly<{
  content: CoachingProgram;
  image: ImageProps["src"];
  imageSide: "left" | "right";
}>;

export function CoachingProgramPart({ content, image, imageSide }: CoachingProgramPartProps) {
  const isImageRight = imageSide === "right";
  const contentBorderClass = isImageRight ? "page:border-r" : "page:border-l";
  const imageOrderClass = isImageRight ? "page:order-2" : "";

  return (
    <section className="border-t border-line" aria-labelledby={`${content.id}-title`} lang="zh-CN">
      <div className="grid page:grid-cols-[2fr_5fr]">
        <div className={`relative isolate aspect-[161/100] overflow-hidden bg-ui-subtle page:aspect-auto ${imageOrderClass}`}>
          <Image
            alt=""
            className="-z-10 object-cover object-center"
            fill
            sizes="(min-width: 1280px) 26vw, (min-width: 960px) 29vw, 100vw"
            src={image}
          />
        </div>

        <div className={`min-w-0 border-t border-line p-[clamp(1.25rem,3vw,2.5rem)] page:border-t-0 ${contentBorderClass}`}>
          <h2 className="m-0 text-product-section-title" id={`${content.id}-title`}>{content.title}</h2>
          <p className="mt-2 mb-0 text-base leading-[1.6] font-semibold text-ink-muted">{content.subtitle}</p>
          <p className="mt-6 mb-0 text-product-section-body text-ink-muted">{content.lead}</p>

          <ul className="mt-6 list-none space-y-3 p-0">
            {content.bullets.map((bullet) => (
              <li className="grid grid-cols-[min-content_minmax(0,1fr)] gap-x-3 text-product-section-body text-ink-muted" key={bullet}>
                <span className="mt-[0.45em] size-3 rounded-round border border-ink-muted" aria-hidden="true" />
                <span>{bullet}</span>
              </li>
            ))}
          </ul>

          <div className="mt-8 border-t border-line pt-6">
            <h3 className="m-0 font-bold text-ink">{content.courseStructure.label}</h3>
            {content.courseStructure.kind === "plan" ? (
              <p className="mt-3 mb-0 text-product-section-body text-ink-muted">{content.courseStructure.description}</p>
            ) : (
              <dl className="mt-3 grid gap-y-3 text-product-section-body text-ink-muted">
                {content.courseStructure.levels.map((level) => (
                  <div className="grid grid-cols-[auto_minmax(0,1fr)] gap-x-2" key={level.id}>
                    <dt className="font-bold text-ink">{level.label}</dt>
                    <dd className="m-0">{level.description}</dd>
                  </div>
                ))}
              </dl>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
