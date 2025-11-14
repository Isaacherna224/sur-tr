import { Helmet } from "react-helmet-async";

type Props = {
  title?: string;
  description?: string;
  canonical?: string;
  image?: string; // full URL
};

const Seo = ({
  title = "Gestoría y Verificaciones del Sur | Gestoría vehicular en CDMX y Morelos",
  description = "Trámites vehiculares (placas, verificación, tenencia y más). 10 años de experiencia. Cobertura en CDMX, Morelos, EdoMex, Michoacán y Guerrero.",
  canonical = "https://www.gestoriasyverificacionesdelsur.com/",
  image = "https://www.gestoriasyverificacionesdelsur.com/placeholder.svg",
}: Props) => {
  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={canonical} />

      {/* Open Graph */}
      <meta property="og:type" content="website" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:url" content={canonical} />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />

      <meta name="robots" content="index, follow" />
    </Helmet>
  );
};

export default Seo;
