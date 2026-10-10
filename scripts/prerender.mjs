import { mkdir, readFile, writeFile } from "node:fs/promises";
import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";

const projectRoot = resolve(dirname(fileURLToPath(import.meta.url)), "..");
const distDirectory = resolve(projectRoot, "dist");
const seoPages = JSON.parse(
  await readFile(resolve(projectRoot, "seo-pages.json"), "utf8"),
);
const businessSchema = JSON.parse(
  await readFile(resolve(projectRoot, "src/seo/local-business.json"), "utf8"),
);

const escapeHtml = (value) =>
  value.replace(/[&<>"']/g, (character) => {
    const entities = {
      "&": "&amp;",
      "<": "&lt;",
      ">": "&gt;",
      '"': "&quot;",
      "'": "&#39;",
    };
    return entities[character];
  });

const setMeta = (html, attribute, key, content) => {
  const tag = `<meta data-rh="true" ${attribute}="${key}" content="${escapeHtml(content)}" />`;
  const escapedAttribute = attribute.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
  const escapedKey = key.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
  const pattern = new RegExp(
    `<meta\\b(?=[^>]*\\s${escapedAttribute}="${escapedKey}")[^>]*>`,
    "i",
  );
  return pattern.test(html)
    ? html.replace(pattern, tag)
    : html.replace("</head>", `  ${tag}\n  </head>`);
};

const setCanonical = (html, url) => {
  const tag = `<link data-rh="true" rel="canonical" href="${escapeHtml(url)}" />`;
  const pattern = /<link\b(?=[^>]*\srel="canonical")[^>]*>/i;
  return pattern.test(html)
    ? html.replace(pattern, tag)
    : html.replace("</head>", `  ${tag}\n  </head>`);
};

