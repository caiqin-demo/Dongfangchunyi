import type { ProductCardId } from "@/content/types";

export const productPaths = {
  "antibody-products": "/products/antibody-products",
  "elisa-kits": "/products/elisa-kits",
  "lab-instruments": "/products/lab-instruments",
} as const satisfies Record<ProductCardId, `/${string}`>;
