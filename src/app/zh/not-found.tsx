import type { Metadata } from "next";

import { LocalizedNotFoundPage } from "@/app/[lang]/LocalizedNotFoundPage";
import { zhContent } from "@/content/zh";

export const metadata: Metadata = {
  description: zhContent.notFound.description,
  title: zhContent.notFound.title,
};

export default function NotFound() {
  return <LocalizedNotFoundPage lang="zh" />;
}
