export type ContactDetailId = "email" | "phone" | "address";

type ContactDetailLabel<Id extends ContactDetailId> = Readonly<{
  id: Id;
  label: string;
}>;

export type ContactDetailValue = Readonly<{
  language?: string;
  lines: readonly string[];
}>;

export type ContactPageContent = Readonly<{
  backToAbout: string;
  details: readonly [
    ContactDetailLabel<"email">,
    ContactDetailLabel<"phone">,
    ContactDetailLabel<"address">,
  ];
  hero: Readonly<{ intro: string; title: string }>;
  main: Readonly<{ subtitle: string; title: string }>;
  metadata: Readonly<{ description: string; title: string }>;
}>;
