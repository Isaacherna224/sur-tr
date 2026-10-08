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
  const tag = `<meta ${attribute}="${key}" content="${escapeHtml(content)}" />`;
  const pattern = new RegExp(`<meta\\s+${attribute}="${key}"[^>]*>`, "i");
  return pattern.test(html)
    ? html.replace(pattern, tag)
    : html.replace("</head>", `  ${tag}\n  </head>`);
};

const setCanonical = (html, url) => {
  const tag = `<link rel="canonical" href="${escapeHtml(url)}" />`;
  const pattern = /<link\s+rel="canonical"[^>]*>/i;
  return pattern.test(html)
    ? html.replace(pattern, tag)
    : html.replace("</head>", `  ${tag}\n  </head>`);
};

const buildPageContent = (page) => {
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

  return `<main><article><h1>${escapeHtml(page.heading)}</h1>${paragraphs}${links}<p><a href="https://wa.me/525512880840">Solicita información por WhatsApp</a></p></article></main>`;
};

for (const page of Object.values(seoPages)) {
  const canonicalUrl = `https://gestoriasyverificacionesdelsur.com${page.path}`;
  const imageUrl = `https://gestoriasyverificacionesdelsur.com${page.image}`;
  let html = await readFile(resolve(distDirectory, "index.html"), "utf8");

  html = html.replace(/<title>[\s\S]*?<\/title>/i, `<title>${escapeHtml(page.title)}</title>`);
  html = setMeta(html, "name", "description", page.description);
  html = setMeta(html, "property", "og:locale", "es_MX");
  html = setMeta(html, "property", "og:site_name", "Gestoría y Verificaciones del Sur");
  html = setMeta(html, "property", "og:type", "website");
  html = setMeta(html, "property", "og:title", page.title);
  html = setMeta(html, "property", "og:description", page.description);
  html = setMeta(html, "property", "og:url", canonicalUrl);
  html = setMeta(html, "property", "og:image", imageUrl);
  html = setMeta(html, "property", "og:image:type", "image/jpeg");
  html = setMeta(html, "property", "og:image:width", "1200");
  html = setMeta(html, "property", "og:image:height", "630");
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
  const schemaTags = [businessSchema, webPageSchema]
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

  const outputPath =
    page.path === "/"
      ? resolve(distDirectory, "index.html")
      : resolve(distDirectory, page.path.slice(1), "index.html");
  await mkdir(dirname(outputPath), { recursive: true });
  await writeFile(outputPath, html);
}

console.log(`Prerendered ${Object.keys(seoPages).length} SEO pages.`);
