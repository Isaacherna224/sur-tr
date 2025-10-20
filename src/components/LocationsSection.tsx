import { MapPin, Phone, Clock } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
// Images for the team/vehicle gallery - replace these with your own JPEGs in src/assets or /public/images
import autoImg from '@/assets/imagen3.jpeg';
import motoImg from '@/assets/imagen2.jpeg';
import teamImg from '@/assets/imagen4.jpeg';
import officeImg from '@/assets/imagen1.jpeg';

const locations = [
  {
    name: "Sucursal Coyoacán",
    address: "Calz. de las Bombas 14, Coapa, Parque Coyoacán, Coyoacán, 04899 Ciudad de México, CDMX",
    phone: "+52 55 1288 0840, +52 55 4614 4773, +52 55 4390 4228",
    hours: "Lun - Vie: 10:00 - 18:00 | Sáb: 9:00 - 15:00",
    mapEmbedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3765.398518145283!2d-99.1342643!3d19.3085059!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85ce014a0b8ca8d9%3A0x346697637d46a8f!2sGVS%20gestor%C3%ADa%20y%20verificaciones%20del%20sur!5e0!3m2!1sen!2smx!4v1760140152780!5m2!1sen!2smx",
  },
  {
    name: "Sucursal Coapa Coyoacán",
    address: "Armada de Mexico, Coapa, Culhuacan CTM Zona X, Coyoacán, 04939 Ciudad de México, CDMX",
    phone: "+52 55 1288 0840, +52 55 4614 4773, +52 55 4390 4228",
    hours: "Lun - Vie: 10:00 - 18:00 | Sáb: 9:00 - 15:00",
    mapEmbedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3765.4054763326476!2d-99.1116764!3d19.3082037!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85ce01b33458d417%3A0x4001bc16c0c9ff67!2sGVS%20gestor%C3%ADa%20y%20verificaciones%20del%20sur!5e0!3m2!1sen!2smx!4v1760142417493!5m2!1sen!2smx",
  },
  {
    name: "Sucursal Cuajimalpa",
    address: "Prol. 16 de Septiembre 271A, Contadero, Cuajimalpa de Morelos, 05230 Ciudad de México, CDMX",
    phone: "+52 55 1288 0840, +52 55 4614 4773, +52 55 4390 4228",
    hours: "Lun - Vie: 10:00 - 18:00 | Sáb: 9:00 - 15:00",
    mapEmbedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3764.4659027169378!2d-99.3040245!3d19.348969099999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85d207306e51b035%3A0xb0227e11740f85b0!2sGVS!5e0!3m2!1sen!2smx!4v1760142446542!5m2!1sen!2smx",
  },
  {
    name: "Sucursal Coapa Tlalpan",
    address: "Canal de Miramontes 3629, Coapa, Villa Coapa, Tlalpan, 14390 Ciudad de México, CDMX",
    phone: "+52 55 1288 0840, +52 55 4614 4773, +52 55 4390 4228",
    hours: "Lun - Vie: 10:00 - 18:00 | Sáb: 9:00 - 15:00",
    mapEmbedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3765.7994467912167!2d-99.12605889999999!3d19.291085799999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85ce010f4fb81103%3A0xa3ddfca42784a9a7!2sGvs%20gestor%C3%ADa%20y%20verificaciones%20del%20sur!5e0!3m2!1sen!2smx!4v1760142473855!5m2!1sen!2smx",
  },
];

