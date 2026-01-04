"use client"

import { Button } from "@/components/ui/button"
import Image from "next/image"
import { themeConfig } from "@/lib/theme-config"
import { useState, useEffect } from "react"
import type { Locale } from "@/lib/i18n/config"
import { getTranslatedRoute } from "@/lib/i18n/get-translated-route"
import Link from "next/link"

interface HeroSectionProps {
  lang: Locale
  dict: any
}

export default function HeroSection({ lang, dict }: HeroSectionProps) {
  const [displayedDream, setDisplayedDream] = useState("")
  const [displayedBig, setDisplayedBig] = useState("")
  const [showBig, setShowBig] = useState(false)
  const [showCursor, setShowCursor] = useState(true)
  const dreamText = dict.hero.dream
  const bigText = dict.hero.big

  useEffect(() => {
    let currentIndex = 0

    const dreamInterval = setInterval(() => {
      if (currentIndex <= dreamText.length) {
        setDisplayedDream(dreamText.slice(0, currentIndex))
        currentIndex++
      } else {
        clearInterval(dreamInterval)
        setTimeout(() => {
          setShowBig(true)
          let bigIndex = 0
          const bigInterval = setInterval(() => {
            if (bigIndex <= bigText.length) {
              setDisplayedBig(bigText.slice(0, bigIndex))
              bigIndex++
              if (bigIndex > bigText.length) {
                setShowCursor(false)
              }
            } else {
              clearInterval(bigInterval)
              setShowCursor(false)
            }
          }, 150)
        }, 300)
      }
    }, 150)

    return () => clearInterval(dreamInterval)
  }, [dreamText, bigText])

  const handleScrollToEvents = () => {
    const eventsHash = getTranslatedRoute("events", lang)
    const eventsSection = document.getElementById(eventsHash)
    if (eventsSection) {
      const headerOffset = 100
      const elementPosition = eventsSection.getBoundingClientRect().top
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      })
    }
  }

  return (
    <section
      id="inicio"
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20 md:pt-24"
    >
      {/* Background Image - Desktop */}
      <div className="absolute inset-0 z-0 hidden md:block opacity-90">
        <div className="absolute inset-0 flex items-start justify-end pt-24 pr-8">
          <div className="relative w-full max-w-4xl h-[90vh] aspect-[3/4]">
            <Image
              src="/images/hero-galo-lara.jpeg"
              alt="Galo Lara - Entrenador Profesional de Básquetbol"
              fill
              className="object-contain"
              style={{
                objectPosition: "center 10%",
              }}
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 40vw"
              priority
              loading="eager"
            />
          </div>
        </div>
        <div className="absolute inset-0 bg-black/20" />
      </div>

      {/* Background Image - Mobile */}
      <div className="absolute inset-0 z-0 block md:hidden opacity-90">
        <div className="relative w-full h-full max-h-screen aspect-[3/4] mx-auto">
          <Image
            src="/images/hero-galo-lara.jpeg"
            alt="Galo Lara - Entrenador Profesional de Básquetbol"
            fill
            className="object-contain"
            style={{
              objectPosition: "center 50%",
            }}
            sizes="100vw"
            priority
            loading="eager"
          />
        </div>
        <div className="absolute inset-0 bg-black/30" />
      </div>

      {/* Content */}
      <div className={themeConfig.sections.container}>
        <div className="max-w-2xl mt-4 md:mt-8">
          <h1 className="text-7xl md:text-8xl lg:text-9xl xl:text-[10rem] font-black tracking-tighter leading-[0.9] mb-4 md:mb-6">
            <span className={themeConfig.colors.text.white}>{displayedDream}</span>
            <br />
            {showBig && (
              <span style={{ color: themeConfig.colors.brand.primary }}>
                {displayedBig}
                {showCursor && <span className="animate-pulse">|</span>}
              </span>
            )}
          </h1>

          <p
            className={`${themeConfig.typography.body} ${themeConfig.colors.text.muted} mb-6 md:mb-8 max-w-xl text-left`}
          >
            <span className="block mb-3 text-lg md:text-xl font-semibold">{dict.hero.description}</span>
            {Array.isArray(dict.hero.description2) ? (
              dict.hero.description2.map((paragraph: string, index: number) => (
                <span key={index} className="block mb-3 last:mb-0">
                  {paragraph}
                </span>
              ))
            ) : (
              <span className="block">{dict.hero.description2}</span>
            )}
          </p>

          <div className="flex flex-col sm:flex-row items-start justify-start gap-3 md:gap-4 mb-6 md:mb-8">
            <Button size="lg" className={themeConfig.buttons.primary} asChild>
              <Link href={`/${lang}/${getTranslatedRoute("about-me", lang)}`}>{dict.hero.myStoryButton}</Link>
            </Button>
          </div>
        </div>
      </div>

      <div className="absolute bottom-4 md:bottom-8 left-1/2 transform -translate-x-1/2 text-white animate-bounce z-20">
        <button
          onClick={handleScrollToEvents}
          className="flex flex-col items-center cursor-pointer hover:opacity-80 transition-opacity"
        >
          <div className={themeConfig.typography.caption}>{dict.hero.discoverMore}</div>
          <div className="w-5 h-8 md:w-6 md:h-10 border-2 border-[rgba(255,255,255,0.3)] rounded-full flex justify-center">
            <div className="w-1 h-2 md:h-3 bg-white rounded-full mt-1 md:mt-2 animate-pulse"></div>
          </div>
        </button>
      </div>
    </section>
  )
}
