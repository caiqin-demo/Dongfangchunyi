import Image, { type ImageProps } from "next/image";

type NonLandingHeroMediaProps = Readonly<{
  overlayVariant: "product" | "service";
  src: ImageProps["src"];
}>;

const overlayClassByVariant = {
  product: "from-ui-section/85 via-ui-section/80 to-ui-section/20 max-sm:from-ui-section/85 max-sm:via-ui-section/80 max-sm:to-ui-section/60",
  service: "from-ui-section/85 via-ui-section/55 to-transparent max-sm:from-ui-section/85 max-sm:via-ui-section/80 max-sm:to-ui-section/60",
} satisfies Record<NonLandingHeroMediaProps["overlayVariant"], string>;

export function NonLandingHeroMedia({ overlayVariant, src }: NonLandingHeroMediaProps) {
  return (
    <>
      <Image
        alt=""
        aria-hidden="true"
        className="-z-20 object-cover object-center"
        fetchPriority="high"
        fill
        loading="eager"
        sizes="100vw"
        src={src}
      />
      <div
        aria-hidden="true"
        className={`absolute inset-0 -z-10 bg-linear-to-r ${overlayClassByVariant[overlayVariant]}`}
      />
    </>
  );
}
