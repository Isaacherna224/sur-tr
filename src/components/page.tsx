import type { Metadata } from "next";
import CoverageSection from "@/components/CoverageSection";
import LocationsSection from "@/components/LocationsSection";

// 1. Metadatos para el SEO (reemplaza al componente <Seo>)
// SEO específico para esta página
export const metadata: Metadata = {
  title: "Placas Morelos | Trámite rápido 1–3 días | Entrega CDMX",
  title: "Refrendo Morelos | Trámite rápido 1–3 días | Entrega CDMX",
  description:
    "Trámite de placas en Morelos 100% en línea por WhatsApp. Entrega personal GRATIS en CDMX y Morelos; envío por paquetería a todo México. Pagas al recibir o cuando tu envío esté listo.",
    "Trámite de refrendo vehicular en Morelos 100% en línea por WhatsApp. Entrega personal GRATIS en CDMX y Morelos; envío por paquetería a todo México. Pagas al recibir o cuando tu envío esté listo.",
  alternates: {
    canonical: "https://www.gestoriasyverificacionesdelsur.com/placas-morelos",
    canonical: "https://www.gestoriasyverificacionesdelsur.com/refrendo-morelos",
  },
  openGraph: {
    title: "Placas Morelos | Trámite rápido 1–3 días | Entrega CDMX",
    title: "Refrendo Morelos | Trámite rápido 1–3 días | Entrega CDMX",
    description:
      "Trámite de placas en Morelos 100% en línea por WhatsApp. Entrega personal GRATIS en CDMX y Morelos; envío por paquetería a todo México. Pagas al recibir o cuando tu envío esté listo.",
    url: "https://www.gestoriasyverificacionesdelsur.com/placas-morelos",
      "Trámite de refrendo vehicular en Morelos 100% en línea por WhatsApp. Entrega personal GRATIS en CDMX y Morelos; envío por paquetería a todo México. Pagas al recibir o cuando tu envío esté listo.",
    url: "https://www.gestoriasyverificacionesdelsur.com/refrendo-morelos",
    images: [
      {
        // Nota: La imagen debe estar en la carpeta `public` para que Next.js la sirva.
        // Por ejemplo: /placas.png si la imagen está en `public/placas.png`
        url: "/placas.png",
        url: "/general.png", // Asegúrate de que esta imagen esté en la carpeta `public`
        width: 1200,
        height: 630,
        alt: "Trámite de Placas de Morelos a domicilio",
        alt: "Trámite de Refrendo Vehicular en Morelos",
      },
    ],
  },
};

