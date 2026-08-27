import {
  ElisaKitsPage,
  getElisaKitsMetadata,
} from "@/app/[lang]/products/elisa-kits/ElisaKitsPage";

export const metadata = getElisaKitsMetadata("ja");

export default function Page() {
  return <ElisaKitsPage lang="ja" />;
}
