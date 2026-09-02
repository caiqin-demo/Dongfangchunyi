export type AboutPageId = "company-profile" | "contact";

export const aboutPaths = {
  "company-profile": "/about/company-profile",
  contact: "/about/contact",
} as const satisfies Record<AboutPageId, `/${string}`>;
