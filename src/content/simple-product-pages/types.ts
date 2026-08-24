export type SimpleProductPageContent = Readonly<{
  backToProducts: string;
  contact: Readonly<{
    description: string;
    email: string;
    emailLabel: string;
    title: string;
  }>;
  eyebrow: string;
  intro: string;
  metadata: Readonly<{
    description: string;
    title: string;
  }>;
  overview: Readonly<{
    description: string;
    heading: string;
  }>;
  title: string;
}>;
