import ServicesSection from "@/components/ServicesSection";
import HeroCarousel from "@/components/HeroCarousel";
import CoverageSection from "@/components/CoverageSection";
import LocationsSection from "@/components/LocationsSection";
import FixedHeader from "@/components/HeaderPost";
import FloatingWhatsAppButton from "@/components/FloatingWhatsAppButton";

const Index = () => {
  return (
    <>
      {/* Header fijo*/}
      <FixedHeader />
      <HeroCarousel/>
      <ServicesSection/>
      <CoverageSection/>
      <LocationsSection/> 
      <FloatingWhatsAppButton />
    </>  
    ); 
};

export default Index;
