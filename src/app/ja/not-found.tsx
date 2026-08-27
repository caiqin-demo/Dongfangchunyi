import type { Metadata } from "next";

import { LocalizedNotFoundPage } from "@/app/[lang]/LocalizedNotFoundPage";
import { jaContent } from "@/content/ja";

export const metadata: Metadata = {
  description: jaContent.notFound.description,
  title: jaContent.notFound.title,
};

export default function NotFound() {
  return <LocalizedNotFoundPage lang="ja" />;
}
