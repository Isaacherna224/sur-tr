import { ArrowUpRight, Camera } from "lucide-react";
import { Link } from "react-router-dom";
import seoPages from "../../seo-pages.json";

const camera = seoPages.camaraAuto;

const CameraRecommendation = () => (
  <section className="mx-auto my-10 max-w-6xl px-4 sm:px-6 lg:px-8" aria-labelledby="camera-promo-title">
    <div className="grid overflow-hidden rounded-2xl border border-border bg-card shadow-md md:grid-cols-2">
      <div className="flex items-center justify-center bg-sky-50 p-4 sm:p-6">
        <img
          src={camera.articleImage}
          srcSet={`${camera.articleImageMobile} 440w, ${camera.articleImage} 742w`}
          sizes="(min-width: 768px) 50vw, 100vw"
          width="742"
          height="527"
          loading="lazy"
          decoding="async"
          alt={camera.articleImageAlt}
          className="h-auto w-full max-w-[742px] rounded-xl"
        />
      </div>
      <div className="flex flex-col items-start justify-center p-6 sm:p-9">
        <p className="mb-3 inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-wide text-primary">
          <Camera aria-hidden="true" className="h-4 w-4" />
          Recomendación para conductores
        </p>
        <h2 id="camera-promo-title" className="mb-3 text-2xl font-bold text-foreground sm:text-3xl">
          Cámara para auto M200
        </h2>
        <p className="mb-5 leading-relaxed text-muted-foreground">
          Video Full HD, Wi-Fi con app móvil y grabación en bucle, según la descripción comercial. Conoce sus
          funciones y consulta el precio y disponibilidad actuales.
        </p>
        <a
          href={camera.affiliateUrl}
          target="_blank"
          rel="sponsored nofollow noopener"
          className="mb-4 inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-xl bg-primary px-5 py-3 text-center font-semibold text-primary-foreground transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 sm:w-auto"
        >
          Ver cámara M200 en Mercado Libre
          <ArrowUpRight aria-hidden="true" className="h-4 w-4 shrink-0" />
        </a>
        <Link
          to={camera.path}
          className="font-medium text-primary underline-offset-4 hover:underline"
        >
          Lee la guía de compra y sus características
        </Link>
        <p className="mt-4 text-xs leading-relaxed text-muted-foreground">
          Enlace de afiliado: GVS puede recibir una comisión si compras, sin costo adicional para ti.
        </p>
      </div>
    </div>
  </section>
);

export default CameraRecommendation;
