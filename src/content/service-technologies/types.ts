import type {
  GenomeSequencingContent,
  GenomeSequencingOptionId,
  GenomeSequencingServiceItemId,
} from "@/content/genome-sequencing/types";

export type ServiceTechnologySelectionKey =
  `${GenomeSequencingOptionId}:${GenomeSequencingServiceItemId}`;

export type ServiceTechnologyAssetId =
  | "absolute-quantification-microbial-diversity-sequencing-zh"
  | "absolute-quantification-microbial-diversity-sequencing-ja"
  | "dap-seq-technical-service-zh"
  | "dap-seq-technical-service-ja"
  | "genome-de-novo-sequencing-zh"
  | "genome-de-novo-sequencing-ja"
  | "genome-resequencing-zh"
  | "genome-resequencing-ja"
  | "marine-microbiology-research-zh"
  | "marine-microbiology-research-ja"
  | "multidimensional-analysis-platform-zh"
  | "multidimensional-analysis-platform-ja"
  | "multidimensional-analysis-platform-interactions-zh"
  | "multidimensional-analysis-platform-interactions-ja"
  | "multidimensional-analysis-platform-multiomics-zh"
  | "multidimensional-analysis-platform-multiomics-ja"
  | "single-cell-sequencing-zh"
  | "single-cell-sequencing-ja"
  | "whole-transcriptome-sequencing-zh"
  | "whole-transcriptome-sequencing-ja";

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
