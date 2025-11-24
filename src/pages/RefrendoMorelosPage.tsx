import React from "react";
import { Seo } from "@/components/Seo";
import CoverageSection from "@/components/CoverageSection";
import LocationsSection from "@/components/LocationsSection";
import FixedHeader from "@/components/HeaderPost";
import FloatingWhatsAppButton from "@/components/FloatingWhatsAppButton";

const RefrendoMorelosPage: React.FC = () => {
  return (
    <>
      <Seo
        title="Refrendo Morelos | Trámite rápido 1–3 días | Entrega CDMX"
        description="Trámite de refrendo vehicular en Morelos 100% en línea por WhatsApp. Entrega personal GRATIS en CDMX y Morelos; envío por paquetería a todo México. Pagas al recibir o cuando tu envío esté listo."
        url="https://www.gestoriasyverificacionesdelsur.com/refrendo-morelos"
        image="https://www.gestoriasyverificacionesdelsur.com/src/assets/general.png"
      />

      {/* Header fijo */}
      <FixedHeader
        whatsappMessage="Hola, quiero información sobre el pago de refrendo vehicular en el estado de Morelos, incluyendo tiempos de entrega y métodos de pago."
      />

      {/* Contenido principal */}
      <div className="max-w-10xl mx-auto px-10 py-10">
        {/* TÍTULO PRINCIPAL */}
        <h1 className="text-3xl font-bold mb-6 text-center">
          Refrendo Morelos – Trámite rápido, seguro y 100% en línea
        </h1>

        {/* INTRO */}
        <p className="text-lg leading-relaxed mb-6">
          Si buscas realizar tu <strong>refrendo Morelos</strong> sin filas,
          sin citas y sin complicaciones, aquí lo hacemos de forma rápida y
          segura. Gestionamos todo el trámite por WhatsApp para que no pierdas
          tiempo y recibas tus comprobantes en el menor tiempo posible.
        </p>

        <p className="text-lg leading-relaxed mb-6">
          Contamos con más de 10 años de experiencia en trámites vehiculares.
          Atendemos principalmente en <strong>CDMX</strong> y <strong>EdoMex</strong>,
          garantizando entregas rápidas y soporte personalizado en todo el
          proceso.
        </p>

        {/* SECCIÓN 1 */}
        <h2 className="text-2xl font-semibold mt-10 mb-4">
          ¿Por qué hacer tu Refrendo Morelos con nosotros?
        </h2>

        <ul className="list-disc pl-6 space-y-2 text-lg">
          <li>Trámite de <strong>refrendo Morelos</strong> en minutos.</li>
          <li>Proceso 100% en línea a través de WhatsApp.</li>
          <li>Sin filas, sin citas y sin traslados a módulos.</li>
          <li>Pago al recibir tus comprobantes o cuando el envío esté listo.</li>
          <li>Atención personalizada y soporte real.</li>
          <li>Más de 10 años de experiencia en trámites vehiculares.</li>
        </ul>

        {/* ¿Qué es el refrendo? */}
        <h2 className="text-2xl font-semibold mt-10 mb-4">
          ¿Qué es el Refrendo Morelos?
        </h2>

        <p className="leading-relaxed mb-6">
          El <strong>refrendo Morelos</strong> es el pago anual que mantiene la
          vigencia de tus placas del estado de Morelos. Realizarlo a tiempo te
          evita multas y recargos. Nosotros te ayudamos a hacerlo desde casa y
          te entregamos los comprobantes sin complicaciones.
        </p>

        {/* ENTREGA Y PAGO */}
        <h2 className="text-2xl font-semibold mt-10 mb-4">
          Entrega y pago — CDMX, Morelos y resto de México
        </h2>

        <p className="leading-relaxed mb-4">
          Ofrecemos opciones prácticas para que recibas tu refrendo de la forma
          que prefieras y con total seguridad.
        </p>

        <h3 className="text-xl font-medium mt-4 mb-2">Entrega personal (CDMX y Morelos)</h3>
        <p className="leading-relaxed mb-4">
          Entrega personal <strong>GRATIS</strong> en CDMX y Morelos. Recibe tus
          comprobantes en mano y paga al recibir: una opción segura y cómoda si
          estás en nuestras zonas de cobertura.
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
            href="https://wa.me/525512880840?text=Hola%2C%20quiero%20informaci%C3%B3n%20sobre%20el%20pago%20de%20refrendo%20vehicular%20en%20el%20estado%20de%20Morelos%2C%20incluyendo%20tiempos%20de%20entrega%20y%20m%C3%A9todos%20de%20pago."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-xl text-xl font-semibold shadow-lg transition"
          >
            Solicitar Refrendo Morelos por WhatsApp
          </a>
        </div>

        {/* CONFIANZA */}
        <h2 className="text-2xl font-semibold mt-10 mb-4">
          Confianza y soporte en todo el proceso
        </h2>

        <p className="leading-relaxed mb-10">
          Miles de conductores nos recomiendan por ofrecer un servicio rápido,
          seguro y con atención personalizada. Si quieres realizar tu{" "}
          <strong>refrendo Morelos</strong> sin complicaciones, contáctanos por
          WhatsApp y lo procesamos hoy mismo.
        </p>
      </div>

      {/* Secciones reutilizables */}
      <CoverageSection />
      <LocationsSection
        whatsappMessage="Hola, quiero información sobre el pago de refrendo vehicular en el estado de Morelos, incluyendo tiempos de entrega y métodos de pago."
      />
      <FloatingWhatsAppButton
        whatsappMessage="Hola, quiero información sobre el pago de refrendo vehicular en el estado de Morelos, incluyendo tiempos de entrega y métodos de pago."
      />
    </>
  );
};

export default RefrendoMorelosPage;
