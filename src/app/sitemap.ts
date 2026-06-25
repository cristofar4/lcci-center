import type { MetadataRoute } from "next";
import { SITE, NAV } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [...NAV.map((n) => n.href), "/book"];
  const now = new Date();
  return routes.map((href) => ({
    url: `${SITE.url}${href === "/" ? "" : href}`,
    lastModified: now,
    changeFrequency: href === "/" ? "weekly" : "monthly",
    priority: href === "/" ? 1 : href === "/book" ? 0.9 : 0.8,
  }));
}
