# Sitio web corporativo — NODUS

Contexto de proyecto siempre activo para este workspace. Rellena los campos marcados con `TODO`.

## Proyecto

- Tipo: sitio web corporativo (marketing/institucional) para consultora portuaria.
- Cliente: **NODUS** — consultoría portuaria estratégica con foco en **Argentina y LATAM**.
- Base de referencia: se replica la estructura del proyecto **DOMINUS** (`C:\Users\Damian\Desktop\DAMIAN\CLIENTES\CONSULTORAS\DOMINUS\web_dominus\dominus-web`), con marca propia y textos reescritos. **No copiar copys de forma literal.**
- Se construye **desde cero** replicando esa arquitectura (no es un fork del repo DOMINUS).

## Stack

- Next.js 16 (App Router) + React 19 + TypeScript.
- Estilos: **Bootstrap 5** + **CSS Modules** (`*.module.css`) + variables CSS de marca en `src/app/globals.css` (`:root`).
- i18n: **next-intl** (locales `es` default y `en`, `localePrefix: "as-needed"`); textos en `messages/es.json` / `messages/en.json`.
- Contenido de dominio: `src/data/*.ts` (`services.ts`, `blogPosts.ts`, `teamMembers.ts`).
- Animaciones: GSAP, AOS, Lenis, Swiper. Email: EmailJS (claves en variables de entorno, no hardcodear).

## Marca y tono

- Tono: profesional, técnico y cercano; orientado a autoridades y operadores portuarios.
- Idioma principal: español (ES-AR, voseo cuando sea natural) + inglés.
- Público objetivo: autoridades portuarias, operadores y terminales de Argentina y LATAM.

## Identidad visual (marca NODUS — distinta de DOMINUS)

- Paleta de colores: TODO (definir variables CSS en `globals.css`; DOMINUS usa navy `#00194b`, NODUS debe ser distinta).
- Tipografías: TODO.
- Logo / assets: `C:\Users\Damian\Desktop\DAMIAN\CLIENTES\CONSULTORAS\NODUS\Grafica\logo_nodus_PNG.png` como logo principal; preparar también versión clara/oscura en `public/`.

## Estructura del sitio

- Páginas: Home, Nosotros, Servicios (+ detalle `[slug]`), Blog (+ detalle `[slug]`), Contacto — bajo `src/app/[locale]/`.
- Home (secciones): Header sticky, Hero con título rotativo, Sobre NODUS, diferenciales, preview de servicios, FAQ, últimos artículos, CTA final, Footer.
- Servicios: mismos ejes que la consultoría portuaria (master plans, concesiones/PPP, gobernanza y tarifas, optimización de terminales, transformación digital/PCS, sostenibilidad/green ports, regulación, capacitación) — textos reescritos para NODUS.

## Datos de contacto y negocio

- Email / teléfono / dirección: TODO (usar variables de entorno o `src/data`, no hardcodear).
- Redes sociales (LinkedIn, etc.): TODO.
- EmailJS (Service/Template/Public Key): TODO — en variables de entorno.

## Convenciones

- Las reglas de código están en `.github/instructions/frontend.instructions.md`.
- Reescribir siempre los copys respecto a DOMINUS (foco Argentina/LATAM); no reutilizar textos idénticos.
- Antes de dar por terminada una tarea, el código debe pasar `lint` y `build`.
