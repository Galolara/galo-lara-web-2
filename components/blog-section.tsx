import Link from "next/link"
import type { Locale } from "@/lib/i18n/config"
import { sanitizeHTML, stripHTML } from "@/lib/security/sanitize"
import Image from "next/image"

export const revalidate = 86400

const WP_API = process.env.NEXT_PUBLIC_WP_API || "https://wp.galolara.cl"

async function getPosts() {
  try {
    const response = await fetch(`${WP_API}/wp-json/wp/v2/posts?_embed&per_page=3`, {
      next: { revalidate: 86400 },
    })

    if (!response.ok) {
      console.error(`[v0] WordPress API error: ${response.status}`)
      return []
    }

    const data = await response.json()
    return Array.isArray(data) ? data : []
  } catch (error) {
    console.error("[v0] Failed to fetch WordPress posts:", error)
    return []
  }
}

interface BlogSectionProps {
  lang: Locale
  dict: any
}

export default async function BlogSection({ lang, dict }: BlogSectionProps) {
  const posts = await getPosts()

  const sectionId = "blog"
  const blogRoute = `/${lang}/blog`

  return (
    <section id={sectionId} className="py-20 bg-black">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            {dict.blog.title}
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            {dict.blog.subtitle}
          </p>
        </div>

        {/* Posts */}
        <div className="space-y-12 max-w-6xl mx-auto">
          {posts.map((post: any) => {

            const sanitizedTitle = sanitizeHTML(post.title.rendered)

              /* 
               EXCERPT LIMPIO + [...]
             */

            const excerptHtml = post.excerpt?.rendered || ""

            let cleanExcerpt = stripHTML(excerptHtml)
              .replace(/&hellip;/g, "")
              .replace(/\[\.\.\.\]/g, "")
              .replace(/\[\s*\]/g, "")
              .replace(/\s+/g, " ")
              .trim()


            if (cleanExcerpt.length > 0) {
              cleanExcerpt = cleanExcerpt + " [...]"
            }

            /* 
               IMAGEN DESTACADA 
            */

            const image =
              post._embedded?.["wp:featuredmedia"]?.[0]?.source_url ||
              "/placeholder.svg"

            return (
              <article
                key={post.id}
                className="flex flex-col lg:flex-row gap-8 items-start border-b border-[rgba(255,255,255,0.05)] pb-12 last:border-b-0 hover:opacity-95 transition-opacity duration-200"
              >
                {/* Imagen */}
                <div className="w-full lg:w-2/5 flex-shrink-0">
                  <Image
                    src={image}
                    alt={post.title.rendered}
                    width={800}
                    height={600}
                    className="rounded-lg object-cover w-full h-full"
                  />
                </div>

                {/* Contenido */}
                <div className="w-full lg:w-3/5 space-y-4">

                  <h3 className="text-2xl lg:text-3xl font-bold text-white leading-tight">
                    <Link
                      href={`/${lang}/blog/${post.slug}`}
                      className="underline decoration-2 underline-offset-4 hover:text-gray-300 transition-colors"
                    >
                      <span dangerouslySetInnerHTML={{ __html: sanitizedTitle }} />
                    </Link>
                  </h3>

                  <p className="text-gray-300 text-lg leading-relaxed line-clamp-2">
                    {cleanExcerpt}
                  </p>

                  <div className="pt-4">
                    <Link
                      href={`/${lang}/blog/${post.slug}`}
                      className="border border-white text-white hover:bg-white hover:text-black font-semibold px-6 py-2 rounded transition-all duration-200"
                    >
                      {dict.blog.readMore}
                    </Link>
                  </div>

                </div>
              </article>
            )
          })}
        </div>

        {/* Botón todos los artículos */}
        <div className="text-center mt-16">
          <Link
            href={blogRoute}
            className="bg-white text-black hover:bg-gray-200 font-semibold px-8 py-3 text-lg rounded transition-colors"
          >
            {dict.blog.allArticles}
          </Link>
        </div>
      </div>
    </section>
  )
}
