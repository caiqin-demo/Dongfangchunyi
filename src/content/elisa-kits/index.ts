import { jaElisaKitsContent } from "@/content/elisa-kits/ja";
import type { ElisaKitsContent } from "@/content/elisa-kits/types";
import { zhElisaKitsContent } from "@/content/elisa-kits/zh";
import type { Locale } from "@/i18n/config";

export const elisaKitsContentByLocale = {
  zh: zhElisaKitsContent,
  ja: jaElisaKitsContent,
} satisfies Record<Locale, ElisaKitsContent>;
