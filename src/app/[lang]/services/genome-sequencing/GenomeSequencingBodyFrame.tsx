import type { ReactNode } from "react";

import type { GenomeSequencingContent } from "@/content/genome-sequencing/types";

type GenomeSequencingBodyFrameProps = Readonly<{
  children: ReactNode;
  contact: GenomeSequencingContent["body"]["contact"];
}>;

export function GenomeSequencingBodyFrame({
  children,
  contact,
}: GenomeSequencingBodyFrameProps) {
  return (
    <section className="bg-ui-subtle pb-[clamp(3.5rem,7vw,7rem)] text-ink">
      <div className="page-container">
        <div className="grid grid-cols-[auto_minmax(0,1fr)] items-baseline gap-x-4 py-3">
          <p className="m-0 text-service-section-title">{contact.label}</p>
          <div className="grid gap-y-1">
            {contact.emails.map((email) => (
              <p className="m-0 break-all text-service-body text-ink-muted" key={email}>{email}</p>
            ))}
          </div>
        </div>

        {children}
      </div>
    </section>
  );
}
