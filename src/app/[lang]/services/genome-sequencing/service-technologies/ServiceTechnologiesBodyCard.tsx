"use client";

import Image, { type StaticImageData } from "next/image";
import { useRouter } from "next/navigation";
import { Suspense, useCallback, useMemo, useRef, useState } from "react";

import type { GenomeSequencingContent } from "@/content/genome-sequencing/types";
import type {
  ServiceTechnologyAssetId,
  ServiceTechnologySelectionKey,
  ServiceTechnologiesBodyCardContent,
} from "@/content/service-technologies/types";
import type { Locale } from "@/i18n/config";

import { ServiceTechnologySelectionQuerySync } from "./ServiceTechnologySelectionQuerySync";
import {
  flattenServiceTechnologyRows,
  resolveDefaultServiceTechnologySelection,
} from "./ServiceTechnologySelection";

const detailsRegionId = "service-technologies-details";

type ServiceTechnologiesBodyCardProps = Readonly<{
  assets: Readonly<Record<ServiceTechnologyAssetId, StaticImageData>>;
  card: ServiceTechnologiesBodyCardContent;
  categories: GenomeSequencingContent["body"]["categories"];
  lang: Locale;
}>;

export function ServiceTechnologiesBodyCard({
  assets,
  card,
  categories,
  lang,
}: ServiceTechnologiesBodyCardProps) {
  const router = useRouter();
  const rows = useMemo(() => flattenServiceTechnologyRows(categories), [categories]);
  const defaultSelectionKey = useMemo(
    () => resolveDefaultServiceTechnologySelection(rows, card.displayByItemId),
    [card.displayByItemId, rows],
  );
  const [selectedRowState, setSelectedRowState] = useState<ServiceTechnologySelectionKey | null>(
    () => defaultSelectionKey,
  );
  const internalQueryEcho = useRef<Readonly<{ lang: Locale; values: readonly string[] }> | null>(null);
  const selectedRowKey = rows.some((row) => row.selectionKey === selectedRowState)
    ? selectedRowState
    : defaultSelectionKey;

  const selectedItem = selectedRowKey
    ? rows.find((row) => row.selectionKey === selectedRowKey)
    : null;
  const display = selectedItem
    ? card.displayByItemId[selectedItem.itemId]
    : null;
  const selectedCategory = selectedItem
    ? categories.find((category) => category.id === selectedItem.categoryId)
    : null;
  const selectedItemIndex = selectedCategory?.items.findIndex(
    (item) => item.id === selectedItem?.itemId,
  );
  const selectedLabel = selectedItem
    ? card.categoryLabelMode === "placeholder"
      ? `${card.placeholderLabel} ${categories.findIndex((category) => category.id === selectedItem.categoryId) + 1}-${selectedItemIndex === undefined ? 0 : selectedItemIndex + 1}`
      : selectedCategory?.items.find((item) => item.id === selectedItem.itemId)?.label ?? null
    : null;
  const selectedButtonId = selectedRowKey
    ? `service-technologies-row-${selectedRowKey}`
    : undefined;

  const consumeInternalEcho = useCallback((nextLang: Locale, values: readonly string[]) => {
    const pendingEcho = internalQueryEcho.current;
    if (
      pendingEcho === null ||
      pendingEcho.lang !== nextLang ||
      pendingEcho.values.length !== values.length ||
      pendingEcho.values.some((value, index) => value !== values[index])
    ) {
      return false;
    }

    internalQueryEcho.current = null;
    return true;
  }, []);

  const selectRow = (selectionKey: ServiceTechnologySelectionKey) => {
    setSelectedRowState(selectionKey);

    const values = selectionKey === defaultSelectionKey ? [] : [selectionKey];
    const url = new URL(window.location.href);
    const currentUrl = `${url.pathname}${url.search}${url.hash}`;
    url.searchParams.delete("technology");
    if (values.length === 1) {
      url.searchParams.set("technology", selectionKey);
    }

    const nextUrl = `${url.pathname}${url.search}${url.hash}`;
    if (nextUrl !== currentUrl) {
      internalQueryEcho.current = { lang, values };
      router.replace(nextUrl, { scroll: false });
    }
  };

  return (
    <article className="min-w-0 rounded-product-card border border-line bg-white shadow-media">
      <Suspense fallback={null}>
        <ServiceTechnologySelectionQuerySync
          consumeInternalEcho={consumeInternalEcho}
          defaultSelectionKey={defaultSelectionKey}
          displayByItemId={card.displayByItemId}
          lang={lang}
          onSelectionChange={setSelectedRowState}
          rows={rows}
        />
      </Suspense>
      <div className="grid grid-cols-[fit-content(30%)_minmax(0,1fr)] max-stack:grid-cols-1">
        <div className="min-w-0 p-[clamp(1.5rem,3vw,2.5rem)]">
          {categories.map((category, categoryIndex) => {
            const categoryLabel =
              card.categoryLabelMode === "source"
                ? category.label
                : card.placeholderLabel;
            const categoryTitleId = `service-technologies-${category.id}-title`;

            return (
              <section
                aria-labelledby={categoryTitleId}
                className="not-first:mt-10"
                key={category.id}
              >
                <h2
                  className="m-0 text-service-current-title text-genome-sequencing-accent"
                  id={categoryTitleId}
                >
                  {categoryLabel}
                </h2>
                <ul className="mt-4 list-none space-y-2 p-0">
                  {category.items.map((item, itemIndex) => {
                    const selectionKey: ServiceTechnologySelectionKey = `${category.id}:${item.id}`;
                    const isSelected = selectedRowKey === selectionKey;
                    const itemLabel =
                      card.categoryLabelMode === "source"
                        ? item.label
                        : card.placeholderLabel;

                    return (
                      <li key={selectionKey}>
                        <button
                          aria-controls={detailsRegionId}
                          aria-pressed={isSelected}
                          className="w-full rounded-control py-1 text-left text-service-body text-ink-muted hover:text-ink hover:underline hover:decoration-genome-sequencing-accent aria-pressed:font-bold aria-pressed:text-ink aria-pressed:underline aria-pressed:decoration-genome-sequencing-accent focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
                          id={`service-technologies-row-${selectionKey}`}
                          onClick={() => selectRow(selectionKey)}
                          type="button"
                        >
                          {itemLabel}
                          {card.categoryLabelMode === "placeholder" ? (
                            <span className="sr-only"> {categoryIndex + 1}-{itemIndex + 1}</span>
                          ) : null}
                        </button>
                      </li>
                    );
                  })}
                </ul>
              </section>
            );
          })}
        </div>

        <div
          className="min-w-0 border-l border-genome-sequencing-accent p-[clamp(1.5rem,3vw,2.5rem)] max-stack:border-t max-stack:border-l-0"
          aria-labelledby={selectedButtonId}
          id={detailsRegionId}
          role="region"
        >
          {display?.kind === "ready" ? (
            <Image
              alt={display.alt}
              className="h-auto w-full object-contain"
              loading="lazy"
              sizes="(min-width: 50rem) 55vw, 100vw"
              src={assets[display.assetId]}
              unoptimized
            />
          ) : null}
          {display?.kind === "pending" ? (
            <p className="m-0 flex min-h-32 items-center justify-center text-service-body text-ink-muted">
              {display.label}
            </p>
          ) : null}
        </div>
      </div>

      <p aria-live="polite" className="sr-only" role="status">
        {selectedLabel && display
          ? `${selectedLabel} ${display.kind === "ready" ? display.alt : display.label}`
          : ""}
      </p>
    </article>
  );
}
