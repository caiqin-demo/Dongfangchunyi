import type { ReactNode } from "react";

import { LocaleDocument } from "@/app/LocaleDocument";
import { documentLanguages } from "@/i18n/config";
import { getLandingMetadata } from "@/lib/landing-metadata";

import { fontVariables } from "../[lang]/fonts/ja";

export const metadata = getLandingMetadata("ja");

export default function JapaneseLayout({ children }: Readonly<{ children: ReactNode }>) {
  return (
    <LocaleDocument documentLanguage={documentLanguages.ja} fontVariables={fontVariables}>
      {children}
    </LocaleDocument>
  );
}
