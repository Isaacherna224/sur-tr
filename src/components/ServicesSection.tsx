import { FileText, CheckCircle, CreditCard, MapPin } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";

const services = [
  {
    icon: FileText,
    title: "Trámites de Placas y Control Vehicular",
    items: [
      "Alta de Placas (Auto Nuevo y Usado/Foráneo)",
      "Baja de Placas (Por venta o robo/siniestro)",
      "Cambio de Propietario",
      "Renovación/Reposición de Tarjeta de Circulación",
      "Cambio de Domicilio (CDMX/EdoMex)",
    ],
  },
  {
    icon: CheckCircle,
    title: "Verificación Vehicular y Hoy No Circula",
    items: [
      "Verificación Vehicular CDMX (Citas y Gestión de Hologramas)",
      "Verificación Vehicular Morelos (Sí verifica)",
      "Gestión de Permisos Especiales para Circular",
      "Asesoría sobre restricciones vehiculares",
      "Trámites express para cumplir normativas",
    ],
  },
  {
    icon: CreditCard,
    title: "Adeudos y Pagos",
    items: [
      "Pago de Tenencia",
      "Refrendo Vehicular",
      "Gestión de Multas e infracciones",
      "Consulta de Adeudos",
      "Planes de pago y facilidades",
    ],
  },
  {
    icon: MapPin,
    title: "Servicios Especiales por Estado",
    items: [
      "Trámites CDMX: Todas las alcaldías",
      "Trámites Morelos: Todo el estado",
      "Trámites Estado de México: Zona metropolitana",
      "Trámites Guerrero: Principales municipios",
      "Trámites Michoacàn: Principales municipios",
      "Asesoría personalizada según tu ubicación",
    ],
  },
];

const ServicesSection = () => {
  return (
    <section id="servicios" className="py-16 md:py-24 bg-muted">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4 font-['Outfit']">
            Nuestros Servicios
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
            Soluciones completas para todos tus trámites vehiculares en CDMX, Morelos, Estado de México, Michoacàn y Guerrero
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {services.map((service, index) => (
            <Card
              key={index}
              className="hover:shadow-medium transition-all duration-300 animate-fade-in-up border-border"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <CardHeader>
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-accent rounded-lg">
                    <service.icon className="h-6 w-6 text-accent-foreground" />
                  </div>
                  <div className="flex-1">
                    <CardTitle className="text-xl md:text-2xl mb-2 font-['Outfit']">
                      {service.title}
                    </CardTitle>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {service.items.map((item, itemIndex) => (
                    <li key={itemIndex} className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
                      <span className="text-card-foreground">{item}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-lg text-muted-foreground mb-6">
            ¿No encuentras el trámite que necesitas?
          </p>
          <a
            href="https://wa.me/5512880840?text=Hola, necesito información sobre un trámite específico"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center px-8 py-4 bg-accent text-accent-foreground hover:bg-accent-glow rounded-lg font-semibold text-lg shadow-accent transition-all duration-300 hover:scale-105"
          >
            Consultar por WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
