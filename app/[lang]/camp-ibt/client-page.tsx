"use client"

import Image from "next/image"
import Link from "next/link"
import { Calendar, MapPin, Trophy, CheckCircle2 } from "lucide-react"
import { themeConfig } from "@/lib/theme-config"
import Footer from "@/components/footer"
import Header from "@/components/header"
import { JsonLd } from "@/components/json-ld"
import type { Locale } from "@/lib/i18n/config"
import { SITE_URL } from "@/lib/seo/alternates"

interface CampIBTClientPageProps {
  lang: Locale
  dict: any
}

const REGISTRATION_FORM_URL = "https://forms.gle/BmydXE2dwePuiJS5A"

const eventJsonLd = {
  "@context": "https://schema.org",
  "@type": "Event",
  name: "IBT International Basketball Camp 2027",
  startDate: "2027-01-16",
  endDate: "2027-01-25",
  eventAttendanceMode: "https://schema.org/OfflineEventAttendanceMode",
  eventStatus: "https://schema.org/EventScheduled",
  location: {
    "@type": "Place",
    name: "Orlando, Florida",
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
    price: "3100",
    priceCurrency: "USD",
    url: REGISTRATION_FORM_URL,
    availability: "https://schema.org/InStock",
  },
}

export default function CampIBTClientPage({ lang, dict }: CampIBTClientPageProps) {
  const content = {
    es: {
      hero: {
        title: "IBT International Basketball Camp – Orlando 2027",
        dates: "16 al 25 de enero de 2027",
        location: "Orlando, Florida 🇺🇸",
        tagline: "10 días de básquetbol, NBA y experiencias inolvidables",
      },
      intro: {
        text0:
          "El IBT International Basketball Camp reúne en Orlando a jóvenes jugadores de diferentes países para vivir una experiencia internacional que combina entrenamiento de alto nivel, competencia, NBA y las principales atracciones de Orlando.",
        text1:
          "Durante las mañanas, los jugadores participarán en intensas sesiones de entrenamiento dirigidas por entrenadores profesionales, trabajando técnica individual, fundamentos, toma de decisiones, intensidad y conceptos de juego.",
        text2:
          "Por las tardes comienza una experiencia diferente: conocer Orlando, compartir con jugadores de otros países y disfrutar algunas de las mejores atracciones de Florida.",
      },
      nba: {
        title: "Experiencia NBA",
        text: "El Camp 2027 incluye la asistencia a dos partidos de la NBA, con la oportunidad de vivir en directo el ambiente del mejor básquetbol del mundo.",
        games: [
          { team: "Golden State Warriors", player: "con Stephen Curry" },
          { team: "Portland Trail Blazers", player: "con Damian Lillard y Ja Morant" },
        ],
      },
      kia: {
        title: "Entrena en el Kia Center",
        text: "Uno de los momentos más especiales del camp será vivir la experiencia de entrenar en el Kia Center, casa de los Orlando Magic. Una oportunidad única para que nuestros jugadores entrenen en un escenario NBA y conozcan desde dentro el ambiente del básquetbol profesional.",
      },
      orlando: {
        title: "Orlando Experience",
        text: "El programa también incluye días de diversión y convivencia grupal en algunos de los parques temáticos, montañas rusas y atracciones más emocionantes de Orlando.",
        parks: ["Universal Orlando", "SeaWorld Orlando"],
      },
      includes: {
        title: "Todo Incluido",
        text: "Una vez que el jugador llega a Estados Unidos, el programa incluye:",
        items: [
          "Hotel",
          "Todos los traslados internos",
          "Desayuno, almuerzo y cena",
          "Entrenamientos durante el programa",
          "Experiencia de entrenamiento en Kia Center",
          "Entradas para 2 partidos NBA",
          "Entrada a Universal Orlando",
          "Entrada a SeaWorld Orlando",
          "Camiseta y short de entrenamiento",
          "Poleras oficiales para las actividades y salidas",
          "Buzo completo: pantalón + polerón",
          "Mochila oficial del Camp",
        ],
      },
      pricing: {
        title: "Inversión",
        valueLabel: "Valor Camp IBT 2027",
        value: "USD 3.100",
        note: "Pasaje aéreo no incluido.",
        chile: {
          question: "¿Viajas desde Chile?",
          text: "Puedes gestionar tu viaje con Agencia Mundo Tour, con un servicio que incluye:",
          items: ["Pasaje aéreo", "Seguro de viaje", "Asesoría para Visa", "Orientación y gestión de permisos de viaje", "Facilidades de pago - 12 cuotas sin interés (tarjetas de crédito - Cheques)"],
          tagline: "IBT se encarga de tu experiencia en Orlando. Mundo Tour te ayuda a preparar tu viaje desde Chile",
          contact: "Contacto agencia: omartinez@mundotour.cl",
        },
      },
      cta: {
        title: "10 días. Una experiencia internacional.",
        description: "Básquetbol, NBA y Orlando en un solo programa.",
        button: "Formulario de Inscripción",
        limitedSpots: "Cupos limitados",
      },
    },
    en: {
      hero: {
        title: "IBT International Basketball Camp – Orlando 2027",
        dates: "January 16–25, 2027",
        location: "Orlando, Florida 🇺🇸",
        tagline: "10 days of basketball, NBA and unforgettable experiences",
      },
      intro: {
        text0:
          "The IBT International Basketball Camp brings together young players from different countries in Orlando for an international experience that combines high-level training, competition, the NBA, and Orlando's top attractions.",
        text1:
          "In the mornings, players take part in intense training sessions led by professional coaches, working on individual technique, fundamentals, decision-making, intensity, and game concepts.",
        text2:
          "In the afternoons, a different experience begins: exploring Orlando, sharing time with players from other countries, and enjoying some of the best attractions in Florida.",
      },
      nba: {
        title: "NBA Experience",
        text: "The 2027 Camp includes attending two NBA games, with the chance to experience live the atmosphere of the best basketball in the world.",
        games: [
          { team: "Golden State Warriors", player: "with Stephen Curry" },
          { team: "Portland Trail Blazers", player: "with Damian Lillard and Ja Morant" },
        ],
      },
      kia: {
        title: "Train at the Kia Center",
        text: "One of the most special moments of the camp will be training at the Kia Center, home of the Orlando Magic. A unique opportunity for our players to train on an NBA stage and experience professional basketball from the inside.",
      },
      orlando: {
        title: "Orlando Experience",
        text: "The program also includes days of fun and group bonding at some of Orlando's theme parks, roller coasters, and most exciting attractions.",
        parks: ["Universal Orlando", "SeaWorld Orlando"],
      },
      includes: {
        title: "All Inclusive",
        text: "Once the player arrives in the United States, the program includes:",
        items: [
          "Hotel",
          "All local transportation",
          "Breakfast, lunch and dinner",
          "Training sessions throughout the program",
          "Training experience at the Kia Center",
          "Tickets for 2 NBA games",
          "Universal Orlando admission",
          "SeaWorld Orlando admission",
          "Training t-shirt and shorts",
          "Official t-shirts for activities and outings",
          "Full tracksuit: pants + jacket",
          "Official Camp backpack",
        ],
      },
      pricing: {
        title: "Investment",
        valueLabel: "IBT Camp 2027 Price",
        value: "USD $3,100",
        note: "Airfare not included.",
        chile: {
          question: "Traveling from Chile?",
          text: "You can arrange your trip with Agencia Mundo Tour, with a service that includes:",
          items: ["Airfare", "Travel insurance", "Visa assistance", "Guidance and management of travel permits", "Payment facilities - 12 interest-free installments (credit cards - checks)"],
          tagline: "IBT takes care of your experience in Orlando. Mundo Tour helps you prepare your trip from Chile",
          contact: "Agency contact: omartinez@mundotour.cl",
        },
      },
      cta: {
        title: "10 days. One international experience.",
        description: "Basketball, the NBA, and Orlando in a single program.",
        button: "Registration Form",
        limitedSpots: "Limited spots",
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
              src="/images/IBT-2027.png"
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
            <div className="flex flex-wrap justify-center gap-6 text-gray-300 mb-4">
              <span className="flex items-center gap-2">
                <Calendar className="w-4 h-4 text-[#C5A572]" />
                {t.hero.dates}
              </span>
              <span className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-[#C5A572]" />
                {t.hero.location}
              </span>
            </div>
            <p className={`${themeConfig.typography.h3} text-[#C5A572]`}>{t.hero.tagline}</p>
          </div>
        </section>

        <section className={`py-20 ${themeConfig.colors.background.dark}`}>
          <div className="container mx-auto px-4 max-w-4xl space-y-16">
            {/* Intro */}
            <div className={`${themeConfig.typography.body} text-gray-300 space-y-4`}>
              <p>{t.intro.text0}</p>
              <p>{t.intro.text1}</p>
              <p>{t.intro.text2}</p>
            </div>

            {/* NBA Experience */}
            <div>
              <h2 className={`${themeConfig.typography.h2} ${themeConfig.colors.text.white} mb-4 flex items-center gap-3`}>
                🏀 {t.nba.title}
              </h2>
              <p className="text-gray-300 mb-6">{t.nba.text}</p>
              <div className="grid md:grid-cols-2 gap-4">
                {t.nba.games.map((game, i) => (
                  <div key={i} className="bg-white/5 border border-white/10 rounded-xl p-6 flex items-start gap-3">
                    <span className="text-[#C5A572] text-xl">⭐</span>
                    <div>
                      <p className="text-white font-bold">{game.team}</p>
                      <p className="text-gray-400 text-sm">{game.player}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Kia Center */}
            <div className="bg-[#C5A572]/10 border border-[#C5A572]/30 rounded-xl p-8">
              <h2 className={`${themeConfig.typography.h2} ${themeConfig.colors.text.white} mb-4 flex items-center gap-3`}>
                🏟️ {t.kia.title}
              </h2>
              <p className="text-gray-300">{t.kia.text}</p>
            </div>

            {/* Orlando Experience */}
            <div>
              <h2 className={`${themeConfig.typography.h2} ${themeConfig.colors.text.white} mb-4`}>{t.orlando.title}</h2>
              <p className="text-gray-300 mb-6">{t.orlando.text}</p>
              <div className="grid md:grid-cols-2 gap-4">
                {t.orlando.parks.map((park, i) => (
                  <div key={i} className="bg-white/5 border border-white/10 rounded-xl p-6 text-center">
                    <p className="text-white font-semibold text-lg">{park}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Todo incluido */}
            <div>
              <h2 className={`${themeConfig.typography.h2} ${themeConfig.colors.text.white} mb-4`}>{t.includes.title}</h2>
              <p className="text-gray-300 mb-6">{t.includes.text}</p>
              <div className="grid md:grid-cols-2 gap-3">
                {t.includes.items.map((item, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-[#C5A572] flex-shrink-0 mt-0.5" />
                    <p className="text-gray-300">{item}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Inversión */}
            <div>
              <h2 className={`${themeConfig.typography.h2} ${themeConfig.colors.text.white} mb-6`}>{t.pricing.title}</h2>
              <div className="bg-white/5 border border-white/10 rounded-xl p-8 text-center mb-6">
                <p className="text-gray-400 text-sm font-semibold mb-2">{t.pricing.valueLabel}</p>
                <p className="text-4xl font-bold text-[#C5A572] mb-2">{t.pricing.value}</p>
                <p className="text-gray-400 text-sm">{t.pricing.note}</p>
              </div>
              <div className="bg-[#C5A572]/10 border border-[#C5A572]/30 rounded-xl p-8">
                <p className="text-white font-bold text-xl mb-4">{t.pricing.chile.question}</p>
                <p className="text-gray-300 mb-4">{t.pricing.chile.text}</p>
                <ul className="space-y-2 mb-6">
                  {t.pricing.chile.items.map((item, i) => (
                    <li key={i} className="flex items-start gap-3 text-gray-300">
                      <div className="w-2 h-2 bg-[#C5A572] rounded-full flex-shrink-0 mt-2" />
                      {item}
                    </li>
                  ))}
                </ul>
                <p className="text-[#C5A572] font-semibold mb-4">🏀 {t.pricing.chile.tagline}</p>
                <p className="text-gray-400 text-sm">{t.pricing.chile.contact}</p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className={`py-20 ${themeConfig.colors.background.dark} border-t border-white/10`}>
          <div className="container mx-auto px-4 text-center max-w-4xl">
            <Trophy className="w-10 h-10 text-[#C5A572] mx-auto mb-4" />
            <h2 className={`${themeConfig.typography.h2} ${themeConfig.colors.text.white} mb-4`}>{t.cta.title}</h2>
            <p className={`${themeConfig.typography.body} text-gray-300 mb-2`}>{t.cta.description}</p>
            <p className="text-[#C5A572] font-semibold mb-10">{t.cta.limitedSpots}</p>
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
