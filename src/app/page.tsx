import HeroCarousel from "@/components/HeroCarousel";
import ServicesSection from "@/components/ServicesSection";
import CoverageSection from "@/components/CoverageSection";
import LocationsSection from "@/components/LocationsSection";

export default function HomePage() {
  return (
    <>
      <HeroCarousel />
      <div id="servicios"><ServicesSection /></div>
      <CoverageSection />
      <LocationsSection />
    </>
  );
}