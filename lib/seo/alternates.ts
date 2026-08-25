import { locales, type Locale } from "@/lib/i18n/config"
import { getTranslatedRoute } from "@/lib/i18n/get-translated-route"

export const SITE_URL = "https://www.galolara.cl"

/**
 * Arma canonical + hreflang para una routeKey de lib/i18n/config, apuntando
 * siempre al slug correcto por idioma (evita que /es/about-me o /en/sobre-mi
 * queden como URLs "sueltas" sin canonical hacia la versión real).
 */
export function getAlternates(routeKey: string, currentLang: Locale) {
  const languages: Record<string, string> = {}

  for (const locale of locales) {
    const slug = getTranslatedRoute(routeKey, locale)
    const path = slug ? `/${locale}/${slug}` : `/${locale}`
    languages[locale] = `${SITE_URL}${path}`
  }

  return {
    canonical: languages[currentLang],
    languages,
  }
}
