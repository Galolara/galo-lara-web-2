import { routes, type Locale } from "./config"

export function getTranslatedRoute(routeKey: string, locale: Locale): string {
  return routes[routeKey]?.[locale] || routeKey
}

export function getRouteKey(path: string, locale: Locale): string | null {
  for (const [key, translations] of Object.entries(routes)) {
    if (translations[locale] === path) {
      return key
    }
  }
  return null
}
