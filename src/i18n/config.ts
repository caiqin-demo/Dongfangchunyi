export const locales = ["zh", "ja"] as const;

export type Locale = (typeof locales)[number];

export const defaultLocale: Locale = "zh";

export const documentLanguages: Record<Locale, string> = {
  zh: "zh-CN",
  ja: "ja",
};

export function isLocale(value: string): value is Locale {
  return locales.some((locale) => locale === value);
}
