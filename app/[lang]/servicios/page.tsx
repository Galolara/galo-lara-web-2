import Header from "@/components/header"
import Footer from "@/components/footer"
import ServicesSection from "@/components/services-section"
import type { Metadata } from "next"
import { getDictionary } from "@/lib/i18n/dictionaries"
import type { Locale } from "@/lib/i18n/config"

export async function generateMetadata({ params }: { params: { lang: Locale } }): Promise<Metadata> {
  return {
    title: params.lang === "es" ? "Servicios - Galo Lara" : "Services - Galo Lara",
    description:
      params.lang === "es"
        ? "Coach profesional de básquetbol, desarrollo de talentos internacionales, reclutador, camps y capacitaciones para entrenadores."
        : "Professional basketball coach, international talent development, recruiter, camps and coach training.",
  }
}

export default async function ServiciosPage({ params }: { params: { lang: Locale } }) {
  const dict = await getDictionary(params.lang)

  return (
    <main className="min-h-screen bg-black">
      <Header lang={params.lang} dict={dict} />
      <ServicesSection lang={params.lang} dict={dict} />
      <Footer lang={params.lang} dict={dict} />
    </main>
  )
}
