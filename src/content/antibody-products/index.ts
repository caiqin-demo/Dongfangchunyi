import type { Locale } from "@/i18n/config";
import { jaAntibodyProductsContent } from "@/content/antibody-products/ja";
import type { AntibodyProductsContent } from "@/content/antibody-products/types";
import { zhAntibodyProductsContent } from "@/content/antibody-products/zh";

export const antibodyProductsContentByLocale = {
  zh: zhAntibodyProductsContent,
  ja: jaAntibodyProductsContent,
} satisfies Record<Locale, AntibodyProductsContent>;
