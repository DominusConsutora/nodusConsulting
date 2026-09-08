---
description: "Convenciones de código front-end para el sitio Next.js (App Router) + TypeScript + Bootstrap 5 + CSS Modules + next-intl (componentes, estilos, i18n, accesibilidad y SEO)."
applyTo: "**/*.{tsx,ts,css}"
---

# Convenciones front-end (Next.js + TS + Bootstrap + CSS Modules)

## Componentes React / TSX

- Usa componentes funcionales con TypeScript. Tipa las props con `interface` o `type`; evita `any`.
- Prefiere **Server Components** por defecto; añade `"use client"` solo cuando necesites interactividad, estado, efectos o librerías de animación (GSAP, AOS, Lenis, Swiper).
- Un componente por archivo, en `PascalCase` (p. ej. `BannerTwo.tsx`).
- Navegación interna con el `Link` de la navegación i18n (`@/i18n/navigation`) o `next/link`; imágenes con `next/image` (con `alt` significativo y dimensiones o `fill`).
- No hardcodees textos visibles: los copys van en `messages/es.json` / `messages/en.json` (next-intl) y los datos de dominio (servicios, blog, equipo) en `src/data/*.ts`.

## Estilos (Bootstrap 5 + CSS Modules + variables CSS)

- Layout y utilidades con **Bootstrap 5**; estilos específicos de componente en `Componente.module.css` importado como `import styles from './Componente.module.css'`.
- Colores y tokens de marca como **variables CSS** en `src/app/globals.css` (`:root`), no valores mágicos repetidos.
- Mobile-first: base para móvil y `@media (min-width)` para pantallas mayores.
- Clases de CSS Modules en `camelCase` (`styles.miClase`). Evita selectores globales salvo reset/base en `globals.css`.

## Internacionalización (next-intl)

- Idiomas `es` (default) y `en`; `localePrefix: "as-needed"` (URLs en español sin `/es`).
- Todo texto visible se consume con `useTranslations`/`getTranslations`; añade la clave en ambos `messages/*.json`.
- Rutas y navegación mediante los helpers de `src/i18n/`.

## Accesibilidad (a11y)

- Estructura semántica: un solo `<h1>` por página y jerarquía de encabezados en orden.
- Elementos interactivos accesibles por teclado, con foco visible y `aria-*`/`label` solo cuando falte semántica nativa.
- Contraste de color suficiente y `alt` descriptivo (o `alt=""` para imágenes decorativas).

## SEO

- Cada página define `metadata` (o `generateMetadata`) por idioma: título, descripción y Open Graph.
- Datos estructurados JSON-LD (`StructuredData`) con datos reales de NODUS.
- Mantén `robots.ts` y `sitemap.ts` al día con las rutas es/en.

## Contenido (foco Argentina / LATAM)

- Los copys se **reescriben** respecto a DOMINUS: no reutilizar textos idénticos.
- Tono profesional, orientado a autoridades y operadores portuarios de Argentina y LATAM; usa ES-AR (voseo) cuando sea natural.

## Calidad

- Sin `console.log` en el código entregado.
- No hardcodees credenciales ni claves (EmailJS, API keys); usa variables de entorno.
- El código debe pasar `lint` y `build` sin desactivar reglas para "que compile".
