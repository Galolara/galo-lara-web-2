export const locales = ["es", "en"] as const
export type Locale = (typeof locales)[number]

export const defaultLocale: Locale = "es"

export const localeNames: Record<Locale, string> = {
  es: "Español",
  en: "English",
}

export const localeFlags: Record<Locale, string> = {
  es: "🇪🇸",
  en: "🇺🇸",
}

// Route translations
export const routes: Record<string, Record<Locale, string>> = {
  home: { es: "", en: "" },
  "about-me": { es: "sobre-mi", en: "about-me" },
  services: { es: "servicios", en: "services" },
  "ibt-camp": { es: "camp-ibt", en: "ibt-camp" },
  blog: { es: "blog", en: "blog" },
  // Hash routes
  events: { es: "eventos", en: "events" },
  "past-events": { es: "ultimos-eventos", en: "past-events" },
  testimonies: { es: "testimonios", en: "testimonies" },
  media: { es: "medios", en: "media" },
  contact: { es: "contacto", en: "contact" },
}
