import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://ucidesignathon.com",
      lastModified: new Date(),
      priority: 1,
    },
  ];
}
