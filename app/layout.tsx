import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-poppins",
  display: "swap",
});

// URL pública única del sitio. Puede sobrescribirse en Vercel mediante
// NEXT_PUBLIC_SITE_URL (sin barra final).
const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://www.gestionderesidencias.com.py";
// El valor también queda disponible por variable de entorno en Vercel; el
// fallback permite verificar el dominio inmediatamente tras el despliegue.
const googleVerification =
  process.env.GOOGLE_SITE_VERIFICATION ||
  "XpSGvIxkBlvA0UIu_vCNmiaDvSpsdL9GufvpXcNwsMI";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default:
      "Lic. Roberto Morinigo Alvarenga | Trámites Migratorios y Asesoría Legal en Paraguay",
    template: "%s | Integración Paraguay",
  },
  description:
    "Gestión de residencia para extranjeros en Paraguay. El Lic. Roberto Morinigo Alvarenga te asesora en trámites migratorios, cédula extranjera y naturalización de manera rápida y segura.",
  keywords: [
    "residencia paraguay",
    "cedula extranjera paraguay",
    "tramites migratorios paraguay",
    "gestor migraciones paraguay",
    "radicación paraguay",
    "roberto morinigo",
    "vivir en paraguay",
    "residencia permanente paraguay",
    "residencia temporal paraguay",
    "SUACE paraguay",
  ],
  authors: [{ name: "Lic. Roberto Morinigo Alvarenga" }],
  alternates: { canonical: "/" },
  robots: { index: true, follow: true },
  ...(googleVerification
    ? { verification: { google: googleVerification } }
    : {}),
  icons: { icon: "/images/logo2.png" },
  openGraph: {
    type: "website",
    url: siteUrl,
    locale: "es_PY",
    siteName: "Integración | Gestión de Residencia en Paraguay",
    title: "Lic. Roberto Morinigo Alvarenga | Gestión de Residencia en Paraguay",
    description:
      "Obtén tu Residencia Paraguaya y tu Cédula de Identidad de forma rápida y segura. Trámites migratorios con respaldo legal y profesional.",
    images: [{ url: "/images/logo2.png" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Lic. Roberto Morinigo Alvarenga | Gestión de Residencia en Paraguay",
    description: "Gestión rápida y segura de tu residencia en Paraguay.",
    images: ["/images/logo2.png"],
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: "Lic. Roberto Morinigo Alvarenga - Integración Paraguay",
  description:
    "Gestión de residencia, cédula de identidad y naturalización para extranjeros en Paraguay.",
  image: `${siteUrl}/images/logo2.png`,
  url: siteUrl,
  telephone: "+595974317461",
  email: "ruppertmorinigo1@hotmail.com",
  priceRange: "$$",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Maestro Fermín López 3619 c/ Quebracho, Barrio San Pablo",
    addressLocality: "Asunción",
    postalCode: "2160",
    addressCountry: "PY",
  },
  areaServed: "PY",
  knowsLanguage: ["es", "en", "pt"],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es" className={poppins.variable}>
      <head>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
