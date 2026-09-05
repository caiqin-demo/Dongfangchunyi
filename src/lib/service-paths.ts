import type { ServiceCardId } from "@/content/types";

export const servicePaths = {
  "yeast-two-hybrid": "/services/yeast-two-hybrid",
  "genome-sequencing": "/services/genome-sequencing",
} as const satisfies Partial<Record<ServiceCardId, `/${string}`>>;

export const genomeSequencingServiceTechnologiesPath =
  "/services/genome-sequencing/service-technologies" as const;
