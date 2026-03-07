"use client"

import Image from "next/image"
import Link from "next/link"
import { Calendar, MapPin, Users, Trophy, ChevronLeft, ChevronRight } from "lucide-react"
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
  const content = {
    es: {
      hero: {
        title: "CAMPS CHILE 2026",
        location: "Chiguayante & Santiago, Chile",
        description: "Entrenamientos intensivos para jugadores y jugadoras que quieren mejorar su juego, competir mejor y proyectarse en el Basketball.",
      },
      info: {
        dates: { title: "Fechas", text: "19-21 junio · Chiguayante\n25-27 junio · Santiago" },
        location: { title: "Sedes", text: "Estadio Español, Chiguayante\nStadio Italiano, Santiago" },
        ages: { title: "Edades", text: "9 a 18 años\nGrupo 1: 9-13 años\nGrupo 2: 14-18 años" },
      },
      about: {
        title: "Acerca del Camp",
        text1:
          "Junio vuelve a ser el mes del basketball en Chile. El coach Galo Lara viaja especialmente desde EEUU a Chile con un objetivo claro: compartir con los jóvenes jugadores y jugadoras del país lo último en entrenamiento americano.",
        text2:
          "El Camp se realizará en dos sedes: Estadio Español en Chiguayante los días 19, 20 y 21 de junio, y Stadio Italiano en Las Condes, Santiago los días 25, 26 y 27 de junio. Cada sede tiene cupos limitados.",
      },
      schedule: {
        title: "Horarios Oficiales",
        day1Title: "Día 1 (19 jun Estadio Español / 25 jun Stadio Italiano) — Registro y primer entrenamiento",
        day1: [
          { group: "Grupo 1 (9-13 años)", time: "08:45", activity: "Registro y entrega camiseta oficial" },
          { group: "Grupo 1", time: "09:15 – 13:00", activity: "Sesión de entrenamiento" },
          { group: "Grupo 2 (14-18 años)", time: "13:45", activity: "Registro y entrega camiseta oficial" },
          { group: "Grupo 2", time: "14:15 – 18:00", activity: "Sesión de entrenamiento" },
        ],
        day2Title: "Día 2 (20 jun Estadio Español / 26 jun Stadio Italiano) — Entrenamiento completo",
        day2: [
          { group: "Grupo 1", time: "09:00 – 13:00", activity: "Sesión de entrenamiento" },
          { group: "Grupo 2", time: "14:00 – 18:00", activity: "Sesión de entrenamiento" },
        ],
        day3Title: "Día 3 (21 jun Estadio Español / 27 jun Stadio Italiano) — Cierre y competencias",
        day3: [
          { group: "Grupo 1", time: "09:00 – 11:00", activity: "Juegos y competencias por equipo" },
          { group: "Grupo 1 y 2", time: "11:00 – 12:00", activity: "Foto oficial y actividades" },
          { group: "Grupo 2", time: "12:00 – 14:00", activity: "Juegos y competencias por equipo" },
          { group: "General", time: "14:00", activity: "Cierre oficial del Camp" },
        ],
      },
      pricing: {
        title: "Valores 2026",
        promo: { label: "Promoción Lanzamiento — Todo marzo", price: "$120.000" },
        general: { label: "Valor general desde abril", price: "$150.000" },
        includes: "Incluye camiseta oficial del Camp.",
        note: "*Cupos limitados en ambas sedes.",
      },
      registration: {
        title: "¿Cómo asegurar tu cupo?",
        step1: "Completa el formulario de inscripción de tu sede:",
        espanol: { label: "Estadio Español, Chiguayante, Concepción", url: "https://forms.gle/mVqtGzpR7dxnmgQBA" },
        italiano: { label: "Stadio Italiano, Las Condes, Santiago", url: "https://forms.gle/YBBNxfCgmZB5mt5C9" },
        step2: "Realiza la transferencia a la siguiente cuenta:",
        bank: {
          name: "DISBAS Asesorías y Servicios SpA",
          rut: "RUT: 76.990.646-0",
          account: "Cuenta Corriente: 46608290",
          bank: "Banco: BCI",
          email: "Correo: disbaschile@gmail.com",
        },
        step3: "Envía el comprobante al correo indicando:",
        requirements: ["Nombre completo del jugador(a)", "Edad", "Sede a la que asistirá"],
        confirmation: "Tu cupo quedará confirmado una vez recibido el comprobante.",
      },
      refund: {
        title: "Política de Reembolso",
        text: "La inscripción al Camp es definitiva y no se realizarán devoluciones de dinero una vez completado el pago. Únicamente se considerará reembolso en caso de lesión debidamente certificada por un médico, presentando el informe correspondiente dentro del plazo estipulado.",
      },
      cta: {
        title: "¡No te lo puedes perder!",
        description: "Asegura tu cupo antes de que se agoten. Marzo es el mejor momento para inscribirte con precio de lanzamiento.",
        espanol: "Inscribirse · Estadio Español",
        italiano: "Inscribirse · Stadio Italiano",
      },
    },
    en: {
      hero: {
        title: "CHILE CAMPS 2026",
        location: "Chiguayante & Santiago, Chile",
        description: "Intensive training sessions for players who want to improve their game, compete better and grow in Basketball.",
      },
      info: {
        dates: { title: "Dates", text: "June 19-21 · Chiguayante\nJune 25-27 · Santiago" },
        location: { title: "Venues", text: "Estadio Español, Chiguayante\nStadio Italiano, Santiago" },
        ages: { title: "Ages", text: "9 to 18 years\nGroup 1: 9-13 years\nGroup 2: 14-18 years" },
      },
      about: {
        title: "About the Camp",
        text1:
          "June is once again the month of basketball in Chile. Coach Galo Lara travels especially from the US to Chile with a clear objective: to share the latest in American training with the country's young players.",
        text2:
          "The Camp will take place at two venues: Estadio Español in Chiguayante on June 19, 20, and 21, and Stadio Italiano in Las Condes, Santiago on June 25, 26, and 27. Each venue has limited spots.",
      },
      schedule: {
        title: "Official Schedule",
        day1Title: "Day 1 (Jun 19 Estadio Español / Jun 25 Stadio Italiano) — Registration and first training",
        day1: [
          { group: "Group 1 (9-13 years)", time: "08:45", activity: "Registration and official jersey delivery" },
          { group: "Group 1", time: "09:15 – 13:00", activity: "Training session" },
          { group: "Group 2 (14-18 years)", time: "13:45", activity: "Registration and official jersey delivery" },
          { group: "Group 2", time: "14:15 – 18:00", activity: "Training session" },
        ],
        day2Title: "Day 2 (Jun 20 Estadio Español / Jun 26 Stadio Italiano) — Full training",
        day2: [
          { group: "Group 1", time: "09:00 – 13:00", activity: "Training session" },
          { group: "Group 2", time: "14:00 – 18:00", activity: "Training session" },
        ],
        day3Title: "Day 3 (Jun 21 Estadio Español / Jun 27 Stadio Italiano) — Closing and competitions",
        day3: [
          { group: "Group 1", time: "09:00 – 11:00", activity: "Team games and competitions" },
          { group: "Groups 1 & 2", time: "11:00 – 12:00", activity: "Official photo and activities" },
          { group: "Group 2", time: "12:00 – 14:00", activity: "Team games and competitions" },
          { group: "All", time: "14:00", activity: "Official camp closing" },
        ],
      },
      pricing: {
        title: "2026 Pricing",
        promo: { label: "Launch Promotion — All of March", price: "$120.000 CLP" },
        general: { label: "General price from April", price: "$150.000 CLP" },
        includes: "Includes official Camp jersey.",
        note: "*Limited spots at both venues.",
      },
      registration: {
        title: "How to secure your spot?",
        step1: "Complete the registration form for your venue:",
        espanol: { label: "Estadio Español, Chiguayante, Concepción", url: "https://forms.gle/mVqtGzpR7dxnmgQBA" },
        italiano: { label: "Stadio Italiano, Las Condes, Santiago", url: "https://forms.gle/YBBNxfCgmZB5mt5C9" },
        step2: "Make the bank transfer to:",
        bank: {
          name: "DISBAS Asesorías y Servicios SpA",
          rut: "RUT: 76.990.646-0",
          account: "Account: 46608290",
          bank: "Bank: BCI",
          email: "Email: disbaschile@gmail.com",
        },
        step3: "Send the receipt to the email with:",
        requirements: ["Full name of the player", "Age", "Venue they will attend"],
        confirmation: "Your spot will be confirmed once the receipt is received.",
      },
      refund: {
        title: "Refund Policy",
        text: "Camp registration is final and no refunds will be issued once payment is completed. A refund will only be considered in case of injury duly certified by a doctor, submitting the corresponding report within the stipulated period.",
      },
      cta: {
        title: "Don't miss it!",
        description: "Secure your spot before they run out. March is the best time to register at the launch price.",
        espanol: "Register · Estadio Español",
        italiano: "Register · Stadio Italiano",
      },
    },
  }

  const [currentSlide, setCurrentSlide] = useState(0)

  const galleryImages = [
    { src: "/images/camp-chile-gallery-1.jpeg" },
    { src: "/images/camp-chile-gallery-3.jpeg" },
    { src: "/images/camp-chile-gallery-4.jpeg"},
    { src: "/images/camp-chile-gallery-6.jpeg" },
    { src: "/images/camp-chile-gallery-7.jpeg" },
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % galleryImages.length)
    }, 4000)
    return () => clearInterval(interval)
  }, [galleryImages.length])

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % galleryImages.length)
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + galleryImages.length) % galleryImages.length)

  const t = content[lang]

  return (
    <>
      <Header lang={lang} dict={dict} />
      <main className="min-h-screen">

        {/* Hero - Banner a ancho completo, título y descripción debajo */}
        <section className="bg-black">
          <div className="w-full">
            <Image
              src="/images/camps-chile-banner.png"
              alt="Camps Chile 2026 - Galo Lara"
              width={1920}
              height={640}
              className="w-full h-auto"
              priority
              loading="eager"
            />
          </div>
          <div className="container mx-auto px-4 py-10 text-center">
            <h1 className={`${themeConfig.typography.h1} ${themeConfig.colors.text.white} mb-4`}>{t.hero.title}</h1>
            <p className={`${themeConfig.typography.h3} text-[#C5A572] mb-4`}>{t.hero.location}</p>
            <p className={`${themeConfig.typography.body} text-gray-300 max-w-3xl mx-auto`}>{t.hero.description}</p>
          </div>
        </section>


        {/* Info cards */}
        <section className={`py-20 ${themeConfig.colors.background.dark}`}>
          <div className="container mx-auto px-4 max-w-6xl">
            <div className="grid md:grid-cols-3 gap-8 mb-16">
              <div className="bg-white/5 p-8 rounded-lg backdrop-blur-sm">
                <Calendar className="w-12 h-12 text-[#C5A572] mb-4" />
                <h3 className={`${themeConfig.typography.h3} ${themeConfig.colors.text.white} mb-2`}>{t.info.dates.title}</h3>
                <p className={`${themeConfig.typography.body} text-gray-300 whitespace-pre-line`}>{t.info.dates.text}</p>
              </div>
              <div className="bg-white/5 p-8 rounded-lg backdrop-blur-sm">
                <MapPin className="w-12 h-12 text-[#C5A572] mb-4" />
                <h3 className={`${themeConfig.typography.h3} ${themeConfig.colors.text.white} mb-2`}>{t.info.location.title}</h3>
                <p className={`${themeConfig.typography.body} text-gray-300 whitespace-pre-line`}>{t.info.location.text}</p>
              </div>
              <div className="bg-white/5 p-8 rounded-lg backdrop-blur-sm">
                <Users className="w-12 h-12 text-[#C5A572] mb-4" />
                <h3 className={`${themeConfig.typography.h3} ${themeConfig.colors.text.white} mb-2`}>{t.info.ages.title}</h3>
                <p className={`${themeConfig.typography.body} text-gray-300 whitespace-pre-line`}>{t.info.ages.text}</p>
              </div>
            </div>

            {/* About */}
            <div className="space-y-8">
              <div>
                <h2 className={`${themeConfig.typography.h2} ${themeConfig.colors.text.white} mb-6`}>{t.about.title}</h2>
                <div className={`${themeConfig.typography.body} text-gray-300 space-y-4`}>
                  <p>{t.about.text1}</p>
                  <p>{t.about.text2}</p>
                </div>
              </div>

              {/* Schedule */}
              <div>
                <h2 className={`${themeConfig.typography.h2} ${themeConfig.colors.text.white} mb-8`}>{t.schedule.title}</h2>

                {[
                  { title: t.schedule.day1Title, rows: t.schedule.day1 },
                  { title: t.schedule.day2Title, rows: t.schedule.day2 },
                  { title: t.schedule.day3Title, rows: t.schedule.day3 },
                ].map((day, di) => (
                  <div key={di} className="mb-8">
                    <h3 className="text-lg font-semibold text-[#C5A572] mb-3">{day.title}</h3>
                    <div className="overflow-x-auto rounded-lg border border-white/10">
                      <table className="w-full text-sm text-left">
                        <thead className="bg-white/10 text-gray-300 uppercase text-xs">
                          <tr>
                            <th className="px-4 py-3">{lang === "es" ? "Grupo" : "Group"}</th>
                            <th className="px-4 py-3">{lang === "es" ? "Horario" : "Time"}</th>
                            <th className="px-4 py-3">{lang === "es" ? "Actividad" : "Activity"}</th>
                          </tr>
                        </thead>
                        <tbody>
                          {day.rows.map((row, ri) => (
                            <tr key={ri} className={`border-t border-white/5 ${ri % 2 === 0 ? "bg-white/[0.02]" : ""}`}>
                              <td className="px-4 py-3 text-white font-medium">{row.group}</td>
                              <td className="px-4 py-3 text-[#C5A572]">{row.time}</td>
                              <td className="px-4 py-3 text-gray-300">{row.activity}</td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </div>
                ))}
              </div>

              {/* Pricing */}
              <div>
                <h2 className={`${themeConfig.typography.h2} ${themeConfig.colors.text.white} mb-6`}>{t.pricing.title}</h2>
                <div className="grid md:grid-cols-2 gap-6 mb-4">
                  <div className="bg-[#C5A572]/10 border border-[#C5A572]/30 rounded-xl p-6">
                    <p className="text-[#C5A572] text-sm font-semibold mb-2">{t.pricing.promo.label}</p>
                    <p className="text-4xl font-bold text-white">{t.pricing.promo.price}</p>
                  </div>
                  <div className="bg-white/5 border border-white/10 rounded-xl p-6">
                    <p className="text-gray-400 text-sm font-semibold mb-2">{t.pricing.general.label}</p>
                    <p className="text-4xl font-bold text-white">{t.pricing.general.price}</p>
                  </div>
                </div>
                <p className="text-gray-300 text-sm">{t.pricing.includes}</p>
                <p className="text-gray-400 text-sm italic">{t.pricing.note}</p>
              </div>

              {/* Registration */}
              <div>
                <h2 className={`${themeConfig.typography.h2} ${themeConfig.colors.text.white} mb-6`}>{t.registration.title}</h2>
                <div className="space-y-6">
                  <div>
                    <p className="text-gray-300 mb-3">{t.registration.step1}</p>
                    <div className="space-y-3">
                      <div className="flex items-center gap-3">
                        <MapPin className="w-5 h-5 text-[#C5A572] flex-shrink-0" />
                        <Link href={t.registration.espanol.url} target="_blank" rel="noopener noreferrer"
                          className="text-[#C5A572] hover:text-[#B8956A] underline font-semibold">
                          {t.registration.espanol.label}
                        </Link>
                      </div>
                      <div className="flex items-center gap-3">
                        <MapPin className="w-5 h-5 text-[#C5A572] flex-shrink-0" />
                        <Link href={t.registration.italiano.url} target="_blank" rel="noopener noreferrer"
                          className="text-[#C5A572] hover:text-[#B8956A] underline font-semibold">
                          {t.registration.italiano.label}
                        </Link>
                      </div>
                    </div>
                  </div>

                  <div>
                    <p className="text-gray-300 mb-3">{t.registration.step2}</p>
                    <div className="bg-white/5 border border-white/10 rounded-xl p-6 space-y-1">
                      <p className="text-white font-semibold">{t.registration.bank.name}</p>
                      {[t.registration.bank.rut, t.registration.bank.account, t.registration.bank.bank, t.registration.bank.email].map((line, i) => (
                        <p key={i} className="text-gray-300 text-sm">{line}</p>
                      ))}
                    </div>
                  </div>

                  <div>
                    <p className="text-gray-300 mb-3">{t.registration.step3}</p>
                    <div className="space-y-2">
                      {t.registration.requirements.map((req, i) => (
                        <div key={i} className="flex items-center gap-3">
                          <div className="w-2 h-2 bg-[#C5A572] rounded-full flex-shrink-0" />
                          <p className="text-gray-300 text-sm">{req}</p>
                        </div>
                      ))}
                    </div>
                    <p className="text-gray-400 text-sm italic mt-4">{t.registration.confirmation}</p>
                  </div>
                </div>
              </div>

              {/* Refund policy */}
              <div className="bg-white/5 border border-white/10 rounded-xl p-6">
                <div className="flex items-start gap-3">
                  <Trophy className="w-5 h-5 text-[#C5A572] flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-white font-semibold mb-2">{t.refund.title}</h3>
                    <p className="text-gray-400 text-sm leading-relaxed">{t.refund.text}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Galería - Experiencia del Campamento */}
        <section className="py-20 bg-gray-900">
          <div className="container mx-auto px-4">
            <h2 className={`${themeConfig.typography.h2} text-white text-center mb-12`}>
              {lang === "es" ? "Experiencia del Campamento" : "Camp Experience"}
            </h2>
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
                      src={image.src}
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

        {/* CTA */}
        <section className={`py-20 ${themeConfig.colors.background.dark} border-t border-white/10`}>
          <div className="container mx-auto px-4 text-center max-w-4xl">
            <h2 className={`${themeConfig.typography.h2} ${themeConfig.colors.text.white} mb-6`}>{t.cta.title}</h2>
            <p className={`${themeConfig.typography.body} text-gray-300 mb-10 max-w-2xl mx-auto`}>{t.cta.description}</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href={t.registration.espanol.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-[#C5A572] text-black hover:bg-[#B8956A] font-bold px-10 py-4 text-lg rounded-lg transition-all duration-300 transform hover:scale-105"
              >
                {t.cta.espanol}
              </Link>
              <Link
                href={t.registration.italiano.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-white text-black hover:bg-gray-200 font-bold px-10 py-4 text-lg rounded-lg transition-all duration-300 transform hover:scale-105"
              >
                {t.cta.italiano}
              </Link>
            </div>
          </div>
        </section>

        <Footer lang={lang} dict={dict} />
      </main>
    </>
  )
}
