"use client"

import { Calendar, MapPin, Users } from "lucide-react"
import Image from "next/image"
import type { Locale } from "@/lib/i18n/config"
import { useCountUp } from "@/hooks/use-count-up"

interface PastEventsSectionProps {
  lang: Locale
  dict: any
}

export default function PastEventsSection({ lang, dict }: PastEventsSectionProps) {
  const eventsCounter = useCountUp({ end: 35, duration: 2000, prefix: "+" })
  const athletesCounter = useCountUp({ end: 5000, duration: 2500, prefix: "+" })
  const citiesCounter = useCountUp({ end: 10, duration: 1800, prefix: "+" })

  const pastEvents = [
    {
      id: 1,
      title: "Training days",
      date: lang === "es" ? "19 y  20 Julio 2025" : "July 19-20, 2025",
      location: lang === "es" ? "La Serena, Chile" : "La Serena, Chile",
      participants: "+120",
      highlights:
        lang === "es"
          ? ["Técnicas avanzadas", "Defensa", "Condición física"]
          : ["Advanced techniques", "Defense", "Physical conditioning"],
    },
    {
      id: 2,
      title: lang === "es" ? "Torneo talento andino 2025" : "Andean Talent Tournament 2025",
      date: lang === "es" ? "3,4,5 y 6 Julio 2025" : "July 3-6, 2025",
      location: lang === "es" ? "Los Andes, Chile" : "Los Andes, Chile",
      participants: "100",
      highlights:
        lang === "es"
          ? ["Fundamentos técnicos", "Habilidades individuales", "Disciplina y trabajo en equipo"]
          : ["Technical fundamentals", "Individual skills", "Discipline and teamwork"],
    },
    {
      id: 3,
      title: "Camp Stadio Italiano 2025",
      date: lang === "es" ? "26,27 y 28 Junio 2025" : "June 26-28, 2025",
      location: "Santiago, Chile",
      participants: "+120",
      highlights:
        lang === "es"
          ? ["Técnicas avanzadas", "Defensa", "Condición física"]
          : ["Advanced techniques", "Defense", "Physical conditioning"],
    },
    {
      id: 4,
      title: "Camp Estadio Español 2025",
      date: lang === "es" ? "20,21 y 22 Junio 2025" : "June 20-22, 2025",
      location: "Chiguayante, Chile",
      participants: "100",
      highlights:
        lang === "es"
          ? ["Fundamentos técnicos", "Habilidades individuales", "Disciplina y trabajo en equipo"]
          : ["Technical fundamentals", "Individual skills", "Discipline and teamwork"],
    },
  ]

  const pastEventsHash = lang === "es" ? "ultimos-eventos" : "past-events"

  return (
    <section id={pastEventsHash} className="py-20 bg-black">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">{dict.pastEvents.title}</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">{dict.pastEvents.subtitle}</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {pastEvents.map((event) => (
            <div
              key={event.id}
              className="bg-zinc-900/50 border border-[rgba(255,255,255,0.03)] rounded-2xl overflow-hidden hover:bg-zinc-800/50 transition-all duration-300 hover:scale-105"
            >
              {event.id === 1 ? (
                <div className="relative h-48 bg-gradient-to-br from-gray-700 to-gray-900">
                  <Image
                    src="/images/training-days-laserena.jpg"
                    alt="Training days La Serena 2025"
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-black/20" />
                </div>
              ) : event.id === 2 ? (
                <div className="relative h-48 bg-gradient-to-br from-gray-700 to-gray-900">
                  <Image
                    src="/images/torneo-talento-andino-2025.jpg"
                    alt="Torneo Talento Andino 2025"
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-black/20" />
                </div>
              ) : event.id === 3 ? (
                <div className="relative h-48 bg-gradient-to-br from-gray-700 to-gray-900">
                  <Image
                    src="/images/camp-stadio-italiano.jpeg"
                    alt="Camp Galo Lara Stadio Italiano 2025"
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-black/20" />
                </div>
              ) : event.id === 4 ? (
                <div className="relative h-48 bg-gradient-to-br from-gray-700 to-gray-900">
                  <Image
                    src="/images/camp-estadio-espanol.jpeg"
                    alt="Camp Estadio Español 2025"
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-black/20" />
                </div>
              ) : (
                <div className="relative h-48 bg-gradient-to-br from-gray-700 to-gray-900">
                  <div className="absolute inset-0 bg-black/20" />
                </div>
              )}

              <div className="p-6">
                <h3 className="text-lg font-bold text-white mb-2">{event.title}</h3>

                <div className="space-y-1 mb-4">
                  <div className="flex items-center text-gray-400 text-sm">
                    <Calendar className="h-3 w-3 mr-2" />
                    {event.date}
                  </div>
                  <div className="flex items-center text-gray-400 text-sm">
                    <MapPin className="h-3 w-3 mr-2" />
                    {event.location}
                  </div>
                  <div className="flex items-center text-gray-400 text-sm">
                    <Users className="h-3 w-3 mr-2" />
                    {event.participants} {lang === "es" ? "participantes" : "participants"}
                  </div>
                </div>

                <div className="space-y-1">
                  {event.highlights.map((highlight, idx) => (
                    <div key={idx} className="text-gray-300 text-xs flex items-center">
                      <div className="w-1 h-1 bg-white rounded-full mr-2"></div>
                      {highlight}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 grid md:grid-cols-3 gap-8 text-center justify-center max-w-4xl mx-auto">
          <div ref={eventsCounter.ref} className="bg-zinc-900 border border-[rgba(255,255,255,0.03)] rounded-xl p-6">
            <div className="text-3xl font-bold text-white mb-2">{eventsCounter.displayValue}</div>
            <div className="text-gray-300">
              {lang === "es" ? "Eventos nacionales e internacionales" : "National and international events"}
            </div>
          </div>
          <div ref={athletesCounter.ref} className="bg-zinc-900 border border-[rgba(255,255,255,0.03)] rounded-xl p-6">
            <div className="text-3xl font-bold text-white mb-2">{athletesCounter.displayValue}</div>
            <div className="text-gray-300">{lang === "es" ? "Jóvenes Entrenados" : "Young Athletes Trained"}</div>
          </div>
          <div ref={citiesCounter.ref} className="bg-zinc-900 border border-[rgba(255,255,255,0.03)] rounded-xl p-6">
            <div className="text-3xl font-bold text-white mb-2">{citiesCounter.displayValue}</div>
            <div className="text-gray-300">{lang === "es" ? "Ciudades Visitadas" : "Cities Visited"}</div>
          </div>
        </div>
      </div>
    </section>
  )
}
