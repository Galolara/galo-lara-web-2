import type { Metadata } from "next"
import CampIBTClientPage from "./client-page"
import { getDictionary } from "@/lib/i18n/dictionaries"
import type { Locale } from "@/lib/i18n/config"

export async function generateMetadata({ params }: { params: { lang: Locale } }): Promise<Metadata> {
  return {
    title: params.lang === "es" ? "Campamento IBT 2026 | Galo Lara" : "IBT Camp 2026 | Galo Lara",
    description:
      params.lang === "es"
        ? "Campamento Internacional de Basketball IBT 2026 en Orlando, Florida. Una experiencia única para jóvenes talentos."
        : "International Basketball Camp IBT 2026 in Orlando, Florida. A unique experience for young talents.",
  }
}

export default async function CampIBTPage({ params }: { params: { lang: Locale } }) {
  const dict = await getDictionary(params.lang)

  return <CampIBTClientPage lang={params.lang} dict={dict} />
}
