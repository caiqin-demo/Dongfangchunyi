export type AboutPageId = "company-profile" | "contact";

export const aboutPaths = {
  contact: "/about/contact",
} as const satisfies Partial<Record<AboutPageId, `/${string}`>>;
