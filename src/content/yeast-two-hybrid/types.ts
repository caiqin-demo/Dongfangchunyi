type FeatureId = "feature-1" | "feature-2" | "feature-3" | "feature-4";

type Feature<Id extends FeatureId> = Readonly<{
  description: string;
  id: Id;
  title: string;
}>;

type SpecificationId = "specification-1" | "specification-2" | "specification-3" | "specification-4" | "specification-5";

type Specification<Id extends SpecificationId> = Readonly<{
  id: Id;
  label: string;
}>;

type ConsultationEmail<Id extends "market" | "shanghai-genomics"> = Readonly<{
  email: string;
  id: Id;
}>;

type SampleStandardId = "cell-sample" | "animal-tissue" | "plant-sample" | "total-rna";

type SampleStandard<Id extends SampleStandardId> = Readonly<{
  description: string;
  id: Id;
  title: string;
}>;

type LibraryEntry<Id extends string> = Readonly<{
  id: Id;
  label: string;
}>;

type LibraryEntries<Ids extends readonly string[]> = {
  readonly [Index in keyof Ids]: Ids[Index] extends string ? LibraryEntry<Ids[Index]> : never;
};

type LibraryCategory<Id extends string, EntryIds extends readonly string[]> = Readonly<{
  entries: LibraryEntries<EntryIds>;
  id: Id;
  title: string;
}>;

type HumanLibraryEntryIds = readonly ["human-lymphocyte-matchmaker", "human-fetal-brain-matchmaker", "human-hela-matchmaker", "human-liver-matchmaker", "human-fetal-liver-matchmaker", "human-leukocyte-matchmaker", "human-spleen-matchmaker", "human-kidney-matchmaker", "human-pulmonary-alveolar-epithelial-cells", "human-endometrium-normal-tumour", "human-retina-macula-peripheral-rpe"];
type MouseLibraryEntryIds = readonly ["mouse-testis-matchmaker", "mouse-kidney-matchmaker", "mouse-embryo-matchmaker", "mouse-mixture-library"];
type PlantLibraryEntryIds = readonly ["plant-arabidopsis", "plant-rice", "plant-wheat", "plant-tomato", "plant-goji-berry", "plant-wild-strawberry", "plant-cucumber", "plant-pumpkin", "plant-poplar", "plant-watermelon", "plant-carrot", "plant-liriodendron", "plant-spinach", "plant-artemisia-annua", "plant-puncturevine", "plant-corn", "plant-caitai", "plant-baimai"];
type OtherLibraryEntryIds = readonly ["other-drosophila-mixture-library", "other-schistosoma-japonicum-mixture-library", "other-pig-alveolar-macrophage", "other-mosquito-intestine", "other-zebrafish-embryo", "other-tilapia-lymphocyte", "other-pearl-oyster-blood", "other-medaka", "other-whiteleg-shrimp", "other-chinese-mitten-crab-hemolymphocyte", "other-chinese-softshell-turtle"];

type LibraryCatalog = Readonly<{
  categories: readonly [
    LibraryCategory<"human-cdna-library", HumanLibraryEntryIds>,
    LibraryCategory<"mouse-cdna-library", MouseLibraryEntryIds>,
    LibraryCategory<"plant-cdna-library", PlantLibraryEntryIds>,
    LibraryCategory<"other-cdna-library", OtherLibraryEntryIds>,
  ];
  title: string;
}>;

export type MembraneSystem = Readonly<{
  body: string;
  consultation: Readonly<{
    emails: readonly [ConsultationEmail<"market">, ConsultationEmail<"shanghai-genomics">];
    title: string;
  }>;
  featureTitle: string;
  features: readonly [Feature<"feature-1">, Feature<"feature-2">, Feature<"feature-3">, Feature<"feature-4">];
  id: "membrane";
  kind: "membrane";
  label: string;
  specificationTitle: string;
  specifications: readonly [Specification<"specification-1">, Specification<"specification-2">, Specification<"specification-3">, Specification<"specification-4">, Specification<"specification-5">];
  subtitle: string;
}>;

export type NuclearSystem = Readonly<{
  body: string;
  cdnaLibrary: LibraryCatalog;
  id: "nuclear";
  kind: "nuclear";
  label: string;
  sampleStandards: readonly [SampleStandard<"cell-sample">, SampleStandard<"animal-tissue">, SampleStandard<"plant-sample">, SampleStandard<"total-rna">];
  sampleStandardsTitle: string;
  subtitle: string;
}>;

export type YeastTwoHybridSystem = MembraneSystem | NuclearSystem;

export type YeastTwoHybridContent = Readonly<{
  backToServices: string;
  intro: string;
  metadata: Readonly<{
    description: string;
    title: string;
  }>;
  overview: Readonly<{
    title: string;
  }>;
  systemSelectorLabel: string;
  systems: readonly [MembraneSystem, NuclearSystem];
  title: string;
}>;
