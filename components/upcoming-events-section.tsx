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
      id: 2,
      title: lang === "es" ? "Camps 2026 Chile" : "Chile Camps 2026",
      date: lang === "es" ? "Junio 2026" : "June, 2026",
      time: lang === "es" ? "3 días de entremiento" : "3 days of training",
      location: "Chile",
      participants: lang === "es" ? "Edades 9-18" : "Ages 9-18",
      description:
        lang === "es"
          ? "Entrenamientos intensivos enfocados en fundamentos, tiro, manejo, defensa, trabajo físico y juego en equipo, dirigidos por un staff técnico profesional."
          : "Intensive training sessions focused on fundamentals, shooting, ball handling, defense, physical conditioning, and team play, led by a professional coaching staff.",
      featured: false,
      available: true,
      image: "/images/camp-chile-2026.jpeg",
      comingSoon: true,
    },
  ]

  const handleNavigateToCamp = () => {
    const campRoute = getTranslatedRoute("ibt-camp", lang)
    router.push(`/${lang}/${campRoute}`)
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

        <div className="flex justify-center">
          {upcomingEvents.map((event) => (
            <Card
              key={event.id}
              className="bg-black/20 backdrop-blur-sm border border-[rgba(255,255,255,0.05)] hover:bg-black/30 transition-all duration-300 hover:scale-105 relative overflow-hidden w-full max-w-md"
            >
              {event.comingSoon && (
                <div className="absolute top-8 -right-12 rotate-45 bg-gray-600 text-white px-16 py-2 text-sm font-bold shadow-lg z-10">
                  {lang === "es" ? "PRÓXIMAMENTE" : "COMING SOON"}
                </div>
              )}

              <CardHeader className="p-0">
                <div className="relative h-72 bg-gradient-to-br from-gray-700 to-gray-900 rounded-t-lg overflow-hidden">
                  {event.image ? (
                    <Image src={event.image || "/placeholder.svg"} alt={event.title} fill className="object-cover" />
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
                    onClick={handleNavigateToCamp}
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
