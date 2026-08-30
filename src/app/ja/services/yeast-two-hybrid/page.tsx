import {
  getYeastTwoHybridMetadata,
  YeastTwoHybridPage,
} from "@/app/[lang]/services/yeast-two-hybrid/YeastTwoHybridPage";

export const metadata = getYeastTwoHybridMetadata("ja");

export default function Page() {
  return <YeastTwoHybridPage lang="ja" />;
}
