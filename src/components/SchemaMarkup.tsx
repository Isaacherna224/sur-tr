import { Helmet } from "react-helmet-async";
import localBusinessSchema from "@/seo/local-business.json";

const SchemaMarkup = () => (
  <Helmet>
    <script type="application/ld+json">
      {JSON.stringify(localBusinessSchema)}
    </script>
  </Helmet>
);

export default SchemaMarkup;
