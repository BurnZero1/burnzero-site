/**
 * Root metadata now lives in app/layout.tsx (metadataBase, Open Graph, Twitter).
 * Per-page titles, descriptions, and canonicals come from lib/site.ts via pageMetadata().
 */
export { pageMetadata, publicPages, SITE_DESCRIPTION, SITE_URL } from "@/lib/site";
