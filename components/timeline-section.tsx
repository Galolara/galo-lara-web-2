"use client"

import { useEffect, useRef, useState } from "react"
import Image from "next/image"
import { themeConfig } from "@/lib/theme-config"
import type { Locale } from "@/lib/i18n/config"

interface TimelineSectionProps {
  lang: Locale
  dict: any
}

export default function TimelineSection({ lang, dict }: TimelineSectionProps) {
  const [visibleEvents, setVisibleEvents] = useState<Set<number>>(new Set())
  const eventRefs = useRef<(HTMLDivElement | null)[]>([])

  const timelineEvents = dict.aboutPage.timeline.events.map((event: any, index: number) => ({
    ...event,
    image: getImageForIndex(index),
  }))

  function getImageForIndex(index: number): string | undefined {
    const images = [
      undefined, // 1992
      "/images/JUGADOR1.png", // 1994
      "/images/seleccionchilena.jpg", // 1994-2011
      "/images/losandes.jpeg", // 2007
      "/images/prat2013.jpg", // 2014
      "/images/coach-biography.jpeg", // 2015
      "/images/domani2016.jpg", // 2016
      "/images/U17chile.jpg", // 2017 - title
      "/images/prat2.1.png", // 2017 - final
      "/images/Trasandino.jpg", // 2018 - founding
      "/images/IBT.jpg", // 2018 - IBT
      "/images/u18.jpg", // 2018 - pre-mundial
      "/images/ceppi.jpg", // 2019
      "/images/stadio.jpeg", // 2020-2023
      "/images/academy.jpg", // 2023-present
    ]
    return images[index]
  }

  const getObjectPosition = (index: number) => {
    if (index === 3) return "center 30%"
    if (index === 4) return "center 35%"
    if (index === 7) return "100% 25%"
    if (index === 8) return "center 35%"
    if (index === 11) return "center 20%"
    if (index === 12) return "center 15%"
    return "center center"
  }

  useEffect(() => {
    const observers: IntersectionObserver[] = []

    eventRefs.current.forEach((ref, index) => {
      if (!ref) return

      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              setVisibleEvents((prev) => new Set(prev).add(index))
            }
          })
        },
        {
          threshold: 0.15,
          rootMargin: "0px 0px -50px 0px",
        },
      )

      observer.observe(ref)
      observers.push(observer)
    })

    return () => {
      observers.forEach((observer) => observer.disconnect())
    }
  }, [])

  return (
    <section className={`${themeConfig.spacing.section} bg-black relative`}>
      <div className={themeConfig.spacing.container}>
        <div className="text-center mb-16">
          <h2 className={`${themeConfig.typography.h2} mb-4`} style={{ color: "#C5A572" }}>
            {dict.aboutPage.timeline.title}
          </h2>
        </div>

        <div className="relative">
          {/* Línea vertical central */}
          <div
            className="absolute left-1/2 transform -translate-x-1/2 w-0.5 bg-white/20 hidden lg:block"
            style={{ top: "280px", height: "calc(100% - 400px)" }}
          />

          {/* Línea vertical móvil */}
          <div
            className="absolute left-8 md:left-12 w-0.5 bg-white/20 lg:hidden"
            style={{ top: "280px", height: "calc(100% - 400px)" }}
          />

          <div className="space-y-12 md:space-y-16">
            {timelineEvents.map((event: any, index: number) => (
              <div
                key={index}
                ref={(el) => {
                  eventRefs.current[index] = el
                }}
                className="relative"
                style={{
                  opacity: visibleEvents.has(index) ? 1 : 0,
                  transform: visibleEvents.has(index) ? "translateY(0)" : "translateY(30px)",
                  transition: `opacity 0.6s ease-out ${index * 0.1}s, transform 0.6s ease-out ${index * 0.1}s`,
                }}
              >
                {/* Desktop layout */}
                {index === 0 ? (
                  <div className="text-center max-w-4xl mx-auto mb-20">
                    <span
                      className={`inline-block px-6 py-2 bg-[#C5A572] ${themeConfig.colors.text.white} rounded-full text-lg font-semibold mb-6`}
                    >
                      {event.year}
                    </span>
                    <h3 className={`${themeConfig.typography.h2} ${themeConfig.colors.text.white} mb-4 leading-5`}>
                      {event.title}
                    </h3>
                    <p className={`${themeConfig.typography.body} text-lg ${themeConfig.colors.text.muted}`}>
                      {event.description}
                    </p>
                  </div>
                ) : (
                  <>
                    {/* Desktop layout - solo para eventos después del primero */}
                    <div className={`hidden lg:grid lg:grid-cols-2 lg:gap-8 items-center`}>
                      {/* Contenido izquierdo (años impares) */}
                      {index % 2 === 0 ? (
                        <>
                          <div className="text-right pr-12">
                            <div className="inline-block">
                              <span
                                className={`inline-block px-4 py-1 ${
                                  index === timelineEvents.length - 1 ? "bg-emerald-600" : "bg-[#C5A572]"
                                } ${themeConfig.colors.text.white} rounded-full text-sm font-semibold mb-4`}
                                style={
                                  index === timelineEvents.length - 1
                                    ? {
                                        boxShadow: "0 0 12px rgba(5, 150, 105, 0.6), 0 0 24px rgba(5, 150, 105, 0.3)",
                                      }
                                    : undefined
                                }
                              >
                                {event.year}
                              </span>
                              <h3
                                className={`${themeConfig.typography.h3} ${themeConfig.colors.text.white} mb-3 leading-5`}
                              >
                                {event.title}
                              </h3>
                              <p className={`${themeConfig.typography.body} ${themeConfig.colors.text.muted}`}>
                                {event.description}
                              </p>
                            </div>
                          </div>
                          <div className="relative">
                            <div className="rounded-2xl overflow-hidden h-[300px] relative">
                              <Image
                                src={event.image || "/placeholder.svg"}
                                alt={event.title}
                                fill
                                className="object-cover"
                                style={{ objectPosition: getObjectPosition(index) }}
                              />
                            </div>
                          </div>
                        </>
                      ) : (
                        <>
                          <div className="relative order-2">
                            <div className="rounded-2xl overflow-hidden h-[300px] relative">
                              <Image
                                src={event.image || "/placeholder.svg"}
                                alt={event.title}
                                fill
                                className="object-cover"
                                style={{ objectPosition: getObjectPosition(index) }}
                              />
                            </div>
                          </div>
                          <div className="text-left pl-12 order-1">
                            <div className="inline-block">
                              <span
                                className={`inline-block px-4 py-1 ${
                                  index === timelineEvents.length - 1 ? "bg-emerald-600" : "bg-[#C5A572]"
                                } ${themeConfig.colors.text.white} rounded-full text-sm font-semibold mb-4`}
                                style={
                                  index === timelineEvents.length - 1
                                    ? {
                                        boxShadow: "0 0 12px rgba(5, 150, 105, 0.6), 0 0 24px rgba(5, 150, 105, 0.3)",
                                      }
                                    : undefined
                                }
                              >
                                {event.year}
                              </span>
                              <h3
                                className={`${themeConfig.typography.h3} ${themeConfig.colors.text.white} mb-3 leading-5`}
                              >
                                {event.title}
                              </h3>
                              <p className={`${themeConfig.typography.body} ${themeConfig.colors.text.muted}`}>
                                {event.description}
                              </p>
                            </div>
                          </div>
                        </>
                      )}

                      {/* Punto central */}
                      <div
                        className={`absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 w-4 h-4 rounded-full border-4 border-black z-10 ${
                          index === timelineEvents.length - 1 ? "bg-emerald-600" : "bg-[#C5A572]"
                        }`}
                        style={
                          index === timelineEvents.length - 1
                            ? {
                                boxShadow: "0 0 12px rgba(5, 150, 105, 0.6), 0 0 24px rgba(5, 150, 105, 0.3)",
                              }
                            : undefined
                        }
                      />
                    </div>

                    {/* Mobile layout - solo para eventos después del primero */}
                    <div className="lg:hidden relative pl-16 md:pl-20">
                      {/* Punto central */}
                      <div
                        className={`absolute left-8 md:left-12 top-0 w-4 h-4 rounded-full border-4 border-black z-10 -translate-x-1/2 ${
                          index === timelineEvents.length - 1 ? "bg-emerald-600" : "bg-[#C5A572]"
                        }`}
                        style={
                          index === timelineEvents.length - 1
                            ? {
                                boxShadow: "0 0 12px rgba(5, 150, 105, 0.6), 0 0 24px rgba(5, 150, 105, 0.3)",
                              }
                            : undefined
                        }
                      />

                      {/* Contenido */}
                      <div className="pb-8">
                        <span
                          className={`inline-block px-3 py-1 ${
                            index === timelineEvents.length - 1 ? "bg-emerald-600" : "bg-[#C5A572]"
                          } ${themeConfig.colors.text.white} rounded-full text-xs md:text-sm font-semibold mb-3`}
                          style={
                            index === timelineEvents.length - 1
                              ? {
                                  boxShadow: "0 0 12px rgba(5, 150, 105, 0.6), 0 0 24px rgba(5, 150, 105, 0.3)",
                                }
                              : undefined
                          }
                        >
                          {event.year}
                        </span>
                        <h3 className={`text-xl md:text-2xl font-bold ${themeConfig.colors.text.white} mb-2`}>
                          {event.title}
                        </h3>
                        <p className={`${themeConfig.colors.text.muted} text-sm md:text-base mb-4`}>
                          {event.description}
                        </p>
                        {event.image && (
                          <div className="rounded-xl overflow-hidden h-[200px] md:h-[250px] relative">
                            <Image
                              src={event.image || "/placeholder.svg"}
                              alt={event.title}
                              fill
                              className="object-cover"
                              style={{ objectPosition: getObjectPosition(index) }}
                            />
                          </div>
                        )}
                      </div>
                    </div>
                  </>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
