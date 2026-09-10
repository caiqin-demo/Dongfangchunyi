"use client";

import { LocalizedRuntimeErrorPage } from "@/components/error-pages/LocalizedRuntimeErrorPage";

type ErrorBoundaryProps = Readonly<{
  error: Error & { digest?: string };
  retry: () => void;
}>;

export default function JapaneseError({ error, retry }: ErrorBoundaryProps) {
  return <LocalizedRuntimeErrorPage error={error} lang="ja" retry={retry} />;
}
