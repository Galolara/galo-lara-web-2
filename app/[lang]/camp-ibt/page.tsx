import type { Metadata } from "next"
import CampIBTClientPage from "./client-page"
import { getDictionary } from "@/lib/i18n/dictionaries"
import type { Locale } from "@/lib/i18n/config"

export async function generateMetadata({ params }: { params: { lang: Locale } }): Promise<Metadata> {
  return {
    title:
      params.lang === "es"
        ? "IBT International Basketball Camp 2027 | Galo Lara"
        : "IBT International Basketball Camp 2027 | Galo Lara",
    description:
      params.lang === "es"
        ? "IBT International Basketball Camp - Orlando 2027. 10 días de básquetbol, NBA y experiencias inolvidables. 16 al 25 de enero de 2027."
        : "IBT International Basketball Camp - Orlando 2027. 10 days of basketball, NBA and unforgettable experiences. January 16-25, 2027.",
  }
}

export default async function CampIBTPage({ params }: { params: { lang: Locale } }) {
  const dict = await getDictionary(params.lang)

  return <CampIBTClientPage lang={params.lang} dict={dict} />
}
