import type { GenomeSequencingContent } from "@/content/genome-sequencing/types";

type GenomeSequencingOptionsProps = Readonly<{
  optionGroupLabel: string;
  options: GenomeSequencingContent["options"];
}>;

export function GenomeSequencingOptions({
  optionGroupLabel,
  options,
}: GenomeSequencingOptionsProps) {
  return (
    <section className="bg-ui-subtle pt-8 text-ink" aria-label={optionGroupLabel}>
      <div className="page-container">
        <div className="flex flex-wrap justify-center gap-3">
          {options.map((option) => (
            <button
              className="inline-flex min-h-12 items-center justify-center rounded-action border border-line bg-white px-6 text-button-label text-ink disabled:cursor-not-allowed disabled:opacity-100"
              disabled
              key={option.id}
              type="button"
            >
              {option.label}
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
