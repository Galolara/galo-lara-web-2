import Link from "next/link"
import Image from "next/image"
import Footer from "@/components/footer"
import { getDictionary } from "@/lib/i18n/dictionaries"
import type { Locale } from "@/lib/i18n/config"
import { sanitizeHTML, stripHTML } from "@/lib/security/sanitize"

export const revalidate = 60

const WP_API = process.env.NEXT_PUBLIC_WP_API || "https://wp.galolara.cl"

async function getPosts() {
  try {
    const response = await fetch(`${WP_API}/wp-json/wp/v2/posts?_embed&per_page=10`, {
      next: { revalidate: 60 },
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

export default async function BlogPage({ params }: { params: { lang: Locale } }) {
  const posts = await getPosts()
  const dict = await getDictionary(params.lang)

  return (
    <>
      <section className="pt-32 pb-20 bg-black">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="mb-8">
            <Link
              href={`/${params.lang}`}
              className="text-gray-300 hover:text-white font-medium flex items-center gap-2 transition-colors"
            >
              ← {params.lang === "es" ? "Volver al Inicio" : "Back to Home"}
            </Link>
          </div>

          <h1 className="text-4xl md:text-5xl font-bold text-white mb-12 text-center">
            {params.lang === "es" ? "Todos los Artículos" : "All Articles"}
          </h1>

          <div className="space-y-12">
            {posts.map((post: any) => {

              const sanitizedTitle = sanitizeHTML(post.title?.rendered || "")

              /* 
                 EXCERPT LIMPIO
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
                 IMAGEN DESTACADA ROBUSTA
              */

              const image =
                post._embedded?.["wp:featuredmedia"]?.[0]?.source_url ||
                post._embedded?.["wp:featuredmedia"]?.[0]?.media_details?.sizes?.large?.source_url ||
                post.jetpack_featured_media_url ||
                "/placeholder.svg"

              const altText = stripHTML(post.title?.rendered || "Artículo")

              return (
                <article
                  key={post.id}
                  className="flex flex-col gap-6 border-b border-[rgba(255,255,255,0.05)] pb-12 last:border-b-0"
                >
                  <div className="relative w-full h-64">
                    <Image
                      src={image}
                      alt={altText}
                      fill
                      className="rounded-lg object-cover"
                    />
                  </div>

                  <div>
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-4 leading-tight">
                      <Link
                        href={`/${params.lang}/blog/${post.slug}`}
                        className="underline decoration-2 underline-offset-4 hover:text-gray-300 transition-colors"
                      >
                        <span dangerouslySetInnerHTML={{ __html: sanitizedTitle }} />
                      </Link>
                    </h2>

                    <p className="text-gray-300 text-lg">
                      {cleanExcerpt}
                    </p>

                    <div className="mt-4">
                      <Link
                        href={`/${params.lang}/blog/${post.slug}`}
                        className="text-white font-semibold underline underline-offset-4 hover:text-gray-300 transition-colors"
                      >
                        {params.lang === "es" ? "Leer más" : "Read more"}
                      </Link>
                    </div>
                  </div>
                </article>
              )
            })}
          </div>
        </div>
      </section>
      <Footer lang={params.lang} dict={dict} />
    </>
  )
}
