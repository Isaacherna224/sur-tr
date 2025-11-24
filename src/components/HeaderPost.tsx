"use client";
import React, { useState } from "react";
import { FaWhatsapp, FaBars, FaTimes } from "react-icons/fa";
import Link from "next/link";

type Props = {
  whatsappMessage?: string;
};

const FixedHeader = ({
  whatsappMessage = "Hola, me gustaría información sobre sus servicios de gestoría vehicular",
}: Props) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const whatsappNumber = "525512880840";

  const handleWhatsAppClick = () => {
    window.open(
      `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
        whatsappMessage
      )}`,
      "_blank"
    );
  };

  return (
    <>
      <header className="fixed top-0 left-0 w-full bg-white shadow-md z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Links de navegación */}
            <nav className="flex items-center">
              {/* Botón hamburguesa para móvil */}
              <button
                className="sm:hidden mr-2 text-gray-800"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                aria-label="Abrir menú"
              >
                {isMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
              </button>

              {/* Links normales para escritorio */}
              <div className="hidden sm:flex space-x-6">
                <Link
                  href="/"
                  className="text-gray-800 hover:text-green-600 font-medium transition-colors"
                >
                  Inicio
                </Link>
                <Link
                  href="/placas-morelos"
                  className="text-gray-800 hover:text-green-600 font-medium transition-colors"
                >
                  Placas Morelos
                </Link>
                <Link
                  href="/refrendo-morelos"
                  className="text-gray-800 hover:text-green-600 font-medium transition-colors"
                >
                  Refrendo Morelos
                </Link>
                <Link
                  href="/verificacion-morelos"
                  className="text-gray-800 hover:text-green-600 font-medium transition-colors"
                >
                  Verificacion Morelos
                </Link>
                <Link
                  href="/tenencia-morelos"
                  className="text-gray-800 hover:text-green-600 font-medium transition-colors"
                >
                  Tenencia Morelos
                </Link>
              </div>
            </nav>

            {/* Botón WhatsApp siempre visible */}
            <button
              onClick={handleWhatsAppClick}
              className="flex items-center bg-green-500 hover:bg-green-600 text-white px-3 py-2 rounded-full shadow-md transition-colors"
            >
              <FaWhatsapp className="h-6 w-6 mr-2" />
              <span className="text-sm font-semibold">
                Solicitar informes en minutos
              </span>
            </button>
          </div>
        </div>

        {/* Menú móvil */}
        {isMenuOpen && (
          <div className="sm:hidden bg-white shadow-md px-4 py-2 space-y-2">
            <Link
              href="/"
              className="block text-gray-800 hover:text-green-600 font-medium transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Inicio
            </Link>
            <Link
              href="/placas-morelos"
              className="block text-gray-800 hover:text-green-600 font-medium transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Placas Morelos
            </Link>
            <Link
              href="/refrendo-morelos"
              className="block text-gray-800 hover:text-green-600 font-medium transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Refrendo Morelos
            </Link>
            <Link
              href="/verificacion-morelos"
              className="block text-gray-800 hover:text-green-600 font-medium transition-colors"
            >
              Verificacion Morelos
            </Link>
            <Link
              href="/tenencia-morelos"
              className="block text-gray-800 hover:text-green-600 font-medium transition-colors"
            >
              Tenencia Morelos
            </Link>
          </div>
        )}
      </header>

      {/* Espacio para que el contenido no quede oculto */}
      <div className="h-16 sm:h-16" />
    </>
  );
};

export default FixedHeader;
