"use client"

import Image from "next/image"
import Link from "next/link"
import { Calendar, MapPin, Users, Trophy } from "lucide-react"
import { themeConfig } from "@/lib/theme-config"
import Footer from "@/components/footer"
import Header from "@/components/header"
import { JsonLd } from "@/components/json-ld"
import type { Locale } from "@/lib/i18n/config"
import { SITE_URL } from "@/lib/seo/alternates"

interface TeamChileHoopsClientPageProps {
  lang: Locale
  dict: any
}

const REGISTRATION_FORM_URL = "https://forms.gle/q2tuajjUE8AbidM58"

const eventJsonLd = {
  "@context": "https://schema.org",
  "@type": "Event",
  name: "Team Chile Hoops - Orlando 2027",
  startDate: "2027-07",
  eventAttendanceMode: "https://schema.org/OfflineEventAttendanceMode",
  eventStatus: "https://schema.org/EventScheduled",
  location: {
    "@type": "Place",
    name: "ESPN Wide World of Sports Complex, Orlando, Florida",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Orlando",
      addressRegion: "FL",
      addressCountry: "US",
    },
  },
  organizer: {
    "@type": "Person",
    name: "Galo Lara",
    url: SITE_URL,
  },
  offers: {
    "@type": "Offer",
    url: REGISTRATION_FORM_URL,
    availability: "https://schema.org/InStock",
  },
}

