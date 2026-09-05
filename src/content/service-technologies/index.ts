import { jaServiceTechnologiesContent } from "@/content/service-technologies/ja";
import type { ServiceTechnologiesContent } from "@/content/service-technologies/types";
import { zhServiceTechnologiesContent } from "@/content/service-technologies/zh";
import type { Locale } from "@/i18n/config";

export const serviceTechnologiesContentByLocale = {
  zh: zhServiceTechnologiesContent,
  ja: jaServiceTechnologiesContent,
} satisfies Record<Locale, ServiceTechnologiesContent>;
