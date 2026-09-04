import type {
  GenomeSequencingContent,
  GenomeSequencingOptionId,
  GenomeSequencingServiceItemId,
} from "@/content/genome-sequencing/types";

export type ServiceTechnologySelectionKey =
  `${GenomeSequencingOptionId}:${GenomeSequencingServiceItemId}`;

export type ServiceTechnologyAssetId = "genome-resequencing-zh";

export type ServiceTechnologyDisplay =
  | Readonly<{
      alt: string;
      assetId: ServiceTechnologyAssetId;
      kind: "ready";
    }>
  | Readonly<{
      kind: "pending";
      label: string;
    }>;

export type ServiceTechnologiesBodyCardContent = Readonly<{
  categoryLabelMode: "source" | "placeholder";
  displayByItemId: Readonly<
    Record<GenomeSequencingServiceItemId, ServiceTechnologyDisplay>
  >;
  placeholderLabel: string;
}>;

export type ServiceTechnologiesContent = Readonly<{
  bodyCard: ServiceTechnologiesBodyCardContent;
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
