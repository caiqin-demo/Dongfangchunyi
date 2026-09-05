import Image, { type ImageProps } from "next/image";

type NonLandingHeroMediaProps = Readonly<{
  overlay?: "default" | "none";
  src: ImageProps["src"];
}>;

export function NonLandingHeroMedia({ overlay = "default", src }: NonLandingHeroMediaProps) {
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
      {overlay === "default" ? (
        <div
          aria-hidden="true"
          className="absolute inset-0 -z-10 bg-linear-to-r from-ui-section/85 via-ui-section/55 to-transparent max-sm:from-ui-section/85 max-sm:via-ui-section/80 max-sm:to-ui-section/60"
        />
      ) : null}
    </>
  );
}
