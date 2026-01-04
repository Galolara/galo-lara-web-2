import Link from "next/link"
import Footer from "@/components/footer"
import { getDictionary } from "@/lib/i18n/dictionaries"
import type { Locale } from "@/lib/i18n/config"
import { sanitizeHTML } from "@/lib/security/sanitize"
import { notFound } from "next/navigation"

function fixWpContentAssetUrls(html: string, wpBase = "https://wp.galolara.cl") {
  if (!html) return html

  const uploadsAbs = `${wpBase}/wp-content/uploads/`

  let out = html

  // src="/wp-content/uploads/..."
  out = out.replace(
    /src=(["'])\/wp-content\/uploads\//gi,
    `src=$1${uploadsAbs}`
  )

  // href="/wp-content/uploads/..."
  out = out.replace(
    /href=(["'])\/wp-content\/uploads\//gi,
    `href=$1${uploadsAbs}`
  )

  // src="http(s)://galolara.cl/wp-content/uploads/..."
  out = out.replace(
    /src=(["'])https?:\/\/(www\.)?galolara\.cl\/wp-content\/uploads\//gi,
    `src=$1${uploadsAbs}`
  )

  // href="http(s)://galolara.cl/wp-content/uploads/..."
  out = out.replace(
    /href=(["'])https?:\/\/(www\.)?galolara\.cl\/wp-content\/uploads\//gi,
    `href=$1${uploadsAbs}`
  )

  // src="http://wp.galolara.cl/wp-content/uploads/..." → https
  out = out.replace(
    /src=(["'])http:\/\/wp\.galolara\.cl\/wp-content\/uploads\//gi,
    `src=$1${uploadsAbs}`
  )

  // href="http://wp.galolara.cl/wp-content/uploads/..." → https
  out = out.replace(
    /href=(["'])http:\/\/wp\.galolara\.cl\/wp-content\/uploads\//gi,
    `href=$1${uploadsAbs}`
  )

  // srcset="... 300w, ... 768w"
  out = out.replace(
    /srcset=(["'])([\s\S]*?)\1/gi,
    (match, quote, value) => {
      const fixed = value
        .replace(
          /https?:\/\/(www\.)?galolara\.cl\/wp-content\/uploads\//gi,
          uploadsAbs
        )
        .replace(
          /http:\/\/wp\.galolara\.cl\/wp-content\/uploads\//gi,
          uploadsAbs
        )
        .replace(
          /\/wp-content\/uploads\//gi,
          uploadsAbs
        )

      return `srcset=${quote}${fixed}${quote}`
    }
  )

  return out
}

async function getPost(slug: string) {
  const WP_API = process.env.NEXT_PUBLIC_WP_API || "https://wp.galolara.cl"

  try {
    const response = await fetch(
      `${WP_API}/wp-json/wp/v2/posts?slug=${encodeURIComponent(slug)}&_embed`,
      {
        next: { revalidate: 86400 }, // Cache por 1 día
        headers: {
          "User-Agent": "Vercel-Next-Blog",
        },
      }
    )

    if (!response.ok) {
      console.error(`[v0] WordPress API error: ${response.status} (slug: ${slug})`)
      return null
    }

    const data = await response.json()

    if (!Array.isArray(data) || data.length === 0) {
      return null
    }

    return data[0]
  } catch (error) {
    console.error("[v0] Failed to fetch WordPress post:", error)
    return null
  }
}

export default async function BlogPostPage({
  params,
}: {
  params: { slug: string; lang: Locale }
}) {
  const post = await getPost(params.slug)
  const dict = await getDictionary(params.lang)


  if (!post) {
    return notFound()
  }

  let sanitizedTitle = ""
  try {
    sanitizedTitle = sanitizeHTML(post?.title?.rendered ?? "")
  } catch (e) {
    console.error("[blog] sanitizeHTML failed for title slug:", params.slug, e)
    sanitizedTitle = post?.title?.rendered ?? ""
  }

  let sanitizedContent = ""
  try {
    sanitizedContent = sanitizeHTML(post?.content?.rendered ?? "")

    sanitizedContent = fixWpContentAssetUrls(sanitizedContent)
  } catch (e) {
    console.error("[blog] sanitizeHTML failed for content slug:", params.slug, e)
    sanitizedContent = post?.content?.rendered ?? ""
  }

  const featuredImage = post._embedded?.["wp:featuredmedia"]?.[0]?.source_url

  return (
    <>
      <article className="pt-32 pb-20 bg-black min-h-screen">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="mb-8">
            <Link
              href={`/${params.lang}/blog`}
              className="text-gray-300 hover:text-white font-medium flex items-center gap-2 transition-colors"
            >
              ← {params.lang === "es" ? "Volver al Blog" : "Back to Blog"}
            </Link>
          </div>

          {featuredImage && (
            <img
              src={featuredImage || "/placeholder.svg"}
              alt={
                sanitizedTitle
                  ? sanitizedTitle.replace(/<[^>]+>/g, "")
                  : "Blog post image"
              }
              className="rounded-lg object-cover w-full h-96 mb-8"
            />
          )}

          <h1
            className="text-4xl md:text-5xl font-bold text-white mb-8 leading-tight"
            dangerouslySetInnerHTML={{ __html: sanitizedTitle }}
          />

          <div
            className="blog-content prose prose-invert prose-lg max-w-none text-white
                      prose-ul:list-disc prose-ol:list-decimal
                      prose-ul:pl-6 prose-ol:pl-6
                      prose-li:marker:text-white"
            dangerouslySetInnerHTML={{ __html: sanitizedContent }}
          />
        </div>
      </article>

      <Footer lang={params.lang} dict={dict} />
    </>
  )
}
