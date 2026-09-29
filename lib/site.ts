import type { Metadata } from "next";

export const SITE_URL = "https://www.burn-zero.com";
export const SITE_NAME = "BurnZero";

/** Public email already shown on the legacy landing page and used by the demo form. */
export const CONTACT_EMAIL = "chamorro@burn-zero.com";

export const SITE_DESCRIPTION =
  "Plataforma de cumplimiento ambiental que conecta registros de emisiones con certificados oficiales (FONAFIFO), conciliación automática, PDF y prueba blockchain. Costa Rica · B2B.";

export type PublicPage = {
  path: string;
  sourceFile: string;
  title: string;
  description: string;
  index: boolean;
};

/**
 * Indexable marketing routes. "/" is served by rewriting to app/inicio/page.tsx.
 * /inicio is the same document, so it is not a separate sitemap URL.
 * /ads is noindex and is omitted here.
 */
export const publicPages: PublicPage[] = [
  {
    path: "/",
    sourceFile: "app/inicio/page.tsx",
    title: "BurnZero — Cumplimiento de CO₂ con prueba on-chain",
    description: SITE_DESCRIPTION,
    index: true,
  },
  {
    path: "/request-demo",
    sourceFile: "app/request-demo/page.tsx",
    title: "Solicitar demo — BurnZero",
    description:
      "Solicite una demo de BurnZero para hablar sobre registro de deuda de CO₂, verificación de certificados oficiales y conciliación auditable on-chain.",
    index: true,
  },
];

export function absoluteUrl(path: string): string {
  if (path === "/") return SITE_URL;
  return `${SITE_URL}${path}`;
}

export function pageMetadata({
  title,
  description,
  path,
  index = true,
}: {
  title: string;
  description: string;
  path: string;
  index?: boolean;
}): Metadata {
  const url = absoluteUrl(path);

  return {
    title,
    description,
    alternates: { canonical: url },
    robots: index
      ? { index: true, follow: true }
      : { index: false, follow: false },
    openGraph: {
      title,
      description,
      type: "website",
      url,
      siteName: SITE_NAME,
      locale: "es_CR",
      images: [
        {
          url: "/og-image.png",
          width: 1200,
          height: 630,
          alt: "BurnZero — cumplimiento de CO₂ con prueba on-chain",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: ["/og-image.png"],
    },
  };
}

export const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: SITE_NAME,
  url: SITE_URL,
  logo: `${SITE_URL}/brand-logo.png`,
  description: SITE_DESCRIPTION,
  address: {
    "@type": "PostalAddress",
    addressCountry: "CR",
  },
  contactPoint: {
    "@type": "ContactPoint",
    email: CONTACT_EMAIL,
    contactType: "sales",
    areaServed: "CR",
    availableLanguage: ["Spanish"],
  },
};

export const websiteJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: SITE_NAME,
  url: SITE_URL,
  inLanguage: "es",
};

export type FaqItem = {
  question: string;
  answer: string;
};

/**
 * Visible FAQ copy. Answers use only claims already published on the site.
 * TODO markers are intentional gaps for the team to fill.
 * sameAs is omitted: the site does not link LinkedIn, X, or GitHub.
 * City is omitted from PostalAddress: the site only says Costa Rica.
 */
