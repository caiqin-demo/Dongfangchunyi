import type { Locale } from "@/i18n/config";

import { jaCompanyProfileContent } from "./ja";
import type { CompanyProfileContent } from "./types";
import { zhCompanyProfileContent } from "./zh";

export const companyProfileContentByLocale = {
  zh: zhCompanyProfileContent,
  ja: jaCompanyProfileContent,
} satisfies Record<Locale, CompanyProfileContent>;

export type { CompanyProfileCapabilityId, CompanyProfileContent } from "./types";
