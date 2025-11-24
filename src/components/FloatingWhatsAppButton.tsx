"use client";
import React from "react";
import { FaWhatsapp } from "react-icons/fa";

type Props = {
  whatsappMessage?: string;
};

const FloatingWhatsAppButton: React.FC<Props> = ({
  whatsappMessage = "Hola, me gustaría información sobre sus servicios de gestoría vehicular",
}) => {
  const whatsappNumber = "525512880840";

  const handleClick = () => {
    window.open(
      `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
        whatsappMessage
      )}`,
      "_blank"
    );
  };

  return (
    <button
      onClick={handleClick}
      aria-label="Contactar por WhatsApp"
      className="fixed bottom-6 right-6 z-50 h-20 w-20 rounded-full shadow-lg animate-bounce-subtle hover:animate-none bg-green-500 hover:bg-green-600 flex items-center justify-center p-0"
    >
      {/* Icono ocupa casi todo el botón */}
      <FaWhatsapp className="h-3/4 w-3/4" />
    </button>
  );
};

export default FloatingWhatsAppButton;
