"use client"

import { Calendar, MapPin, Users, ArrowRight, Clock } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { useRouter } from "next/navigation"
import Image from "next/image"
import type { Locale } from "@/lib/i18n/config"
import { getTranslatedRoute } from "@/lib/i18n/get-translated-route"

interface UpcomingEventsSectionProps {
  lang: Locale
  dict: any
}

export default function UpcomingEventsSection({ lang, dict }: UpcomingEventsSectionProps) {
  const router = useRouter()

  const upcomingEvents = [
    {
      id: 1,
      title: "IBT International Basketball Camp 2027",
      date: lang === "es" ? "16 al 25 de Enero 2027" : "January 16-25, 2027",
      time:
        lang === "es"
          ? "10 días de básquetbol, NBA y experiencias inolvidables"
          : "10 days of basketball, NBA and unforgettable experiences",
      location: "Orlando, Florida, USA",
      participants: lang === "es" ? "13 a 18 años" : "13 to 18 years",
      description:
        lang === "es"
          ? "Entrenamiento de alto nivel, partidos NBA, entrenamiento en el Kia Center (cancha de los Magic) y parques temáticos: Universal y SeaWorld."
          : "High-level training, NBA games, training at the Kia Center (Magic's home court), and theme parks: Universal and SeaWorld.",
      featured: true,
      available: true,
      image: "/images/IBT-banner-2027.png",
      badge: {
        text: lang === "es" ? "Inscripciones Abiertas" : "Enrollment Open",
        color: "bg-green-600",
      },
      route: "camp-ibt",
      contain: false,
    },
    {
      id: 2,
      title: "Team Chile Hoops - Orlando 2027",
      date: lang === "es" ? "Julio 2027 (fechas por confirmar)" : "July 2027 (dates TBC)",
      time: lang === "es" ? "End of Summer Tournament" : "End of Summer Tournament",
      location: "Orlando, Florida, USA",
      participants: lang === "es" ? "13 a 17 años" : "13 to 17 years",
      description:
        lang === "es"
          ? "Competencia internacional en el ESPN Wide World of Sports Complex. Equipos individuales y clubes en categorías U13 a U17."
          : "International competition at the ESPN Wide World of Sports Complex. Individual teams and clubs in U13 to U17 categories.",
      featured: false,
      available: true,
      image: "/images/chile-hoops-2027.png",
      badge: {
        text: lang === "es" ? "Próximamente" : "Coming Soon",
        color: "bg-gray-500",
      },
      route: "team-chile-hoops",
      contain: false,
    },
  ]

  const handleNavigate = (route: string) => {
    const translatedRoute = getTranslatedRoute(route, lang)
    router.push(`/${lang}/${translatedRoute}`)
    window.scrollTo({ top: 0, behavior: "instant" })
  }

  const eventsHash = getTranslatedRoute("events", lang)

  return (
    <section id={eventsHash} className="py-20 bg-zinc-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">{dict.upcomingEvents.title}</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">{dict.upcomingEvents.subtitle}</p>
        </div>

        <div className="flex flex-wrap justify-center gap-8">
          {upcomingEvents.map((event) => (
            <Card
              key={event.id}
              className={`bg-black/20 backdrop-blur-sm hover:bg-black/30 transition-all duration-300 hover:scale-105 relative overflow-hidden w-full max-w-md p-0 ${
                event.featured
                  ? "border-2 border-[#C5A572] shadow-[0_0_30px_rgba(197,165,114,0.3)]"
                  : "border border-[rgba(255,255,255,0.05)]"
              }`}
            >
              {event.badge && (
                <div
                  className={`absolute top-10 -right-10 w-44 rotate-45 ${event.badge.color} text-white py-1.5 text-[11px] font-bold shadow-lg z-10 text-center leading-tight`}
                >
                  {event.badge.text}
                </div>
              )}

              <CardHeader className="p-0 -mt-[1px]">
                <div className="relative h-72 overflow-hidden">
                  {event.image ? (
                    <Image src={event.image || "/placeholder.svg"} alt={event.title} fill className={event.contain ? "object-contain" : "object-cover object-top"} />
                  ) : (
                    <div className="absolute inset-0 bg-black/20" />
                  )}
                </div>
              </CardHeader>

              <CardContent className="p-6">
                <CardTitle className="text-xl font-bold text-white mb-3">{event.title}</CardTitle>

                <p className="text-gray-300 mb-4 text-sm leading-relaxed">{event.description}</p>

                <div className="space-y-2 mb-6">
                  <div className="flex items-center text-gray-400 text-sm">
                    <Calendar className="h-4 w-4 mr-2" />
                    {event.date}
                  </div>
                  <div className="flex items-center text-gray-400 text-sm">
                    <Clock className="h-4 w-4 mr-2" />
                    {event.time}
                  </div>
                  <div className="flex items-center text-gray-400 text-sm">
                    <MapPin className="h-4 w-4 mr-2" />
                    {event.location}
                  </div>
                  <div className="flex items-center text-gray-400 text-sm">
                    <Users className="h-4 w-4 mr-2" />
                    {event.participants}
                  </div>
                </div>

                {event.available ? (
                  <Button
                    onClick={() => handleNavigate(event.route)}
                    className="w-full bg-white text-black hover:bg-gray-200 font-semibold"
                  >
                    {lang === "es" ? "Conoce más información" : "Learn more"}
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                ) : (
                  <Button
                    disabled
                    className="w-full bg-gray-500 text-gray-300 cursor-not-allowed font-semibold hover:bg-gray-500"
                  >
                    {lang === "es" ? "Próximamente" : "Coming soon"}
                  </Button>
                )}
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
