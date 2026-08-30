import type { Locale } from "@/i18n/config";
import { jaYeastTwoHybridContent } from "@/content/yeast-two-hybrid/ja";
import type { YeastTwoHybridContent } from "@/content/yeast-two-hybrid/types";
import { zhYeastTwoHybridContent } from "@/content/yeast-two-hybrid/zh";

export const yeastTwoHybridContentByLocale = {
  zh: zhYeastTwoHybridContent,
  ja: jaYeastTwoHybridContent,
} satisfies Record<Locale, YeastTwoHybridContent>;
