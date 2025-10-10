import { Facebook, Instagram, MessageCircle, Phone, Mail, MapPin } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 md:px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="md:col-span-2">
            <h3 className="text-2xl font-bold mb-4 font-['Outfit']">
              Gestoría y Verificaciones del Sur
            </h3>
            <p className="text-primary-foreground/80 mb-4">
              Con 10 años de experiencia brindando servicios de gestoría vehicular en CDMX, Morelos, Estado de México y Guerrero. Tu aliado de confianza para todos tus trámites.
            </p>
            <div className="flex gap-4">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-primary-foreground/10 hover:bg-primary-foreground/20 rounded-lg transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-primary-foreground/10 hover:bg-primary-foreground/20 rounded-lg transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a
                href="https://tiktok.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-primary-foreground/10 hover:bg-primary-foreground/20 rounded-lg transition-colors"
                aria-label="TikTok"
              >
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-semibold mb-4 font-['Outfit']">Contacto</h4>
            <div className="space-y-3">
              <a
                href="https://wa.me/5215512345678"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-primary-foreground/80 hover:text-primary-foreground transition-colors"
              >
                <MessageCircle className="h-5 w-5" />
                <span>+52 55 1234 5678</span>
              </a>
              <a
                href="https://wa.me/5215523456789"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-primary-foreground/80 hover:text-primary-foreground transition-colors"
              >
                <MessageCircle className="h-5 w-5" />
                <span>+52 55 2345 6789</span>
              </a>
              <a
                href="https://wa.me/5215534567890"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-primary-foreground/80 hover:text-primary-foreground transition-colors"
              >
                <MessageCircle className="h-5 w-5" />
                <span>+52 55 3456 7890</span>
              </a>
              <a
                href="mailto:info@gestoriadelsur.com"
                className="flex items-center gap-2 text-primary-foreground/80 hover:text-primary-foreground transition-colors"
              >
                <Mail className="h-5 w-5" />
                <span>info@gestoriadelsur.com</span>
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-4 font-['Outfit']">Cobertura</h4>
            <ul className="space-y-2 text-primary-foreground/80">
              <li className="flex items-center gap-2">
                <MapPin className="h-4 w-4" />
                <span>CDMX</span>
              </li>
              <li className="flex items-center gap-2">
                <MapPin className="h-4 w-4" />
                <span>Morelos</span>
              </li>
              <li className="flex items-center gap-2">
                <MapPin className="h-4 w-4" />
                <span>Estado de México</span>
              </li>
              <li className="flex items-center gap-2">
                <MapPin className="h-4 w-4" />
                <span>Guerrero</span>
              </li>
              <li className="flex items-center gap-2">
                <MapPin className="h-4 w-4" />
                <span>Envío Nacional</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 mt-8 pt-8 text-center text-primary-foreground/60">
          <p>© {currentYear} Gestoría y Verificaciones del Sur. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
