export type GenomeSequencingOptionId =
  | "plant-and-cell"
  | "animal-and-cell"
  | "microorganism"
  | "multidimensional-analysis-platform";

export type GenomeSequencingServiceItemId =
  | "single-cell-sequencing"
  | "genome-de-novo-sequencing"
  | "absolute-quantification-microbial-diversity-sequencing"
  | "dap-seq-technical-service"
  | "genome-resequencing"
  | "whole-transcriptome-sequencing"
  | "marine-microbiology-research"
  | "epigenetics-service"
  | "mrna-in-situ-hybridization"
  | "yeast-two-hybrid"
  | "spr-molecular-interaction-research"
  | "proteomics-and-metabolomics"
  | "multiomics-combined-analysis";

type GenomeSequencingOption<Id extends GenomeSequencingOptionId> = Readonly<{
  id: Id;
  label: string;
}>;

type GenomeSequencingServiceItem = Readonly<{
  id: GenomeSequencingServiceItemId;
  label: string;
}>;

type GenomeSequencingCategory<Id extends GenomeSequencingOptionId> = Readonly<{
  id: Id;
  items: readonly GenomeSequencingServiceItem[];
  label: string;
}>;

type GenomeSequencingPublication = Readonly<{
  citation: string;
  id: string;
  title: string;
}>;

type GenomeSequencingBodyContent = Readonly<{
  categories: readonly [
    GenomeSequencingCategory<"plant-and-cell">,
    GenomeSequencingCategory<"animal-and-cell">,
    GenomeSequencingCategory<"microorganism">,
    GenomeSequencingCategory<"multidimensional-analysis-platform">,
  ];
  contact: Readonly<{
    emails: readonly [string, string];
    label: string;
  }>;
  publications: Readonly<{
    items: readonly GenomeSequencingPublication[];
    title: string;
  }>;
  team: Readonly<{
    paragraphs: readonly string[];
    title: string;
  }>;
  technicalRouteLabel: string;
}>;

export type GenomeSequencingContent = Readonly<{
  body: GenomeSequencingBodyContent;
  intro: string;
  metadata: Readonly<{
    description: string;
    title: string;
  }>;
  optionGroupLabel: string;
  options: readonly [
    GenomeSequencingOption<"plant-and-cell">,
    GenomeSequencingOption<"animal-and-cell">,
    GenomeSequencingOption<"microorganism">,
    GenomeSequencingOption<"multidimensional-analysis-platform">,
  ];
  title: string;
}>;
