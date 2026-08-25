import type { Metadata } from "next"
import CampIBTClientPage from "./client-page"
import { getDictionary } from "@/lib/i18n/dictionaries"
import type { Locale } from "@/lib/i18n/config"
import { getAlternates } from "@/lib/seo/alternates"

export async function generateMetadata({ params }: { params: { lang: Locale } }): Promise<Metadata> {
  return {
    title: params.lang === "es" ? "Camps Chile 2026 | Galo Lara" : "Chile Camps 2026 | Galo Lara",
    description:
      params.lang === "es"
        ? "Camps de Basketball 2026 en Chile. Entrenamientos intensivos dirigidos por Coach Galo Lara en Chiguayante y Santiago."
        : "Basketball Camps 2026 in Chile. Intensive training sessions led by Coach Galo Lara in Chiguayante and Santiago.",
    alternates: getAlternates("camps-chile", params.lang),
  }
}

export default async function CampsChilePage({ params }: { params: { lang: Locale } }) {
  const dict = await getDictionary(params.lang)

  return <CampIBTClientPage lang={params.lang} dict={dict} />
}
