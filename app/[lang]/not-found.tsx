"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { locales, defaultLocale, type Locale } from "@/lib/i18n/config"

// not-found.tsx no recibe los params de la ruta de forma confiable en Next.js,
// así que el idioma se infiere del propio pathname en vez de depender de props.
function getLangFromPathname(pathname: string | null): Locale {
  const first = pathname?.split("/")[1]
  return (locales as readonly string[]).includes(first ?? "") ? (first as Locale) : defaultLocale
}

export default function NotFound() {
  const pathname = usePathname()
  const lang = getLangFromPathname(pathname)
  const isEs = lang === "es"

  return (
    <div className="min-h-screen bg-black flex flex-col items-center justify-center text-center px-4">
      <p className="text-[#C5A572] text-2xl font-bold mb-2">404</p>
      <h1 className="text-white text-3xl md:text-4xl font-bold mb-4">
        {isEs ? "Página no encontrada" : "Page not found"}
      </h1>
      <p className="text-gray-300 mb-8 max-w-md">
        {isEs
          ? "La página que buscás no existe o fue movida."
          : "The page you're looking for doesn't exist or was moved."}
      </p>
      <Link
        href={`/${lang}`}
        className="bg-white text-black hover:bg-gray-200 font-semibold px-6 py-3 rounded-lg transition-colors"
      >
        {isEs ? "Volver al inicio" : "Back to home"}
      </Link>
    </div>
  )
}
