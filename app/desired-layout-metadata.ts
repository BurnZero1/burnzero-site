/**
 * Desired root metadata for app/layout.tsx (Desktop TCC currently blocks
 * editing layout.tsx). The redesigned landing also exports this metadata
 * from app/inicio/page.tsx, which applies when "/" is rewritten to "/inicio".
 *
 * When you can edit layout.tsx, replace its metadata export with:
 */
import type { Metadata } from "next";

export const desiredRootMetadata: Metadata = {
  title: "BurnZero — Cumplimiento de CO₂ con prueba on-chain",
  description:
    "Plataforma de cumplimiento ambiental que conecta registros de emisiones con certificados oficiales (FONAFIFO), conciliación automática, PDF y prueba blockchain. Costa Rica · B2B.",
};
