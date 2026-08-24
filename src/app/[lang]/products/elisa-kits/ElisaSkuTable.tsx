import type { ElisaKitsContent } from "@/content/elisa-kits/types";

type ElisaSkuTableProps = Readonly<{
  labels: ElisaKitsContent["skuLabels"];
  productTitle: string;
  skus: ElisaKitsContent["product"]["skus"];
}>;

export function ElisaSkuTable({ labels, productTitle, skus }: ElisaSkuTableProps) {
  const titleId = "elisa-sku-title";

  return (
    <section className="shrink-0 pt-7" aria-labelledby={titleId}>
      <h3 className="mb-3 text-lg font-bold" id={titleId}>{labels.title}</h3>
      <div className="overflow-x-auto rounded-control border border-line [contain:paint]" role="region" aria-label={`${productTitle} ${labels.title}`} tabIndex={0}>
        <table className="w-full min-w-[460px] table-fixed border-collapse text-left text-sm">
          <colgroup>
            <col className="w-[28%]" />
            <col className="w-[22%]" />
            <col className="w-[50%]" />
          </colgroup>
          <thead className="bg-ui-card text-on-dark">
            <tr className="h-14">
              <th className="px-3 py-2" scope="col">{labels.packSize}</th>
              <th className="px-3 py-2" scope="col">{labels.availability}</th>
              <th className="px-3 py-2" scope="col">{labels.shippingOrigin}</th>
            </tr>
          </thead>
          <tbody>
            {skus.map((sku) => (
              <tr className="h-16 border-t border-line" key={sku.id}>
                <th className="px-3 py-2 font-semibold" scope="row">{sku.packSize}</th>
                <td className="px-3 py-2">{sku.availability}</td>
                <td className="px-3 py-2 leading-5 text-ink-muted">{sku.shippingOrigin}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}
