import { Helmet } from "react-helmet";

type Props = {
  title?: string;
  description?: string;
  image?: string; // absolute or relative to origin
};

const Seo = ({
  title = "Gestoría y Verificaciones del Sur | Gestoría vehicular en CDMX y Morelos",
  description = "Trámites vehiculares (placas, verificación, tenencia y más). 10 años de experiencia. Cobertura en CDMX, Morelos, EdoMex, Michoacàn y Guerrero.",
  image = "/placeholder.svg",
}: Props) => {
  // Build absolute URL where possible (client-side)
  const origin = typeof window !== "undefined" ? window.location.origin : "";
  const canonical = origin ? `${origin}${window.location.pathname}` : "/";
  const absoluteImage = origin ? `${origin}${image}` : image;

  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={canonical} />

      {/* Open Graph */}
      <meta property="og:type" content="website" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={absoluteImage} />
      <meta property="og:url" content={canonical} />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={absoluteImage} />

      {/* robots */}
      <meta name="robots" content="index, follow" />
    </Helmet>
  );
};

export default Seo;
