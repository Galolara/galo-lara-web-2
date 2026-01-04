import { locales, defaultLocale, type Locale } from "./config"

export function getLocaleFromParams(params: { lang?: string }): Locale {
  const lang = params.lang
  if (lang && locales.includes(lang as Locale)) {
    return lang as Locale
  }
  return defaultLocale
}
