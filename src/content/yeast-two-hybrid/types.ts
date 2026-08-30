type Feature = Readonly<{
  description: string;
  id: "feature-1" | "feature-2" | "feature-3" | "feature-4";
  title: string;
}>;

type Specification = Readonly<{
  id: "specification-1" | "specification-2" | "specification-3" | "specification-4" | "specification-5";
  label: string;
}>;

type Consultation = Readonly<{
  emails: readonly [
    Readonly<{ id: "market"; email: string }>,
    Readonly<{ id: "shanghai-genomics"; email: string }>,
  ];
  title: string;
}>;

export type YeastTwoHybridSystem = Readonly<{
  consultation: Consultation;
  features: readonly [Feature, Feature, Feature, Feature];
  id: "membrane" | "nuclear";
  label: string;
  body: string;
  specifications: readonly [Specification, Specification, Specification, Specification, Specification];
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
  systems: readonly [YeastTwoHybridSystem, YeastTwoHybridSystem];
  title: string;
}>;
