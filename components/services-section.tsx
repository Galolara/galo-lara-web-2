"use client"

import type React from "react"

import Image from "next/image"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { themeConfig } from "@/lib/theme-config"
import type { Locale } from "@/lib/i18n/config"

interface ServicesSectionProps {
  lang: Locale
  dict: any
}

export default function ServicesSection({ lang, dict }: ServicesSectionProps) {
  const router = useRouter()

  const handleContactClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault()
    const contactRoute = lang === "es" ? `/${lang}/#contacto` : `/${lang}/#contact`
    router.push(contactRoute)
    setTimeout(() => {
      const contactId = lang === "es" ? "contacto" : "contact"
      const contactSection = document.getElementById(contactId)
      if (contactSection) {
        contactSection.scrollIntoView({ behavior: "smooth", block: "start" })
      }
    }, 100)
  }

  const handleCampClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault()
    const campRoute = lang === "es" ? `/${lang}/camp-ibt` : `/${lang}/ibt-camp`
    router.push(campRoute)
  }

  return (
    <div className={themeConfig.colors.background.dark}>
      {/* Hero Header */}
      <section className="pt-32 pb-20 text-center">
        <h1 className={`${themeConfig.typography.h1} text-[#C5A572] tracking-wider`}>{dict.servicesPage.hero.title}</h1>
      </section>

      {/* Service 1: Coach Profesional - Black with Image Left */}
      <section className={themeConfig.colors.background.dark}>
        <div className="grid lg:grid-cols-2 min-h-[500px]">
          <div className="relative h-[350px] lg:h-auto">
            <Image
              src="/images/servicios-coach.jpg"
              alt="Coach profesional de básquetbol"
              fill
              className="object-cover object-center"
            />
          </div>

          <div className="flex items-center justify-center p-8 lg:p-16">
            <div className="max-w-2xl space-y-6">
              <h2 className={`${themeConfig.typography.h2} ${themeConfig.colors.text.white}`}>
                {dict.servicesPage.coach.title}
              </h2>
              <p className={`${themeConfig.typography.h3} text-[#C5A572] leading-5`}>
                {dict.servicesPage.coach.location}
              </p>
             <div className={`${themeConfig.typography.body} ${themeConfig.colors.text.white} space-y-4`}>
             {dict.servicesPage.coach.description.map((paragraph: string, index: number) => (
             <p key={index}>{paragraph}</p>
             ))}
              </div>
              <ul className={`${themeConfig.typography.body} ${themeConfig.colors.text.white} space-y-3`}>
                {dict.servicesPage.coach.items.map((item: string, index: number) => (
                  <li key={index}>• {item}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Service 2: Reclutador Internacional - Gold Background */}
      <section className="bg-[#C5A572] min-h-[500px] flex items-center py-12">
        <div className="w-full px-8 lg:px-16">
          <h2 className={`${themeConfig.typography.h2} ${themeConfig.colors.text.dark} text-center mb-8`}>
            {dict.servicesPage.recruiter.title}
          </h2>
          <div className="grid lg:grid-cols-[1fr_auto] gap-8 items-center max-w-[95%] mx-auto">
            <div className={`${themeConfig.typography.body} ${themeConfig.colors.text.dark} space-y-4`}>
              <p className="font-semibold">{dict.servicesPage.recruiter.description}</p>
              <ul className="space-y-3 ml-6">
                {dict.servicesPage.recruiter.items.map((item: string, index: number) => (
                  <li key={index}>• {item}</li>
                ))}
              </ul>
            </div>

            <div className="flex justify-center lg:justify-end">
              <Button
                asChild
                size="lg"
                className="bg-black text-white hover:bg-black/90 px-6 py-6 text-base lg:text-lg whitespace-nowrap"
              >
                <a href="https://www.deporteyestudio.com/" target="_blank" rel="noopener noreferrer">
                  {dict.servicesPage.recruiter.button}
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Service 3: Desarrollo de Jóvenes Talentos - Black with Image Right */}
      <section className={themeConfig.colors.background.dark}>
        <div className="grid lg:grid-cols-2 min-h-[500px] gap-0">
          <div className="flex items-center justify-center p-8 lg:p-16 order-2 lg:order-1">
            <div className="max-w-2xl space-y-6">
              <h2 className={`${themeConfig.typography.h2} ${themeConfig.colors.text.white}`}>
                {dict.servicesPage.development.title}
              </h2>
              <div className={`${themeConfig.typography.body} ${themeConfig.colors.text.white} space-y-4`}>
                <p>{dict.servicesPage.development.description}</p>
                <ul className="space-y-3 ml-6">
                  {dict.servicesPage.development.items.map((item: string, index: number) => (
                    <li key={index}>• {item}</li>
                  ))}
                </ul>
                <p className="font-semibold">{dict.servicesPage.development.includes}</p>
                <ul className="space-y-3 ml-6">
                  {dict.servicesPage.development.includesItems.map((item: string, index: number) => (
                    <li key={index}>• {item}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          <div className="relative h-[350px] lg:h-full order-1 lg:order-2">
            <Image
              src="/images/servicios-desarrollo-jovenes.jpg"
              alt="Desarrollo de jóvenes talentos"
              fill
              className="object-cover object-center"
            />
          </div>
        </div>
      </section>

      {/* Service 4: Capacitación para Entrenadores - Gold Background */}
      <section className="bg-[#C5A572] min-h-[500px] flex items-center py-12">
        <div className="w-full px-8 lg:px-16 text-center">
          <h2 className={`${themeConfig.typography.h2} ${themeConfig.colors.text.dark} mb-8`}>
            {dict.servicesPage.training.title}
          </h2>
          <div
            className={`${themeConfig.typography.body} ${themeConfig.colors.text.dark} space-y-5 max-w-[95%] mx-auto`}
          >
            <p className="font-semibold">{dict.servicesPage.training.description}</p>
            <p className="font-semibold">{dict.servicesPage.training.topics}</p>
            <ul className="space-y-3 inline-block text-center">
              {dict.servicesPage.training.items.map((item: string, index: number) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Service 5: Camps - Black with Image Left */}
      <section className={themeConfig.colors.background.dark}>
        <div className="grid lg:grid-cols-2 min-h-[500px]">
          <div className="relative h-[350px] lg:h-auto">
            <Image
              src="/images/servicios-camps.jpg"
              alt="Camps en Chile y EE.UU."
              fill
              className="object-cover"
              style={{ objectPosition: "center 30%" }}
            />
          </div>

          <div className="flex items-center justify-center p-8 lg:p-16">
            <div className="w-full max-w-2xl space-y-8">
              <h2 className={`${themeConfig.typography.h2} ${themeConfig.colors.text.white}`}>
                {dict.servicesPage.camps.title}
              </h2>

              <div className={`${themeConfig.typography.body} ${themeConfig.colors.text.white} space-y-4`}>
                <p>{dict.servicesPage.camps.description}</p>
                <ul className="space-y-3 ml-6">
                  {dict.servicesPage.camps.items.map((item: string, index: number) => (
                    <li key={index}>• {item}</li>
                  ))}
                </ul>
              </div>

              <div className="flex justify-center pt-4">
                <Button
                  asChild
                  size="lg"
                  className="bg-[#C5A572] text-black hover:bg-[#B89562] px-6 py-6 text-base lg:text-lg"
                >
                  <a href="#" onClick={handleCampClick}>
                    {dict.servicesPage.camps.button}
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Service 6: Entrenamiento Personalizado - Gold Background */}
      <section className="bg-[#C5A572] min-h-[500px] flex items-center py-12">
        <div className="w-full px-8 lg:px-16">
          <h2 className={`${themeConfig.typography.h2} ${themeConfig.colors.text.dark} text-center mb-4`}>
            {dict.servicesPage.personal.title}
          </h2>
          <p className={`${themeConfig.typography.h3} ${themeConfig.colors.text.dark} text-center mb-8 font-medium`}>
            {dict.servicesPage.personal.subtitle}
          </p>

          <div className="grid lg:grid-cols-2 gap-10 items-center max-w-[95%] mx-auto">
            <div className={`${themeConfig.typography.body} ${themeConfig.colors.text.dark} space-y-4`}>
              <p className="font-semibold">{dict.servicesPage.personal.description}</p>
              <ul className="space-y-3 ml-6">
                {dict.servicesPage.personal.items.map((item: string, index: number) => (
                  <li key={index}>• {item}</li>
                ))}
              </ul>
            </div>

            <div className="relative h-[300px] lg:h-[350px]">
              <Image
                src="/images/servicios-app-spalding.png"
                alt="Spalding DNA Basketball y App"
                fill
                className="object-contain"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className={`${themeConfig.colors.background.dark} py-20 text-center`}>
        <div className="container mx-auto px-6">
          <h2 className={`${themeConfig.typography.h3} ${themeConfig.colors.text.white} mb-4`}>
            {dict.servicesPage.cta.title}
          </h2>
          <p className={`${themeConfig.colors.text.muted} ${themeConfig.typography.body} mb-8 max-w-2xl mx-auto`}>
            {dict.servicesPage.cta.description}
          </p>
          <Button asChild size="lg" className={`${themeConfig.buttons.primary} px-8 py-6 text-lg`}>
            <a href="#" onClick={handleContactClick}>
              {dict.servicesPage.cta.button}
            </a>
          </Button>
        </div>
      </section>
    </div>
  )
}
