import {
  getLabInstrumentsMetadata,
  LabInstrumentsPage,
} from "@/app/[lang]/products/lab-instruments/LabInstrumentsPage";

export const metadata = getLabInstrumentsMetadata("zh");

export default function Page() {
  return <LabInstrumentsPage lang="zh" />;
}
