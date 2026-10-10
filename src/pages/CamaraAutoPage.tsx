import { Camera, ExternalLink, MessageCircle, ShieldCheck } from "lucide-react";
import { Link } from "react-router-dom";
import FixedHeader from "@/components/HeaderPost";
import { Seo } from "@/components/Seo";
import seoPages from "../../seo-pages.json";

const page = seoPages.camaraAuto;

const CamaraAutoPage = () => (
  <>
    <Seo page="camaraAuto" />
    <FixedHeader />

    <article className="mx-auto max-w-3xl px-4 pb-16 pt-8 sm:px-6 sm:pt-12">
      <nav aria-label="Migas de pan" className="mb-6 text-sm text-muted-foreground">
        <Link to="/" className="underline-offset-4 hover:underline">Inicio</Link>
        <span aria-hidden="true" className="px-2">/</span>
        <span aria-current="page">Guía para conductores</span>
      </nav>

      <header className="mb-8">
        <p className="mb-3 text-sm font-semibold uppercase tracking-wide text-primary">
          Guía para conductores · GVS
        </p>
        <h1 className="mb-5 text-3xl font-bold leading-tight text-foreground sm:text-4xl">
          {page.heading}
        </h1>
        <p className="text-lg leading-relaxed text-muted-foreground">{page.lead}</p>
      </header>

      <figure className="mb-8 overflow-hidden rounded-2xl border border-border bg-sky-50">
        <img
          src={page.articleImage}
          srcSet={`${page.articleImageMobile} 440w, ${page.articleImage} 742w`}
          sizes="(min-width: 768px) 736px, 100vw"
          width="742"
          height="527"
          fetchPriority="high"
          decoding="async"
          alt={page.articleImageAlt}
          className="block h-auto w-full"
        />
        <figcaption className="px-4 py-3 text-sm text-muted-foreground">
          Imagen promocional de la cámara M200 compartida en la descripción del producto.
        </figcaption>
      </figure>

      <section
        aria-labelledby="producto-title"
        className="mb-8 rounded-2xl border border-border bg-muted/50 p-5 sm:p-7"
      >
        <div className="mb-3 flex items-center gap-3">
          <span className="rounded-xl bg-primary/10 p-3 text-primary">
            <Camera aria-hidden="true" className="h-6 w-6" />
          </span>
          <h2 id="producto-title" className="text-xl font-semibold text-foreground">
            Cámara M200: consulta la publicación
          </h2>
        </div>
        <p className="mb-5 leading-relaxed text-muted-foreground">{page.productNote}</p>
        <a
          href={page.affiliateUrl}
          target="_blank"
          rel="sponsored nofollow noopener"
          className="inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-xl bg-primary px-5 py-3 text-center font-semibold text-primary-foreground transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 sm:w-auto"
        >
          Consultar precio y disponibilidad en Mercado Libre
          <ExternalLink aria-hidden="true" className="h-4 w-4 shrink-0" />
        </a>
      </section>

      <aside className="mb-10 rounded-xl border border-border px-4 py-3 text-sm leading-relaxed text-muted-foreground">
        <p>{page.affiliateDisclosure}</p>
      </aside>

      <section aria-labelledby="marca-title" className="mb-10 flex gap-3">
        <ShieldCheck aria-hidden="true" className="mt-1 h-5 w-5 shrink-0 text-primary" />
        <div>
          <h2 id="marca-title" className="mb-2 text-lg font-semibold text-foreground">
            Una recomendación pensada para conducir con más tranquilidad
          </h2>
          <p className="leading-relaxed text-muted-foreground">
            En GVS Gestorías y Verificaciones del Sur nos importa tu tranquilidad dentro y fuera del automóvil.
            Compartimos recomendaciones para que tengas información útil y puedas decidir con calma; no afirmamos
            haber probado personalmente este equipo ni garantizamos sus resultados.
          </p>
        </div>
      </section>

      <nav aria-label="Contenido de la guía" className="mb-10 rounded-xl bg-muted/50 p-5">
        <h2 className="mb-3 font-semibold text-foreground">En esta guía</h2>
        <ol className="list-inside list-decimal space-y-2 text-primary">
          {page.sections.map((section, index) => (
            <li key={section.title}>
              <a href={`#section-${index + 1}`} className="underline-offset-4 hover:underline">
                {section.title}
              </a>
            </li>
          ))}
          <li><a href="#preguntas-frecuentes" className="underline-offset-4 hover:underline">Preguntas frecuentes</a></li>
        </ol>
      </nav>

      <div className="space-y-10">
        {page.sections.map((section, index) => (
          <section key={section.title} id={`section-${index + 1}`} className="scroll-mt-24">
            <h2 className="mb-4 text-2xl font-bold leading-snug text-foreground">
              {section.title}
            </h2>
            {section.paragraphs.map((paragraph) => (
              <p key={paragraph} className="mb-4 leading-7 text-foreground/90">{paragraph}</p>
            ))}
            {section.items.length > 0 && (
              <ul className="mt-4 list-disc space-y-3 pl-6 leading-7 text-foreground/90">
                {section.items.map((item) => <li key={item}>{item}</li>)}
              </ul>
            )}
          </section>
        ))}
      </div>

      <section id="preguntas-frecuentes" className="mt-12 scroll-mt-24">
        <h2 className="mb-5 flex items-center gap-2 text-2xl font-bold text-foreground">
          <MessageCircle aria-hidden="true" className="h-6 w-6 text-primary" />
          Preguntas frecuentes sobre cámaras para auto
        </h2>
        <div className="divide-y divide-border rounded-xl border border-border px-4">
          {page.faqs.map((faq) => (
            <details key={faq.question} className="py-4">
              <summary className="cursor-pointer font-semibold leading-relaxed text-foreground">
                {faq.question}
              </summary>
              <p className="pt-3 leading-relaxed text-muted-foreground">{faq.answer}</p>
            </details>
          ))}
        </div>
      </section>

      <section className="mt-10 rounded-2xl bg-primary p-5 text-primary-foreground sm:p-7">
        <h2 className="mb-3 text-xl font-bold">Consulta la publicación antes de decidir</h2>
        <p className="mb-5 leading-relaxed text-primary-foreground/85">
          Revisa modelo, especificaciones, accesorios, precio y condiciones vigentes directamente en Mercado Libre.
        </p>
        <a
          href={page.affiliateUrl}
          target="_blank"
          rel="sponsored nofollow noopener"
          className="inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-xl bg-accent px-5 py-3 text-center font-semibold text-accent-foreground transition-colors hover:bg-accent/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-primary sm:w-auto"
        >
          Ver la cámara para auto en Mercado Libre
          <ExternalLink aria-hidden="true" className="h-4 w-4 shrink-0" />
        </a>
        <p className="mt-4 text-sm leading-relaxed text-primary-foreground/75">
          {page.affiliateDisclosure}
        </p>
      </section>

      <section className="mt-10 rounded-2xl border border-border p-5 sm:p-7">
        <h2 className="mb-3 text-xl font-bold text-foreground">
          ¿También necesitas ayuda con tus trámites vehiculares?
        </h2>
        <p className="mb-5 leading-relaxed text-muted-foreground">
          En GVS Gestorías y Verificaciones del Sur estamos para orientarte. Escríbenos por WhatsApp para conocer
          las opciones disponibles para tu trámite. Este servicio de gestoría es independiente de la compra y
          garantía de la cámara.
        </p>
        <a
          href="https://wa.me/525512880840"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-xl border border-border px-5 py-3 text-center font-semibold text-foreground transition-colors hover:bg-muted focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 sm:w-auto"
        >
          <MessageCircle aria-hidden="true" className="h-5 w-5" />
          Consultar servicios de GVS por WhatsApp
        </a>
      </section>

      <nav aria-label="Servicios relacionados" className="mt-10 border-t border-border pt-6">
        <h2 className="mb-3 font-semibold text-foreground">Más información de GVS</h2>
        <ul className="flex flex-col gap-3 text-primary sm:flex-row sm:gap-6">
          <li><Link to="/placas-morelos" className="underline-offset-4 hover:underline">Trámite de placas Morelos</Link></li>
          <li><Link to="/verificacion-morelos" className="underline-offset-4 hover:underline">Verificación Morelos</Link></li>
        </ul>
      </nav>
    </article>
  </>
);

export default CamaraAutoPage;
