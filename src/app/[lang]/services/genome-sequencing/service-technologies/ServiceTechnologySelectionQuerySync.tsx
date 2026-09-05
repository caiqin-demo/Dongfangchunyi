"use client";

import { useEffect } from "react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

import type { Locale } from "@/i18n/config";
import type {
  ServiceTechnologiesBodyCardContent,
  ServiceTechnologySelectionKey,
} from "@/content/service-technologies/types";

import {
  resolveRequestedServiceTechnologySelection,
  type ServiceTechnologyRow,
} from "./ServiceTechnologySelection";

type ServiceTechnologySelectionQuerySyncProps = Readonly<{
  defaultSelectionKey: ServiceTechnologySelectionKey | null;
  displayByItemId: ServiceTechnologiesBodyCardContent["displayByItemId"];
  lang: Locale;
  onSelectionChange: (selectionKey: ServiceTechnologySelectionKey | null) => void;
  consumeInternalEcho: (lang: Locale, values: readonly string[]) => boolean;
  rows: readonly ServiceTechnologyRow[];
}>;

export function ServiceTechnologySelectionQuerySync({
  consumeInternalEcho,
  defaultSelectionKey,
  displayByItemId,
  lang,
  onSelectionChange,
  rows,
}: ServiceTechnologySelectionQuerySyncProps) {
  const pathname = usePathname();
  const router = useRouter();
  const searchParams = useSearchParams();

  useEffect(() => {
    const values = searchParams.getAll("technology");

    if (consumeInternalEcho(lang, values)) {
      return;
    }

    const resolution = resolveRequestedServiceTechnologySelection(
      values,
      rows,
      displayByItemId,
      defaultSelectionKey,
    );

    onSelectionChange(resolution.selectionKey);

    if (!resolution.shouldNormalize) {
      return;
    }

    const normalizedSearchParams = new URLSearchParams(searchParams.toString());
    normalizedSearchParams.delete("technology");

    if (
      resolution.selectionKey !== null &&
      resolution.selectionKey !== defaultSelectionKey
    ) {
      normalizedSearchParams.set("technology", resolution.selectionKey);
    }

    const search = normalizedSearchParams.toString();
    const url = `${pathname}${search === "" ? "" : `?${search}`}${window.location.hash}`;
    const currentUrl = `${pathname}${searchParams.toString() === "" ? "" : `?${searchParams.toString()}`}${window.location.hash}`;
    if (url !== currentUrl) {
      router.replace(url, { scroll: false });
    }
  }, [
    consumeInternalEcho,
    defaultSelectionKey,
    displayByItemId,
    lang,
    onSelectionChange,
    pathname,
    router,
    rows,
    searchParams,
  ]);

  return null;
}
