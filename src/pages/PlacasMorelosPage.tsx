import React from "react";
import Seo from "@/components/Seo";
import FixedHeader from "@/components/HeaderPost";
import CoverageSection from "@/components/CoverageSection";
import LocationsSection from "@/components/LocationsSection";
import FloatingWhatsAppButton from "@/components/FloatingWhatsAppButton";

const PlacasMorelosPage: React.FC = () => {
  return (
    <>
      <Seo
        title="Placas Morelos | Trámite rápido 1–3 días | Entrega CDMX"
        description="Trámite de placas en Morelos 100% en línea por WhatsApp. Entrega personal GRATIS en CDMX y Morelos; envío por paquetería a todo México. Pagas al recibir o cuando tu envío esté listo."
        canonical="https://www.gestoriasyverificacionesdelsur.com/placas-morelos"
        image="https://www.gestoriasyverificacionesdelsur.com/og-placas-morelos.jpg"
      />

      {/* Header fijo */}
      <FixedHeader
        whatsappMessage="Hola, me gustaría recibir información sobre los trámites de placas en el estado de Morelos y cómo puedo realizarlos 100% en línea."
      />

      {/* Contenido principal */}
      <div className="max-w-10xl mx-auto px-10 py-10">
        {/* TÍTULO PRINCIPAL */}
        <h1 className="text-3xl font-bold mb-6 text-center">
          Trámite de Placas Morelos – Rápido, Seguro y 100% en Línea
        </h1>

        {/* INTRO DESDE SEO */}
        <p className="text-lg leading-relaxed mb-6">
          Si necesitas dar de alta tu vehículo con <strong>placas Morelos</strong>,
          aquí puedes hacerlo de forma rápida, segura y sin trámites complicados.
          Somos una gestoría vehicular con más de 10 años de experiencia y
          realizamos el trámite totalmente en línea a través de WhatsApp.
        </p>

        <p className="text-lg leading-relaxed mb-6">
          Nuestro proceso está diseñado para darte confianza: <strong>entrega
          personal GRATIS en CDMX y Morelos</strong> o <strong>envío por
          paquetería</strong> a cualquier estado de la república. Además,
          <strong> pagas al recibir</strong> o cuando tu envío por paquetería esté
          listo para entrega.
        </p>

        {/* SECCIÓN 1 */}
        <h2 className="text-2xl font-semibold mt-10 mb-4">
          ¿Por qué tramitar Placas Morelos con nosotros?
        </h2>

        <p className="leading-relaxed mb-6">
          Las <strong>placas Morelos</strong> son una opción rápida y práctica para
          muchos propietarios. Nuestro servicio se centra en reducir tiempo y
          complicaciones: todo el trámite lo gestionamos por WhatsApp para que
          tú no pierdas tiempo en filas ni citas.
        </p>

        {/* BENEFICIOS */}
        <h2 className="text-2xl font-semibold mt-10 mb-4">
          Beneficios de tramitar tus placas con Gestorías y Verificaciones del Sur
        </h2>

        <ul className="list-disc pl-6 space-y-2 text-lg">
          <li>
            <strong>Entrega personal GRATIS en CDMX y Morelos</strong> en 1–3
            días hábiles.
          </li>
          <li>Envío por paquetería disponible a todo México.</li>
          <li>Atención personalizada por WhatsApp, sin filas ni citas.</li>
          <li>
            <strong>Pagas al recibir</strong> o cuando el envío por paquetería
            esté listo (tú eliges).
          </li>
          <li>Servicio profesional con más de 10 años de experiencia.</li>
          <li>100% trámite digital — todo vía WhatsApp para mayor seguridad.</li>
        </ul>

        {/* SECCIÓN SOBRE ENTREGA Y PAGO */}
        <h2 className="text-2xl font-semibold mt-10 mb-4">
          Entrega y pago — CDMX, Morelos y resto de México
        </h2>

        <p className="leading-relaxed mb-4">
          Tenemos dos opciones claras para tu comodidad:
        </p>

        <h3 className="text-xl font-medium mt-4 mb-2">Entrega personal (CDMX y Morelos)</h3>
        <p className="leading-relaxed mb-4">
          Entrega personal <strong>GRATIS</strong> en CDMX y Morelos. Recibes tus
          <strong> placas Morelos</strong> en mano y pagas al recibir. Esta opción
          es ideal si vives cerca y quieres mayor seguridad al recibir tu trámite.
        </p>

        <h3 className="text-xl font-medium mt-4 mb-2">Envío por paquetería (todo México)</h3>
        <p className="leading-relaxed mb-6">
          Enviamos a cualquier estado de la república mediante paquetería
          confiable. Tú pagas cuando tengas la seguridad de tu paquete este en camino. Manejamos seguimiento para tu
          tranquilidad.
        </p>

        {/* CTA */}
        <div className="text-center my-10">
          <a
            href="https://wa.me/525512880840?text=Hola%2C%20me%20gustar%C3%ADa%20recibir%20informaci%C3%B3n%20sobre%20los%20tr%C3%A1mites%20de%20placas%20en%20el%20estado%20de%20Morelos%20y%20c%C3%B3mo%20puedo%20realizarlos%20100%25%20en%20l%C3%ADnea."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-xl text-xl font-semibold shadow-lg transition"
          >
            Solicitar Placas Morelos por WhatsApp
          </a>
        </div>

        {/* FINAL / CONFIANZA */}
        <h2 className="text-2xl font-semibold mt-10 mb-4">
          Confianza y soporte en todo el proceso
        </h2>

        <p className="leading-relaxed mb-10">
          Miles de clientes nos recomiendan por ofrecer un servicio claro, seguro
          y sin sorpresas. Si buscas la forma más rápida y segura de obtener tus
          <strong> placas Morelos</strong>, escríbenos por WhatsApp y te
          atendemos inmediatamente.
        </p>
      </div>

      {/* Secciones reutilizables */}
      <CoverageSection />
      <LocationsSection
        whatsappMessage="Hola, me gustaría recibir información sobre los trámites de placas en el estado de Morelos y cómo puedo realizarlos 100% en línea."
      />
      <FloatingWhatsAppButton
        whatsappMessage="Hola, me gustaría recibir información sobre los trámites de placas en el estado de Morelos y cómo puedo realizarlos 100% en línea."
      />
    </>
  );
};

export default PlacasMorelosPage;
