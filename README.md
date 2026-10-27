This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to self-host and optimize the Manrope and DM Mono fonts.

## Configuración de correo (PHP + mail() de DonWeb)

El formulario envía por POST a `/contacto.php` ([public/contacto.php](public/contacto.php)), que se copia tal cual a la carpeta pública al compilar. Es el mismo enfoque que DOMINUS: el script valida los datos, descarta el spam con un campo trampa y envía con la función `mail()` del hosting. El destinatario es fijo (`info@nodusconsulting.com.ar`), el remitente es `web@nodusconsulting.com.ar` y el correo de la persona va solo como Reply-To.

No requiere contraseñas ni archivos de configuración en el servidor. Condiciones:

1. El hosting debe tener PHP activo y `mail()` habilitado.
2. La casilla `web@nodusconsulting.com.ar` debe existir en el mismo dominio.

Opcional: `NEXT_PUBLIC_CONTACT_ENDPOINT` en `.env.local` para apuntar a otro endpoint (por ejemplo un entorno de pruebas). Por defecto usa `/contacto.php`. `next dev` no ejecuta PHP: el envío solo funciona en el hosting o con un servidor PHP local.

Incluye validación de campos, bloqueo de envíos simultáneos, un campo trampa básico y avisos de éxito, error o demora. Si la confirmación tarda más de 20 segundos, se informa que el resultado es incierto para evitar reenvíos involuntarios.

Antes de publicar, comprobar con un envío real la recepción en `info@nodusconsulting.com.ar` y el Reply-To. El campo trampa no sustituye un CAPTCHA, que todavía no está configurado.

Los textos nuevos están en `messages/es.json` y `messages/en.json`. El formulario usa español, como las rutas actuales; el proyecto todavía no tiene instalado ni conectado next-intl.

## Privacidad y analítica

- Las políticas públicas están disponibles en `/privacidad` y `/cookies`.
- El panel global permite aceptar, rechazar o configurar la analítica opcional. La elección se guarda en el navegador durante 180 días.
- Google Tag Manager no se carga hasta que la persona visitante acepta Analítica. Para habilitarlo, configurá `NEXT_PUBLIC_GTM_ID` con un identificador `GTM-...` en el entorno de despliegue.
- El contenedor de GTM debe incluir únicamente GA4 aprobado y usar el modo de consentimiento básico: configurar las etiquetas GA4 con comprobación adicional `analytics_storage`, para que no envíen mediciones mientras el consentimiento está denegado. No agregar Google Ads, píxeles ni otras herramientas sin revisar primero estas políticas y actualizar el consentimiento.
- Google Analytics 4 debe configurarse dentro del contenedor de GTM. No agregar una etiqueta directa de GA4 que evite el control de consentimiento.
- Antes de producción, confirmar el inventario real de cookies, su duración, la retención de GA4, el proveedor de alojamiento y las condiciones de transferencia aplicables.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
