import type { ReactNode } from "react";

import { documentLanguages } from "@/i18n/config";
import { getLandingMetadata } from "@/lib/landing-metadata";

import "../globals.css";
import { fontVariables } from "../[lang]/fonts/ja";

export const metadata = getLandingMetadata("ja");

export default function JapaneseLayout({ children }: Readonly<{ children: ReactNode }>) {
  return (
    <html data-scroll-behavior="smooth" lang={documentLanguages.ja}>
      <body className={fontVariables}>{children}</body>
    </html>
  );
}