export default function TeamChileHoopsClientPage({ lang, dict }: TeamChileHoopsClientPageProps) {
  const content = {
    es: {
      hero: {
        title: "Team Chile Hoops – Orlando 2027 🇨🇱🇺🇸",
        subtitle: "Vive una experiencia internacional de básquetbol en Estados Unidos",
        location: "Orlando, Florida",
        dates: "Julio 2027 · Fechas por confirmar",
      },
      tournament: {
        label: "🏀 End of Summer Tournament",
        venue: "ESPN Wide World of Sports Complex",
      },
      intro: {
        text1:
          "Después de la increíble experiencia vivida en 2026, Team Chile Hoops regresa a Orlando en 2027 con una nueva oportunidad para jugadores, jugadoras, equipos y clubes que quieran vivir una experiencia internacional de básquetbol.",
        text2:
          "El programa tendrá como gran desafío deportivo la participación en el End of Summer Tournament, en Orlando, Florida, compitiendo en uno de los escenarios deportivos más reconocidos de Estados Unidos: el ESPN Wide World of Sports Complex.",
        text3:
          "Pero Team Chile Hoops es mucho más que participar en un torneo. Queremos que cada jugador viva una experiencia deportiva y personal inolvidable: entrenar, competir en Estados Unidos, enfrentar nuevos desafíos, compartir con otros jugadores y disfrutar de una experiencia única en Orlando.",
      },
      categories: {
        title: "¿Quiénes pueden participar?",
        subtitle: "Para Team Chile Hoops Orlando 2027 se conformarán equipos en las siguientes categorías:",
        items: ["U13 – Varones", "U14 – Varones", "U15 – Damas y Varones", "U16 – Damas y Varones", "U17 – Damas y Varones"],
      },
      participation: {
        title: "Formas de participar",
        individual: {
          label: "🇨🇱 Jugadores individuales",
          text: "Podrán postular para formar parte de los equipos Team Chile Hoops, que serán dirigidos por el Coach Galo Lara, entrenador con amplia experiencia en formación, alto rendimiento y básquetbol internacional en Chile y Estados Unidos.",
        },
        clubs: {
          label: "🏆 Clubes y equipos",
          text: "También podrán participar viajando con sus propios planteles, compitiendo y representando a su institución en esta experiencia internacional.",
        },
      },
      recap: {
        title: "Una experiencia que ya vivimos",
        text1:
          "En 2026 vivimos una experiencia increíble junto a jugadores que viajaron desde Chile para entrenar, competir y vivir el básquetbol en Estados Unidos.",
        text2:
          "En 2027 queremos llevar esta experiencia a un nuevo nivel y abrir la oportunidad a más jugadores, jugadoras, clubes y equipos que quieran asumir el desafío de competir internacionalmente.",
      },
      cta: {
        title: "¡Sé parte de Team Chile Hoops 2027!",
        button: "Formulario de Inscripción",
      },
    },
    en: {
      hero: {
        title: "Team Chile Hoops – Orlando 2027 🇨🇱🇺🇸",
        subtitle: "Live an international basketball experience in the United States",
        location: "Orlando, Florida",
        dates: "July 2027 · Dates to be confirmed",
      },
      tournament: {
        label: "🏀 End of Summer Tournament",
        venue: "ESPN Wide World of Sports Complex",
      },
      intro: {
        text1:
          "After the incredible experience in 2026, Team Chile Hoops returns to Orlando in 2027 with a new opportunity for players, teams, and clubs who want to live an international basketball experience.",
        text2:
          "The program's main sporting challenge will be competing in the End of Summer Tournament in Orlando, Florida, at one of the most recognized sports venues in the United States: the ESPN Wide World of Sports Complex.",
        text3:
          "But Team Chile Hoops is much more than playing in a tournament. We want every player to live an unforgettable sporting and personal experience: training, competing in the United States, facing new challenges, sharing time with other players, and enjoying a unique experience in Orlando.",
      },
      categories: {
        title: "Who can participate?",
        subtitle: "Team Chile Hoops Orlando 2027 will field teams in the following categories:",
        items: ["U13 – Boys", "U14 – Boys", "U15 – Girls and Boys", "U16 – Girls and Boys", "U17 – Girls and Boys"],
      },
      participation: {
        title: "Ways to participate",
        individual: {
          label: "🇨🇱 Individual players",
          text: "Can apply to join the Team Chile Hoops rosters, led by Coach Galo Lara, a coach with extensive experience in player development, high performance, and international basketball in Chile and the United States.",
        },
        clubs: {
          label: "🏆 Clubs and teams",
          text: "Can also take part by traveling with their own rosters, competing and representing their institution in this international experience.",
        },
      },
      recap: {
        title: "An experience we've already lived",
        text1:
          "In 2026 we had an incredible experience alongside players who traveled from Chile to train, compete, and live basketball in the United States.",
        text2:
          "In 2027 we want to take this experience to a new level and open the opportunity to more players, clubs, and teams who want to take on the challenge of competing internationally.",
      },
      cta: {
        title: "Be part of Team Chile Hoops 2027!",
        button: "Registration Form",
      },
    },
  }

  const t = content[lang]

  return (
    <>
      <JsonLd data={eventJsonLd} />
      <Header lang={lang} dict={dict} />
      <main className="min-h-screen">
        {/* Hero */}
        <section className="bg-black pt-20">
          <div className="w-full">
            <Image
              src="/images/chile-hoops-2027.png"
              alt={t.hero.title}
              width={1920}
              height={640}
              className="w-full h-auto"
              priority
              loading="eager"
            />
          </div>
          <div className="container mx-auto px-4 py-10 text-center">
            <h1 className={`${themeConfig.typography.h1} ${themeConfig.colors.text.white} mb-4`}>{t.hero.title}</h1>
            <p className={`${themeConfig.typography.h3} text-[#C5A572] mb-4`}>{t.hero.subtitle}</p>
            <div className="flex flex-wrap justify-center gap-6 text-gray-300">
              <span className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-[#C5A572]" />
                {t.hero.location}
              </span>
              <span className="flex items-center gap-2">
                <Calendar className="w-4 h-4 text-[#C5A572]" />
                {t.hero.dates}
              </span>
            </div>
          </div>
        </section>

        <section className={`py-20 ${themeConfig.colors.background.dark}`}>
          <div className="container mx-auto px-4 max-w-4xl space-y-12">
            {/* Tournament */}
            <div className="bg-[#C5A572]/10 border border-[#C5A572]/30 rounded-xl p-6 text-center">
              <p className="text-[#C5A572] text-xl font-bold mb-1">{t.tournament.label}</p>
              <p className="text-white text-2xl font-bold">{t.tournament.venue}</p>
            </div>

            {/* Intro */}
            <div className={`${themeConfig.typography.body} text-gray-300 space-y-4`}>
              <p>{t.intro.text1}</p>
              <p>{t.intro.text2}</p>
              <p>{t.intro.text3}</p>
            </div>

            {/* Categorías */}
            <div>
              <h2 className={`${themeConfig.typography.h2} ${themeConfig.colors.text.white} mb-3`}>{t.categories.title}</h2>
              <p className="text-gray-300 mb-6">{t.categories.subtitle}</p>
              <div className="grid md:grid-cols-2 gap-4">
                {t.categories.items.map((item, i) => (
                  <div key={i} className="bg-white/5 border border-white/10 rounded-xl p-6 flex items-center gap-4">
                    <Users className="w-8 h-8 text-[#C5A572] flex-shrink-0" />
                    <p className="text-white text-lg font-semibold">{item}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Formas de participar */}
            <div>
              <h2 className={`${themeConfig.typography.h2} ${themeConfig.colors.text.white} mb-6`}>{t.participation.title}</h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white/5 border border-white/10 rounded-xl p-6">
                  <p className="text-white font-bold text-lg mb-2">{t.participation.individual.label}</p>
                  <p className="text-gray-300 text-sm">{t.participation.individual.text}</p>
                </div>
                <div className="bg-white/5 border border-white/10 rounded-xl p-6">
                  <p className="text-white font-bold text-lg mb-2">{t.participation.clubs.label}</p>
                  <p className="text-gray-300 text-sm">{t.participation.clubs.text}</p>
                </div>
              </div>
            </div>

            {/* Recap 2026 */}
            <div className="bg-white/5 border border-white/10 rounded-xl p-8">
              <h2 className={`${themeConfig.typography.h2} ${themeConfig.colors.text.white} mb-4`}>{t.recap.title}</h2>
              <div className="text-gray-300 space-y-3">
                <p>{t.recap.text1}</p>
                <p>{t.recap.text2}</p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className={`py-20 ${themeConfig.colors.background.dark} border-t border-white/10`}>
          <div className="container mx-auto px-4 text-center max-w-4xl">
            <Trophy className="w-10 h-10 text-[#C5A572] mx-auto mb-4" />
            <h2 className={`${themeConfig.typography.h2} ${themeConfig.colors.text.white} mb-10`}>{t.cta.title}</h2>
            <Link
              href={REGISTRATION_FORM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-[#C5A572] text-black hover:bg-[#B8956A] font-bold px-10 py-4 text-lg rounded-lg transition-all duration-300 transform hover:scale-105"
            >
              {t.cta.button}
            </Link>
          </div>
        </section>

        <Footer lang={lang} dict={dict} />
      </main>
    </>
  )
}
