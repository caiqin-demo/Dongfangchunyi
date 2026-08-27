import {
  getLabInstrumentsMetadata,
  LabInstrumentsPage,
} from "@/app/[lang]/products/lab-instruments/LabInstrumentsPage";

export const metadata = getLabInstrumentsMetadata("ja");

export default function Page() {
  return <LabInstrumentsPage lang="ja" />;
}
