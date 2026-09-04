import type { Locale } from "@/i18n/config";
import { jaGenomeSequencingContent } from "@/content/genome-sequencing/ja";
import type { GenomeSequencingContent } from "@/content/genome-sequencing/types";
import { zhGenomeSequencingContent } from "@/content/genome-sequencing/zh";

export const genomeSequencingContentByLocale = {
  zh: zhGenomeSequencingContent,
  ja: jaGenomeSequencingContent,
} satisfies Record<Locale, GenomeSequencingContent>;
