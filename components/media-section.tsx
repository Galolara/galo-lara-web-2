"use client"

import { useState } from "react"
import { Play, ExternalLink } from "lucide-react"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import type { Locale } from "@/lib/i18n/config"

interface MediaSectionProps {
  lang: Locale
  dict: any
}

export default function MediaSection({ lang, dict }: MediaSectionProps) {
  const [activeFilter, setActiveFilter] = useState("todos")

  const sectionId = lang === "es" ? "medios" : "media"

  const mediaLogos = [
    { name: "ESPN" },
    { name: "Fox Sports" },
    { name: "Univision" },
    { name: "Telemundo" },
    { name: "NBA" },
  ]

  const allMedia = [
    {
      id: 1,
      title: "Galo Lara en MÁS ALLÁ DEL DEPORTE",
      channel: "Más alla del deporte",
      duration: "01:08:44",
      views: "249",
      category: "entrevistas",
      type: "video",
      youtubeId: "Vn1D2i20eK4",
      youtubeUrl: "https://www.youtube.com/watch?v=Vn1D2i20eK4",
    },
    {
      id: 2,
      title: "Galo Lara división mayor",
      channel: "YouTube",
      duration: "04:10",
      views: "2.5K",
      category: "jugador",
      type: "video",
      youtubeId: "vJymZV2NOP0",
      youtubeUrl: "https://www.youtube.com/watch?v=vJymZV2NOP0&t=11s",
      noMaxRes: true,
    },
    {
      id: 3,
      title: "Hablemos de Basquet Radio Touch",
      channel: "Radio Touch",
      duration: "1:01:38",
      views: "373",
      category: "entrevistas",
      type: "video",
      youtubeId: "UwoEXoMJZ5o",
      youtubeUrl: "https://www.youtube.com/watch?v=UwoEXoMJZ5o",
    },
    {
      id: 4,
      title: "Galo Lara - División Mayor",
      channel: "YouTube",
      duration: "4:17",
      views: "2.2K",
      category: "jugador",
      type: "video",
      youtubeId: "T8avgfMAnQo",
      youtubeUrl: "https://www.youtube.com/watch?v=T8avgfMAnQo",
      noMaxRes: true,
    },
    {
      id: 5,
      title: "Galo Lara - Semifinal Dimayor 2007",
      channel: "Sports Archive",
      duration: "Youtube",
      views: "2K",
      category: "jugador",
      type: "video",
      youtubeId: "g6btOqyC3WQ",
      youtubeUrl: "https://www.youtube.com/watch?v=g6btOqyC3WQ",
      noMaxRes: true,
    },
    {
      id: 6,
      title: "Programa Abrazo de gol CDF",
      channel: "CDF",
      duration: "15:30",
      views: "5.2K",
      category: "entrevistas",
      type: "video",
      youtubeId: "lVmqDPgZjjg",
      youtubeUrl: "https://www.youtube.com/watch?v=lVmqDPgZjjg",
    },
    {
      id: 7,
      title: "Prat campeón del domani",
      channel: "YouTube",
      duration: "Video",
      views: "N/A",
      category: "entrenador",
      type: "video",
      youtubeId: "cLM99fLOQFY",
      youtubeUrl: "https://www.youtube.com/watch?v=cLM99fLOQFY",
    },
    {
      id: 8,
      title: "Conversemos con Galo Lara Head Coach Stadio Italiano",
      channel: "Touch TV",
      duration: "Video",
      views: "N/A",
      category: "entrevistas",
      type: "video",
      youtubeId: "c1WnPsHKqZA",
      youtubeUrl: "https://www.youtube.com/watch?v=c1WnPsHKqZA&t=240s",
    },
    {
      id: 9,
      title: "Galardonado como mejor entrenador (2017)",
      category: "premios",
      type: "image",
      imageUrl: "/images/premio-mejor-entrenador-2017.jpg",
    },
    {
      id: 10,
      title: "Entrenador del año 2017",
      category: "premios",
      type: "image",
      imageUrl: "/images/premio-entrenador-del-ano-2017.jpg",
    },
    {
      id: 11,
      title: "Domani 2022",
      channel: "YouTube",
      duration: "Video",
      views: "N/A",
      category: "entrenador",
      type: "video",
      youtubeId: "GwAAMnWl2RE",
      youtubeUrl: "https://www.youtube.com/watch?v=GwAAMnWl2RE",
    },
    {
      id: 12,
      title: "Camp y charla Galo Lara - PF Mauricio Oyarzún 2019",
      channel: "YouTube",
      duration: "Video",
      views: "N/A",
      category: "entrenador",
      type: "video",
      youtubeId: "nZt9DakVJco",
      youtubeUrl: "https://www.youtube.com/watch?v=nZt9DakVJco",
    },
    {
      id: 13,
      title: "Premio Andino destacado (2017)",
      category: "premios",
      type: "image",
      imageUrl: "/images/premio-andino-destacado-2017.jpg",
    },
    {
      id: 14,
      title: "Camp Galo Lara 2022",
      channel: "YouTube",
      duration: "Video",
      views: "N/A",
      category: "entrenador",
      type: "video",
      youtubeId: "uqHW7sECCTA",
      youtubeUrl: "https://www.youtube.com/watch?v=uqHW7sECCTA",
      noMaxRes: true,
    },
  ]

  const filters = [
    { id: "todos", label: dict.media.filters.all },
    { id: "jugador", label: dict.media.filters.player },
    { id: "entrenador", label: dict.media.filters.coach },
    { id: "entrevistas", label: dict.media.filters.interviews },
    { id: "premios", label: dict.media.filters.awards },
  ]

  const filteredMedia =
    activeFilter === "todos"
      ? allMedia.filter((item) => item.type === "video")
      : allMedia.filter((item) => item.category === activeFilter)

  const handleVideoClick = (video: any) => {
    if (video.youtubeUrl) {
      window.open(video.youtubeUrl, "_blank")
    }
  }

  return (
    <section id={sectionId} className="py-20 bg-zinc-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">{dict.media.title}</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">{dict.media.subtitle}</p>
        </div>

        <div className="mb-16"></div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {filters.map((filter) => (
            <Button
              key={filter.id}
              onClick={() => setActiveFilter(filter.id)}
              variant={activeFilter === filter.id ? "default" : "outline"}
              className={
                activeFilter === filter.id
                  ? "bg-white text-black hover:bg-gray-200 border-0"
                  : "border-0 text-white hover:bg-white/10 bg-transparent"
              }
            >
              {filter.label}
            </Button>
          ))}
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {filteredMedia.map((item) => (
            <div
              key={item.id}
              className="bg-black/50 rounded-2xl overflow-hidden hover:bg-black/70 transition-all duration-300 hover:scale-105"
            >
              <div
                className={`relative ${item.type === "image" ? "aspect-[4/5]" : "aspect-video"} bg-gradient-to-br from-gray-700 to-gray-900`}
              >
                {item.type === "video" && item.youtubeId ? (
                  <>
                    <Image
                      src={`https://img.youtube.com/vi/${item.youtubeId}/${
                        item.noMaxRes ? "hqdefault" : "maxresdefault"
                      }.jpg`}
                      alt={item.title}
                      fill
                      className="object-cover"
                    />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <button
                        onClick={() => handleVideoClick(item)}
                        className="w-16 h-16 bg-white/90 rounded-full flex items-center justify-center hover:bg-white transition-colors duration-200 group"
                      >
                        <Play className="h-6 w-6 text-black ml-1 group-hover:scale-110 transition-transform duration-200" />
                      </button>
                    </div>
                    <div className="absolute bottom-4 right-4 bg-black/70 text-white px-2 py-1 rounded text-sm">
                      {item.duration}
                    </div>
                    <div className="absolute top-4 right-4 bg-black/70 text-white px-2 py-1 rounded text-sm">
                      {item.views} {dict.media.views}
                    </div>
                  </>
                ) : item.type === "image" && item.imageUrl ? (
                  <Image src={item.imageUrl || "/placeholder.svg"} alt={item.title} fill className="object-contain" />
                ) : (
                  <div className="absolute inset-0 bg-black/20" />
                )}

                {/* Category Badge */}
                <div className="absolute top-4 left-4 bg-white/20 backdrop-blur-sm text-white px-2 py-1 rounded text-xs font-semibold capitalize">
                  {item.category}
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-lg font-bold text-white mb-2 line-clamp-2">{item.title}</h3>
                {item.type === "video" && <p className="text-gray-400 text-sm mb-4">{item.channel}</p>}

                {/* View Complete Button */}
                {item.type === "video" && (
                  <Button
                    variant="outline"
                    className="w-full border-0 text-white hover:bg-white/10 bg-transparent"
                    onClick={() => handleVideoClick(item)}
                  >
                    {dict.media.viewComplete}
                    <ExternalLink className="ml-2 h-4 w-4" />
                  </Button>
                )}
              </div>
            </div>
          ))}
        </div>

        {filteredMedia.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-400 text-lg">{dict.media.noContent}</p>
          </div>
        )}
      </div>
    </section>
  )
}
