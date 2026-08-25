"use client";

import { Fragment, type UIEvent } from "react";

type AvailabilityMatrixColumn<ColumnId extends string> = Readonly<{
  id: ColumnId;
  label: string;
  sublabel?: string;
}>;

type AvailabilityMatrixRow<RowId extends string, ColumnId extends string> = Readonly<{
  availableFor: readonly ColumnId[];
  id: RowId;
  label: string;
}>;

type ProductAvailabilityMatrixProps<RowId extends string, ColumnId extends string> = Readonly<{
  availableLabel: string;
  className?: string;
  columnGroupCount?: number;
  columnLanguage?: string;
  columns: readonly AvailabilityMatrixColumn<ColumnId>[];
  idPrefix: string;
  note?: string;
  regionLabel?: string;
  rows: readonly AvailabilityMatrixRow<RowId, ColumnId>[];
  rowHeaderLabel: string;
  tableMinWidthClassName?: string;
  title: string;
  unavailableLabel: string;
}>;

const focusRingClass = "focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent";

function keepFirstColumnVisible(event: UIEvent<HTMLDivElement>) {
  event.currentTarget.style.setProperty("--matrix-scroll-left", `${event.currentTarget.scrollLeft}px`);
}

export function ProductAvailabilityMatrix<RowId extends string, ColumnId extends string>({
  availableLabel,
  className,
  columnGroupCount = 1,
  columnLanguage,
  columns,
  idPrefix,
  note,
  regionLabel,
  rows,
  rowHeaderLabel,
  tableMinWidthClassName = "min-w-[720px]",
  title,
  unavailableLabel,
}: ProductAvailabilityMatrixProps<RowId, ColumnId>) {
  const visibleColumns = columns.filter((column) => rows.some((row) => row.availableFor.includes(column.id)));
  const rowsPerGroup = Math.ceil(rows.length / columnGroupCount);
  const groupedRows = Array.from({ length: rowsPerGroup }, (_, rowIndex) => (
    Array.from({ length: columnGroupCount }, (_, groupIndex) => rows[(groupIndex * rowsPerGroup) + rowIndex])
  ));
  const titleId = `${idPrefix}-title`;

  return (
    <article
      aria-labelledby={titleId}
      className={`min-w-0 rounded-product-card border border-line bg-white p-[clamp(1rem,2.5vw,2rem)] shadow-media ${className ?? ""}`}
    >
      <h2 className="m-0 text-product-section-title" id={titleId}>{title}</h2>
      <div
        aria-label={regionLabel}
        aria-labelledby={regionLabel ? undefined : titleId}
        className={`mt-7 overflow-x-auto overflow-y-hidden rounded-control border border-line [--matrix-scroll-left:0px] [contain:paint] ${focusRingClass}`}
        onScroll={keepFirstColumnVisible}
        role="region"
        tabIndex={0}
      >
        <table className={`flex h-[35.8rem] w-full table-fixed flex-col border-collapse text-center text-sm ${tableMinWidthClassName}`}>
          <caption className="sr-only">{title}</caption>
          <thead className="block shrink-0 overflow-y-auto bg-table-header text-ink [scrollbar-gutter:stable]">
            <tr className="table w-full table-fixed">
              {Array.from({ length: columnGroupCount }, (_, groupIndex) => (
                <Fragment key={`${idPrefix}-header-group-${groupIndex}`}>
                  <th
                    className={`w-[14%] px-2 py-4 [overflow-wrap:anywhere] ${groupIndex === 0 ? "relative z-20 bg-table-header [transform:translateX(var(--matrix-scroll-left))]" : ""}`}
                    id={`${idPrefix}-row-header-${groupIndex}`}
                    scope="col"
                  >
                    {rowHeaderLabel}
                  </th>
                  {visibleColumns.map((column) => (
                    <th
                      className="px-1.5 py-4 text-center leading-snug [overflow-wrap:anywhere]"
                      id={`${idPrefix}-column-${groupIndex}-${column.id}`}
                      key={`${groupIndex}-${column.id}`}
                      lang={columnLanguage}
                      scope="col"
                    >
                      <span className="block font-bold">{column.label}</span>
                      {column.sublabel ? <span className="mt-1 block font-normal">{column.sublabel}</span> : null}
                    </th>
                  ))}
                </Fragment>
              ))}
            </tr>
          </thead>
          <tbody className="block min-h-0 flex-1 overflow-y-auto [scrollbar-gutter:stable]">
            {groupedRows.map((rowGroup) => (
              <tr className="table w-full table-fixed border-t border-line" key={rowGroup.flatMap((row) => row ? [row.id] : []).join("--")}>
                {rowGroup.map((row, groupIndex) => row ? (
                  <Fragment key={row.id}>
                    <th
                      className={`w-[14%] px-2 py-3 font-semibold [overflow-wrap:anywhere] ${groupIndex === 0 ? "relative z-10 bg-white [transform:translateX(var(--matrix-scroll-left))]" : ""}`}
                      id={`${idPrefix}-row-${row.id}`}
                      scope="row"
                    >
                      {row.label}
                    </th>
                    {visibleColumns.map((column) => {
                      const isAvailable = row.availableFor.includes(column.id);
                      return (
                        <td
                          className="px-1.5 py-3 text-center"
                          headers={`${idPrefix}-row-${row.id} ${idPrefix}-column-${groupIndex}-${column.id}`}
                          key={column.id}
                        >
                          <span aria-hidden="true" className="text-xl font-bold text-accent">{isAvailable ? "✓" : ""}</span>
                          <span className="sr-only">{isAvailable ? availableLabel : unavailableLabel}</span>
                        </td>
                      );
                    })}
                  </Fragment>
                ) : (
                  <td aria-hidden="true" colSpan={visibleColumns.length + 1} key={`${idPrefix}-empty-${groupIndex}`} />
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {note ? <p className="mt-4 mb-0 font-semibold text-ink">{note}</p> : null}
    </article>
  );
}
