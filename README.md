# Gestoría y Verificaciones del Sur

Sitio de presentación y captación de consultas para servicios de gestoría vehicular. Está construido con React, TypeScript, Vite y Tailwind CSS; no incluye API ni base de datos.

## Requisitos y desarrollo local

- Node.js 20 LTS o posterior.
- pnpm.

En Windows PowerShell, desde la raíz del proyecto:

```powershell
pnpm.cmd install
pnpm.cmd dev
```

Vite muestra la dirección local en la terminal (por defecto `http://localhost:8080`).

Comandos adicionales:

```powershell
pnpm.cmd build
pnpm.cmd preview
pnpm.cmd lint
```

La compilación crea el sitio en `dist/` y prerenderiza HTML para la página principal y cada página de trámite. El prerender permite que buscadores y servicios de vista previa lean el título, descripción, imagen, canonical, datos estructurados y contenido inicial sin ejecutar JavaScript.

## Rutas públicas

- `/`
- `/placas-morelos`
- `/refrendo-morelos`
- `/verificacion-morelos`
- `/tenencia-morelos`

Los títulos, descripciones, imágenes y fragmentos HTML iniciales se mantienen en `seo-pages.json`. Las imágenes públicas de compartir se sirven desde `public/og/`.

## SEO y publicación

- El dominio canónico del sitio es `https://gestoriasyverificacionesdelsur.com` (sin `www`). La redirección de `www` está declarada en `vercel.json`; registra ambos dominios en la configuración del proyecto de Vercel para que el host alternativo pueda llegar a esa regla.
- `public/robots.txt` declara `public/sitemap.xml`; el sitemap contiene únicamente las rutas públicas canónicas.
- `src/seo/local-business.json` contiene los datos estructurados de la organización y las dos sucursales actualmente publicadas. Mantén sus direcciones, horarios y teléfonos sincronizados con la información del negocio.
- Para activar Google Search Console, verifica la propiedad del dominio mediante DNS o crea una propiedad de prefijo de URL y publica el archivo/token HTML que Google genere en `public/`. No inventes ni reutilices tokens de verificación. Después envía `https://gestoriasyverificacionesdelsur.com/sitemap.xml` y usa Inspección de URL para solicitar el rastreo de las páginas.
- Verifica también el sitio en Bing Webmaster Tools y envía el mismo sitemap.
- Tras publicar cambios de imágenes sociales, vuelve a inspeccionar las URL en los depuradores de compartir de Meta y LinkedIn. Los servicios de mensajería pueden mantener temporalmente en caché una vista previa anterior.

El marcado estructurado y el perfil de empresa deben reflejar datos reales y verificables. Las reseñas, precios, horarios y afirmaciones de servicio no deben inventarse; actualízalos cuando cambie la información confirmada.
