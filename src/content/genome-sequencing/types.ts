export type GenomeSequencingOptionId =
  | "plant-and-cell"
  | "animal-and-cell"
  | "microorganism"
  | "multidimensional-analysis-platform";

type GenomeSequencingOption<Id extends GenomeSequencingOptionId> = Readonly<{
  id: Id;
  label: string;
}>;

export type GenomeSequencingContent = Readonly<{
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
