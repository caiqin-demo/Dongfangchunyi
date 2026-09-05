import type {
  GenomeSequencingContent,
  GenomeSequencingServiceItemId,
} from "@/content/genome-sequencing/types";
import type {
  ServiceTechnologiesBodyCardContent,
  ServiceTechnologySelectionKey,
} from "@/content/service-technologies/types";

export type ServiceTechnologyRow = Readonly<{
  categoryId: GenomeSequencingContent["body"]["categories"][number]["id"];
  itemId: GenomeSequencingServiceItemId;
  selectionKey: ServiceTechnologySelectionKey;
}>;

type SelectionResolution = Readonly<{
  selectionKey: ServiceTechnologySelectionKey | null;
  shouldNormalize: boolean;
}>;

type DisplayByItemId = ServiceTechnologiesBodyCardContent["displayByItemId"];

export function flattenServiceTechnologyRows(
  categories: GenomeSequencingContent["body"]["categories"],
): readonly ServiceTechnologyRow[] {
  return categories.flatMap((category) =>
    category.items.map((item) => ({
      categoryId: category.id,
      itemId: item.id,
      selectionKey: `${category.id}:${item.id}`,
    })),
  );
}

export function resolveDefaultServiceTechnologySelection(
  rows: readonly ServiceTechnologyRow[],
  displayByItemId: DisplayByItemId,
): ServiceTechnologySelectionKey | null {
  return (
    rows.find((row) => displayByItemId[row.itemId].kind === "ready")?.selectionKey ??
    rows[0]?.selectionKey ??
    null
  );
}

export function resolveRequestedServiceTechnologySelection(
  rawValues: readonly string[],
  rows: readonly ServiceTechnologyRow[],
  displayByItemId: DisplayByItemId,
  defaultSelectionKey: ServiceTechnologySelectionKey | null,
): SelectionResolution {
  if (rawValues.length === 0) {
    return { selectionKey: defaultSelectionKey, shouldNormalize: false };
  }

  if (rawValues.length !== 1) {
    return { selectionKey: defaultSelectionKey, shouldNormalize: true };
  }

  const [rawSelectionKey] = rawValues;
  const exactRow = rows.find((row) => row.selectionKey === rawSelectionKey);

  if (exactRow) {
    if (displayByItemId[exactRow.itemId].kind !== "ready") {
      return { selectionKey: defaultSelectionKey, shouldNormalize: true };
    }

    return {
      selectionKey: exactRow.selectionKey,
      shouldNormalize: exactRow.selectionKey === defaultSelectionKey,
    };
  }

  const parts = rawSelectionKey.split(":");
  if (parts.length !== 2 || parts[0] === "" || parts[1] === "") {
    return { selectionKey: defaultSelectionKey, shouldNormalize: true };
  }

  const [rawCategoryId, rawItemId] = parts;
  const hasKnownCategory = rows.some((row) => row.categoryId === rawCategoryId);
  const matchingReadyRow = rows.find(
    (row) => row.itemId === rawItemId && displayByItemId[row.itemId].kind === "ready",
  );

  if (!hasKnownCategory || !matchingReadyRow) {
    return { selectionKey: defaultSelectionKey, shouldNormalize: true };
  }

  return {
    selectionKey: matchingReadyRow.selectionKey,
    shouldNormalize: true,
  };
}
