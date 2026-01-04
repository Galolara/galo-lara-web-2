import Header from "@/components/header"
import Footer from "@/components/footer"
import BiographyHero from "@/components/biography-hero"
import TimelineSection from "@/components/timeline-section"
import { getDictionary } from "@/lib/i18n/dictionaries"
import type { Locale } from "@/lib/i18n/config"

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
