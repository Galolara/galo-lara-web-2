import type { Metadata } from "next"
import TeamChileOrlandoClientPage from "./client-page"
import { getDictionary } from "@/lib/i18n/dictionaries"
import type { Locale } from "@/lib/i18n/config"

export async function generateMetadata({ params }: { params: { lang: Locale } }): Promise<Metadata> {
  return {
    title: params.lang === "es" ? "Team Chile Orlando 2026 | Galo Lara" : "Team Chile Orlando 2026 | Galo Lara",
    description:
      params.lang === "es"
        ? "Team Chile – Summer Tournament en Orlando, Florida. Torneo ESPN Wide World of Sports, 18-28 de julio 2026. Categorías U16 y U17."
        : "Team Chile – Summer Tournament in Orlando, Florida. ESPN Wide World of Sports Tournament, July 18-28, 2026. U16 and U17 categories.",
  }
}

export default async function TeamChileOrlandoPage({ params }: { params: { lang: Locale } }) {
  const dict = await getDictionary(params.lang)

  return <TeamChileOrlandoClientPage lang={params.lang} dict={dict} />
}
