export type GenomeSequencingOptionId =
  | "plant-and-cell"
  | "animal-and-cell"
  | "microorganism"
  | "multidimensional-analysis-platform";

type GenomeSequencingOption<Id extends GenomeSequencingOptionId> = Readonly<{
  id: Id;
  label: string;
}>;

type GenomeSequencingServiceItem = Readonly<{
  id: string;
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
