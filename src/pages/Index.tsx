import HeroCarousel from "@/components/HeroCarousel";
import ServicesSection from "@/components/ServicesSection";
import CoverageSection from "@/components/CoverageSection";
import LocationsSection from "@/components/LocationsSection";
import Footer from "@/components/Footer";
import FloatingWhatsAppButton from "@/components/FloatingWhatsAppButton";
import SchemaMarkup from "@/components/SchemaMarkup";
import Seo from "@/components/Seo";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Seo />
      <SchemaMarkup />
      <HeroCarousel />
      <ServicesSection />
      <CoverageSection />
      <LocationsSection />
      <Footer />
      <FloatingWhatsAppButton />
    </div>
  );
};

export default Index;
