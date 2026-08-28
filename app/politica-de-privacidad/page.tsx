import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Política de Privacidad",
  description:
    "Política de privacidad de Integración Paraguay: qué datos recopilamos a través del formulario de contacto, para qué los usamos y cómo protegemos tu información.",
  alternates: { canonical: "/politica-de-privacidad" },
  robots: { index: true, follow: true },
};

export default function PoliticaDePrivacidad() {
  return (
    <main className="legal-page">
      <div className="container legal-container">
        <Link href="/" className="legal-back">
          <i className="fa-solid fa-arrow-left" /> Volver al inicio
        </Link>

        <h1>Política de Privacidad</h1>
        <p className="legal-updated">Última actualización: agosto de 2026</p>

        <p>
          En <strong>Integración Paraguay</strong> (Lic. Roberto Morinigo
          Alvarenga) respetamos tu privacidad. Esta página explica de forma
          simple qué información recopilamos a través de este sitio web y
          cómo la utilizamos.
        </p>

        <h2>1. Qué datos recopilamos</h2>
        <p>
          Cuando completás nuestro formulario de contacto recopilamos el
          nombre, correo electrónico, teléfono/WhatsApp, servicio de interés
          y el mensaje que nos escribas. No solicitamos datos sensibles ni
          documentos a través del formulario web.
        </p>

        <h2>2. Para qué usamos tus datos</h2>
        <p>
          Usamos esta información exclusivamente para contactarte por
          WhatsApp, teléfono o correo electrónico y responder tu consulta
          sobre trámites de residencia, cédula u otros servicios migratorios
          y legales. No vendemos ni compartimos tus datos con terceros con
          fines comerciales o publicitarios.
        </p>

        <h2>3. Cookies y almacenamiento local</h2>
        <p>
          Este sitio guarda tu idioma preferido (ES/EN/PT) en el
          almacenamiento local de tu navegador para recordarlo en tu próxima
          visita. También utilizamos{" "}
          <a
            href="https://vercel.com/docs/analytics"
            target="_blank"
            rel="noopener noreferrer"
          >
            Vercel Analytics
          </a>
          , una herramienta de estadísticas que no usa cookies de rastreo ni
          identifica personalmente a los visitantes; solo nos permite ver
          métricas generales de visitas para mejorar el sitio.
        </p>

        <h2>4. Conservación de los datos</h2>
        <p>
          Conservamos los datos de contacto únicamente durante el tiempo
          necesario para atender tu consulta o mientras dure la relación
          profesional con vos.
        </p>

        <h2>5. Tus derechos</h2>
        <p>
          Podés solicitar en cualquier momento acceder, corregir o eliminar
          tus datos personales escribiéndonos a{" "}
          <a href="mailto:ruppertmorinigo1@hotmail.com">
            ruppertmorinigo1@hotmail.com
          </a>
          .
        </p>

        <h2>6. Cambios a esta política</h2>
        <p>
          Podemos actualizar esta política ocasionalmente. Cualquier cambio
          se publicará en esta misma página.
        </p>

        <h2>7. Contacto</h2>
        <p>
          Si tenés dudas sobre esta política de privacidad, escribinos a{" "}
          <a href="mailto:ruppertmorinigo1@hotmail.com">
            ruppertmorinigo1@hotmail.com
          </a>{" "}
          o al WhatsApp{" "}
          <a href="https://wa.me/595974317461" target="_blank" rel="noopener noreferrer">
            +595 974 317 461
          </a>
          .
        </p>
      </div>
    </main>
  );
}
