import type { MetadataRoute } from "next";
import { PROJECTS, SITE_URL } from "@/constants/content";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = SITE_URL;
  const staticRoutes = ["", "/about", "/experience", "/projects", "/hackathon", "/research", "/blog", "/metrics", "/timeline", "/certifications", "/achievements", "/architecture/repomind-ai", "/architecture/ai-database-assistant", "/architecture/ab-test-workbench", "/architecture/chakra", "/architecture/it-ticket-automation", "/resume", "/contact"];
  const projectRoutes = PROJECTS.map((p) => `/projects/${p.slug}`);
  return [...staticRoutes, ...projectRoutes].map((route) => ({
    url: `${base}${route}`,
    lastModified: new Date(),
  }));
}
