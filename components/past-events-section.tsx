"use client"

import { Calendar, MapPin, Users, ChevronLeft, ChevronRight } from "lucide-react"
import Image from "next/image"
import type { Locale } from "@/lib/i18n/config"
import { useCountUp } from "@/hooks/use-count-up"
import { useState, useEffect, useCallback } from "react"
import useEmblaCarousel from "embla-carousel-react"

interface PastEventsSectionProps {
  lang: Locale
  dict: any
}

export default function PastEventsSection({ lang, dict }: PastEventsSectionProps) {
  const eventsCounter = useCountUp({ end: 35, duration: 2000, prefix: "+" })
  const athletesCounter = useCountUp({ end: 5000, duration: 2500, prefix: "+" })
  const citiesCounter = useCountUp({ end: 10, duration: 1800, prefix: "+" })

  const [emblaRef, emblaApi] = useEmblaCarousel({
    align: "start",
    loop: false,
    slidesToScroll: 1,
  })

  const [canScrollPrev, setCanScrollPrev] = useState(false)
  const [canScrollNext, setCanScrollNext] = useState(true)

  const onSelect = useCallback(() => {
    if (!emblaApi) return
    setCanScrollPrev(emblaApi.canScrollPrev())
    setCanScrollNext(emblaApi.canScrollNext())
  }, [emblaApi])

  useEffect(() => {
    if (!emblaApi) return
    emblaApi.on("select", onSelect)
    emblaApi.on("reInit", onSelect)
    onSelect()
  }, [emblaApi, onSelect])

  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi])
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi])

  const pastEvents = [
    {
      id: 1,
      title: "Camp Estadio Español 2025",
      date: lang === "es" ? "20, 21 y 22 Junio 2025" : "June 20-22, 2025",
      location: "Chiguayante, Chile",
      participants: "100",
      image: "/images/camp-estadio-espanol.jpeg",
      imageAlt: "Camp Estadio Español 2025",
      highlights:
        lang === "es"
          ? ["Fundamentos técnicos", "Habilidades individuales", "Disciplina y trabajo en equipo"]
          : ["Technical fundamentals", "Individual skills", "Discipline and teamwork"],
    },
    {
      id: 2,
      title: "Camp Stadio Italiano 2025",
      date: lang === "es" ? "26, 27 y 28 Junio 2025" : "June 26-28, 2025",
      location: "Santiago, Chile",
      participants: "+120",
      image: "/images/camp-stadio-italiano.jpeg",
      imageAlt: "Camp Galo Lara Stadio Italiano 2025",
      highlights:
        lang === "es"
          ? ["Técnicas avanzadas", "Defensa", "Condición física"]
          : ["Advanced techniques", "Defense", "Physical conditioning"],
    },
    {
      id: 3,
      title: lang === "es" ? "Torneo talento andino 2025" : "Andean Talent Tournament 2025",
      date: lang === "es" ? "3, 4, 5 y 6 Julio 2025" : "July 3-6, 2025",
      location: lang === "es" ? "Los Andes, Chile" : "Los Andes, Chile",
      participants: "100",
      image: "/images/torneo-talento-andino-2025.jpg",
      imageAlt: "Torneo Talento Andino 2025",
      highlights:
        lang === "es"
          ? ["Fundamentos técnicos", "Habilidades individuales", "Disciplina y trabajo en equipo"]
          : ["Technical fundamentals", "Individual skills", "Discipline and teamwork"],
    },
    {
      id: 4,
      title: "Training days",
      date: lang === "es" ? "19 y 20 Julio 2025" : "July 19-20, 2025",
      location: lang === "es" ? "La Serena, Chile" : "La Serena, Chile",
      participants: "+120",
      image: "/images/training-days-laserena.jpg",
      imageAlt: "Training days La Serena 2025",
      highlights:
        lang === "es"
          ? ["Técnicas avanzadas", "Defensa", "Condición física"]
          : ["Advanced techniques", "Defense", "Physical conditioning"],
    },
    {
      id: 5,
      title: "Camp Basketball Internacional IBT",
      date: lang === "es" ? "17-26 Enero 2026" : "January 17–26, 2026",
      location: "Orlando, Florida",
      participants: "+60",
      image: "/images/IBT.2026.jpeg",
      imageAlt: "Camp Basketball Internacional IBT Orlando 2026",
      highlights:
        lang === "es"
          ? ["Experiencia NBA", "Entrenamiento en KIA center (cancha de Magic)", "Parques temáticos (Universal y Seaworld)"]
          : ["NBA Experience", "Training at the KIA Center (Magic's home court)", "Theme parks (Universal & Seaworld)"],
    },
    {
      id: 6,
      title: "Camp Estadio Español 2026",
      date: lang === "es" ? "19 al 21 de Junio 2026" : "June 19-21, 2026",
      location: "Chiguayante, Chile",
      participants: "80",
      image: "/images/camp-estadio-espanol-2026.jpg",
      imageAlt: "Camp Estadio Español Chiguayante 2026",
      highlights:
        lang === "es"
          ? ["Fundamentos técnicos", "Situaciones de juego", "Trabajo en equipo", "Competencias"]
          : ["Technical fundamentals", "Game situations", "Teamwork", "Competitions"],
    },
    {
      id: 7,
      title: "Camp Stadio Italiano 2026",
      date: lang === "es" ? "25 al 27 de Junio 2026" : "June 25-27, 2026",
      location: "Las Condes, Chile",
      participants: "80",
      image: "/images/camp-stadio-italiano-2026.jpeg",
      imageAlt: "Camp Stadio Italiano Las Condes 2026",
      highlights:
        lang === "es"
          ? ["Fundamentos técnicos", "Situaciones de juego", "Trabajo en equipo", "Competencias", "Charla de coach mental"]
          : ["Technical fundamentals", "Game situations", "Teamwork", "Competitions", "Mental coach talk"],
    },
    {
      id: 8,
      title: lang === "es" ? "Torneo Talento Andino 2026" : "Andean Talent Tournament 2026",
      date: lang === "es" ? "3 al 5 de Julio 2026" : "July 3-5, 2026",
      location: "Los Andes, Chile",
      participants: "550",
      image: "/images/torneo-andino-2026.PNG",
      imageAlt: "Torneo Talento Andino Los Andes 2026",
      highlights:
        lang === "es"
          ? ["Torneo formativo U13-U15 y U17"]
          : ["Development tournament U13-U15 and U17"],
    },
    {
      id: 9,
      title: "Torneo End off Summer 2026",
      date: lang === "es" ? "18 al 28 de Julio 2026" : "July 18-28, 2026",
      location: "Orlando, Florida, USA",
      participants: "10",
      image: "/images/torneo-summer-2026.jpeg",
      imageAlt: "Torneo End off Summer Orlando 2026",
      highlights:
        lang === "es"
          ? ["Torneo internacional en EE. UU."]
          : ["International tournament in the USA"],
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

        {/* Carousel wrapper */}
        <div className="relative">
          {/* Prev button */}
          <button
            onClick={scrollPrev}
            disabled={!canScrollPrev}
            aria-label="Anterior"
            className={`absolute -left-5 top-1/2 -translate-y-1/2 z-10 w-11 h-11 rounded-full flex items-center justify-center border transition-all duration-200 shadow-lg
              ${canScrollPrev
                ? "bg-zinc-800 border-zinc-600 text-white hover:bg-zinc-700 hover:border-zinc-400"
                : "bg-zinc-900 border-zinc-800 text-zinc-600 cursor-not-allowed"
              }`}
          >
            <ChevronLeft className="h-5 w-5" />
          </button>

          {/* Next button */}
          <button
            onClick={scrollNext}
            disabled={!canScrollNext}
            aria-label="Siguiente"
            className={`absolute -right-5 top-1/2 -translate-y-1/2 z-10 w-11 h-11 rounded-full flex items-center justify-center border transition-all duration-200 shadow-lg
              ${canScrollNext
                ? "bg-zinc-800 border-zinc-600 text-white hover:bg-zinc-700 hover:border-zinc-400"
                : "bg-zinc-900 border-zinc-800 text-zinc-600 cursor-not-allowed"
              }`}
          >
            <ChevronRight className="h-5 w-5" />
          </button>

          {/* Embla viewport */}
          <div className="overflow-hidden" ref={emblaRef}>
            <div className="flex gap-6">
              {pastEvents.map((event) => (
                <div
                  key={event.id}
                  className="flex-none w-[80%] sm:w-[48%] lg:w-[23%] bg-zinc-900/50 border border-[rgba(255,255,255,0.03)] rounded-2xl overflow-hidden hover:bg-zinc-800/50 transition-all duration-300 hover:scale-[1.02]"
                >
                  <div className="relative h-48 bg-gradient-to-br from-gray-700 to-gray-900">
                    <Image
                      src={event.image}
                      alt={event.imageAlt}
                      fill
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-black/20" />
                  </div>

                  <div className="p-6">
                    <h3 className="text-lg font-bold text-white mb-2">{event.title}</h3>

                    <div className="space-y-1 mb-4">
                      <div className="flex items-center text-gray-400 text-sm">
                        <Calendar className="h-3 w-3 mr-2 flex-shrink-0" />
                        {event.date}
                      </div>
                      <div className="flex items-center text-gray-400 text-sm">
                        <MapPin className="h-3 w-3 mr-2 flex-shrink-0" />
                        {event.location}
                      </div>
                      <div className="flex items-center text-gray-400 text-sm">
                        <Users className="h-3 w-3 mr-2 flex-shrink-0" />
                        {event.participants} {lang === "es" ? "participantes" : "participants"}
                      </div>
                    </div>

                    <div className="space-y-1">
                      {event.highlights.map((highlight, idx) => (
                        <div key={idx} className="text-gray-300 text-xs flex items-center">
                          <div className="w-1 h-1 bg-white rounded-full mr-2 flex-shrink-0"></div>
                          {highlight}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Stats */}
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