const buildPageContent = (page) => {
  if (page.sections && page.faqs) {
    const breadcrumb = `<nav aria-label="Migas de pan"><a href="/">Inicio</a> / <span aria-current="page">Guía para conductores</span></nav>`;
    const product = `<figure><img src="${escapeHtml(page.articleImage)}" srcset="${escapeHtml(page.articleImageMobile)} 440w, ${escapeHtml(page.articleImage)} 742w" sizes="(min-width: 768px) 736px, 100vw" width="742" height="527" fetchpriority="high" decoding="async" alt="${escapeHtml(page.articleImageAlt)}" /><figcaption>Imagen promocional de la cámara M200 compartida en la descripción del producto.</figcaption></figure><section><h2>Cámara M200: consulta la publicación</h2><p>${escapeHtml(page.productNote)}</p><a href="${escapeHtml(page.affiliateUrl)}" target="_blank" rel="sponsored nofollow noopener">Consultar precio y disponibilidad en Mercado Libre</a></section><aside><p>${escapeHtml(page.affiliateDisclosure)}</p></aside>`;
    const brand = `<section><h2>Una recomendación pensada para conducir con más tranquilidad</h2><p>En GVS Gestorías y Verificaciones del Sur nos importa tu tranquilidad dentro y fuera del automóvil. Compartimos recomendaciones para que tengas información útil y puedas decidir con calma; no afirmamos haber probado personalmente este equipo ni garantizamos sus resultados.</p></section>`;
    const contents = `<nav aria-label="Contenido de la guía"><h2>En esta guía</h2><ol>${page.sections
      .map(
        (section, index) =>
          `<li><a href="#section-${index + 1}">${escapeHtml(section.title)}</a></li>`,
      )
      .join("")}<li><a href="#preguntas-frecuentes">Preguntas frecuentes</a></li></ol></nav>`;
    const sections = page.sections
      .map(
        (section, index) =>
          `<section id="section-${index + 1}"><h2>${escapeHtml(section.title)}</h2>${section.paragraphs
            .map((paragraph) => `<p>${escapeHtml(paragraph)}</p>`)
            .join("")}${section.items.length ? `<ul>${section.items.map((item) => `<li>${escapeHtml(item)}</li>`).join("")}</ul>` : ""}</section>`,
      )
      .join("");
    const faqs = `<section id="preguntas-frecuentes"><h2>Preguntas frecuentes sobre cámaras para auto</h2>${page.faqs
      .map(
        (faq) =>
          `<details><summary>${escapeHtml(faq.question)}</summary><p>${escapeHtml(faq.answer)}</p></details>`,
      )
      .join("")}</section>`;
    const purchaseCta = `<section><h2>Consulta la publicación antes de decidir</h2><p>Revisa modelo, especificaciones, accesorios, precio y condiciones vigentes directamente en Mercado Libre.</p><a href="${escapeHtml(page.affiliateUrl)}" target="_blank" rel="sponsored nofollow noopener">Ver la cámara para auto en Mercado Libre</a><p>${escapeHtml(page.affiliateDisclosure)}</p></section>`;
    const whatsappCta = `<section><h2>¿También necesitas ayuda con tus trámites vehiculares?</h2><p>En GVS Gestorías y Verificaciones del Sur estamos para orientarte. Escríbenos por WhatsApp para conocer las opciones disponibles para tu trámite. Este servicio de gestoría es independiente de la compra y garantía de la cámara.</p><a href="https://wa.me/525512880840" target="_blank" rel="noopener noreferrer">Consultar servicios de GVS por WhatsApp</a></section>`;
    const internalLinks = `<nav aria-label="Servicios relacionados"><h2>Más información de GVS</h2><ul><li><a href="/placas-morelos">Trámite de placas Morelos</a></li><li><a href="/verificacion-morelos">Verificación Morelos</a></li></ul></nav>`;

    return `<article>${breadcrumb}<header><p>Guía para conductores · GVS</p><h1>${escapeHtml(page.heading)}</h1><p>${escapeHtml(page.lead)}</p></header>${product}${brand}${contents}${sections}${faqs}${purchaseCta}${whatsappCta}${internalLinks}</article>`;
  }

  const paragraphs = page.paragraphs
    .map((paragraph) => `<p>${escapeHtml(paragraph)}</p>`)
    .join("\n");
  const links = page.links.length
    ? `<nav aria-label="Trámites relacionados"><ul>${page.links
        .map(
          (link) =>
            `<li><a href="${escapeHtml(link.path)}">${escapeHtml(link.label)}</a></li>`,
        )
        .join("")}</ul></nav>`
    : "";
  const camera = seoPages.camaraAuto;
  const cameraRecommendation = `<section aria-labelledby="camera-promo-title"><h2 id="camera-promo-title">Cámara para auto M200: conoce sus funciones</h2><a href="${escapeHtml(camera.affiliateUrl)}" target="_blank" rel="sponsored nofollow noopener"><img src="${escapeHtml(camera.articleImage)}" srcset="${escapeHtml(camera.articleImageMobile)} 440w, ${escapeHtml(camera.articleImage)} 742w" sizes="(min-width: 768px) 50vw, 100vw" width="742" height="527" loading="lazy" decoding="async" alt="${escapeHtml(camera.articleImageAlt)}" /></a><p>Video Full HD, Wi-Fi con app móvil y grabación en bucle según la descripción comercial.</p><p><a href="${escapeHtml(camera.affiliateUrl)}" target="_blank" rel="sponsored nofollow noopener">Ver cámara M200 en Mercado Libre</a></p><p><a href="${escapeHtml(camera.path)}">Lee la guía de compra y sus características</a></p><p>${escapeHtml(camera.affiliateDisclosure)}</p></section>`;

  return `<main><article><h1>${escapeHtml(page.heading)}</h1>${paragraphs}${links}<p><a href="https://wa.me/525512880840">Solicita información por WhatsApp</a></p>${cameraRecommendation}</article></main>`;
};

