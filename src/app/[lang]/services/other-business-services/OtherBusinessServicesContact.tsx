import type { OtherBusinessServicesContent } from "@/content/other-business-services";

type OtherBusinessServicesContactProps = Readonly<{
  contact: OtherBusinessServicesContent["contact"];
}>;

export function OtherBusinessServicesContact({ contact }: OtherBusinessServicesContactProps) {
  return (
    <section className="bg-ui-subtle pb-[clamp(3.5rem,7vw,7rem)] text-other-business-service-contact">
      <div className="page-container">
        <address className="not-italic text-product-section-body" lang={contact.language}>
          <p className="m-0">{contact.companyName}</p>
          <p className="m-0">{contact.postalCode}</p>
          <p className="m-0">{contact.address}</p>
          <p className="m-0">{contact.phone}</p>
          <a className="m-0 inline-flex rounded-action focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent" href={`mailto:${contact.email}`}>{contact.email}</a>
        </address>
      </div>
    </section>
  );
}
