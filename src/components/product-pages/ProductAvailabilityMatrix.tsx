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
  const rowGroups = Array.from({ length: columnGroupCount }, (_, groupIndex) => (
    rows.slice(groupIndex * rowsPerGroup, (groupIndex + 1) * rowsPerGroup)
  ));
  const titleId = `${idPrefix}-title`;

  function renderTable(
    tableRows: readonly AvailabilityMatrixRow<RowId, ColumnId>[],
    tableId: string,
    caption: string,
    rowHeaderWidthClassName: string,
  ) {
    const rowHeaderId = `${tableId}-row-header`;

    return (
      <table className="w-full table-fixed border-collapse text-center text-sm" key={tableId}>
        <caption className="sr-only">{caption}</caption>
        <thead className="bg-table-header text-ink">
          <tr>
            <th
              className={`sticky top-0 left-0 z-30 bg-table-header px-2 py-4 [overflow-wrap:anywhere] ${rowHeaderWidthClassName}`}
              id={rowHeaderId}
              scope="col"
            >
              {rowHeaderLabel}
            </th>
            {visibleColumns.map((column) => (
              <th
                className="sticky top-0 z-20 bg-table-header px-1.5 py-4 text-center leading-snug [overflow-wrap:anywhere]"
                id={`${tableId}-column-${column.id}`}
                key={column.id}
                lang={columnLanguage}
                scope="col"
              >
                <span className="block font-bold">{column.label}</span>
                {column.sublabel ? <span className="mt-1 block font-normal">{column.sublabel}</span> : null}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {tableRows.map((row) => (
            <tr key={row.id}>
              <th
                className={`sticky left-0 z-10 border-t border-line bg-white px-2 py-3 font-semibold [overflow-wrap:anywhere] ${rowHeaderWidthClassName}`}
                id={`${tableId}-row-${row.id}`}
                scope="row"
              >
                {row.label}
              </th>
              {visibleColumns.map((column) => {
                const isAvailable = row.availableFor.includes(column.id);
                return (
                  <td
                    className="border-t border-line px-1.5 py-3 text-center"
                    headers={`${tableId}-row-${row.id} ${tableId}-column-${column.id}`}
                    key={column.id}
                  >
                    <span aria-hidden="true" className="text-xl font-bold text-accent">{isAvailable ? "✓" : ""}</span>
                    <span className="sr-only">{isAvailable ? availableLabel : unavailableLabel}</span>
                  </td>
                );
              })}
            </tr>
          ))}
        </tbody>
      </table>
    );
  }

  return (
    <article
      aria-labelledby={titleId}
      className={`min-w-0 rounded-product-card border border-line bg-white p-[clamp(1rem,2.5vw,2rem)] shadow-media ${className ?? ""}`}
    >
      <h2 className="m-0 text-product-section-title" id={titleId}>{title}</h2>
      <div
        aria-label={regionLabel}
        aria-labelledby={regionLabel ? undefined : titleId}
        className={`mt-7 max-h-[35.8rem] overflow-auto rounded-control border border-line [contain:paint] ${focusRingClass}`}
        role="region"
        tabIndex={0}
      >
        {columnGroupCount > 1 ? (
          <>
            <div className={`w-full stack:hidden ${tableMinWidthClassName}`}>
              {renderTable(rows, `${idPrefix}-compact`, title, "w-[14%]")}
            </div>
            <div
              className={`hidden w-full stack:grid ${tableMinWidthClassName}`}
              style={{ gridTemplateColumns: `repeat(${columnGroupCount}, minmax(0, 1fr))` }}
            >
              {rowGroups.map((rowGroup, groupIndex) => renderTable(
                rowGroup,
                `${idPrefix}-group-${groupIndex}`,
                `${title} (${groupIndex + 1}/${columnGroupCount})`,
                "w-[28%]",
              ))}
            </div>
          </>
        ) : (
          <div className={`w-full ${tableMinWidthClassName}`}>
            {renderTable(rows, idPrefix, title, "w-[14%]")}
          </div>
        )}
      </div>
      {note ? <p className="mt-4 mb-0 font-semibold text-ink">{note}</p> : null}
    </article>
  );
}
