import {
  getGenomeSequencingMetadata,
  GenomeSequencingPage,
} from "@/app/[lang]/services/genome-sequencing/GenomeSequencingPage";

export const metadata = getGenomeSequencingMetadata("zh");

export default function Page() {
  return <GenomeSequencingPage lang="zh" />;
}
