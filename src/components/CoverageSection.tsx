import { Truck, MapPin, Package, Clock } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";

const CoverageSection = () => {
  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4 font-['Outfit']">
            Nuestro Alcance: De lo Local a Toda la República Mexicana
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
            Tu gestoría de confianza con cobertura local y nacional
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* Entrega Personal */}
          <Card className="border-accent/20 hover:border-accent transition-all duration-300 hover:shadow-accent">
            <CardHeader>
              <div className="flex items-center gap-3 mb-2">
                <div className="p-3 bg-accent rounded-lg">
                  <MapPin className="h-6 w-6 text-accent-foreground" />
                </div>
                <CardTitle className="text-2xl font-['Outfit']">
                  Entrega Personal
                </CardTitle>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="p-4 bg-accent/10 rounded-lg">
                <h3 className="font-semibold text-lg mb-2 text-accent-foreground">
                  CDMX y Morelos - GRATIS
                </h3>
                <p className="text-muted-foreground">
                  Entregamos personalmente tus documentos sin costo adicional en nuestras sucursales o en un punto acordado contigo.
                </p>
              </div>
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <Clock className="h-5 w-5 text-accent" />
                  <span className="text-sm">Entregas el mismo día en zonas cercanas</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-accent" />
                  <span className="text-sm">Citas personales en nuestras 4 sucursales</span>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Entrega Nacional */}
          <Card className="border-secondary/20 hover:border-secondary transition-all duration-300 hover:shadow-medium">
            <CardHeader>
              <div className="flex items-center gap-3 mb-2">
                <div className="p-3 bg-secondary rounded-lg">
                  <Truck className="h-6 w-6 text-secondary-foreground" />
                </div>
                <CardTitle className="text-2xl font-['Outfit']">
                  Entrega Nacional
                </CardTitle>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="p-4 bg-secondary/10 rounded-lg">
                <h3 className="font-semibold text-lg mb-2">
                  Servicio a toda la República
                </h3>
                <p className="text-muted-foreground">
                  Enviamos tus documentos por paquetería segura a cualquier parte de México. Ideal para trámites de CDMX, Morelos, EdoMex, Michoacàn o Guerrero desde otros estados.
                </p>
              </div>
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <Package className="h-5 w-5 text-secondary" />
                  <span className="text-sm">Paquetería certificada y rastreable</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="h-5 w-5 text-secondary" />
                  <span className="text-sm">Entrega en 2-5 días hábiles (Una vez realizado el tramite ante la dependencia)</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="mt-12 text-center">
          <div className="bg-primary/5 border border-primary/20 rounded-lg p-6 max-w-3xl mx-auto">
            <h3 className="text-xl font-semibold mb-3 font-['Outfit']">
              Estados con los que realizamos todo tipo de tramite vehicular
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
              <div className="p-3 bg-background rounded-lg">
                <MapPin className="h-6 w-6 text-primary mx-auto mb-1" />
                <span className="font-semibold">CDMX</span>
              </div>
              <div className="p-3 bg-background rounded-lg">
                <MapPin className="h-6 w-6 text-primary mx-auto mb-1" />
                <span className="font-semibold">Morelos</span>
              </div>
              <div className="p-3 bg-background rounded-lg">
                <MapPin className="h-6 w-6 text-primary mx-auto mb-1" />
                <span className="font-semibold">Estado de México</span>
              </div>
              <div className="p-3 bg-background rounded-lg">
                <MapPin className="h-6 w-6 text-primary mx-auto mb-1" />
                <span className="font-semibold">Michoacàn</span>
              </div>
              <div className="p-3 bg-background rounded-lg">
                <MapPin className="h-6 w-6 text-primary mx-auto mb-1" />
                <span className="font-semibold">Guerrero</span>
              </div>
              <div className="p-3 bg-background rounded-lg">
                <MapPin className="h-6 w-6 text-primary mx-auto mb-1" />
                <span className="font-semibold">Chiapas</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// Missing import
import { CheckCircle } from "lucide-react";

export default CoverageSection;
