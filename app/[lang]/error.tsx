"use client"

import { useEffect } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { locales, defaultLocale, type Locale } from "@/lib/i18n/config"

function getLangFromPathname(pathname: string | null): Locale {
  const first = pathname?.split("/")[1]
  return (locales as readonly string[]).includes(first ?? "") ? (first as Locale) : defaultLocale
}

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  const pathname = usePathname()
  const lang = getLangFromPathname(pathname)
  const isEs = lang === "es"

  useEffect(() => {
    if (process.env.NODE_ENV === "development") {
      console.error(error)
    }
  }, [error])

  return (
    <div className="min-h-screen bg-black flex flex-col items-center justify-center text-center px-4">
      <h1 className="text-white text-3xl md:text-4xl font-bold mb-4">
        {isEs ? "Algo salió mal" : "Something went wrong"}
      </h1>
      <p className="text-gray-300 mb-8 max-w-md">
        {isEs
          ? "Ocurrió un error inesperado. Podés intentar de nuevo o volver al inicio."
          : "An unexpected error occurred. You can try again or go back home."}
      </p>
      <div className="flex gap-4">
        <button
          onClick={() => reset()}
          className="bg-white text-black hover:bg-gray-200 font-semibold px-6 py-3 rounded-lg transition-colors"
        >
          {isEs ? "Reintentar" : "Try again"}
        </button>
        <Link
          href={`/${lang}`}
          className="border border-white/20 text-white hover:bg-white/10 font-semibold px-6 py-3 rounded-lg transition-colors"
        >
          {isEs ? "Volver al inicio" : "Back to home"}
        </Link>
      </div>
    </div>
  )
}
