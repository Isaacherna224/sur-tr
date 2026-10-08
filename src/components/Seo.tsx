import { Helmet } from "react-helmet-async";
import seoPages from "../../seo-pages.json";
import { siteUrl } from "@/seo/site";

type SeoPage = keyof typeof seoPages;

interface SEOProps {
  page: SeoPage;
}

export function Seo({ page }: SEOProps) {
  const { title, description, image } = seoPages[page];
  const url = `${siteUrl}${seoPages[page].path}`;
  const imageUrl = `${siteUrl}${image}`;

  return (
    <Helmet>
        <title>{title}</title>
        <meta name="description" content={description} />
        <link rel="canonical" href={url} />

        <meta property="og:locale" content="es_MX" />
        <meta property="og:site_name" content="Gestoría y Verificaciones del Sur" />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:image" content={imageUrl} />
        <meta property="og:image:type" content="image/jpeg" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:image:alt" content={seoPages[page].imageAlt} />
        <meta property="og:url" content={url} />
        <meta property="og:type" content="website" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={description} />
        <meta name="twitter:image" content={imageUrl} />
        <meta name="twitter:image:alt" content={seoPages[page].imageAlt} />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            name: title,
            description,
            url,
            primaryImageOfPage: imageUrl,
            about: { "@id": `${siteUrl}/#organization` },
          })}
        </script>
    </Helmet>
  );
}
