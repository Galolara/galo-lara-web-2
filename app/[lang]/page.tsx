import Header from "@/components/header"
import HeroSection from "@/components/hero-section"
import UpcomingEventsSection from "@/components/upcoming-events-section"
// import TestimonialsSection from "@/components/testimonials-section"
import PastEventsSection from "@/components/past-events-section"
import MediaSection from "@/components/media-section"
import BlogSection from "@/components/blog-section"
import ContactSection from "@/components/contact-section"
import Footer from "@/components/footer"
import ScrollReveal from "@/components/scroll-reveal"
import { JsonLd } from "@/components/json-ld"
import type { Metadata } from "next"
import { getDictionary } from "@/lib/i18n/dictionaries"
import type { Locale } from "@/lib/i18n/config"
import { getAlternates, SITE_URL } from "@/lib/seo/alternates"

const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Galo Lara",
  jobTitle: "Basketball Coach",
  url: SITE_URL,
  sameAs: [
    "https://www.facebook.com/CoachGaloLara/",
    "https://x.com/CoachGaloLara",
    "https://www.youtube.com/@coachgalolara3141",
    "https://www.instagram.com/galolara_coach/",
    "https://www.linkedin.com/in/galolara",
  ],
}

export async function generateMetadata({ params }: { params: { lang: Locale } }): Promise<Metadata> {
  return {
    alternates: getAlternates("home", params.lang),
  }
}

export default async function Home({ params }: { params: { lang: Locale } }) {
  const dict = await getDictionary(params.lang)

  return (
    <div className="min-h-screen bg-black overflow-x-hidden">
      <JsonLd data={personJsonLd} />
      <Header lang={params.lang} dict={dict} />
      <HeroSection lang={params.lang} dict={dict} />

      <ScrollReveal>
        <UpcomingEventsSection lang={params.lang} dict={dict} />
      </ScrollReveal>

      {/* <ScrollReveal delay={100}>
        <TestimonialsSection lang={params.lang} dict={dict} />
      </ScrollReveal> */}

      <ScrollReveal delay={100}>
        <PastEventsSection lang={params.lang} dict={dict} />
      </ScrollReveal>

      <ScrollReveal delay={100}>
        <MediaSection lang={params.lang} dict={dict} />
      </ScrollReveal>

      <ScrollReveal delay={100}>
        <BlogSection lang={params.lang} dict={dict} />
      </ScrollReveal>

      <ScrollReveal delay={100}>
        <ContactSection lang={params.lang} dict={dict} />
      </ScrollReveal>

      <Footer lang={params.lang} dict={dict} />
    </div>
  )
}
