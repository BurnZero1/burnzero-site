import fs from "node:fs";
import path from "node:path";
import type { MetadataRoute } from "next";
import { absoluteUrl, publicPages } from "@/lib/site";

const sourceMtime: Record<string, Date> = {
  "/": fs.statSync(path.join(process.cwd(), "app/inicio/page.tsx")).mtime,
  "/request-demo": fs.statSync(
    path.join(process.cwd(), "app/request-demo/page.tsx"),
  ).mtime,
};

export default function sitemap(): MetadataRoute.Sitemap {
  return publicPages
    .filter((page) => page.index)
    .map((page) => ({
      url: absoluteUrl(page.path),
      lastModified: sourceMtime[page.path],
    }));
}
