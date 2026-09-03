export type SimpleProductPageContent = Readonly<{
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
  title: string;
}>;
