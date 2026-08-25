import Header from "@/components/header"
import Footer from "@/components/footer"
import BiographyHero from "@/components/biography-hero"
import TimelineSection from "@/components/timeline-section"
import type { Metadata } from "next"
import { getDictionary } from "@/lib/i18n/dictionaries"
import type { Locale } from "@/lib/i18n/config"
import { getAlternates } from "@/lib/seo/alternates"

export async function generateMetadata({ params }: { params: { lang: Locale } }): Promise<Metadata> {
  return {
    title: params.lang === "es" ? "Sobre Mí - Galo Lara" : "About Me - Galo Lara",
    description:
      params.lang === "es"
        ? "Conoce la historia de Galo Lara: entrenador profesional de básquetbol con trayectoria internacional en desarrollo de talentos, camps y capacitación de entrenadores."
        : "Learn about Galo Lara's story: a professional basketball coach with international experience in talent development, camps, and coach training.",
    alternates: getAlternates("about-me", params.lang),
  }
}

export default async function AboutPage({ params }: { params: { lang: Locale } }) {
  const dict = await getDictionary(params.lang)

  return (
    <div className="min-h-screen bg-black overflow-x-hidden">
      <Header lang={params.lang} dict={dict} />
      <main className="pt-20">
        <BiographyHero lang={params.lang} dict={dict} />
        <TimelineSection lang={params.lang} dict={dict} />
      </main>
      <Footer lang={params.lang} dict={dict} />
    </div>
  )
}
