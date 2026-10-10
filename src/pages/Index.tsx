import ServicesSection from "@/components/ServicesSection";
import HeroCarousel from "@/components/HeroCarousel";
import CoverageSection from "@/components/CoverageSection";
import LocationsSection from "@/components/LocationsSection";
import FixedHeader from "@/components/HeaderPost";
import FloatingWhatsAppButton from "@/components/FloatingWhatsAppButton";
import { Seo } from "@/components/Seo";
import CameraRecommendation from "@/components/CameraRecommendation";

const Index = () => {
  return (
    <>
      <Seo page="home" />
      {/* Header fijo*/}
      <FixedHeader />
      <HeroCarousel/>
      <CameraRecommendation />
      <ServicesSection/>
      <CoverageSection/>
      <LocationsSection/> 
      <FloatingWhatsAppButton />
    </>  
    ); 
};

export default Index;