for (const page of Object.values(seoPages)) {
  const canonicalUrl = `https://gestoriasyverificacionesdelsur.com${page.path}`;
  const imageUrl = `https://gestoriasyverificacionesdelsur.com${page.image}`;
  let html = await readFile(resolve(distDirectory, "index.html"), "utf8");

  html = html.replace(
    /<title[^>]*>[\s\S]*?<\/title>/i,
    `<title data-rh="true">${escapeHtml(page.title)}</title>`,
  );
  html = setMeta(html, "name", "description", page.description);
  html = setMeta(html, "property", "og:locale", "es_MX");
  html = setMeta(html, "property", "og:site_name", "Gestoría y Verificaciones del Sur");
  html = setMeta(html, "property", "og:type", page.sections ? "article" : "website");
  html = setMeta(html, "property", "og:title", page.title);
  html = setMeta(html, "property", "og:description", page.description);
  html = setMeta(html, "property", "og:url", canonicalUrl);
  html = setMeta(html, "property", "og:image", imageUrl);
  html = setMeta(html, "property", "og:image:secure_url", imageUrl);
  html = setMeta(html, "property", "og:image:type", page.imageType ?? "image/jpeg");
  html = setMeta(html, "property", "og:image:width", String(page.imageWidth ?? 1200));
  html = setMeta(html, "property", "og:image:height", String(page.imageHeight ?? 630));
  html = setMeta(html, "property", "og:image:alt", page.imageAlt);
  html = setMeta(html, "name", "twitter:card", "summary_large_image");
  html = setMeta(html, "name", "twitter:title", page.title);
  html = setMeta(html, "name", "twitter:description", page.description);
  html = setMeta(html, "name", "twitter:image", imageUrl);
  html = setMeta(html, "name", "twitter:image:alt", page.imageAlt);
  html = setCanonical(html, canonicalUrl);

  const webPageSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: page.title,
    description: page.description,
    url: canonicalUrl,
    primaryImageOfPage: imageUrl,
    about: { "@id": "https://gestoriasyverificacionesdelsur.com/#organization" },
  };
  const articleSchemas = page.sections
    ? [
        {
          "@context": "https://schema.org",
          "@type": "Article",
          headline: page.heading,
          description: page.description,
          image: imageUrl,
          mainEntityOfPage: canonicalUrl,
          inLanguage: "es-MX",
          author: { "@id": "https://gestoriasyverificacionesdelsur.com/#organization" },
          publisher: { "@id": "https://gestoriasyverificacionesdelsur.com/#organization" },
          articleSection: page.sections.map((section) => section.title),
        },
        {
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          itemListElement: [
            {
              "@type": "ListItem",
              position: 1,
              name: "Inicio",
              item: "https://gestoriasyverificacionesdelsur.com",
            },
            {
              "@type": "ListItem",
              position: 2,
              name: "Guía para conductores",
              item: canonicalUrl,
            },
          ],
        },
      ]
    : [];
  const schemaTags = [businessSchema, webPageSchema, ...articleSchemas]
    .map(
      (schema) =>
        `<script type="application/ld+json" data-rh="true">${JSON.stringify(schema).replace(/</g, "\\u003c")}</script>`,
    )
    .join("\n  ");
  html = html.replace("</head>", `  ${schemaTags}\n  </head>`);
  html = html.replace(
    /<div id="root">[\s\S]*?<\/div>/i,
    `<div id="root">${buildPageContent(page)}</div>`,
  );
  if (page.path !== "/") {
    html = html.replace(
      /<link[^>]*rel="preload"[^>]*href="\/images\/hero-gestoria-(?:640|1280)\.webp"[^>]*\/?>/gi,
      "",
    );
  }

  const outputPath =
    page.path === "/"
      ? resolve(distDirectory, "index.html")
      : resolve(distDirectory, page.path.slice(1), "index.html");
  await mkdir(dirname(outputPath), { recursive: true });
  await writeFile(outputPath, html);
}

console.log(`Prerendered ${Object.keys(seoPages).length} SEO pages.`);
