import {
  getYeastTwoHybridMetadata,
  YeastTwoHybridPage,
} from "@/app/[lang]/services/yeast-two-hybrid/YeastTwoHybridPage";

export const metadata = getYeastTwoHybridMetadata("zh");

export default function Page() {
  return <YeastTwoHybridPage lang="zh" />;
}
