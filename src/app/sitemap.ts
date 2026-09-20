import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/site";
import { PROJECTS } from "@/lib/works";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: SITE_URL, changeFrequency: "monthly", priority: 1 },
    ...PROJECTS.map((p) => ({
      url: `${SITE_URL}/works/${p.slug}`,
      changeFrequency: "yearly" as const,
      priority: 0.6,
    })),
  ];
}
