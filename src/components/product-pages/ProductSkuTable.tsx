export type ProductSkuTableColumn<Row> = Readonly<{
  cellClassName?: string;
  getValue: (row: Row) => string | null | undefined;
  headerClassName?: string;
  id: string;
  label: string;
  rowHeader?: boolean;
  weight?: number;
}>;

type ProductSkuTableProps<Row> = Readonly<{
  ariaLabel: string;
  columns: readonly ProductSkuTableColumn<Row>[];
  emptyMessage?: string;
  getRowKey: (row: Row) => string;
  rows: readonly Row[];
  sectionClassName?: string;
  tableMinWidthClassName?: string;
  title: string;
  titleId: string;
}>;

function hasValue(value: string | null | undefined) {
  return typeof value === "string" && value.trim().length > 0;
}

export function ProductSkuTable<Row>({
  ariaLabel,
  columns,
  emptyMessage,
  getRowKey,
  rows,
  sectionClassName,
  tableMinWidthClassName = "min-w-[460px]",
  title,
  titleId,
}: ProductSkuTableProps<Row>) {
  const visibleColumns = columns.filter((column) =>
    rows.some((row) => hasValue(column.getValue(row))),
  );
  const totalWeight = visibleColumns.reduce((sum, column) => sum + (column.weight ?? 1), 0);

  return (
    <section className={`shrink-0 pt-7 ${sectionClassName ?? ""}`} aria-labelledby={titleId}>
      <h3 className="mb-3 text-lg font-bold" id={titleId}>{title}</h3>
      {rows.length > 0 && visibleColumns.length > 0 ? (
        <div className="overflow-x-auto rounded-control border border-line [contain:paint] focus-visible:-outline-offset-2 focus-visible:outline-2 focus-visible:outline-accent" role="region" aria-label={ariaLabel} tabIndex={0}>
          <table className={`w-full table-fixed border-collapse text-left text-sm ${tableMinWidthClassName}`}>
            <colgroup>
              {visibleColumns.map((column) => (
                <col
                  key={column.id}
                  style={{ width: `${((column.weight ?? 1) / totalWeight) * 100}%` }}
                />
              ))}
            </colgroup>
            <thead className="bg-ui-card text-on-dark">
              <tr className="h-14">
                {visibleColumns.map((column) => (
                  <th className={`px-3 py-2 ${column.headerClassName ?? ""}`} key={column.id} scope="col">
                    {column.label}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {rows.map((row) => (
                <tr className="h-16 border-t border-line" key={getRowKey(row)}>
                  {visibleColumns.map((column) => {
                    const value = column.getValue(row);
                    const className = `px-3 py-2 ${column.cellClassName ?? ""}`;

                    return column.rowHeader ? (
                      <th className={className} key={column.id} scope="row">{value}</th>
                    ) : (
                      <td className={className} key={column.id}>{value}</td>
                    );
                  })}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ) : emptyMessage ? (
        <p className="rounded-control border border-line bg-ui-subtle p-4 leading-[1.7] text-ink-muted">{emptyMessage}</p>
      ) : null}
    </section>
  );
}
