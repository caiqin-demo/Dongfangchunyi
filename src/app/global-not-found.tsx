import type { Metadata } from "next";

import { fontVariables } from "@/app/[lang]/fonts/ja";
import { LocalizedNotFoundPage } from "@/app/[lang]/LocalizedNotFoundPage";
import { jaContent } from "@/content/ja";
import { documentLanguages } from "@/i18n/config";

import "./globals.css";

export const metadata: Metadata = {
  description: jaContent.notFound.description,
  title: jaContent.notFound.title,
};

export default function GlobalNotFound() {
  return (
    <html lang={documentLanguages.ja}>
      <body className={fontVariables}>
        <LocalizedNotFoundPage lang="ja" />
      </body>
    </html>
  );
}
