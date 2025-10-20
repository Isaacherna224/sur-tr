import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "./ui/button";
import heroGestoria from "@/assets/hero-gestoria.jpg";
import heroDocuments from "@/assets/hero-documents.jpg";
import heroCoverage from "@/assets/hero-coverage.jpg";

const slides = [
  {
    image: heroGestoria,
    title: "Gestoría y Verificación Vehicular en CDMX, Morelos, EdoMex, Michoacàn y Guerrero",
    subtitle: "Trámites con 10 Años de Experiencia",
  },
  {
    image: heroDocuments,
    title: "Todos tus Trámites Vehiculares en un Solo Lugar",
    subtitle: "Rápido, Seguro y Profesional",
  },
  {
    image: heroCoverage,
    title: "Cobertura en 5 Estados y Envío Nacional",
    subtitle: "Entrega Personal en CDMX y Morelos",
  },
];

const HeroCarousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  const goToPrevious = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const goToNext = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const handleWhatsAppContact = () => {
    window.open(
      "https://wa.me/5512880840?text=Hola, me gustaría información sobre sus servicios",
      "_blank"
    );
  };

  return (
    <section className="relative h-[600px] md:h-[700px] overflow-hidden bg-primary">
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentSlide
              ? "opacity-100 z-10"
              : "opacity-0 z-0"
          }`}
        >
          <img
            src={slide.image}
            alt={slide.title}
            className="w-full h-full object-cover"
            loading={index === 0 ? "eager" : "lazy"}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-primary/95 via-primary/70 to-transparent" />
          
          <div className="absolute inset-0 flex items-center">
            <div className="container mx-auto px-4 md:px-6">
              <div className="max-w-2xl animate-fade-in-up">
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground mb-4 font-['Outfit']">
                  {slide.title}
                </h1>
                <p className="text-xl md:text-2xl text-primary-foreground/90 mb-8 font-medium">
                  {slide.subtitle}
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button
                    onClick={handleWhatsAppContact}
                    variant="cta"
                    size="lg"
                    className="text-lg"
                  >
                    Contactar por WhatsApp
                  </Button>
                  <Button
                    onClick={() => document.getElementById("servicios")?.scrollIntoView({ behavior: "smooth" })}
                    variant="outline-light"
                    size="lg"
                    className="text-lg"
                  >
                    Ver Servicios
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}

      {/* Navigation Arrows */}
      <Button
        onClick={goToPrevious}
        variant="ghost"
        size="icon"
        className="absolute left-4 top-1/2 -translate-y-1/2 text-primary-foreground hover:bg-primary-foreground/10 z-20"
        aria-label="Slide anterior"
      >
        <ChevronLeft className="h-8 w-8" />
      </Button>
      <Button
        onClick={goToNext}
        variant="ghost"
        size="icon"
        className="absolute right-4 top-1/2 -translate-y-1/2 text-primary-foreground hover:bg-primary-foreground/10 z-20"
        aria-label="Siguiente slide"
      >
        <ChevronRight className="h-8 w-8" />
      </Button>

      {/* Dots Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-2 z-20">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`h-2 rounded-full transition-all ${
              index === currentSlide
                ? "w-8 bg-accent"
                : "w-2 bg-primary-foreground/50"
            }`}
            aria-label={`Ir a slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
};

export default HeroCarousel;
