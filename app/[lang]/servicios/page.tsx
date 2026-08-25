import Header from "@/components/header"
import Footer from "@/components/footer"
import ServicesSection from "@/components/services-section"
import type { Metadata } from "next"
import { getDictionary } from "@/lib/i18n/dictionaries"
import type { Locale } from "@/lib/i18n/config"
import { getAlternates } from "@/lib/seo/alternates"

export async function generateMetadata({ params }: { params: { lang: Locale } }): Promise<Metadata> {
  return {
    title: params.lang === "es" ? "Servicios - Galo Lara" : "Services - Galo Lara",
    description:
      params.lang === "es"
        ? "Dirección técnica y desarrollo competitivo, reclutamiento internacional, apoyo a jóvenes talentos para el sistema deportivo de EE.UU. (NCAA/NAIA) y capacitación para entrenadores."
        : "Technical coaching and competitive development, international recruiting, support for young talents joining the US sports system (NCAA/NAIA), and coach training.",
    alternates: getAlternates("services", params.lang),
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
