import React from "react";
import Seo from "@/components/Seo";
import CoverageSection from "@/components/CoverageSection";
import LocationsSection from "@/components/LocationsSection";
import FixedHeader from "@/components/HeaderPost";
import FloatingWhatsAppButton from "@/components/FloatingWhatsAppButton";

const VerificacionMorelosPage: React.FC = () => {
  return (
    <>
      <Seo
        title="Verificación Morelos | Servicio a domicilio | Evita multas"
        description="Servicio de verificación Morelos sin filas. Vamos por tu auto, lo verificamos y te lo entregamos el mismo día. Evita multas y restricciones. Pago al final."
        canonical="https://www.gestoriasyverificacionesdelsur.com/verificacion-morelos"
        image="https://www.gestoriasyverificacionesdelsur.com/og-verificacion-morelos.jpg"
      />

      <FixedHeader whatsappMessage="Hola, quiero información sobre la verificación vehicular en Morelos." />

      <div className="max-w-10xl mx-auto px-10 py-10">
        <h1 className="text-3xl font-bold mb-6 text-center">
          Verificación Morelos – Servicio a Domicilio, Rápido y Sin Filas
        </h1>

        <p className="text-lg leading-relaxed mb-6">
          Nuestro servicio de <strong>verificación Morelos</strong> está diseñado para evitarte
          filas, gastos innecesarios y pérdida de tiempo. Nosotros vamos directamente
          a recoger tu vehículo, lo llevamos al verificentro en Morelos y te lo regresamos
          el mismo día ya verificado y con su holograma correspondiente.
        </p>

        <p className="text-lg leading-relaxed mb-6">
          Atendemos principalmente a clientes en <strong>CDMX</strong> y <strong>EdoMex</strong>,
          ofreciendo un servicio seguro, profesional y con atención personalizada de inicio
          a fin. Tú no tienes que moverte de casa: nosotros nos encargamos de todo.
        </p>

        <h2 className="text-2xl font-semibold mt-10 mb-4">
          ¿Por qué hacer tu Verificación Morelos con nosotros?
        </h2>

        <ul className="list-disc pl-6 space-y-2 text-lg">
          <li>Servicio completo: recogemos tu auto y lo devolvemos verificado.</li>
          <li>Evita filas y tiempos de espera interminables.</li>
          <li>Evita multas por verificación vencida.</li>
          <li>Entrega el mismo día.</li>
          <li>Atención por WhatsApp durante todo el proceso.</li>
          <li>Pago hasta que recibas tu vehículo verificado.</li>
        </ul>

        <h2 className="text-2xl font-semibold mt-10 mb-4">
          ¿Cómo funciona la Verificación Morelos?
        </h2>

        <p className="leading-relaxed mb-6">
          Es muy sencillo: nos envías mensaje por WhatsApp, agendamos la fecha, pasamos por
          tu vehículo en CDMX o EdoMex, lo verificamos en Morelos y te lo entregamos el
          mismo día con su holograma. Todo el proceso es seguro, transparente y acompañado
          en tiempo real.
        </p>

        <div className="text-center my-10">
          <a
            href="https://wa.me/525512880840?text=Hola%2C%20quiero%20informaci%C3%B3n%20sobre%20el%20servicio%20de%20verificaci%C3%B3n%20vehicular%20en%20Morelos."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-xl text-xl font-semibold shadow-lg transition"
          >
            Solicitar Verificación Morelos por WhatsApp
          </a>
        </div>

        <h2 className="text-2xl font-semibold mt-10 mb-4">
          Evita multas y restricciones
        </h2>

        <p className="leading-relaxed mb-10">
          Tener la verificación vencida puede generar multas,
          restricciones de circulación e incluso problemas al realizar otros trámites.
          Con nuestra <strong>verificación Morelos</strong>, todo se resuelve de forma fácil,
          rápida y sin que tú tengas que trasladarte.
        </p>
      </div>

      <CoverageSection />
      <LocationsSection whatsappMessage="Hola, quiero información sobre la verificación vehicular en Morelos." />
      <FloatingWhatsAppButton whatsappMessage="Hola, quiero información sobre la verificación vehicular en Morelos." />
    </>
  );
};

export default VerificacionMorelosPage;
