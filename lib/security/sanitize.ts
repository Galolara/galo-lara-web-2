import xss from "xss"

export function sanitizeHTML(html: string): string {
  if (!html) return ""

  try {
    const sanitized = xss(html, {
      whiteList: {
        p: [],
        br: [],
        strong: [],
        em: [],
        u: [],

        a: ["href", "target", "rel", "title"],

        ul: [],
        ol: [],
        li: [],

        h1: [],
        h2: [],
        h3: [],
        h4: [],
        h5: [],
        h6: [],

        blockquote: [],

        // ✅ Gutenberg separator
        hr: ["class"],

        img: ["src", "alt", "title", "width", "height"],

        figure: [],
        figcaption: [],

        table: [],
        thead: [],
        tbody: [],
        tr: [],
        th: [],
        td: [],

        span: ["class"],
        div: ["class"],

        pre: [],
        code: [],

        // ✅ futuro embeds controlados
        iframe: ["src", "width", "height", "title", "frameborder", "allow", "allowfullscreen"],

        // ✅ Gutenberg PDF embed (como tu ejemplo)
        object: [
          "data",
          "type",
          "width",
          "height",
          "style",
          "class",
          "aria-label",
          "hidden",
          "data-wp-bind--hidden",
        ],
      },

      stripIgnoreTag: false,
      stripIgnoreTagBody: ["script", "style"],

      safeAttrValue: (tag, name, value, cssFilter) => {
        if ((name === "href" || name === "src" || name === "data") && typeof value === "string") {
          const v = value.trim()
          const lower = v.toLowerCase()

          // bloquea esquemas peligrosos
          if (lower.startsWith("javascript:")) return ""
          if (lower.startsWith("vbscript:")) return ""

          // bloquea data: por defecto (si necesitas data:image/, lo abrimos)
          if (lower.startsWith("data:")) return ""

          // restringe iframe src a youtube/vimeo
          if (tag === "iframe" && name === "src") {
            const allowedIframe =
              /^https?:\/\/(www\.)?(youtube\.com|youtu\.be|youtube-nocookie\.com|player\.vimeo\.com)\//i
            if (!allowedIframe.test(v)) return ""
          }

          // restringe object data para pdf/http(s)
          if (tag === "object" && name === "data") {
            // permitir solo http/https y preferentemente pdf
            const allowedObject = /^https?:\/\/.+/i
            if (!allowedObject.test(v)) return ""
          }
        }

        return xss.safeAttrValue(tag, name, value, cssFilter)
      },

      onIgnoreTagAttr: (tag, name, value) => {
        // Allow class and id attributes on all tags (clave para mantener estética/estructura)
        if (name === "class" || name === "id") {
          return `${name}="${xss.escapeAttrValue(value)}"`
        }
      },
    })

    // Si hay target="_blank" y no hay rel, agrega rel seguro
    const withRel = sanitized.replace(
      /<a\b([^>]*?)\btarget=(["'])_blank\2([^>]*?)>/gi,
      (match, pre, q, post) => {
        const hasRel = /\brel\s*=/.test(match)
        if (hasRel) return match
        return `<a${pre} target=${q}_blank${q}${post} rel="noopener noreferrer">`
      }
    )


    return linkifyPlainUrls(withRel)
  } catch (err) {
    console.error("[sanitizeHTML] xss failed, stripping all tags:", err)
    return html.replace(/<[^>]+>/g, "")
  }
}

/**
 * Strip all HTML tags from content
 * Use for meta descriptions, excerpts, etc.
 */
export function stripHTML(html: string): string {
  if (!html) return ""

  try {
    return xss(html, {
      whiteList: {},
      stripIgnoreTag: true,
      stripIgnoreTagBody: ["script", "style"],
    })
  } catch (err) {
    console.error("[stripHTML] xss failed, using basic strip:", err)
    return html.replace(/<[^>]+>/g, "")
  }
}

/**
 * Convierte URLs sueltas (texto plano) en <a href="...">...</a>
 * Evita tocar URLs que ya estén dentro de tags/atributos.
 */
function linkifyPlainUrls(input: string): string {
  if (!input) return input

  // Reemplaza solo URLs que están en texto, no dentro de atributos HTML.

  return input.replace(
    /(^|[\s>])((https?:\/\/)[^\s<]+)(?=$|[\s<])/g,
    (m, prefix, url) => `${prefix}<a href="${url}" target="_blank" rel="noopener noreferrer">${url}</a>`
  )
}
