import { jaElisaKitsContent } from "@/content/elisa-kits/ja";
import { zhElisaKitsContent } from "@/content/elisa-kits/zh";
import type { SimpleProductPageContent } from "@/content/simple-product-pages/types";
import type { Locale } from "@/i18n/config";

export const elisaKitsContentByLocale = {
  zh: zhElisaKitsContent,
  ja: jaElisaKitsContent,
} satisfies Record<Locale, SimpleProductPageContent>;
