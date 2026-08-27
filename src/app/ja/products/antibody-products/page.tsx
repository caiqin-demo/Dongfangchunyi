import {
  AntibodyProductsPage,
  getAntibodyProductsMetadata,
} from "@/app/[lang]/products/antibody-products/AntibodyProductsPage";

export const metadata = getAntibodyProductsMetadata("ja");

export default function Page() {
  return <AntibodyProductsPage lang="ja" />;
}
