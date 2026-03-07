"use client"

import Image from "next/image"
import Link from "next/link"
import { Calendar, MapPin, Users, Trophy, Phone } from "lucide-react"
import { themeConfig } from "@/lib/theme-config"
import Footer from "@/components/footer"
import Header from "@/components/header"
import type { Locale } from "@/lib/i18n/config"

interface TeamChileOrlandoClientPageProps {
  lang: Locale
  dict: any
}

export default function TeamChileOrlandoClientPage({ lang, dict }: TeamChileOrlandoClientPageProps) {
  const content = {
    es: {
      hero: {
        location: "Orlando, Florida, USA",
        dates: "18 al 28 de julio",
      },
      tournament: {
        label: "🏀 Torneo ESPN",
        venue: "Wide World of Sports Complex",
        tournamentDates: "24, 25 y 26 de julio",
      },
      intro: {
        text: "Coach Galo Lara busca 12 jugadores categoría U16 y 12 jugadores categoría U17 para formar el Team Chile que participará en un torneo internacional de basketball en Orlando, Florida, USA.",
      },
      categories: {
        title: "CATEGORÍAS",
        items: ["U16 — 12 jugadores", "U17 — 12 jugadores"],
      },
      includes: {
        title: "¿QUÉ INCLUYE EL PROGRAMA?",
        items: [
          "Entrenamientos dirigidos por Coach Galo Lara",
          "Partidos de preparación",
          "Participación oficial en Torneo ESPN",
          "Evaluación técnica individual",
          "Indumentaria oficial de juego",
          "Alojamiento en Orlando",
          "Alimentación completa",
          "Traslados (aeropuerto – entrenamientos – torneo)",
          "Coordinación y supervisión permanente",
        ],
      },
      pricing: {
        title: "INVERSIÓN",
        plan1: {
          name: "Plan Deportivo",
          description: "Todo incluido sin pasaje aéreo",
          price: "USD 2.100",
        },
        plan2: {
          name: "Plan Agencia Mundo Tour",
          description: "Todo incluido con pasaje aéreo",
          price: "USD 3.350",
          note: "Forma de pago agencia (hasta 12 cuotas sin interés)",
        },
      },
      objectives: {
        title: "OBJETIVO DEL PROGRAMA",
        items: [
          "Competir a nivel internacional",
          "Vivir experiencia USA",
          "Exposición para futuras oportunidades académicas y deportivas",
        ],
      },
      confirmation: {
        title: "CONFIRMACIÓN DE CUPO",
        items: ["Los cupos son limitados", "Confirmación con reserva inicial de 500 USD"],
      },
      cta: {
        title: "¡Asegura tu cupo ahora!",
        description: "Los cupos son limitados. Contacta directamente al Coach Galo Lara para reservar tu lugar en el Team Chile.",
        button: "Contactar por WhatsApp",
      },
    },
    en: {
      hero: {
        location: "Orlando, Florida, USA",
        dates: "July 18 to 28",
      },
      tournament: {
        label: "🏀 ESPN Tournament",
        venue: "Wide World of Sports Complex",
        tournamentDates: "July 24, 25 and 26",
      },
      intro: {
        text: "Coach Galo Lara is looking for 12 U16 players and 12 U17 players to form Team Chile, which will compete in an international basketball tournament in Orlando, Florida, USA.",
      },
      categories: {
        title: "CATEGORIES",
        items: ["U16 — 12 players", "U17 — 12 players"],
      },
      includes: {
        title: "WHAT DOES THE PROGRAM INCLUDE?",
        items: [
          "Training sessions led by Coach Galo Lara",
          "Preparation games",
          "Official participation in ESPN Tournament",
          "Individual technical evaluation",
          "Official game uniform",
          "Accommodation in Orlando",
          "Full meals",
          "Transportation (airport – training – tournament)",
          "Permanent coordination and supervision",
        ],
      },
      pricing: {
        title: "INVESTMENT",
        plan1: {
          name: "Sports Plan",
          description: "All inclusive without airfare",
          price: "USD 2,100",
        },
        plan2: {
          name: "Mundo Tour Agency Plan",
          description: "All inclusive with airfare",
          price: "USD 3,350",
          note: "Agency payment plan (up to 12 interest-free installments)",
        },
      },
      objectives: {
        title: "PROGRAM OBJECTIVES",
        items: [
          "Compete at an international level",
          "Live the USA experience",
          "Exposure for future academic and athletic opportunities",
        ],
      },
      confirmation: {
        title: "SPOT CONFIRMATION",
        items: ["Spots are limited", "Confirmation with initial deposit of USD 500"],
      },
      cta: {
        title: "Secure your spot now!",
        description: "Spots are limited. Contact Coach Galo Lara directly to reserve your place on Team Chile.",
        button: "Contact via WhatsApp",
      },
    },
  }

  const t = content[lang]

  return (
    <>
      <Header lang={lang} dict={dict} />
      <main className="min-h-screen">

        {/* Hero — Banner con título incluido */}
        <section className="bg-black">
          <div className="w-full">
            <Image
              src="/images/banner-torneo.png"
              alt="Team Chile Orlando 2026 - Summer Tournament"
              width={1080}
              height={1080}
              className="w-full h-auto"
              priority
              loading="eager"
            />
          </div>
          <div className="container mx-auto px-4 py-8 text-center">
            <div className="flex flex-wrap justify-center gap-6 text-gray-300">
              <span className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-[#C5A572]" />{t.hero.location}
              </span>
              <span className="flex items-center gap-2">
                <Calendar className="w-4 h-4 text-[#C5A572]" />{t.hero.dates}
              </span>
            </div>
          </div>
        </section>

        {/* Contenido principal */}
        <section className={`py-20 ${themeConfig.colors.background.dark}`}>
          <div className="container mx-auto px-4 max-w-4xl">
            <div className="space-y-12">

              {/* Torneo ESPN */}
              <div className="bg-[#C5A572]/10 border border-[#C5A572]/30 rounded-xl p-6 text-center">
                <p className="text-[#C5A572] text-xl font-bold mb-1">{t.tournament.label}</p>
                <p className="text-white text-2xl font-bold">{t.tournament.venue}</p>
                <p className="text-gray-300 mt-2 flex items-center justify-center gap-2">
                  <Calendar className="w-4 h-4 text-[#C5A572]" />
                  {t.tournament.tournamentDates}
                </p>
              </div>

              {/* Intro */}
              <div className="bg-white/5 border border-white/10 rounded-xl p-6">
                <p className={`${themeConfig.typography.body} text-gray-200 leading-relaxed text-center`}>{t.intro.text}</p>
              </div>

              {/* Categorías */}
              <div>
                <h2 className={`${themeConfig.typography.h2} ${themeConfig.colors.text.white} mb-6`}>{t.categories.title}</h2>
                <div className="grid md:grid-cols-2 gap-4">
                  {t.categories.items.map((item, i) => (
                    <div key={i} className="bg-white/5 border border-white/10 rounded-xl p-6 flex items-center gap-4">
                      <Users className="w-8 h-8 text-[#C5A572] flex-shrink-0" />
                      <p className="text-white text-lg font-semibold">{item}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Qué incluye */}
              <div>
                <h2 className={`${themeConfig.typography.h2} ${themeConfig.colors.text.white} mb-6`}>{t.includes.title}</h2>
                <div className="grid md:grid-cols-2 gap-3">
                  {t.includes.items.map((item, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-[#C5A572] rounded-full flex-shrink-0 mt-2" />
                      <p className="text-gray-300">{item}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Inversión */}
              <div>
                <h2 className={`${themeConfig.typography.h2} ${themeConfig.colors.text.white} mb-6`}>{t.pricing.title}</h2>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="bg-white/5 border border-white/10 rounded-xl p-6">
                    <p className="text-white font-bold text-lg mb-2">{t.pricing.plan1.name}</p>
                    <p className="text-gray-400 text-sm mb-4">{t.pricing.plan1.description}</p>
                    <p className="text-4xl font-bold text-[#C5A572]">{t.pricing.plan1.price}</p>
                  </div>
                  <div className="bg-[#C5A572]/10 border border-[#C5A572]/30 rounded-xl p-6">
                    <p className="text-white font-bold text-lg mb-2">{t.pricing.plan2.name}</p>
                    <p className="text-gray-400 text-sm mb-2">{t.pricing.plan2.description}</p>
                    <p className="text-4xl font-bold text-[#C5A572] mb-3">{t.pricing.plan2.price}</p>
                    <p className="text-gray-400 text-xs italic">{t.pricing.plan2.note}</p>
                  </div>
                </div>
              </div>

              {/* Objetivos */}
              <div>
                <h2 className={`${themeConfig.typography.h2} ${themeConfig.colors.text.white} mb-6`}>{t.objectives.title}</h2>
                <div className="space-y-3">
                  {t.objectives.items.map((item, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <Trophy className="w-5 h-5 text-[#C5A572] flex-shrink-0 mt-0.5" />
                      <p className="text-gray-300">{item}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Confirmación de cupo */}
              <div className="bg-white/5 border border-white/10 rounded-xl p-6">
                <h3 className="text-white font-bold text-lg mb-4">{t.confirmation.title}</h3>
                <div className="space-y-2">
                  {t.confirmation.items.map((item, i) => (
                    <div key={i} className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-[#C5A572] rounded-full flex-shrink-0" />
                      <p className="text-gray-300">{item}</p>
                    </div>
                  ))}
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* CTA */}
        <section className={`py-20 ${themeConfig.colors.background.dark} border-t border-white/10`}>
          <div className="container mx-auto px-4 text-center max-w-4xl">
            <h2 className={`${themeConfig.typography.h2} ${themeConfig.colors.text.white} mb-6`}>{t.cta.title}</h2>
            <p className={`${themeConfig.typography.body} text-gray-300 mb-10 max-w-2xl mx-auto`}>{t.cta.description}</p>
            <Link
              href="https://wa.me/56999994553"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-[#C5A572] text-black hover:bg-[#B8956A] font-bold px-10 py-4 text-lg rounded-lg transition-all duration-300 transform hover:scale-105"
            >
              <Phone className="w-5 h-5" />
              {t.cta.button}
            </Link>
          </div>
        </section>

        <Footer lang={lang} dict={dict} />
      </main>
    </>
  )
}
