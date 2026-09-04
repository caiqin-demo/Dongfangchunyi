import Image, { type StaticImageData } from "next/image";

import type { GenomeSequencingContent } from "@/content/genome-sequencing/types";

const publicationTextClass = "text-service-card-body text-ink-muted";

type GenomeSequencingBodyProps = Readonly<{
  body: GenomeSequencingContent["body"];
  teamImage: StaticImageData;
}>;

export function GenomeSequencingBody({ body, teamImage }: GenomeSequencingBodyProps) {
  return (
    <section className="bg-ui-subtle pb-[clamp(3.5rem,7vw,7rem)] text-ink">
      <div className="page-container">
        <div className="flex flex-wrap items-baseline gap-x-4 gap-y-1 py-3">
          <p className="m-0 text-service-section-title">{body.contact.label}</p>
          {body.contact.emails.map((email) => (
            <p className="m-0 break-all text-service-body text-ink-muted" key={email}>{email}</p>
          ))}
        </div>

        <article className="overflow-hidden rounded-product-card border border-line bg-white shadow-media">
          <section>
            <div className="grid grid-cols-4 px-[clamp(1.5rem,3vw,2.5rem)] py-[clamp(2rem,4vw,3.5rem)] max-page:grid-cols-2 max-compact:grid-cols-1">
              {body.categories.map((category) => (
                <section className="min-w-0 border-l border-genome-sequencing-accent pl-6 first:border-l-0 first:pl-0 max-page:odd:border-l-0 max-page:odd:pl-0 max-compact:border-l-0 max-compact:pl-0" aria-labelledby={`genome-sequencing-${category.id}-title`} key={category.id}>
                  <h2 className="m-0 text-service-current-title text-genome-sequencing-accent" id={`genome-sequencing-${category.id}-title`}>{category.label}</h2>
                  <ul className="mt-4 list-none space-y-2 p-0 text-service-body text-ink-muted">
                    {category.items.map((item) => (
                      <li className="break-words" key={item.id}>{item.label}</li>
                    ))}
                  </ul>
                </section>
              ))}

              <div className="col-span-full mt-12 grid grid-cols-4 max-page:grid-cols-2 max-compact:grid-cols-1">
                {body.categories.map((category) => (
                  <button className="justify-self-start pl-6 text-left text-service-body text-genome-sequencing-accent first:pl-0 max-page:odd:pl-0 max-compact:pl-0 disabled:cursor-not-allowed disabled:opacity-100" disabled key={category.id} type="button">技术路线+</button>
                ))}
              </div>
            </div>
          </section>

          <section className="border-t-4 border-genome-sequencing-accent px-[clamp(1.5rem,3vw,2.5rem)] py-[clamp(2rem,4vw,3.5rem)]" aria-labelledby="genome-sequencing-publications-title">
            <h2 className="m-0 text-service-body font-bold text-genome-sequencing-accent" id="genome-sequencing-publications-title">{body.publications.title}</h2>
            <ul className="mt-6 list-none space-y-5 p-0">
              {body.publications.items.map((publication) => (
                <li className="relative pl-5 before:absolute before:top-0 before:left-0 before:text-genome-sequencing-accent before:content-['*']" key={publication.id}>
                  <p className={`m-0 ${publicationTextClass}`}>{publication.citation}</p>
                  <p className={`mt-1 mb-0 ${publicationTextClass}`}>{publication.title}</p>
                </li>
              ))}
            </ul>
          </section>

          <section className="relative isolate overflow-hidden px-[clamp(1.5rem,3vw,2.5rem)] py-[clamp(2.5rem,5vw,5rem)] text-on-dark" aria-labelledby="genome-sequencing-team-title">
            <Image alt="" aria-hidden="true" className="object-cover object-center" fill loading="lazy" sizes="(min-width: 80rem) 80rem, (min-width: 60rem) calc(100vw - 4rem), calc(100vw - 1.5rem)" src={teamImage} />
            <div className="relative z-10 max-w-1/3 max-compact:max-w-none">
              <h2 className="m-0 text-service-current-title" id="genome-sequencing-team-title">{body.team.title}</h2>
              {body.team.paragraphs.map((paragraph, index) => (
                <p className="mt-5 mb-0 text-service-body text-on-dark" key={`${body.team.title}-${index}`}>{paragraph}</p>
              ))}
            </div>
          </section>
        </article>
      </div>
    </section>
  );
}
