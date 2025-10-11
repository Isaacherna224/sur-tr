import { MessageCircle } from "lucide-react";
import { Button } from "./ui/button";

const FloatingWhatsAppButton = () => {
  const whatsappNumber = "525512880840"; // Replace with actual number
  const whatsappMessage = "Hola, me gustaría información sobre sus servicios de gestoría vehicular";
  
  const handleClick = () => {
    window.open(
      `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`,
      "_blank"
    );
  };

  return (
    <Button
      onClick={handleClick}
      variant="whatsapp"
      size="lg"
      className="fixed bottom-6 right-6 z-50 h-16 w-16 rounded-full shadow-strong animate-bounce-subtle hover:animate-none"
      aria-label="Contactar por WhatsApp"
    >
      <MessageCircle className="h-8 w-8" />
    </Button>
  );
};

export default FloatingWhatsAppButton;
