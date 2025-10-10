import { MapPin, Phone, Clock } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";

const locations = [
  {
    name: "Sucursal Centro Histórico",
    address: "Calle 16 de Septiembre #45, Col. Centro, Cuauhtémoc, CDMX",
    phone: "+52 55 1234 5678",
    hours: "Lun - Vie: 9:00 - 18:00 | Sáb: 9:00 - 14:00",
  },
  {
    name: "Sucursal Roma Norte",
    address: "Av. Álvaro Obregón #128, Col. Roma Norte, Cuauhtémoc, CDMX",
    phone: "+52 55 2345 6789",
    hours: "Lun - Vie: 9:00 - 18:00 | Sáb: 9:00 - 14:00",
  },
  {
    name: "Sucursal Polanco",
    address: "Calle Horacio #502, Col. Polanco, Miguel Hidalgo, CDMX",
    phone: "+52 55 3456 7890",
    hours: "Lun - Vie: 9:00 - 18:00 | Sáb: 9:00 - 14:00",
  },
  {
    name: "Sucursal Coyoacán",
    address: "Av. Miguel Ángel de Quevedo #234, Col. Del Carmen, Coyoacán, CDMX",
    phone: "+52 55 4567 8901",
    hours: "Lun - Vie: 9:00 - 18:00 | Sáb: 9:00 - 14:00",
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
                    src={`https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3762.5!2d-99.1332!3d19.4326!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTnCsDI1JzU3LjQiTiA5OcKwMDcnNTkuNSJX!5e0!3m2!1sen!2smx!4v1234567890`}
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
            href="https://wa.me/5215512345678?text=Hola, me gustaría información sobre sus sucursales"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center px-8 py-4 bg-accent text-accent-foreground hover:bg-accent-glow rounded-lg font-semibold text-lg shadow-accent transition-all duration-300 hover:scale-105"
          >
            Contactar por WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
};

export default LocationsSection;
