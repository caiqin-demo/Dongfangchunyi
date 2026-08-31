import Image from "next/image";
import Link from "next/link";

import logo from "@/assets/brand/Logo.png";
import { contentByLocale } from "@/content";
import type { ServiceCardId } from "@/content/types";
import type { Locale } from "@/i18n/config";
import { productPaths } from "@/lib/product-paths";
import { servicePaths } from "@/lib/service-paths";

const focusRingClass = "focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent";
const footerLinkClass = `inline-flex min-h-6 items-center rounded-action text-[15px] leading-[1.7] text-on-dark-muted/90 transition-colors duration-200 hover:text-accent focus-visible:text-accent ${focusRingClass}`;

type SiteFooterProps = Readonly<{
  className?: string;
  currentPath?: `/${string}`;
  lang: Locale;
}>;

const servicePagePaths = {
  "yeast-two-hybrid": servicePaths["yeast-two-hybrid"],
  "genome-sequencing": null,
  "other-business-services": null,
} satisfies Record<ServiceCardId, `/${string}` | null>;

export function SiteFooter({ className, currentPath, lang }: SiteFooterProps) {
  const content = contentByLocale[lang];
  const brandFontClass = lang === "ja" ? "font-brand-serif-jp" : "font-brand-serif-sc";

  return (
    <footer className={`bg-ui-footer py-10 text-on-dark-muted ${className ?? ""}`} id="contact">
      <div className="@container/footer page-container">
        <div className="grid grid-cols-[1.4fr_1fr_1fr_.8fr] gap-[clamp(44px,5vw,88px)] @max-footer-columns/footer:grid-cols-2 @max-footer-columns/footer:gap-x-12 @max-footer-columns/footer:gap-y-11 @max-footer-stack/footer:grid-cols-1 @max-footer-stack/footer:gap-10">
          <section aria-labelledby="footer-company-title">
            <div className="flex items-center gap-[11.5px] text-white">
              <Image className="h-9 w-auto shrink-0 object-contain" src={logo} width={36} height={37} alt="" />
              <h2 className={`m-0 ${brandFontClass} text-base leading-[1.4] font-normal tracking-[.06em]`} id="footer-company-title">{content.brand}</h2>
            </div>
            <p className="mt-7 mb-0 text-[15px] leading-[1.85] text-on-dark-muted/90">
              <span className="block">{content.footer.tagline.primary}</span>
              <span className="block">{content.footer.tagline.secondary}</span>
            </p>
          </section>

          <nav aria-labelledby="footer-products-title">
            <h2 className="mt-0 mb-5 text-[15px] leading-[1.7] font-bold text-white" id="footer-products-title">{content.footer.productsTitle}</h2>
            <ul className="m-0 grid list-none gap-3 p-0">
              {content.footer.productLinks.map((item) => (
                <li key={item.id}>
                  <Link aria-current={productPaths[item.id] === currentPath ? "page" : undefined} className={footerLinkClass} href={`/${lang}${productPaths[item.id]}`}>{item.label}</Link>
                </li>
              ))}
            </ul>
          </nav>

          <nav aria-labelledby="footer-services-title">
            <h2 className="mt-0 mb-5 text-[15px] leading-[1.7] font-bold text-white" id="footer-services-title">{content.footer.servicesTitle}</h2>
            <ul className="m-0 grid list-none gap-3 p-0">
              {content.footer.serviceLinks.map((item) => {
                const servicePagePath = servicePagePaths[item.id];
                const href = servicePagePath ?? item.href;
                return (
                  <li key={item.id}>
                    <Link aria-current={servicePagePath === currentPath ? "page" : undefined} className={footerLinkClass} href={`/${lang}${href}`}>{item.label}</Link>
                  </li>
                );
              })}
            </ul>
          </nav>

          <nav aria-labelledby="footer-about-title">
            <h2 className="mt-0 mb-5 text-[15px] leading-[1.7] font-bold text-white" id="footer-about-title">{content.footer.aboutTitle}</h2>
            <ul className="m-0 grid list-none gap-3 p-0">
              {content.footer.aboutLinks.map((item) => (
                <li key={item.id}><Link className={footerLinkClass} href={`/${lang}${item.href}`}>{item.label}</Link></li>
              ))}
            </ul>
          </nav>
        </div>

        <div className="mt-11 border-t border-line-dark/70 pt-7 text-center text-xs leading-[1.7] text-on-dark-muted/85">
          <p className="m-0">{content.footer.copyright}</p>
        </div>
      </div>
    </footer>
  );
}