// 2. El componente de la página
export default function PlacasMorelosPage() {
  // El Header, Footer y FloatingWhatsAppButton ya están en el layout.tsx principal.
export default function RefrendoMorelosPage() {
  return (
    <>
      {/* Contenido principal */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 pt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        {/* TÍTULO PRINCIPAL */}
        <h1 className="text-3xl font-bold mb-6 text-center">
          Trámite de Placas Morelos – Rápido, Seguro y 100% en Línea
          Refrendo Morelos – Trámite rápido, seguro y 100% en línea
        </h1>

        {/* INTRO DESDE SEO */}
        {/* INTRO */}
        <p className="text-lg leading-relaxed mb-6">
          Si necesitas dar de alta tu vehículo con <strong>placas Morelos</strong>,
          aquí puedes hacerlo de forma rápida, segura y sin trámites complicados.
          Somos una gestoría vehicular con más de 10 años de experiencia y
          realizamos el trámite totalmente en línea a través de WhatsApp.
          Si buscas realizar tu <strong>refrendo Morelos</strong> sin filas,
          sin citas y sin complicaciones, aquí lo hacemos de forma rápida y
          segura. Gestionamos todo el trámite por WhatsApp para que no pierdas
          tiempo y recibas tus comprobantes en el menor tiempo posible.
        </p>

        <p className="text-lg leading-relaxed mb-6">
          Nuestro proceso está diseñado para darte confianza:{" "}
          <strong>entrega personal GRATIS en CDMX y Morelos</strong> o{" "}
          <strong>envío por paquetería</strong> a cualquier estado de la
          república. Además,
          <strong> pagas al recibir</strong> o cuando tu envío por paquetería
          esté listo para entrega.
          Contamos con más de 10 años de experiencia en trámites vehiculares.
          Atendemos principalmente en <strong>CDMX</strong> y{" "}
          <strong>EdoMex</strong>, garantizando entregas rápidas y soporte
          personalizado en todo el proceso.
        </p>

        {/* SECCIÓN 1 */}
        <h2 className="text-2xl font-semibold mt-10 mb-4">
          ¿Por qué tramitar Placas Morelos con nosotros?
          ¿Por qué hacer tu Refrendo Morelos con nosotros?
        </h2>

        <p className="leading-relaxed mb-6">
          Las <strong>placas Morelos</strong> son una opción rápida y práctica
          para muchos propietarios. Nuestro servicio se centra en reducir tiempo
          y complicaciones: todo el trámite lo gestionamos por WhatsApp para que
          tú no pierdas tiempo en filas ni citas.
        </p>
        <ul className="list-disc pl-6 space-y-2 text-lg">
          <li>Trámite de <strong>refrendo Morelos</strong> en minutos.</li>
          <li>Proceso 100% en línea a través de WhatsApp.</li>
          <li>Sin filas, sin citas y sin traslados a módulos.</li>
          <li>Pago al recibir tus comprobantes o cuando el envío esté listo.</li>
          <li>Atención personalizada y soporte real.</li>
          <li>Más de 10 años de experiencia en trámites vehiculares.</li>
        </ul>

        {/* BENEFICIOS */}
        {/* ¿Qué es el refrendo? */}
        <h2 className="text-2xl font-semibold mt-10 mb-4">
          Beneficios de tramitar tus placas con Gestorías y Verificaciones del
          Sur
          ¿Qué es el Refrendo Morelos?
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
        <p className="leading-relaxed mb-6">
          El <strong>refrendo Morelos</strong> es el pago anual que mantiene la
          vigencia de tus placas del estado de Morelos. Realizarlo a tiempo te
          evita multas y recargos. Nosotros te ayudamos a hacerlo desde casa y
          te entregamos los comprobantes sin complicaciones.
        </p>

        {/* SECCIÓN SOBRE ENTREGA Y PAGO */}
        {/* ENTREGA Y PAGO */}
        <h2 className="text-2xl font-semibold mt-10 mb-4">
          Entrega y pago — CDMX, Morelos y resto de México
        </h2>

        <p className="leading-relaxed mb-4">
          Tenemos dos opciones claras para tu comodidad:
          Ofrecemos opciones prácticas para que recibas tu refrendo de la forma
          que prefieras y con total seguridad.
        </p>

        <h3 className="text-xl font-medium mt-4 mb-2">Entrega personal (CDMX y Morelos)</h3>
        <h3 className="text-xl font-medium mt-4 mb-2">
          Entrega personal (CDMX y Morelos)
        </h3>
        <p className="leading-relaxed mb-4">
          Entrega personal <strong>GRATIS</strong> en CDMX y Morelos. Recibes tus
          <strong> placas Morelos</strong> en mano y pagas al recibir. Esta opción
          es ideal si vives cerca y quieres mayor seguridad al recibir tu trámite.
          Entrega personal <strong>GRATIS</strong> en CDMX y Morelos. Recibe tus
          comprobantes en mano y paga al recibir: una opción segura y cómoda si
          estás en nuestras zonas de cobertura.
        </p>

        <h3 className="text-xl font-medium mt-4 mb-2">Envío por paquetería (todo México)</h3>
        <h3 className="text-xl font-medium mt-4 mb-2">
          Envío por paquetería (todo México)
        </h3>
        <p className="leading-relaxed mb-6">
          Enviamos a cualquier estado de la república mediante paquetería
          confiable. Tú pagas cuando tengas la seguridad de que tu paquete está en camino. Manejamos seguimiento para tu
          tranquilidad.
          confiable. Tú pagas cuando tengas la seguridad de que tu paquete está
          en camino. Manejamos seguimiento para tu tranquilidad.
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
      <LocationsSection whatsappMessage="Hola, quiero información sobre el pago de refrendo vehicular en el estado de Morelos, incluyendo tiempos de entrega y métodos de pago." />
    </>
  );
}