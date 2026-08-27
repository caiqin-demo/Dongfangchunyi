import type { ReactNode } from "react";

import { LocaleDocument } from "@/app/LocaleDocument";
import { documentLanguages } from "@/i18n/config";
import { getLandingMetadata } from "@/lib/landing-metadata";

import { fontVariables } from "../[lang]/fonts/zh";

export const metadata = getLandingMetadata("zh");

export default function ChineseLayout({ children }: Readonly<{ children: ReactNode }>) {
  return (
    <LocaleDocument documentLanguage={documentLanguages.zh} fontVariables={fontVariables}>
      {children}
    </LocaleDocument>
  );
}
