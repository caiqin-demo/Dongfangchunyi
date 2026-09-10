import type { Locale } from "@/i18n/config";

import { jaRuntimeErrorContent } from "./ja";
import type { RuntimeErrorContent } from "./types";
import { zhRuntimeErrorContent } from "./zh";

export const runtimeErrorContentByLocale = {
  zh: zhRuntimeErrorContent,
  ja: jaRuntimeErrorContent,
} satisfies Record<Locale, RuntimeErrorContent>;
