import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "../globals.css"
import { locales, type Locale } from "@/lib/i18n/config"
import { getDictionary } from "@/lib/i18n/dictionaries"

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
})

export async function generateStaticParams() {
  return locales.map((lang) => ({ lang }))
}

export async function generateMetadata({ params }: { params: { lang: Locale } }): Promise<Metadata> {
  const dict = await getDictionary(params.lang)

  return {
    title: params.lang === "es" ? "Galo Lara - Entrenador de Baloncesto" : "Galo Lara - Basketball Coach",
    description:
      params.lang === "es"
        ? "Coach profesional de básquetbol, desarrollo de talentos internacionales, reclutador, camps y capacitaciones para entrenadores."
        : "Professional basketball coach, international talent development, recruiter, camps and coach training.",
    generator: "v0.app",
    icons: {
      icon: [
        {
          url: "/favicon.png",
          type: "image/png",
        },
      ],
      apple: "/apple-icon.png",
    },
  }
}

export default function RootLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode
  params: { lang: Locale }
}>) {
  return (
    <html lang={params.lang} className={inter.variable}>
      <body className="font-sans antialiased">
        {children}
        <Analytics />
      </body>
    </html>
  )
}
