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

type Consultation = Readonly<{
  emails: readonly [
    Readonly<{ id: "market"; email: string }>,
    Readonly<{ id: "shanghai-genomics"; email: string }>,
  ];
  title: string;
}>;

type SystemId = "membrane" | "nuclear";

export type YeastTwoHybridSystem<Id extends SystemId = SystemId> = Readonly<{
  consultation: Consultation;
  features: readonly [Feature<"feature-1">, Feature<"feature-2">, Feature<"feature-3">, Feature<"feature-4">];
  id: Id;
  label: string;
  body: string;
  specifications: readonly [
    Specification<"specification-1">,
    Specification<"specification-2">,
    Specification<"specification-3">,
    Specification<"specification-4">,
    Specification<"specification-5">,
  ];
  subtitle: string;
}>;

export type YeastTwoHybridContent = Readonly<{
  backToServices: string;
  features: Readonly<{
    title: string;
  }>;
  intro: string;
  metadata: Readonly<{
    description: string;
    title: string;
  }>;
  overview: Readonly<{
    title: string;
  }>;
  specifications: Readonly<{
    title: string;
  }>;
  systemSelectorLabel: string;
  systems: readonly [YeastTwoHybridSystem<"membrane">, YeastTwoHybridSystem<"nuclear">];
  title: string;
}>;
