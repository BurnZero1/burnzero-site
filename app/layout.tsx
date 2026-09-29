import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import {
  jsonLdScript,
  organizationJsonLd,
  SITE_DESCRIPTION,
  SITE_URL,
  websiteJsonLd,
} from "@/lib/site";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "BurnZero — Cumplimiento de CO₂ con prueba on-chain",
    template: "%s",
  },
  description: SITE_DESCRIPTION,
  openGraph: {
    type: "website",
    siteName: "BurnZero",
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
    images: ["/og-image.png"],
  },
  icons: {
    icon: "/logo.png",
    apple: "/logo.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="es"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: jsonLdScript(organizationJsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: jsonLdScript(websiteJsonLd) }}
        />
        {children}
      </body>
    </html>
  );
}
