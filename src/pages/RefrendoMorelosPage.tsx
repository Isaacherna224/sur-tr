import React from "react";
import Seo from "@/components/Seo";
import CoverageSection from "@/components/CoverageSection";
import LocationsSection from "@/components/LocationsSection";
import FixedHeader from "@/components/HeaderPost";
import FloatingWhatsAppButton from "@/components/FloatingWhatsAppButton";


const RefrendoMorelosPage: React.FC = () => {
  return (
    <>
      <Seo
        title="Refrendo Morelos | Trámite rápido 1–3 días | Entrega CDMX"
        description="Trámite de refrendo vehicular en Morelos 100% en línea por WhatsApp. Entrega en CDMX en 1 a 3 días hábiles. Se paga al recibir el refrendo. Servicio confiable y seguro."
        canonical="https://www.gestoriasyverificacionesdelsur.com/refrendo-morelos"
        image="https://www.gestoriasyverificacionesdelsur.com/og-refrendo-morelos.jpg"
      />

      {/* Header fijo*/}
      <FixedHeader whatsappMessage ="Hola, quiero información sobre el pago de refrendo vehicular en el estado de Morelos, incluyendo tiempos de entrega y métodos de pago."/>

      {/* Contenido principal */}

      <div className="max-w-10xl mx-auto px-10 py-10">
        {/* TÍTULO PRINCIPAL */}
        <h1 className="text-3xl font-bold mb-6 text-center">
          Refrendo Morelos – Trámite Rápido, Seguro y 100% en Línea
        </h1>

        {/* INTRO */}
        <p className="text-lg leading-relaxed mb-6">
          Si buscas realizar tu <strong>refrendo Morelos</strong> sin filas,
          sin citas y sin perder tiempo, aquí puedes hacerlo de manera rápida,
          segura y completamente en línea. Nuestro servicio está diseñado para
          agilizar tu trámite desde WhatsApp y entregarte toda la documentación
          lista en cuestión de horas.
        </p>

        <p className="text-lg leading-relaxed mb-6">
          Con más de 10 años de experiencia en trámites vehiculares, ofrecemos
          un proceso confiable, transparente y con atención personalizada.
          Además, atendemos principalmente a clientes en <strong>CDMX</strong>{" "}
          y <strong>EdoMex</strong>, lo que garantiza una entrega rápida y un
          soporte directo durante todo el proceso.
        </p>

        {/* SECCIÓN 1 */}
        <h2 className="text-2xl font-semibold mt-10 mb-4">
          ¿Por qué hacer tu Refrendo Morelos con nosotros?
        </h2>

        <ul className="list-disc pl-6 space-y-2 text-lg">
          <li>Trámite de <strong>refrendo Morelos</strong> en minutos.</li>
          <li>Todo 100% en línea a través de WhatsApp.</li>
          <li>Sin filas, sin citas, sin trasladarte a módulos.</li>
          <li>Pago al recibir tus comprobantes.</li>
          <li>Atención personalizada y soporte real.</li>
          <li>Más de 10 años de experiencia en trámites vehiculares.</li>
        </ul>

        {/* SECCIÓN 2 */}
        <h2 className="text-2xl font-semibold mt-10 mb-4">
          ¿Qué es el Refrendo Morelos?
        </h2>

        <p className="leading-relaxed mb-6">
          El <strong>refrendo Morelos</strong> es el pago anual obligatorio para
          mantener la vigencia de tus placas del estado de Morelos. Realizarlo
          a tiempo te evita multas, recargos y problemas futuros. Con nuestro
          servicio puedes hacerlo desde casa, de forma rápida y segura.
        </p>

        {/* SECCIÓN 3 */}
        <h2 className="text-2xl font-semibold mt-10 mb-4">
          Requisitos para tramitar el Refrendo Morelos
        </h2>

        <p className="leading-relaxed mb-4">
          Para procesar tu trámite solo necesitas enviar por WhatsApp:
        </p>

        <ul className="list-disc pl-6 space-y-2 text-lg">
          <li>INE vigente por ambos lados.</li>
          <li>Tarjeta de circulación.</li>
          <li>Factura o carta factura (si aplica).</li>
          <li>Placas y serie del vehículo.</li>
          <li>Comprobante de domicilio.</li>
        </ul>

        {/* SECCIÓN 4 */}
        <h2 className="text-2xl font-semibold mt-10 mb-4">
          ¿Cuánto cuesta el Refrendo Morelos?
        </h2>

        <p className="leading-relaxed mb-6">
          El costo del <strong>refrendo Morelos</strong> depende del tipo de
          vehículo, su modelo y si existen adeudos anteriores. Para recibir una
          cotización exacta, solo envíanos un mensaje por WhatsApp y te damos el
          costo total en minutos.
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

        {/* SECCIÓN 5 */}
        <h2 className="text-2xl font-semibold mt-10 mb-4">
          Entrega rápida en CDMX y Estado de México
        </h2>

        <p className="leading-relaxed mb-6">
          La mayoría de nuestros clientes realizan su{" "}
          <strong>refrendo Morelos</strong> desde CDMX y EdoMex, por lo que
          optimizamos todo el proceso para garantizar rapidez y entrega segura
          de tus comprobantes. Sin filas, sin esperas y sin riesgos.
        </p>

        {/* FINAL */}
        <h2 className="text-2xl font-semibold mt-10 mb-4">
          Realiza tu Refrendo Morelos hoy mismo
        </h2>

        <p className="leading-relaxed mb-10">
          Miles de conductores confían cada año en nuestro servicio por su
          rapidez, seguridad y atención personalizada. Si quieres realizar tu{" "}
          <strong>refrendo Morelos</strong> sin complicaciones, envíanos mensaje
          y lo procesamos hoy mismo.
        </p>
      </div>


      {/* Secciones reutilizables */}
      <CoverageSection />
      <LocationsSection whatsappMessage ="Hola, quiero información sobre el pago de refrendo vehicular en el estado de Morelos, incluyendo tiempos de entrega y métodos de pago."/>
      <FloatingWhatsAppButton whatsappMessage ="Hola, quiero información sobre el pago de refrendo vehicular en el estado de Morelos, incluyendo tiempos de entrega y métodos de pago."/>
    </>
  );
};

export default RefrendoMorelosPage;
