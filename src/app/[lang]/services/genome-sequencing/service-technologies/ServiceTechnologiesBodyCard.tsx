"use client";

import Image, { type StaticImageData } from "next/image";
import { useState } from "react";

import type { GenomeSequencingContent } from "@/content/genome-sequencing/types";
import type {
  ServiceTechnologyAssetId,
  ServiceTechnologySelectionKey,
  ServiceTechnologiesBodyCardContent,
} from "@/content/service-technologies/types";

const detailsRegionId = "service-technologies-details";

type ServiceTechnologiesBodyCardProps = Readonly<{
  assets: Readonly<Record<ServiceTechnologyAssetId, StaticImageData>>;
  card: ServiceTechnologiesBodyCardContent;
  categories: GenomeSequencingContent["body"]["categories"];
}>;

export function ServiceTechnologiesBodyCard({
  assets,
  card,
  categories,
}: ServiceTechnologiesBodyCardProps) {
  const [selectedRowKey, setSelectedRowKey] =
    useState<ServiceTechnologySelectionKey | null>(null);

  const selectedItem = selectedRowKey
    ? categories
        .flatMap((category) => category.items.map((item) => ({ category, item })))
        .find(({ category, item }) => `${category.id}:${item.id}` === selectedRowKey)
    : null;
  const display = selectedItem
    ? card.displayByItemId[selectedItem.item.id]
    : null;
  const selectedLabel = selectedItem
    ? card.categoryLabelMode === "placeholder"
      ? `${card.placeholderLabel} ${categories.findIndex((category) => category.id === selectedItem.category.id) + 1}-${selectedItem.category.items.findIndex((item) => item.id === selectedItem.item.id) + 1}`
      : selectedItem.item.label
    : null;

  return (
    <article className="min-w-0 rounded-product-card border border-line bg-white shadow-media">
      <div className="grid grid-cols-[minmax(0,.72fr)_minmax(0,1.28fr)] max-stack:grid-cols-1">
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
                    const selectionKey = `${category.id}:${item.id}` as ServiceTechnologySelectionKey;
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
                          onClick={() => setSelectedRowKey(selectionKey)}
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
          id={detailsRegionId}
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
