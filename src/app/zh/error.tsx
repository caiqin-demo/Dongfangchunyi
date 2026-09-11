"use client";

import { LocalizedRuntimeErrorPage } from "@/components/error-pages/LocalizedRuntimeErrorPage";

type ErrorBoundaryProps = Readonly<{
  error: Error & { digest?: string };
  retry: () => void;
}>;

export default function ChineseError({ error, retry }: ErrorBoundaryProps) {
  return <LocalizedRuntimeErrorPage error={error} lang="zh" retry={retry} />;
}
