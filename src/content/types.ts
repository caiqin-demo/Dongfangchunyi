type SectionHref = `#${string}`;

export type NavigationItemId = "home" | "about" | "products" | "services" | "contact";
export type OfferingId = "gni" | "hannah" | "instruments" | "yeast-two-hybrid";
export type ProductCardId = "antibody-products" | "elisa-kits" | "lab-instruments";
export type ServiceCardId = "yeast-two-hybrid" | "business-consulting" | "personal-coaching";

type NavigationItem<Id extends NavigationItemId> = Readonly<{
  href: SectionHref;
  id: Id;
  label: string;
}>;

type Offering<Id extends OfferingId> = Readonly<{
  brand: string;
  description: string;
  id: Id;
  registered: boolean;
}>;

type CoreCard<Id extends ProductCardId | ServiceCardId> = Readonly<{
  description: string;
  id: Id;
  title: string;
}>;

type FooterLink<Id extends string> = Readonly<{
  href: SectionHref;
  id: Id;
  label: string;
}>;

type NavigationItems = readonly [
  NavigationItem<"home">,
  NavigationItem<"about">,
  NavigationItem<"products">,
  NavigationItem<"services">,
  NavigationItem<"contact">,
];

type Offerings = readonly [
  Offering<"gni">,
  Offering<"hannah">,
  Offering<"instruments">,
  Offering<"yeast-two-hybrid">,
];

type ProductCards = readonly [
  CoreCard<"antibody-products">,
  CoreCard<"elisa-kits">,
  CoreCard<"lab-instruments">,
];

type ServiceCards = readonly [
  CoreCard<"yeast-two-hybrid">,
  CoreCard<"business-consulting">,
  CoreCard<"personal-coaching">,
];

type ProductFooterLinks = readonly [
  FooterLink<"antibody-products">,
  FooterLink<"elisa-kits">,
  FooterLink<"lab-instruments">,
];

type ServiceFooterLinks = readonly [
  FooterLink<"yeast-two-hybrid">,
  FooterLink<"business-consulting">,
  FooterLink<"personal-coaching">,
];

type AboutFooterLinks = readonly [
  FooterLink<"company-profile">,
  FooterLink<"contact">,
];

export type HomeContent = Readonly<{
  about: Readonly<{
    body: string;
    label: string;
    more: string;
    offerings: Offerings;
    title: string;
  }>;
  brand: string;
  footer: Readonly<{
    aboutLinks: AboutFooterLinks;
    aboutTitle: string;
    copyright: string;
    productLinks: ProductFooterLinks;
    productsTitle: string;
    serviceLinks: ServiceFooterLinks;
    servicesTitle: string;
    tagline: Readonly<{
      primary: string;
      secondary: string;
    }>;
  }>;
  hero: Readonly<{
    description: string;
    productButton: string;
    serviceButton: string;
    title: string;
  }>;
  nav: NavigationItems;
  skipToContent: string;
  products: Readonly<{
    items: ProductCards;
    title: string;
  }>;
  services: Readonly<{
    items: ServiceCards;
    title: string;
  }>;
}>;
