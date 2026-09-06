import type { MetadataRoute } from "next";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://www.kaplanlarfig.com";

// Statik sayfalar (admin hariç — o noindex)
const staticRoutes = [
  "",
  "/about",
  "/production",
  "/brands",
  "/products",
  "/products/fig",
  "/contact",
  "/news",
];

async function getNewsEntries(now: Date): Promise<MetadataRoute.Sitemap> {
  // Sanity env yoksa CMS'e hiç dokunma; sadece statik sitemap üret.
  if (
    !process.env.NEXT_PUBLIC_SANITY_PROJECT_ID ||
    !process.env.NEXT_PUBLIC_SANITY_DATASET
  ) {
    return [];
  }

  try {
    const { groq } = await import("next-sanity");
    const { client } = await import("@/lib/sanity.client");

    const newsSlugsQuery = groq`*[_type == "post" && defined(slug.current)]{
      "slug": slug.current,
      _updatedAt
    }`;

    const posts: Array<{ slug: string; _updatedAt: string }> =
      await client.fetch(newsSlugsQuery);

    return (posts || []).map((post) => ({
      url: `${siteUrl}/news/${post.slug}`,
      lastModified: post._updatedAt ? new Date(post._updatedAt) : now,
      changeFrequency: "monthly" as const,
      priority: 0.6,
    }));
  } catch {
    return [];
  }
}

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const now = new Date();

  const staticEntries: MetadataRoute.Sitemap = staticRoutes.map((route) => ({
    url: `${siteUrl}${route}`,
    lastModified: now,
    changeFrequency: route === "" ? "weekly" : "monthly",
    priority: route === "" ? 1 : 0.7,
  }));

  const newsEntries = await getNewsEntries(now);

  return [...staticEntries, ...newsEntries];
}
