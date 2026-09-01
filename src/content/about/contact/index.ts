import type { Locale } from "@/i18n/config";

import { jaContactPageContent } from "./ja";
import { zhContactPageContent } from "./zh";
import type { ContactPageContent } from "./types";

export { contactDetails } from "./contact-details";

export const contactPageContentByLocale = {
  zh: zhContactPageContent,
  ja: jaContactPageContent,
} satisfies Record<Locale, ContactPageContent>;

export type { ContactDetailId, ContactDetailValue, ContactPageContent } from "./types";