const LocationsSection = () => {
  return (
    <section className="py-16 md:py-24 bg-muted">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4 font-['Outfit']">
            Nuestras Sucursales en CDMX
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
            4 ubicaciones estratégicas para atenderte mejor
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {locations.map((location, index) => (
            <Card
              key={index}
              className="hover:shadow-medium transition-all duration-300 animate-fade-in-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <CardHeader>
                <CardTitle className="text-xl md:text-2xl font-['Outfit'] flex items-center gap-2">
                  <MapPin className="h-6 w-6 text-primary" />
                  {location.name}
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="aspect-video bg-muted rounded-lg overflow-hidden">
                  <iframe
                    src={location.mapEmbedUrl}
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title={`Mapa de ${location.name}`}
                  />
                </div>
                
                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <MapPin className="h-5 w-5 text-muted-foreground flex-shrink-0 mt-0.5" />
                    <p className="text-sm text-muted-foreground">{location.address}</p>
                  </div>
                  <div className="flex items-center gap-3">
                    <Phone className="h-5 w-5 text-muted-foreground flex-shrink-0" />
                    <a
                      href={`tel:${location.phone}`}
                      className="text-sm text-primary hover:underline"
                    >
                      {location.phone}
                    </a>
                  </div>
                  <div className="flex items-start gap-3">
                    <Clock className="h-5 w-5 text-muted-foreground flex-shrink-0 mt-0.5" />
                    <p className="text-sm text-muted-foreground">{location.hours}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-lg text-muted-foreground mb-6">
            ¿Prefieres que te contactemos nosotros?
          </p>
          <a
            href="https://wa.me/5512880840?text=Hola, me gustaría información sobre sus sucursales"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center px-8 py-4 bg-accent text-accent-foreground hover:bg-accent-glow rounded-lg font-semibold text-lg shadow-accent transition-all duration-300 hover:scale-105"
          >
            Contactar por WhatsApp
          </a>
        </div>
        {/* Equipo / Flota gallery: 4 imágenes responsive */}
        <div className="mt-12">
          <h3 className="text-2xl md:text-3xl font-bold text-foreground text-center mb-6 font-['Outfit']">
            Conoce a nuestro equipo y flota
          </h3>
          <p className="text-center text-muted-foreground max-w-2xl mx-auto mb-8">
            Autos y motos dedicados a entregas personales, más nuestras oficinas listas para atenderte.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 items-stretch">
            {/* Card 1 - Autos */}
            <figure className="bg-card rounded-lg overflow-hidden shadow-medium hover:shadow-strong transition-shadow duration-300">
              <img
                src={autoImg}
                alt="Autos para entregas personales"
                className="w-full h-48 object-cover sm:h-56 lg:h-44"
                loading="lazy"
              />
              <figcaption className="p-4 text-center">
                <h4 className="font-semibold text-lg">Flota de Autos Rápidos</h4>
                <p className="text-sm text-muted-foreground">Transporte seguro y puntual para tus envíos.</p>
              </figcaption>
            </figure>

            {/* Card 2 - Motos */}
            <figure className="bg-card rounded-lg overflow-hidden shadow-medium hover:shadow-strong transition-shadow duration-300">
              <img
                src={motoImg}
                alt="Motos para entregas rápidas"
                className="w-full h-48 object-cover sm:h-56 lg:h-44"
                loading="lazy"
              />
              <figcaption className="p-4 text-center">
                <h4 className="font-semibold text-lg">Motos Express</h4>
                <p className="text-sm text-muted-foreground">Ideal para entregas urbanas y urgentes.</p>
              </figcaption>
            </figure>

            {/* Card 3 - Entregas personales (vehículo mixto) */}
            <figure className="bg-card rounded-lg overflow-hidden shadow-medium hover:shadow-strong transition-shadow duration-300">
              <img
                src={teamImg}
                alt="Equipo de entregas y personal"
                className="w-full h-48 object-cover sm:h-56 lg:h-44"
                loading="lazy"
              />
              <figcaption className="p-4 text-center">
                <h4 className="font-semibold text-lg">Equipo Profesional</h4>
                <p className="text-sm text-muted-foreground">Personal capacitado y comprometido con la entrega.</p>
              </figcaption>
            </figure>

            {/* Card 4 - Oficinas */}
            <figure className="bg-card rounded-lg overflow-hidden shadow-medium hover:shadow-strong transition-shadow duration-300">
              <img
                src={officeImg}
                alt="Nuestras oficinas"
                className="w-full h-48 object-cover sm:h-56 lg:h-44"
                loading="lazy"
              />
              <figcaption className="p-4 text-center">
                <h4 className="font-semibold text-lg">Nuestras Oficinas</h4>
                <p className="text-sm text-muted-foreground">Visítanos en cualquiera de nuestras sucursales en CDMX.</p>
              </figcaption>
            </figure>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LocationsSection;
