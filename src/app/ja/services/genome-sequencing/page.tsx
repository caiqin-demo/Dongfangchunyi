import {
  getGenomeSequencingMetadata,
  GenomeSequencingPage,
} from "@/app/[lang]/services/genome-sequencing/GenomeSequencingPage";

export const metadata = getGenomeSequencingMetadata("ja");

export default function Page() {
  return <GenomeSequencingPage lang="ja" />;
}
