import { Helmet } from "react-helmet-async";
import seoPages from "../../seo-pages.json";
import { siteUrl } from "@/seo/site";

type SeoPage = keyof typeof seoPages;

interface SEOProps {
  page: SeoPage;
}

export function Seo({ page }: SEOProps) {
  const pageData = seoPages[page];
  const { title, description, image } = pageData;
  const url = `${siteUrl}${pageData.path}`;
  const imageUrl = `${siteUrl}${image}`;
  const isArticle = "sections" in pageData;
  const articleSchema = isArticle
    ? {
        "@context": "https://schema.org",
        "@type": "Article",
        headline: pageData.heading,
        description,
        image: imageUrl,
        mainEntityOfPage: url,
        inLanguage: "es-MX",
        author: { "@id": `${siteUrl}/#organization` },
        publisher: { "@id": `${siteUrl}/#organization` },
        articleSection: pageData.sections.map((section) => section.title),
      }
    : null;
  const breadcrumbSchema = isArticle
    ? {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: "Inicio",
            item: siteUrl,
          },
          {
            "@type": "ListItem",
            position: 2,
            name: "Guía para conductores",
            item: url,
          },
        ],
      }
    : null;

  return (
    <Helmet>
        <title>{title}</title>
        <meta name="description" content={description} />
        <link rel="canonical" href={url} />

        <meta property="og:locale" content="es_MX" />
        <meta property="og:site_name" content="Gestoría y Verificaciones del Sur" />
        <meta property="og:type" content={isArticle ? "article" : "website"} />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:image" content={imageUrl} />
        <meta property="og:image:secure_url" content={imageUrl} />
        <meta property="og:image:type" content={"imageType" in pageData ? pageData.imageType : "image/jpeg"} />
        <meta property="og:image:width" content={"imageWidth" in pageData ? String(pageData.imageWidth) : "1200"} />
        <meta property="og:image:height" content={"imageHeight" in pageData ? String(pageData.imageHeight) : "630"} />
        <meta property="og:image:alt" content={seoPages[page].imageAlt} />
        <meta property="og:url" content={url} />

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
        {articleSchema && (
          <script type="application/ld+json">{JSON.stringify(articleSchema)}</script>
        )}
        {breadcrumbSchema && (
          <script type="application/ld+json">{JSON.stringify(breadcrumbSchema)}</script>
        )}
    </Helmet>
  );
}
