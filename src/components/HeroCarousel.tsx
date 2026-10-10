import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "./ui/button";

const slides = [
  {
    image: "/images/hero-gestoria-1280.webp",
    mobileImage: "/images/hero-gestoria-640.webp",
    title: "Gestoría y Verificación Vehicular en CDMX, Morelos, EdoMex, Michoacàn y Guerrero",
    subtitle: "Trámites con 10 Años de Experiencia",
  },
  {
    image: "/images/hero-documents-1280.webp",
    mobileImage: "/images/hero-documents-640.webp",
    title: "Todos tus Trámites Vehiculares en un Solo Lugar",
    subtitle: "Rápido Seguro y Profesional",
  },
  {
    image: "/images/hero-coverage-1280.webp",
    mobileImage: "/images/hero-coverage-640.webp",
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
    <section className="relative h-[350px] md:h-[450px] overflow-hidden bg-primary">
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentSlide ? "opacity-100 z-10" : "opacity-0 z-0"
          }`}
        >
          {index === currentSlide && (
            <picture>
              <source
                media="(max-width: 640px)"
                srcSet={slide.mobileImage}
                type="image/webp"
              />
              <img
                src={slide.image}
                alt={slide.title}
                width={1280}
                height={720}
                className="w-full h-full object-cover"
                loading="eager"
                fetchPriority={index === 0 ? "high" : "auto"}
              />
            </picture>
          )}
          <div className="absolute inset-0 bg-gradient-to-r from-primary/95 via-primary/70 to-transparent" />
          {/* Removed per-slide text and buttons to avoid duplication; overlay below handles content and actions */}
        </div>
      ))}

      {/* Overlay with single H1/subtitle and action buttons (keeps semantics and avoids duplicates) */}
      <div className="absolute inset-0 flex items-start z-20">
        <div className="container mx-auto px-4 md:px-6 pt-16 md:pt-20">
          <div className="max-w-2xl animate-fade-in-up">
            <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-primary-foreground mb-4 font-['Outfit']">
              {slides[currentSlide].title}
            </h1>
            <p className="text-xl md:text-2xl text-primary-foreground/90 mb-8 font-medium">
              {slides[currentSlide].subtitle}
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
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

      {/* Navigation Arrows */}
      <Button
        onClick={goToPrevious}
        variant="ghost"
        size="icon"
        className="absolute left-4 top-1/2 -translate-y-1/2 text-primary-foreground hover:bg-primary-foreground/10 z-30"
        aria-label="Slide anterior"
      >
        <ChevronLeft className="h-8 w-8" />
      </Button>
      <Button
        onClick={goToNext}
        variant="ghost"
        size="icon"
        className="absolute right-4 top-1/2 -translate-y-1/2 text-primary-foreground hover:bg-primary-foreground/10 z-30"
        aria-label="Siguiente slide"
      >
        <ChevronRight className="h-8 w-8" />
      </Button>

      {/* Dots Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-2 z-30">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`h-2 rounded-full transition-all ${
              index === currentSlide ? "w-8 bg-accent" : "w-2 bg-primary-foreground/50"
            }`}
            aria-label={`Ir a slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
};

export default HeroCarousel;
