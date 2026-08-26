import type { ComponentPropsWithoutRef } from "react";

type ProductPageSectionProps = Omit<ComponentPropsWithoutRef<"section">, "className"> & Readonly<{
  className?: string;
}>;

export function ProductPageSection({ className, ...props }: ProductPageSectionProps) {
  return (
    <section
      className={`mx-auto w-[calc(100%-4rem)] max-w-panel pt-6 pb-16 max-page:w-[calc(100%-2rem)] max-sm:w-[calc(100%-1.5rem)] max-sm:pb-10 ${className ?? ""}`}
      {...props}
    />
  );
}
