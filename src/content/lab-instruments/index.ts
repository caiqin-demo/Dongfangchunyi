import { jaLabInstrumentsContent } from "@/content/lab-instruments/ja";
import type { LabInstrumentsPageContent } from "@/content/lab-instruments/types";
import { zhLabInstrumentsContent } from "@/content/lab-instruments/zh";
import type { Locale } from "@/i18n/config";

export const labInstrumentsContentByLocale = {
  zh: zhLabInstrumentsContent,
  ja: jaLabInstrumentsContent,
} satisfies Record<Locale, LabInstrumentsPageContent>;
