import { jaContent } from "@/content/ja";
import type { HomeContent } from "@/content/types";
import { zhContent } from "@/content/zh";
import type { Locale } from "@/i18n/config";

export const contentByLocale = {
  zh: zhContent,
  ja: jaContent,
} satisfies Record<Locale, HomeContent>;
