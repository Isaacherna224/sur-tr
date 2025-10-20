import { Helmet } from "react-helmet";

const SchemaMarkup = () => {
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Gestoría y Verificaciones del Sur",
    "description": "Gestoría vehicular con 10 años de experiencia. Trámites de placas, verificación, tenencia y más en CDMX, Morelos, Estado de México, Michoacàn y Guerrero.",
    
    "telephone": [
      "+525512345678",
      "+525523456789",
      "+525534567890"
    ],
    "email": "info@gestoriadelsur.com",
    "areaServed": [
      {
        "@type": "State",
        "name": "Ciudad de México"
      },
      {
        "@type": "State",
        "name": "Morelos"
      },
      {
        "@type": "State",
        "name": "Estado de México"
      },
      {
        "@type": "State",
        "name": "Guerrero"
      }
    ],
    "address": [
      {
        "@type": "PostalAddress",
        "streetAddress": "Calle 16 de Septiembre #45, Col. Centro",
        "addressLocality": "Cuauhtémoc",
        "addressRegion": "CDMX",
        "addressCountry": "MX"
      },
      {
        "@type": "PostalAddress",
        "streetAddress": "Av. Álvaro Obregón #128, Col. Roma Norte",
        "addressLocality": "Cuauhtémoc",
        "addressRegion": "CDMX",
        "addressCountry": "MX"
      },
      {
        "@type": "PostalAddress",
        "streetAddress": "Calle Horacio #502, Col. Polanco",
        "addressLocality": "Miguel Hidalgo",
        "addressRegion": "CDMX",
        "addressCountry": "MX"
      },
      {
        "@type": "PostalAddress",
        "streetAddress": "Av. Miguel Ángel de Quevedo #234, Col. Del Carmen",
        "addressLocality": "Coyoacán",
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
