"use client"

import Image from "next/image"
import Link from "next/link"
import { Calendar, MapPin, Users, Trophy, ChevronLeft, ChevronRight, Download } from "lucide-react"
import { themeConfig } from "@/lib/theme-config"
import { useState, useEffect } from "react"
import Footer from "@/components/footer"
import Header from "@/components/header"
import type { Locale } from "@/lib/i18n/config"

interface CampIBTClientPageProps {
  lang: Locale
  dict: any
}

export default function CampIBTClientPage({ lang, dict }: CampIBTClientPageProps) {
  const [currentSlide, setCurrentSlide] = useState(0)

  const galleryImages = [
    { src: "/images/camp-gallery-1.jpg", alt: "Foto grupal en arena OZONE" },
    { src: "/images/camp-gallery-2.jpg", alt: "Celebración en cancha con uniformes dorados" },
    { src: "/images/camp-gallery-3.jpg", alt: "Equipo en Universal Orlando Resort" },
    { src: "/images/camp-gallery-4.jpg", alt: "Foto grupal celebrando en cancha" },
    { src: "/images/camp-gallery-5.jpg", alt: "Equipo en SeaWorld Orlando" },
    { src: "/images/camp-gallery-6.jpg", alt: "Grupo en arena con chaquetas del equipo" },
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % galleryImages.length)
    }, 4000)

    return () => clearInterval(interval)
  }, [galleryImages.length])

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % galleryImages.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + galleryImages.length) % galleryImages.length)
  }

  const content = {
    es: {
      hero: {
        title: "CAMPAMENTO IBT 2026",
        location: "Orlando, Florida - Estados Unidos",
        description: "Una experiencia internacional única para jóvenes talentos del básquetbol",
      },
      info: {
        dates: { title: "Fechas", text: "Del 17 al 26 de Enero, 2026" },
        location: { title: "Ubicación", text: "Orlando, Florida\nEstados Unidos" },
        ages: { title: "Edades", text: "10 a 21 años\nTodos los niveles" },
      },
      about: {
        title: "Acerca del Campamento",
        text1:
          "El Campamento Internacional de Basketball IBT 2026 es una experiencia única diseñada para jóvenes talentos que buscan llevar su juego al siguiente nivel. Durante 10 días intensivos en Orlando, Florida, los participantes tendrán la oportunidad de entrenar con coaches profesionales, competir en instalaciones de primer nivel y vivir la experiencia del básquetbol estadounidense.",
        text2:
          "Más de 10 años organizando campamentos formativos de alto nivel en ambos países han permitido que +150 jugadores chilenos hayan participado en los campamentos y 15+ atletas ya obtuvieron becas deportivas y hoy estudian en Estados Unidos.",
      },
      includes: {
        title: "¿Qué incluye?",
        items: [
          "Alojamiento en hotel 3 estrellas o superior",
          "Desayunos, almuerzos y cenas",
          "Entrenamientos diarios con entrenadores internacionales de alto nivel",
          "Sesiones exclusivas con Carlos Morales Jr. (coach NBA) y Carlos Morales (ESPN / NBA TV)",
          "1 entrenamiento en el Kia Center Orlando Magic",
          "2 entradas NBA",
          "Visita a la Universidad Central Florida (UCF)",
          "2 parques temáticos: Universal Studios y SeaWorld",
          "Mall y outlets para compras",
          "Kit completo del campamento (uniforme, equipamiento)",
          "Traslados incluidos y Asistencia completa durante todo el viaje",
          "¡Opciones de becas deportivas para estudiar en EE.UU.!",
        ],
      },
      objectives: {
        title: "Objetivos del Campamento",
        items: [
          "Mejorar tu condición física, tus habilidades técnicas y principales fundamentos del básquetbol",
          "Aumentar tu confianza viviendo esta experiencia, compartiendo y generando amistades con atletas de distintos países",
          "Diversión, relajo y juegos",
          "Compartir e identificarte con la comunidad de jugadores IBT",
        ],
      },
      gallery: "Experiencia del Campamento",
      cta: {
        title: "¿Quieres ser parte del campamento más esperado del año?",
        description:
          "Descarga el PDF informativo para más información relacionada a este campamento, luego llena el formulario para reservar tu cupo. (cupos limitados)",
        downloadPdf: "Descargar PDF informativo",
        interested: "Estoy interesado/a",
      },
    },
    en: {
      hero: {
        title: "IBT CAMP 2026",
        location: "Orlando, Florida - United States",
        description: "A unique international experience for young basketball talents",
      },
      info: {
        dates: { title: "Dates", text: "January 17-26, 2026" },
        location: { title: "Location", text: "Orlando, Florida\nUnited States" },
        ages: { title: "Ages", text: "10 to 21 years\nAll levels" },
      },
      about: {
        title: "About the Camp",
        text1:
          "The IBT 2026 International Basketball Camp is a unique experience designed for young talents looking to take their game to the next level. During 10 intensive days in Orlando, Florida, participants will have the opportunity to train with professional coaches, compete in top-tier facilities, and live the American basketball experience.",
        text2:
          "More than 10 years organizing high-level training camps in both countries have enabled +150 Chilean players to participate in the camps and 15+ athletes have already obtained sports scholarships and are studying in the United States today.",
      },
      includes: {
        title: "What's included?",
        items: [
          "Accommodation in 3-star hotel or higher",
          "Breakfasts, lunches and dinners",
          "Daily training with top-level international coaches",
          "Exclusive sessions with Carlos Morales Jr. (NBA coach) and Carlos Morales (ESPN / NBA TV)",
          "1 training session at Kia Center Orlando Magic",
          "2 NBA tickets",
          "Visit to the University of Central Florida (UCF)",
          "2 theme parks: Universal Studios and SeaWorld",
          "Mall and outlets for shopping",
          "Complete camp kit (uniform, equipment)",
          "Included transfers and Full assistance throughout the trip",
          "Sports scholarship options to study in the US!",
        ],
      },
      objectives: {
        title: "Camp Objectives",
        items: [
          "Improve your physical condition, technical skills and main basketball fundamentals",
          "Increase your confidence by living this experience, sharing and building friendships with athletes from different countries",
          "Fun, relaxation and games",
          "Share and identify with the IBT player community",
        ],
      },
      gallery: "Camp Experience",
      cta: {
        title: "Want to be part of the most anticipated camp of the year?",
        description:
          "Download the informative PDF for more information about this camp, then fill out the form to reserve your spot. (limited spots)",
        downloadPdf: "Download informative PDF",
        interested: "I'm interested",
      },
    },
  }

  const t = content[lang]

  return (
    <>
      <Header lang={lang} dict={dict} />
      <main className="min-h-screen">
        <section className="relative h-[60vh] min-h-[500px] flex items-center justify-center overflow-hidden">
          <Image
            src="/images/design-mode/servicios%20camps%202.jpg"
            alt={t.hero.title}
            fill
            className="object-cover"
            priority
            loading="eager"
          />
          <div className="absolute inset-0 bg-black/60" />

          <div className="relative z-10 container mx-auto px-4 text-center">
            <h1 className={`${themeConfig.typography.h1} ${themeConfig.colors.text.white} mb-6`}>{t.hero.title}</h1>
            <p className={`${themeConfig.typography.h3} text-[#C5A572] mb-8`}>{t.hero.location}</p>
            <p className={`${themeConfig.typography.body} ${themeConfig.colors.text.white} max-w-3xl mx-auto`}>
              {t.hero.description}
            </p>
          </div>
        </section>

        <section className={`py-20 ${themeConfig.colors.background.dark}`}>
          <div className="container mx-auto px-4 max-w-6xl">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
              <div className="bg-white/5 p-8 rounded-lg backdrop-blur-sm">
                <Calendar className="w-12 h-12 text-[#C5A572] mb-4" />
                <h3 className={`${themeConfig.typography.h3} ${themeConfig.colors.text.white} mb-2`}>
                  {t.info.dates.title}
                </h3>
                <p className={`${themeConfig.typography.body} text-gray-300`}>{t.info.dates.text}</p>
              </div>

              <div className="bg-white/5 p-8 rounded-lg backdrop-blur-sm">
                <MapPin className="w-12 h-12 text-[#C5A572] mb-4" />
                <h3 className={`${themeConfig.typography.h3} ${themeConfig.colors.text.white} mb-2`}>
                  {t.info.location.title}
                </h3>
                <p className={`${themeConfig.typography.body} text-gray-300 whitespace-pre-line`}>
                  {t.info.location.text}
                </p>
              </div>

              <div className="bg-white/5 p-8 rounded-lg backdrop-blur-sm">
                <Users className="w-12 h-12 text-[#C5A572] mb-4" />
                <h3 className={`${themeConfig.typography.h3} ${themeConfig.colors.text.white} mb-2`}>
                  {t.info.ages.title}
                </h3>
                <p className={`${themeConfig.typography.body} text-gray-300 whitespace-pre-line`}>{t.info.ages.text}</p>
              </div>
            </div>

            <div className="space-y-8">
              <div>
                <h2 className={`${themeConfig.typography.h2} ${themeConfig.colors.text.white} mb-6`}>
                  {t.about.title}
                </h2>
                <div className={`${themeConfig.typography.body} text-gray-300 space-y-4`}>
                  <p>{t.about.text1}</p>
                  <p>{t.about.text2}</p>
                </div>
              </div>

              <div>
                <h2 className={`${themeConfig.typography.h2} ${themeConfig.colors.text.white} mb-6`}>
                  {t.includes.title}
                </h2>
                <div className="grid md:grid-cols-2 gap-6">
                  {t.includes.items.map((item, index) => (
                    <div key={index} className="flex gap-4">
                      <div className="flex-shrink-0 w-2 h-2 bg-[#C5A572] rounded-full mt-2" />
                      <p className={`${themeConfig.typography.body} text-gray-300`}>{item}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h2 className={`${themeConfig.typography.h2} ${themeConfig.colors.text.white} mb-6`}>
                  {t.objectives.title}
                </h2>
                <div className="space-y-4">
                  {t.objectives.items.map((item, index) => (
                    <div key={index} className="flex gap-4 items-start">
                      <Trophy className="w-6 h-6 text-[#C5A572] flex-shrink-0 mt-1" />
                      <p className={`${themeConfig.typography.body} text-gray-300`}>{item}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 bg-[#C5A572] bg-gray-900">
          <div className="container mx-auto px-4">
            <h2 className={`${themeConfig.typography.h2} text-center mb-12 text-border`}>{t.gallery}</h2>

            <div className="relative max-w-5xl mx-auto">
              <div className="relative aspect-[16/9] rounded-lg overflow-hidden shadow-2xl">
                {galleryImages.map((image, index) => (
                  <div
                    key={index}
                    className={`absolute inset-0 transition-opacity duration-1000 ${
                      index === currentSlide ? "opacity-100" : "opacity-0"
                    }`}
                  >
                    <Image
                      src={image.src || "/placeholder.svg"}
                      alt={image.alt}
                      fill
                      className="object-cover"
                      priority={index === 0}
                    />
                  </div>
                ))}
              </div>

              <button
                onClick={prevSlide}
                className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-3 rounded-full transition-all duration-300"
                aria-label={lang === "es" ? "Imagen anterior" : "Previous image"}
              >
                <ChevronLeft className="w-6 h-6" />
              </button>

              <button
                onClick={nextSlide}
                className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-3 rounded-full transition-all duration-300"
                aria-label={lang === "es" ? "Siguiente imagen" : "Next image"}
              >
                <ChevronRight className="w-6 h-6" />
              </button>

              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
                {galleryImages.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentSlide(index)}
                    className={`w-2 h-2 rounded-full transition-all duration-300 ${
                      index === currentSlide ? "bg-white w-8" : "bg-white/50"
                    }`}
                    aria-label={lang === "es" ? `Ir a imagen ${index + 1}` : `Go to image ${index + 1}`}
                  />
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className={`py-20 ${themeConfig.colors.background.dark}`}>
          <div className="container mx-auto px-4 text-center max-w-4xl">
            <h2 className={`${themeConfig.typography.h2} ${themeConfig.colors.text.white} mb-6`}>{t.cta.title}</h2>
            <p className={`${themeConfig.typography.body} text-gray-300 mb-8 max-w-2xl mx-auto`}>{t.cta.description}</p>

            <div className="mb-8">
              <a
                href="/downloads/PDF CAMP IBT2026 .pdf"
                download="PDF CAMP IBT2026.pdf"
                className="inline-flex items-center gap-2 text-[#C5A572] hover:text-[#B8956A] font-semibold text-lg transition-colors duration-300 underline"
              >
                {t.cta.downloadPdf}
                <Download className="w-5 h-5" />
              </a>
            </div>

            <Link
              href="https://docs.google.com/forms/d/e/1FAIpQLScrCSfqhkBssaRWlOrjY5cCHp-nz3r7bt_bymkfwg39E3JS_w/viewform"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-[#C5A572] text-black hover:bg-[#B8956A] font-bold px-12 py-4 text-xl rounded-lg transition-all duration-300 transform hover:scale-105"
            >
              {t.cta.interested}
            </Link>
          </div>
        </section>

        <Footer lang={lang} dict={dict} />
      </main>
    </>
  )
}
