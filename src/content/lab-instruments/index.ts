import { jaLabInstrumentsContent } from "@/content/lab-instruments/ja";
import { zhLabInstrumentsContent } from "@/content/lab-instruments/zh";
import type { SimpleProductPageContent } from "@/content/simple-product-pages/types";
import type { Locale } from "@/i18n/config";

export const labInstrumentsContentByLocale = {
  zh: zhLabInstrumentsContent,
  ja: jaLabInstrumentsContent,
} satisfies Record<Locale, SimpleProductPageContent>;
