import type { ReactNode } from "react";

import "./globals.css";

type LocaleDocumentProps = Readonly<{
  children: ReactNode;
  documentLanguage: string;
  fontVariables: string;
}>;

export function LocaleDocument({ children, documentLanguage, fontVariables }: LocaleDocumentProps) {
  return (
    <html data-scroll-behavior="smooth" lang={documentLanguage}>
      <body className={fontVariables}>{children}</body>
    </html>
  );
}
