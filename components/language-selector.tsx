"use client"

import { useState, useRef, useEffect } from "react"
import { useRouter, usePathname } from "next/navigation"
import { locales, localeNames, type Locale } from "@/lib/i18n/config"
import { getRouteKey, getTranslatedRoute } from "@/lib/i18n/get-translated-route"
import { ChevronDown } from "lucide-react"

interface LanguageSelectorProps {
  currentLang: Locale
}

export default function LanguageSelector({ currentLang }: LanguageSelectorProps) {
  const [isOpen, setIsOpen] = useState(false)
  const router = useRouter()
  const pathname = usePathname()
  const dropdownRef = useRef<HTMLDivElement>(null)

  const getFlagEmoji = (locale: Locale) => {
    return locale === "es" ? "🇪🇸" : "🇺🇸"
  }

  const switchLanguage = (newLang: Locale) => {
    if (newLang === currentLang) {
      setIsOpen(false)
      return
    }

    // Remove current lang prefix
    const pathWithoutLang = pathname.replace(`/${currentLang}`, "") || "/"

    // Extract the route name without hash
    const pathParts = pathWithoutLang.split("#")
    const routePath = pathParts[0] === "/" ? "" : pathParts[0].replace("/", "")
    const hash = pathParts[1] ? `#${pathParts[1]}` : ""

    // Get the route key and translate it
    let newPath = `/${newLang}`

    if (routePath) {
      const routeKey = getRouteKey(routePath, currentLang)
      if (routeKey) {
        const translatedRoute = getTranslatedRoute(routeKey, newLang)
        if (translatedRoute) {
          newPath += `/${translatedRoute}`
        }
      } else {
        // If route key not found, keep the same path
        newPath += `/${routePath}`
      }
    }

    newPath += hash

    router.push(newPath)
    setIsOpen(false)
  }

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false)
      }
    }

    document.addEventListener("mousedown", handleClickOutside)
    return () => document.removeEventListener("mousedown", handleClickOutside)
  }, [])

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 px-3 py-2 rounded-lg bg-white/5 hover:bg-white/10 transition-colors text-white"
      >
        <span className="text-lg">{getFlagEmoji(currentLang)}</span>
        <span className="font-medium">{localeNames[currentLang]}</span>
        <ChevronDown className={`w-4 h-4 transition-transform ${isOpen ? "rotate-180" : ""}`} />
      </button>

      {isOpen && (
        <div className="absolute top-full mt-2 right-0 bg-black/90 backdrop-blur-sm border border-[rgba(255,255,255,0.05)] rounded-lg overflow-hidden shadow-lg min-w-[160px] z-50">
          {locales.map((locale) => (
            <button
              key={locale}
              onClick={() => switchLanguage(locale)}
              className={`w-full flex items-center gap-2 px-4 py-3 transition-colors ${
                locale === currentLang ? "bg-[#C5A572]/20 text-[#C5A572]" : "text-white hover:bg-[#C5A572]/10"
              }`}
            >
              <span className="text-lg">{getFlagEmoji(locale)}</span>
              <span className="font-medium">{localeNames[locale]}</span>
            </button>
          ))}
        </div>
      )}
    </div>
  )
}
