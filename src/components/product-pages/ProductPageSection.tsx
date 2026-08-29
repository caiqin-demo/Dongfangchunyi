import type { ComponentPropsWithoutRef } from "react";

type ProductPageSectionProps = Omit<ComponentPropsWithoutRef<"section">, "className"> & Readonly<{
  className?: string;
}>;

export function ProductPageSection({ className, ...props }: ProductPageSectionProps) {
  return (
    <section
      className={`page-container pt-6 pb-16 max-sm:pb-10 ${className ?? ""}`}
      {...props}
    />
  );
}
