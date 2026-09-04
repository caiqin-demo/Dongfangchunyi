import type { GenomeSequencingContent } from "@/content/genome-sequencing/types";

export type ServiceTechnologiesContent = Readonly<{
  contact: GenomeSequencingContent["body"]["contact"];
  intro: string;
  metadata: Readonly<{
    description: string;
    title: string;
  }>;
  optionGroupLabel: string;
  options: GenomeSequencingContent["options"];
  title: string;
}>;
