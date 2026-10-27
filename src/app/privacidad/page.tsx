import type { Metadata } from "next";
import PolicyPage from "../PolicyPage";

export const metadata: Metadata = {
  title: "Política de privacidad y seguridad | NODUS",
  description: "Cómo NODUS SRL trata y protege los datos personales al usar este sitio web.",
};

const sections = [
  {
    title: "Responsable del tratamiento",
    paragraphs: [
      "NODUS SRL, con domicilio en la Ciudad Autónoma de Buenos Aires, Argentina, es responsable del tratamiento de los datos personales recabados a través de este sitio. Para consultas o solicitudes de privacidad, escribinos a info@nodusconsulting.com.ar.",
    ],
  },
  {
    title: "Qué información tratamos",
    paragraphs: [
      "Si nos contactás por correo electrónico, podemos tratar los datos que incluyas en el mensaje, como nombre, organización, dirección de correo, teléfono y el contenido de tu consulta. Evitá enviar datos sensibles o información confidencial que no sea necesaria.",
      "Al visitar el sitio, la infraestructura que lo entrega puede recibir datos técnicos necesarios para transmitir la página y proteger el servicio, como dirección IP, fecha y hora, páginas solicitadas, navegador y datos del dispositivo. La información concreta que registren los servidores depende de la configuración del proveedor de alojamiento.",
      "Al enviar el formulario, compartís tu nombre, organización, correo electrónico, teléfono opcional, tema y mensaje. El envío se procesa en el servidor del sitio y mediante el servicio de correo de DONWEB para entregar la consulta a info@nodusconsulting.com.ar. No usamos estos datos para suscribirte automáticamente a comunicaciones comerciales.",
    ],
  },
  {
    title: "Para qué usamos los datos",
    paragraphs: [
      "Usamos los datos de contacto para responder consultas y dar seguimiento a conversaciones profesionales; los datos técnicos, para entregar el sitio, detectar errores, prevenir abusos y proteger la disponibilidad; y los datos analíticos, únicamente si activamos Google Analytics 4 y otorgás tu consentimiento.",
      "La integración prevista es Google Tag Manager y Google Analytics 4. El código de GTM solo se solicita si existe un identificador válido en el entorno de despliegue y después de que aceptes Analítica. Si se configura, podrás retirar el consentimiento desde cualquier página; no se debe instalar GA4 por fuera de ese control.",
    ],
  },
  {
    title: "Bases, conservación y destinatarios",
    paragraphs: [
      "Respondemos las consultas que iniciás para gestionar tu solicitud y las interacciones profesionales. Aplicamos las bases jurídicas que correspondan según la normativa vigente en cada caso; la analítica opcional se basa en tu consentimiento.",
      "Conservamos los mensajes durante el tiempo necesario para responder y mantener la relación profesional, y por los plazos adicionales que puedan exigir obligaciones legales o la defensa de derechos. La preferencia de cookies se conserva en el almacenamiento local del navegador por hasta 180 días. Los datos analíticos, si se habilitan, estarán sujetos a los parámetros de retención configurados en la propiedad de Google Analytics y a su política aplicable.",
      "El proveedor de alojamiento procesa datos técnicos necesarios para prestar el sitio. DONWEB interviene en el procesamiento y la entrega de las consultas, y puede tratar su contenido y datos técnicos conforme a sus condiciones de servicio y políticas de privacidad. Si se habilita la analítica, Google puede recibir información del dispositivo, identificadores en línea, páginas visitadas e interacciones. Los proveedores pueden procesar información desde otros países; NODUS aplicará las salvaguardas de transferencia que exija la normativa correspondiente.",
    ],
  },
  {
    title: "Tus derechos",
    paragraphs: [
      "Podés solicitar acceso, actualización, rectificación o supresión de tus datos, así como retirar el consentimiento para analítica, escribiendo a info@nodusconsulting.com.ar. La revocación no afecta la licitud del tratamiento realizado antes de retirarla. También podés reclamar ante la autoridad de control competente.",
      "En Argentina, la Agencia de Acceso a la Información Pública (AAIP) es el órgano de control de la Ley 25.326 y recibe denuncias y reclamos relacionados con la protección de datos personales. Encontrás información en argentina.gob.ar/aaip/datospersonales.",
      "Si la normativa de tu lugar de residencia te reconoce derechos adicionales —por ejemplo, bajo el RGPD cuando resulte aplicable— podés ejercerlos por el mismo medio. Te responderemos dentro de los plazos legales aplicables.",
    ],
  },
  {
    title: "Seguridad de la información",
    paragraphs: [
      "NODUS adopta medidas técnicas y organizativas razonables, proporcionales a la naturaleza de la información y a los riesgos, para prevenir accesos, alteraciones, pérdidas o divulgaciones no autorizadas. Limitamos el uso de datos a los fines informados y procuramos que los proveedores que intervienen los protejan adecuadamente.",
      "Ninguna transmisión o sistema de almacenamiento puede garantizar seguridad absoluta. Si se produce un incidente, evaluaremos sus riesgos y cumpliremos las obligaciones de respuesta y notificación que correspondan.",
    ],
  },
  {
    title: "Cambios y contacto",
    paragraphs: [
      "Podemos actualizar esta política para reflejar cambios en el sitio, las herramientas utilizadas o la normativa. Publicaremos aquí la versión vigente y su fecha de actualización. Antes de activar nuevas herramientas de seguimiento, revisaremos la información y las opciones de consentimiento.",
      "Para cualquier consulta relacionada con privacidad o seguridad, escribinos a info@nodusconsulting.com.ar.",
    ],
  },
];

export default function PrivacyPolicyPage() {
  return (
    <PolicyPage
      title="Política de privacidad y seguridad"
      intro="Esta política explica cómo NODUS SRL trata la información vinculada con las visitas y consultas recibidas a través de nodusconsulting.com.ar, y qué medidas adopta para protegerla."
      updatedAt="26 de octubre de 2026"
      sections={sections}
    />
  );
}
