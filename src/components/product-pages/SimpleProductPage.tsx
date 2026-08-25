import { ProductOverview } from "@/components/product-pages/ProductOverview";
import { ProductPageTemplate } from "@/components/product-pages/ProductPageTemplate";
import type { SimpleProductPageContent } from "@/content/simple-product-pages/types";
import type { Locale } from "@/i18n/config";

type SimpleProductPageProps = Readonly<{
  content: SimpleProductPageContent;
  imageSrc: string;
  lang: Locale;
  productPath: `/${string}`;
}>;

export function SimpleProductPage({ content, imageSrc, lang, productPath }: SimpleProductPageProps) {
  return (
    <ProductPageTemplate
      backToProducts={content.backToProducts}
      contact={content.contact}
      eyebrow={content.eyebrow}
      intro={content.intro}
      lang={lang}
      productPath={productPath}
      title={content.title}
    >
      <ProductOverview
        description={content.overview.description}
        heading={content.overview.heading}
        imageSrc={imageSrc}
        title={content.title}
      />
    </ProductPageTemplate>
  );
}
