import { Helmet } from "react-helmet";

const SchemaMarkup = () => {
  // Use more complete LocalBusiness schema including url, logo and real contact points.
  const origin = typeof window !== "undefined" ? window.location.origin : "";
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Gestoría y Verificaciones del Sur",
    "description": "Gestoría vehicular con 10 años de experiencia. Trámites de placas, verificación, tenencia y más en CDMX, Morelos, Estado de México, Michoacàn y Guerrero.",
    "url": origin || "",
    "logo": origin ? `${origin}/favicon.ico` : "/favicon.ico",
    "image": origin ? `${origin}/placeholder.svg` : "/placeholder.svg",
    "telephone": [
      "+525512880840",
      "+525546144773",
      "+525543904228"
    ],
    "contactPoint": [
      {
        "@type": "ContactPoint",
        "telephone": "+525512880840",
        "contactType": "customer service",
        "areaServed": "MX",
        "availableLanguage": ["Spanish"]
      }
    ],
    "email": "gestoriaverificasur@gmail.com",
    "areaServed": ["Ciudad de México", "Morelos", "Estado de México", "Michoacàn", "Guerrero"],
    "address": [
      {
        "@type": "PostalAddress",
        "streetAddress": "Calz. de las Bombas 14, Coapa, Parque Coyoacán",
        "addressLocality": "Coyoacán",
        "addressRegion": "CDMX",
        "addressCountry": "MX"
      },
      {
        "@type": "PostalAddress",
        "streetAddress": "Armada de Mexico, Coapa, Culhuacan CTM Zona X",
        "addressLocality": "Coyoacán",
        "addressRegion": "CDMX",
        "addressCountry": "MX"
      },
      {
        "@type": "PostalAddress",
        "streetAddress": "Prol. 16 de Septiembre 271A, Contadero",
        "addressLocality": "Cuajimalpa de Morelos",
        "addressRegion": "CDMX",
        "addressCountry": "MX"
      },
      {
        "@type": "PostalAddress",
        "streetAddress": "Canal de Miramontes 3629, Coapa",
        "addressLocality": "Tlalpan",
        "addressRegion": "CDMX",
        "addressCountry": "MX"
      }
    ],
    "openingHours": "Mo-Fr 09:00-18:00, Sa 09:00-14:00",
    "sameAs": [
      "https://www.facebook.com/GVSgestorias",
      "https://www.instagram.com/gvs.gestoriasyverificaciones/?hl=en",
      "https://www.tiktok.com/@gvs.vehicular?lang=en"
    ]
  };

  return (
    <Helmet>
      <script type="application/ld+json">
        {JSON.stringify(schemaData)}
      </script>
    </Helmet>
  );
};

export default SchemaMarkup;
