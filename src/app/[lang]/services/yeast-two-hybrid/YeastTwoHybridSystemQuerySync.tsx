"use client";

import { useEffect } from "react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

import type { YeastTwoHybridSystem } from "@/content/yeast-two-hybrid/types";

type SystemId = YeastTwoHybridSystem["id"];

type YeastTwoHybridSystemQuerySyncProps = Readonly<{
  onSystemChange: (systemId: SystemId) => void;
}>;

export function YeastTwoHybridSystemQuerySync({ onSystemChange }: YeastTwoHybridSystemQuerySyncProps) {
  const pathname = usePathname();
  const router = useRouter();
  const searchParams = useSearchParams();

  useEffect(() => {
    const values = searchParams.getAll("system");
    const hasNuclearSystem = values.length === 1 && values[0] === "nuclear";
    const nextSystemId: SystemId = hasNuclearSystem ? "nuclear" : "membrane";
    const shouldNormalize = values.length > 0 && !hasNuclearSystem;

    onSystemChange(nextSystemId);

    if (!shouldNormalize) {
      return;
    }

    const normalizedSearchParams = new URLSearchParams(searchParams.toString());
    normalizedSearchParams.delete("system");
    const search = normalizedSearchParams.toString();
    const hash = window.location.hash;
    router.replace(`${pathname}${search === "" ? "" : `?${search}`}${hash}`, { scroll: false });
  }, [onSystemChange, pathname, router, searchParams]);

  return null;
}
