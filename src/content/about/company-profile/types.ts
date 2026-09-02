export type CompanyProfileCapabilityId =
  | "international-market-development"
  | "international-material-procurement"
  | "employee-training";

type Capability<Id extends CompanyProfileCapabilityId> = Readonly<{
  description: string;
  id: Id;
  title: string;
}>;

export type CompanyProfileContent = Readonly<{
  backToAbout: string;
  capabilities: Readonly<{
    heading: string;
    items: readonly [
      Capability<"international-market-development">,
      Capability<"international-material-procurement">,
      Capability<"employee-training">,
    ];
  }>;
  hero: Readonly<{ intro: string; title: string }>;
  introduction: Readonly<{
    heading: string;
    paragraphs: readonly [string];
  }>;
  metadata: Readonly<{ description: string; title: string }>;
}>;
