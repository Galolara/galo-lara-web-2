import { redirect } from "next/navigation"
import type { Locale } from "@/lib/i18n/config"

export default function IbtCampRedirect({ params }: { params: { lang: Locale } }) {
  redirect(`/${params.lang}/camps-chile`)
}
