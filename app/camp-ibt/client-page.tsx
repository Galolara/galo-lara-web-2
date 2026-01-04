"use client"

import Image from "next/image"
import Link from "next/link"
import { Calendar, MapPin, Users, Trophy, ChevronLeft, ChevronRight, Download } from "lucide-react"
import { themeConfig } from "@/lib/theme-config"
import { useState, useEffect } from "react"
import Footer from "@/components/footer"
import Header from "@/components/header"

export default function CampIBTClientPage() {
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

  return (
    <>
      <Header />
      <main className="min-h-screen">
        {/* Hero Section */}
        <section className="relative h-[60vh] min-h-[500px] flex items-center justify-center overflow-hidden">
          <Image
            src="/images/design-mode/servicios%20camps%202.jpg"
            alt="Campamento IBT 2026"
            fill
            className="object-cover"
            priority
            loading="eager"
          />
          <div className="absolute inset-0 bg-black/60" />

          <div className="relative z-10 container mx-auto px-4 text-center">
            <h1 className={`${themeConfig.typography.h1} ${themeConfig.colors.text.white} mb-6`}>
              CAMPAMENTO IBT 2026
            </h1>
            <p className={`${themeConfig.typography.h3} text-[#C5A572] mb-8`}>Orlando, Florida - Estados Unidos</p>
            <p className={`${themeConfig.typography.body} ${themeConfig.colors.text.white} max-w-3xl mx-auto`}>
              Una experiencia internacional única para jóvenes talentos del básquetbol
            </p>
          </div>
        </section>

        {/* Información General */}
        <section className={`py-20 ${themeConfig.colors.background.dark}`}>
          <div className="container mx-auto px-4 max-w-6xl">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
              {/* Fechas */}
              <div className="bg-white/5 p-8 rounded-lg backdrop-blur-sm">
                <Calendar className="w-12 h-12 text-[#C5A572] mb-4" />
                <h3 className={`${themeConfig.typography.h3} ${themeConfig.colors.text.white} mb-2`}>Fechas</h3>
                <p className={`${themeConfig.typography.body} text-gray-300`}>Del 17 al 26 de Enero, 2026</p>
              </div>

              {/* Ubicación */}
              <div className="bg-white/5 p-8 rounded-lg backdrop-blur-sm">
                <MapPin className="w-12 h-12 text-[#C5A572] mb-4" />
                <h3 className={`${themeConfig.typography.h3} ${themeConfig.colors.text.white} mb-2`}>Ubicación</h3>
                <p className={`${themeConfig.typography.body} text-gray-300`}>
                  Orlando, Florida
                  <br />
                  Estados Unidos
                </p>
              </div>

              {/* Edades */}
              <div className="bg-white/5 p-8 rounded-lg backdrop-blur-sm">
                <Users className="w-12 h-12 text-[#C5A572] mb-4" />
                <h3 className={`${themeConfig.typography.h3} ${themeConfig.colors.text.white} mb-2`}>Edades</h3>
                <p className={`${themeConfig.typography.body} text-gray-300`}>
                  10 a 21 años
                  <br />
                  Todos los niveles
                </p>
              </div>
            </div>

            {/* Descripción del Campamento */}
            <div className="space-y-8">
              <div>
                <h2 className={`${themeConfig.typography.h2} ${themeConfig.colors.text.white} mb-6`}>
                  Acerca del Campamento
                </h2>
                <div className={`${themeConfig.typography.body} text-gray-300 space-y-4`}>
                  <p>
                    El Campamento Internacional de Basketball IBT 2026 es una experiencia única diseñada para jóvenes
                    talentos que buscan llevar su juego al siguiente nivel. Durante 10 días intensivos en Orlando,
                    Florida, los participantes tendrán la oportunidad de entrenar con coaches profesionales, competir en
                    instalaciones de primer nivel y vivir la experiencia del básquetbol estadounidense.
                  </p>
                  <p>
                    Más de 10 años organizando campamentos formativos de alto nivel en ambos países han permitido que
                    +150 jugadores chilenos hayan participado en los campamentos y 15+ atletas ya obtuvieron becas
                    deportivas y hoy estudian en Estados Unidos.
                  </p>
                </div>
              </div>

              {/* Lo que incluye */}
              <div>
                <h2 className={`${themeConfig.typography.h2} ${themeConfig.colors.text.white} mb-6`}>¿Qué incluye?</h2>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="flex gap-4">
                    <div className="flex-shrink-0 w-2 h-2 bg-[#C5A572] rounded-full mt-2" />
                    <p className={`${themeConfig.typography.body} text-gray-300`}>
                      Alojamiento en hotel 3 estrellas o superior
                    </p>
                  </div>
                  <div className="flex gap-4">
                    <div className="flex-shrink-0 w-2 h-2 bg-[#C5A572] rounded-full mt-2" />
                    <p className={`${themeConfig.typography.body} text-gray-300`}>Desayunos, almuerzos y cenas</p>
                  </div>

                  <div className="flex gap-4">
                    <div className="flex-shrink-0 w-2 h-2 bg-[#C5A572] rounded-full mt-2" />
                    <p className={`${themeConfig.typography.body} text-gray-300`}>
                      Entrenamientos diarios con entrenadores internacionales de alto nivel
                    </p>
                  </div>
                  <div className="flex gap-4">
                    <div className="flex-shrink-0 w-2 h-2 bg-[#C5A572] rounded-full mt-2" />
                    <p className={`${themeConfig.typography.body} text-gray-300`}>
                      Sesiones exclusivas con Carlos Morales Jr. (coach NBA) y Carlos Morales (ESPN / NBA TV)
                    </p>
                  </div>

                  <div className="flex gap-4">
                    <div className="flex-shrink-0 w-2 h-2 bg-[#C5A572] rounded-full mt-2" />
                    <p className={`${themeConfig.typography.body} text-gray-300`}>
                      1 entrenamiento en el Kia Center Orlando Magic
                    </p>
                  </div>
                  <div className="flex gap-4">
                    <div className="flex-shrink-0 w-2 h-2 bg-[#C5A572] rounded-full mt-2" />
                    <p className={`${themeConfig.typography.body} text-gray-300`}>2 entradas NBA</p>
                  </div>
                  <div className="flex gap-4">
                    <div className="flex-shrink-0 w-2 h-2 bg-[#C5A572] rounded-full mt-2" />
                    <p className={`${themeConfig.typography.body} text-gray-300`}>
                      Visita a la Universidad Central Florida (UCF)
                    </p>
                  </div>
                  <div className="flex gap-4">
                    <div className="flex-shrink-0 w-2 h-2 bg-[#C5A572] rounded-full mt-2" />
                    <p className={`${themeConfig.typography.body} text-gray-300`}>
                      2 parques temáticos: Universal Studios y SeaWorld
                    </p>
                  </div>
                  <div className="flex gap-4">
                    <div className="flex-shrink-0 w-2 h-2 bg-[#C5A572] rounded-full mt-2" />
                    <p className={`${themeConfig.typography.body} text-gray-300`}>Mall y outlets para compras</p>
                  </div>
                  <div className="flex gap-4">
                    <div className="flex-shrink-0 w-2 h-2 bg-[#C5A572] rounded-full mt-2" />
                    <p className={`${themeConfig.typography.body} text-gray-300`}>
                      Kit completo del campamento (uniforme, equipamiento)
                    </p>
                  </div>
                  <div className="flex gap-4">
                    <div className="flex-shrink-0 w-2 h-2 bg-[#C5A572] rounded-full mt-2" />
                    <p className={`${themeConfig.typography.body} text-gray-300`}>
                      Traslados incluidos y Asistencia completa durante todo el viaje
                    </p>
                  </div>
                  <div className="flex gap-4">
                    <div className="flex-shrink-0 w-2 h-2 bg-[#C5A572] rounded-full mt-2" />
                    <p className={`${themeConfig.typography.body} text-gray-300`}>
                      ¡Opciones de becas deportivas para estudiar en EE.UU.!
                    </p>
                  </div>
                </div>
              </div>

              {/* Objetivos */}
              <div>
                <h2 className={`${themeConfig.typography.h2} ${themeConfig.colors.text.white} mb-6`}>
                  Objetivos del Campamento
                </h2>
                <div className="space-y-4">
                  <div className="flex gap-4 items-start">
                    <Trophy className="w-6 h-6 text-[#C5A572] flex-shrink-0 mt-1" />
                    <p className={`${themeConfig.typography.body} text-gray-300`}>
                      Mejorar tu condición física, tus habilidades técnicas y principales fundamentos del básquetbol
                    </p>
                  </div>
                  <div className="flex gap-4 items-start">
                    <Trophy className="w-6 h-6 text-[#C5A572] flex-shrink-0 mt-1" />
                    <p className={`${themeConfig.typography.body} text-gray-300`}>
                      Aumentar tu confianza viviendo esta experiencia, compartiendo y generando amistades con atletas de
                      distintos países
                    </p>
                  </div>
                  <div className="flex gap-4 items-start">
                    <Trophy className="w-6 h-6 text-[#C5A572] flex-shrink-0 mt-1" />
                    <p className={`${themeConfig.typography.body} text-gray-300`}>Diversión, relajo y juegos</p>
                  </div>
                  <div className="flex gap-4 items-start">
                    <Trophy className="w-6 h-6 text-[#C5A572] flex-shrink-0 mt-1" />
                    <p className={`${themeConfig.typography.body} text-gray-300`}>
                      Compartir e identificarte con la comunidad de jugadores IBT
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Galería de Imágenes */}
        <section className="py-20 bg-[#C5A572] bg-gray-900">
          <div className="container mx-auto px-4">
            <h2 className={`${themeConfig.typography.h2} text-center mb-12 text-border`}>Experiencia del Campamento</h2>

            <div className="relative max-w-5xl mx-auto">
              {/* Carrusel Container */}
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

              {/* Controles del carrusel */}
              <button
                onClick={prevSlide}
                className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-3 rounded-full transition-all duration-300"
                aria-label="Imagen anterior"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>

              <button
                onClick={nextSlide}
                className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-3 rounded-full transition-all duration-300"
                aria-label="Siguiente imagen"
              >
                <ChevronRight className="w-6 h-6" />
              </button>

              {/* Indicadores */}
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
                {galleryImages.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentSlide(index)}
                    className={`w-2 h-2 rounded-full transition-all duration-300 ${
                      index === currentSlide ? "bg-white w-8" : "bg-white/50"
                    }`}
                    aria-label={`Ir a imagen ${index + 1}`}
                  />
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* CTA Final */}
        <section className={`py-20 ${themeConfig.colors.background.dark}`}>
          <div className="container mx-auto px-4 text-center max-w-4xl">
            <h2 className={`${themeConfig.typography.h2} ${themeConfig.colors.text.white} mb-6`}>
              ¿Quieres ser parte del campamento más esperado del año?
            </h2>
            <p className={`${themeConfig.typography.body} text-gray-300 mb-8 max-w-2xl mx-auto`}>
              Descarga el PDF informativo para más información relacionada a este campamento, luego llena el formulario
              para reservar tu cupo. (cupos limitados)
            </p>

            <div className="mb-8">
              <a
                href="/downloads/PDF CAMP IBT2026 .pdf"
                download="PDF CAMP IBT2026.pdf"
                className="inline-flex items-center gap-2 text-[#C5A572] hover:text-[#B8956A] font-semibold text-lg transition-colors duration-300 underline"
              >
                Descargar PDF informativo
                <Download className="w-5 h-5" />
              </a>
            </div>

            <Link
              href="https://docs.google.com/forms/d/e/1FAIpQLScrCSfqhkBssaRWlOrjY5cCHp-nz3r7bt_bymkfwg39E3JS_w/viewform"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-[#C5A572] text-black hover:bg-[#B8956A] font-bold px-12 py-4 text-xl rounded-lg transition-all duration-300 transform hover:scale-105"
            >
              Estoy interesado/a
            </Link>
          </div>
        </section>

        <Footer />
      </main>
    </>
  )
}
