import type { ReactNode } from "react";

import { documentLanguages } from "@/i18n/config";
import { getLandingMetadata } from "@/lib/landing-metadata";

import "../globals.css";
import { fontVariables } from "../[lang]/fonts/zh";

export const metadata = getLandingMetadata("zh");

export default function ChineseLayout({ children }: Readonly<{ children: ReactNode }>) {
  return (
    <html data-scroll-behavior="smooth" lang={documentLanguages.zh}>
      <body className={fontVariables}>{children}</body>
    </html>
  );
}
