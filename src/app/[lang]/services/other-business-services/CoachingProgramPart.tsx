import Image, { type ImageProps } from "next/image";

import type { CoachingProgram } from "@/content/other-business-services";

type CoachingProgramPartProps = Readonly<{
  bulletLayout: "stack" | "desktop-row";
  content: CoachingProgram;
  image: ImageProps["src"];
  imageSide: "left" | "right";
}>;

export function CoachingProgramPart({ bulletLayout, content, image, imageSide }: CoachingProgramPartProps) {
  const isImageRight = imageSide === "right";
  const hasDesktopBulletRow = bulletLayout === "desktop-row";
  const contentBorderClass = isImageRight ? "page:border-r" : "page:border-l";
  const imageOrderClass = isImageRight ? "page:order-2" : "";
  const bulletsClass = hasDesktopBulletRow
    ? "mt-6 grid list-none gap-3 p-0 page:grid-cols-[repeat(3,max-content)] page:justify-between page:gap-x-1"
    : "mt-6 list-none space-y-3 p-0";
  const bulletItemClass = hasDesktopBulletRow
    ? "grid grid-cols-[min-content_minmax(0,1fr)] gap-x-2 text-product-section-body text-ink-muted page:text-service-card-body page:whitespace-nowrap"
    : "grid grid-cols-[min-content_minmax(0,1fr)] gap-x-3 text-product-section-body text-ink-muted";
  const bulletMarkerClass = hasDesktopBulletRow
    ? "mt-[0.5em] size-3 rounded-round border border-ink-muted page:size-2"
    : "mt-[0.45em] size-3 rounded-round border border-ink-muted";

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
          <p className="mt-6 mb-0 text-product-section-body font-bold text-ink">{content.lead}</p>

          <ul className={bulletsClass}>
            {content.bullets.map((bullet) => (
              <li className={bulletItemClass} key={bullet}>
                <span className={bulletMarkerClass} aria-hidden="true" />
                <span>{bullet}</span>
              </li>
            ))}
          </ul>

          <div className="mt-8 flex flex-col gap-4 page:flex-row page:items-start page:gap-8">
            <h3 className="m-0 font-bold text-ink">{content.courseStructure.label}</h3>
            {content.courseStructure.kind === "plan" ? (
              <p className="mt-3 mb-0 text-product-section-body text-ink-muted">{content.courseStructure.description}</p>
            ) : (
              <dl className="m-0 grid gap-4 text-product-section-body text-ink-muted page:flex-1 page:grid-cols-2 page:gap-x-8">
                {content.courseStructure.levels.map((level) => (
                  <div className="grid gap-y-1" key={level.id}>
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
