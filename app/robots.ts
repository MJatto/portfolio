import type { MetadataRoute } from "next";

const baseUrl = "portfolio-icwm0jatx-mohammed-3146.vercel.app";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: `${baseUrl}/sitemap.xml`,
  };
}
