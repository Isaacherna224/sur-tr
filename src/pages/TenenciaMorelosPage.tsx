import React from "react";
import Seo from "@/components/Seo";
import CoverageSection from "@/components/CoverageSection";
import LocationsSection from "@/components/LocationsSection";
import FixedHeader from "@/components/HeaderPost";
import FloatingWhatsAppButton from "@/components/FloatingWhatsAppButton";

const TenenciaMorelosPage: React.FC = () => {
  return (
    <>
      <Seo
        title="Tenencia Morelos | Pago rápido | Sin filas y sin venir"
        description="Pago de tenencia Morelos para quienes no pagaron su refrendo. Nosotros hacemos todo por ti en Morelos. Pago al recibir tu comprobante y tarjeta de circulación vigente."
        canonical="https://www.gestoriasyverificacionesdelsur.com/tenencia-morelos"
        image="https://www.gestoriasyverificacionesdelsur.com/og-tenencia-morelos.jpg"
      />

      <FixedHeader whatsappMessage="Hola, quiero información sobre el pago de la tenencia vehicular en Morelos. ¿Me puedes ayudar?" />

      <div className="max-w-10xl mx-auto px-10 py-10">
        <h1 className="text-3xl font-bold mb-6 text-center">
          Tenencia Morelos – Pago Rápido, Seguro y Sin Que Tengas Que Venir
        </h1>

        <p className="text-lg leading-relaxed mb-6">
          El pago de la <strong>tenencia Morelos</strong> aplica para automovilistas que no pagaron su
          refrendo durante los primeros meses del año. Si este es tu caso, no necesitas
          trasladarte a Morelos ni formarte en filas: nosotros hacemos todo el trámite por ti.
        </p>

        <p className="text-lg leading-relaxed mb-6">
          Pagamos tu tenencia directamente en las oficinas de Movilidad y Transporte de Morelos
          y te entregamos tu comprobante y tarjeta de circulación vigente en <strong>1 a 3 días hábiles</strong>.
          Todo el proceso es completamente en línea y a través de WhatsApp.
        </p>

        <h2 className="text-2xl font-semibold mt-10 mb-4">
          ¿Por qué pagar tu Tenencia Morelos con nosotros?
        </h2>

        <ul className="list-disc pl-6 space-y-2 text-lg">
          <li>No tienes que viajar a Morelos.</li>
          <li>Evita filas, traslados, casetas y gasolina.</li>
          <li>Pago al recibir tu comprobante oficial.</li>
          <li>Servicio rápido, seguro y 100% en línea.</li>
          <li>Atención personalizada durante todo el proceso.</li>
        </ul>

        <h2 className="text-2xl font-semibold mt-10 mb-4">
          ¿Cómo funciona el pago de Tenencia Morelos?
        </h2>

        <p className="leading-relaxed mb-6">
          Nos envías mensaje por WhatsApp, revisamos tu caso, procesamos tu pago directamente en
          Morelos y te entregamos toda tu documentación actualizada sin que tengas que trasladarte.
          Es un servicio cómodo, seguro y pensado para quienes viven en CDMX o EdoMex.
        </p>

        <div className="text-center my-10">
          <a
            href="https://wa.me/525512880840?text=Hola%2C%20quiero%20informaci%C3%B3n%20sobre%20el%20pago%20de%20tenencia%20en%20Morelos."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-xl text-xl font-semibold shadow-lg transition"
          >
            Solicitar Tenencia Morelos por WhatsApp
          </a>
        </div>

        <h2 className="text-2xl font-semibold mt-10 mb-4">
          Evita recargos y problemas futuros
        </h2>

        <p className="leading-relaxed mb-10">
          Tener adeudos de tenencia puede afectar futuros trámites como refrendo, placas,
          baja o cambio de propietario. Con nuestro servicio de <strong>tenencia Morelos</strong>,
          regularizamos tu vehículo sin que tengas que salir de casa.
        </p>
      </div>

      <CoverageSection />
      <LocationsSection whatsappMessage="Hola, quiero información sobre el pago de la tenencia vehicular en Morelos. ¿Me puedes ayudar?" />
      <FloatingWhatsAppButton whatsappMessage="Hola, quiero información sobre el pago de la tenencia vehicular en Morelos. ¿Me puedes ayudar?" />
    </>
  );
};

export default TenenciaMorelosPage;
