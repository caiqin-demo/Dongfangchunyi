import type {
  AntibodyProductContent,
  AntibodyProductId,
  AntibodyProductsContent,
} from "@/content/antibody-products/types";

type SkuTableProps = Readonly<{
  productId: AntibodyProductId;
  productTitle: string;
  skus: AntibodyProductContent["skus"];
  labels: AntibodyProductsContent["skuLabels"];
}>;

export function SkuTable({ productId, productTitle, skus, labels }: SkuTableProps) {
  const titleId = `${productId}-sku-title`;

  return (
    <section className="h-[21rem] shrink-0 pt-7 max-[800px]:h-auto" aria-labelledby={titleId}>
      <h3 className="mb-3 text-lg font-bold" id={titleId}>{labels.title}</h3>
      {skus.length > 0 ? (
        <div className="overflow-x-auto rounded-control border border-line [contain:paint]" role="region" aria-label={`${productTitle} ${labels.title}`} tabIndex={0}>
          <table className="w-full min-w-[560px] table-fixed border-collapse text-left text-sm">
            <colgroup>
              <col className="w-[18%]" />
              <col className="w-[24%]" />
              <col className="w-[17%]" />
              <col className="w-[41%]" />
            </colgroup>
            <thead className="bg-ui-card text-on-dark">
              <tr className="h-14">
                <th className="px-3 py-2" scope="col">{labels.packSize}</th>
                <th className="px-3 py-2" scope="col">{labels.catalogNumber}</th>
                <th className="px-3 py-2 whitespace-nowrap" scope="col">{labels.shippingOrigin}</th>
                <th className="px-3 py-2" scope="col">{labels.availability}</th>
              </tr>
            </thead>
            <tbody>
              {skus.map((sku) => (
                <tr className="h-16 border-t border-line" key={sku.catalogNumber}>
                  <td className="px-3 py-2 font-semibold">{sku.packSize}</td>
                  <td className="px-3 py-2">{sku.catalogNumber}</td>
                  <td className="px-3 py-2 whitespace-nowrap">{sku.shippingOrigin}</td>
                  <td className="px-3 py-2 leading-5 text-ink-muted">{labels.availabilityNote}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ) : (
        <p className="rounded-control border border-line bg-ui-subtle p-4 leading-[1.7] text-ink-muted">{labels.incompleteSource}</p>
      )}
    </section>
  );
}
