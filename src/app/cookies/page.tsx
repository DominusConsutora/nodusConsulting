import type { Metadata } from "next";
import PolicyPage from "../PolicyPage";

export const metadata: Metadata = {
  title: "Política de cookies y analítica | NODUS",
  description: "Información sobre el almacenamiento local, las cookies opcionales y el consentimiento para analítica en el sitio de NODUS.",
};

const sections = [
  {
    title: "Qué son las cookies y tecnologías similares",
    paragraphs: [
      "Las cookies son pequeños archivos que un sitio puede guardar en tu navegador. También existen tecnologías similares, como el almacenamiento local (localStorage). Esta política describe ambas y permite distinguir lo que se usa hoy de las integraciones que se habilitarán solo si corresponde.",
    ],
  },
  {
    title: "Almacenamiento esencial de preferencias",
    paragraphs: [
      "Cuando guardás una elección, almacenamos en el navegador la clave nodus-cookie-consent-v1. Registra si aceptaste o rechazaste la analítica y la fecha de la elección, para recordar tu preferencia y respetarla en visitas posteriores. Se elimina al cumplirse 180 días y entonces se solicita una nueva elección. No es una cookie: es almacenamiento local del navegador.",
      "Las preferencias esenciales no pueden desactivarse desde el panel, porque son necesarias para aplicar y recordar tu decisión. Si borrás el almacenamiento del navegador, también se eliminará esa preferencia.",
    ],
  },
  {
    title: "Google Tag Manager y Google Analytics",
    paragraphs: [
      "La integración prevista es Google Tag Manager (GTM), con Google Analytics 4 (GA4) como herramienta analítica. GTM es un gestor de etiquetas; las cookies que eventualmente se creen dependen de las etiquetas que se configuren dentro del contenedor.",
      "El ID del contenedor de GTM se define en el entorno de despliegue. Mientras no haya un identificador válido, la conexión no se carga. Aunque se configure, el código de GTM no se solicitará ni ejecutará antes de que aceptes la categoría Analítica. Si la rechazás o retirás el consentimiento, el sitio comunicará el estado denegado a las etiquetas de Google y eliminará las cookies de GA conocidas que pueda controlar.",
      "Con GA4 pueden utilizarse cookies propias como _ga y _ga_<identificador>, según la configuración de la propiedad. Su duración y los datos recogidos dependen de la configuración efectiva de GA4 y de las etiquetas del contenedor. Antes de activar la integración, NODUS deberá revisar y mantener actualizado este inventario. El uso de Google está sujeto también a las políticas de Google.",
      "No se habilitan por esta política cookies publicitarias ni píxeles de otras plataformas. Cualquier herramienta adicional requerirá revisar la finalidad, actualizar esta información y solicitar el consentimiento que corresponda antes de activarla.",
    ],
  },
  {
    title: "Cómo elegir o retirar tu consentimiento",
    paragraphs: [
      "En el aviso podés aceptar la analítica, rechazar las opciones no esenciales o configurar tu elección. Rechazar debe ser tan sencillo como aceptar. La elección no condiciona el acceso al contenido del sitio.",
      "Podés modificarla en cualquier momento mediante el botón «Configurar privacidad», disponible en todas las páginas. Si retirás el consentimiento, no se iniciarán nuevas mediciones de GA4. También podés borrar cookies y datos del sitio desde las opciones de tu navegador.",
    ],
  },
  {
    title: "Más información",
    paragraphs: [
      "Para conocer el tratamiento de datos personales, el responsable, tus derechos y las medidas de seguridad, consultá la política de privacidad. Para solicitar ayuda, escribí a info@nodusconsulting.com.ar.",
    ],
  },
];

export default function CookiesPolicyPage() {
  return (
    <PolicyPage
      title="Política de cookies y analítica"
      intro="Te contamos qué almacenamiento usa este sitio, cómo funciona la analítica opcional prevista y cómo podés controlar tus preferencias."
      updatedAt="26 de octubre de 2026"
      sections={sections}
    />
  );
}
