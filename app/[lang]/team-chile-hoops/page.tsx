import type { Metadata } from "next"
import TeamChileHoopsClientPage from "./client-page"
import { getDictionary } from "@/lib/i18n/dictionaries"
import type { Locale } from "@/lib/i18n/config"
import { getAlternates } from "@/lib/seo/alternates"

export async function generateMetadata({ params }: { params: { lang: Locale } }): Promise<Metadata> {
  return {
    title: params.lang === "es" ? "Team Chile Hoops - Orlando 2027 | Galo Lara" : "Team Chile Hoops - Orlando 2027 | Galo Lara",
    description:
      params.lang === "es"
        ? "Team Chile Hoops - Orlando 2027. End of Summer Tournament en el ESPN Wide World of Sports Complex. Categorías U13 a U17."
        : "Team Chile Hoops - Orlando 2027. End of Summer Tournament at the ESPN Wide World of Sports Complex. U13 to U17 categories.",
    alternates: getAlternates("team-chile-hoops", params.lang),
  }
}

export default async function TeamChileHoopsPage({ params }: { params: { lang: Locale } }) {
  const dict = await getDictionary(params.lang)

  return <TeamChileHoopsClientPage lang={params.lang} dict={dict} />
}