export const faqs: FaqItem[] = [
  {
    question: "¿Qué es BurnZero y para quién es?",
    answer:
      "BurnZero es una plataforma de cumplimiento ambiental para empresas (B2B) en Costa Rica. Ayuda a registrar, conciliar y demostrar la compensación de la deuda de CO₂. Está dirigida a equipos de sostenibilidad y ESG, finanzas y compliance, operaciones y flotas, y a organizaciones enterprise que necesitan un entorno multi-tenant, administración, validación de titularidad y un registro on-chain auditable.",
  },
  {
    question: "¿Cómo se miden y registran las emisiones de CO₂?",
    answer:
      "Las organizaciones cargan sus registros de emisiones y BurnZero mantiene la deuda de CO₂ pendiente visible en un solo lugar, organizada por empresa, periodo y estado de compensación. TODO: el sitio no describe el método de medición (factores de emisión, sensores o norma) con el que se calculan las toneladas.",
  },
  {
    question: "¿Cómo funciona la conciliación automática de los créditos de carbono?",
    answer:
      "BurnZero vincula cada certificado con los registros pendientes mediante matching automático por empresa o cédula jurídica, y el estado pasa de PENDING a COMPLETED. El número de transferencia queda registrado para bloquear la reutilización del mismo certificado. Si el crédito llega antes de conocer toda la deuda, los fondos UCC reservan ese saldo para una asignación futura.",
  },
  {
    question: "¿Qué es la prueba en blockchain y por qué importa?",
    answer:
      "Cada compensación genera un PDF de evidencia y un enlace de transacción on-chain para que auditores y compliance puedan ver qué se compensó, con qué certificado y cuándo. BurnZero ancla esa evidencia en blockchain como registro auditable. TODO: el sitio no describe la red, el contrato ni un mecanismo concreto de resistencia a alteraciones.",
  },
  {
    question:
      "¿Cómo maneja los certificados oficiales y el cumplimiento, incluido FONAFIFO en Costa Rica?",
    answer:
      "Las organizaciones suben PDFs oficiales de FONAFIFO y BurnZero valida la cédula jurídica o el ID de organización antes de vincular cada certificado a los registros pendientes. El flujo cubre operaciones en Costa Rica, incluida la deuda por combustible junto con certificados Fonafifo y la validación de titularidad. TODO: el sitio no detalla otras normas, registros o certificaciones de cumplimiento además de FONAFIFO.",
  },
  {
    question: "¿Cómo se integra con los sistemas que la empresa ya usa?",
    answer:
      "BurnZero ofrece importación vía API y exportación de la evidencia que necesitan sostenibilidad y finanzas, además de reportes ESG. TODO: el sitio no publica documentación de endpoints, formatos de archivo ni conectores específicos.",
  },
  {
    question: "¿Cómo protege la seguridad y la privacidad de los datos?",
    answer:
      "TODO: el sitio no publica información sobre seguridad, cifrado, control de acceso, residencia de los datos ni una política de privacidad. Hay que confirmar esos puntos antes de describirlos.",
  },
  {
    question:
      "¿En qué se diferencia de otras plataformas de contabilidad o créditos de carbono?",
    answer:
      "BurnZero es cumplimiento operativo, no un marketplace de carbono. Reúne en un panel los registros de emisiones y los certificados oficiales, concilia por empresa o cédula jurídica, bloquea certificados duplicados con el número de transferencia y deja un PDF más una prueba on-chain por cada compensación.",
  },
  {
    question: "¿Cuánto cuesta y cómo se puede empezar?",
    answer:
      "TODO: el sitio no publica precios ni planes. Para empezar, solicite una demo: el equipo de BurnZero le contacta para hablar del registro de deuda de CO₂, la verificación de certificados y la conciliación auditable on-chain. Puede usar el formulario de solicitud de demo o escribir a chamorro@burn-zero.com.",
  },
  {
    question: "¿Qué son los fondos UCC?",
    answer:
      "Los fondos UCC reservan el crédito sobrante para asignarlo cuando llegue el resto de la deuda de CO₂. Sirven cuando los créditos llegan antes de conocer toda la deuda, de modo que el saldo queda apartado para una asignación futura. TODO: el sitio no define la sigla UCC ni las reglas del pool.",
  },
];

export const faqPageJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((item) => ({
    "@type": "Question",
    name: item.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: item.answer,
    },
  })),
};

export function jsonLdScript(data: unknown): string {
  return JSON.stringify(data).replace(/</g, "\\u003c");
}
