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
import { getDictionary } from "@/lib/i18n/dictionaries"
import type { Locale } from "@/lib/i18n/config"

export default async function Home({ params }: { params: { lang: Locale } }) {
  const dict = await getDictionary(params.lang)

  return (
    <div className="min-h-screen bg-black overflow-x-hidden">
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
