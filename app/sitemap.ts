import type { MetadataRoute } from "next"
import { locales, routes } from "@/lib/i18n/config"

const SITE_URL = "https://www.galolara.cl"
const WP_API = process.env.NEXT_PUBLIC_WP_API || "https://wp.galolara.cl"

// Solo las rutas "canónicas" reales del sitio (no los redirects como
// ibt-camp/team-chile-orlando, ni los anchors de la home como #eventos).
const staticRouteKeys = ["home", "about-me", "services", "camps-chile", "camp-ibt", "team-chile-hoops", "blog"] as const

async function getBlogSlugs(): Promise<string[]> {
  try {
    const response = await fetch(`${WP_API}/wp-json/wp/v2/posts?per_page=100&_fields=slug`, {
      next: { revalidate: 3600 },
    })
    if (!response.ok) return []
    const posts = await response.json()
    return Array.isArray(posts) ? posts.map((post: any) => post.slug).filter(Boolean) : []
  } catch {
    return []
  }
}

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const entries: MetadataRoute.Sitemap = []

  for (const locale of locales) {
    for (const key of staticRouteKeys) {
      const slug = routes[key]?.[locale] ?? ""
      const path = slug ? `/${locale}/${slug}` : `/${locale}`
      entries.push({
        url: `${SITE_URL}${path}`,
        lastModified: new Date(),
        changeFrequency: key === "home" ? "weekly" : "monthly",
        priority: key === "home" ? 1 : 0.7,
      })
    }
  }

  const slugs = await getBlogSlugs()
  for (const locale of locales) {
    for (const slug of slugs) {
      entries.push({
        url: `${SITE_URL}/${locale}/blog/${slug}`,
        lastModified: new Date(),
        changeFrequency: "monthly",
        priority: 0.6,
      })
    }
  }

  return entries
}
