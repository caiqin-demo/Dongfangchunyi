import type { ServiceCardId } from "@/content/types";

export const servicePaths = {
  "yeast-two-hybrid": "/services/yeast-two-hybrid",
} as const satisfies Partial<Record<ServiceCardId, `/${string}`>>;
