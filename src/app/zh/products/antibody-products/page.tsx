import {
  AntibodyProductsPage,
  getAntibodyProductsMetadata,
} from "@/app/[lang]/products/antibody-products/AntibodyProductsPage";

export const metadata = getAntibodyProductsMetadata("zh");

export default function Page() {
  return <AntibodyProductsPage lang="zh" />;
}
