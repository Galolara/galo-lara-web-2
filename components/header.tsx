"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import Image from "next/image"
import { themeConfig } from "@/lib/theme-config"
import { useRouter, usePathname } from "next/navigation"
import LanguageSelector from "@/components/language-selector"
import type { Locale } from "@/lib/i18n/config"
import { getTranslatedRoute } from "@/lib/i18n/get-translated-route"

interface HeaderProps {
  lang: Locale
  dict: any
}

export default function Header({ lang, dict }: HeaderProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isEventsDropdownOpen, setIsEventsDropdownOpen] = useState(false)
  const router = useRouter()
  const pathname = usePathname()

  const getUrl = (routeKey: string, hash?: string) => {
    if (routeKey === "home" || routeKey === "") {
      return hash ? `/${lang}#${hash}` : `/${lang}`
    }
    const route = getTranslatedRoute(routeKey, lang)
    const path = route ? `/${lang}/${route}` : `/${lang}`
    return hash ? `${path}#${hash}` : path
  }

  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId)
    if (section) {
      const headerOffset = 100
      const elementPosition = section.getBoundingClientRect().top
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      })
    }
  }

  const handleLogoClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault()

    if (pathname === `/${lang}`) {
      window.scrollTo({ top: 0, behavior: "smooth" })
    } else {
      router.push(`/${lang}`)
      setTimeout(() => {
        window.scrollTo({ top: 0, behavior: "instant" })
      }, 0)
    }

    setIsMenuOpen(false)
  }

  const navigateAndScrollToSection = (sectionId: string) => {
    router.push(`/${lang}`)

    const scrollToSectionWithRetry = (attempts = 0) => {
      const section = document.getElementById(sectionId)

      if (section) {
        scrollToSection(sectionId)
      } else if (attempts < 5) {
        setTimeout(() => scrollToSectionWithRetry(attempts + 1), 250)
      }
    }

    setTimeout(() => scrollToSectionWithRetry(), 300)
  }

  const handleNavigation = (href: string, e?: React.MouseEvent<HTMLAnchorElement>) => {
    if (e) e.preventDefault()

    if (href.includes("#")) {
      const sectionId = href.split("#")[1]

      if (pathname === `/${lang}`) {
        scrollToSection(sectionId)
      } else {
        navigateAndScrollToSection(sectionId)
      }
    } else {
      router.push(href)
      setTimeout(() => {
        window.scrollTo({ top: 0, behavior: "instant" })
      }, 0)
    }

    setIsMenuOpen(false)
    setIsEventsDropdownOpen(false)
  }

  const handleScrollToContact = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault()

    const contactId = lang === "es" ? "contacto" : "contact"

    if (pathname === `/${lang}`) {
      scrollToSection(contactId)
    } else {
      navigateAndScrollToSection(contactId)
    }
    setIsMenuOpen(false)
  }

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as HTMLElement
      if (isEventsDropdownOpen && !target.closest(".events-dropdown")) {
        setTimeout(() => setIsEventsDropdownOpen(false), 100)
      }
    }

    document.addEventListener("mousedown", handleClickOutside)
    return () => {
      document.removeEventListener("mousedown", handleClickOutside)
    }
  }, [isEventsDropdownOpen])

  return (
    <header className={themeConfig.header.base}>
      <div className={themeConfig.header.container}>
        <div className="flex items-center justify-between w-full">
          {/* Logo */}
          <Link href={`/${lang}`} onClick={handleLogoClick} className="flex items-center space-x-3">
            <Image src="/images/LOGOBORDE2.png" alt="Logo" width={100} height={100} className="h-20 w-auto" />
            <span className={themeConfig.typography.brand}>Galo Lara</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link
              href={getUrl("about-me")}
              onClick={(e) => handleNavigation(getUrl("about-me"), e)}
              className={themeConfig.header.navLink}
            >
              {dict.header.nav.aboutMe}
            </Link>

            <Link
              href={getUrl("services")}
              onClick={(e) => handleNavigation(getUrl("services"), e)}
              className={themeConfig.header.navLink}
            >
              {dict.header.nav.services}
            </Link>

            <div className="relative events-dropdown" onMouseEnter={() => setIsEventsDropdownOpen(true)}>
              <button
                onClick={() => setIsEventsDropdownOpen((prev) => !prev)}
                onMouseEnter={() => setIsEventsDropdownOpen(true)}
                aria-expanded={isEventsDropdownOpen}
                aria-haspopup="true"
                className={`${themeConfig.header.navLink} flex items-center`}
              >
                {dict.header.nav.events}
                <svg
                  className={`ml-1 h-4 w-4 transition-transform duration-200 ${isEventsDropdownOpen ? "rotate-180" : ""}`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>

              {isEventsDropdownOpen && (
                <div
                  className={themeConfig.header.dropdown}
                  onMouseEnter={() => setIsEventsDropdownOpen(true)}
                  onMouseLeave={() => setTimeout(() => setIsEventsDropdownOpen(false), 200)}
                >
                  <Link
                    href={getUrl("", getTranslatedRoute("events", lang))}
                    onClick={(e) => handleNavigation(getUrl("", getTranslatedRoute("events", lang)), e)}
                    className={themeConfig.header.dropdownItem}
                  >
                    {dict.header.nav.upcomingEvents}
                  </Link>
                  <Link
                    href={getUrl("", getTranslatedRoute("past-events", lang))}
                    onClick={(e) => handleNavigation(getUrl("", getTranslatedRoute("past-events", lang)), e)}
                    className={themeConfig.header.dropdownItem}
                  >
                    {dict.header.nav.pastEvents}
                  </Link>
                </div>
              )}
            </div>

            {/* <Link
              href={getUrl("", getTranslatedRoute("testimonies", lang))}
              onClick={(e) => handleNavigation(getUrl("", getTranslatedRoute("testimonies", lang)), e)}
              className={themeConfig.header.navLink}
            >
              {dict.header.nav.testimonies}
            </Link> */}

            <Link
              href={getUrl("", getTranslatedRoute("media", lang))}
              onClick={(e) => handleNavigation(getUrl("", getTranslatedRoute("media", lang)), e)}
              className={themeConfig.header.navLink}
            >
              {dict.header.nav.media}
            </Link>

            <Link
              href={getUrl("", "blog")}
              onClick={(e) => handleNavigation(getUrl("", "blog"), e)}
              className={themeConfig.header.navLink}
            >
              {dict.header.nav.blog}
            </Link>
          </nav>

          {/* Desktop Actions */}
          <div className="hidden md:flex items-center space-x-4">
            <LanguageSelector currentLang={lang} />
            <Link href={getUrl("", getTranslatedRoute("contact", lang))} onClick={handleScrollToContact}>
              <Button className={themeConfig.buttons.primary}>{dict.header.conversemos}</Button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden text-white"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden mt-4 py-4 border-t border-[rgba(255,255,255,0.05)]">
            <div className="flex flex-col space-y-4 w-full">
              <Link
                href={getUrl("about-me")}
                onClick={(e) => handleNavigation(getUrl("about-me"), e)}
                className={themeConfig.header.navLink}
              >
                {dict.header.nav.aboutMe}
              </Link>

              <Link
                href={getUrl("services")}
                onClick={(e) => handleNavigation(getUrl("services"), e)}
                className={themeConfig.header.navLink}
              >
                {dict.header.nav.services}
              </Link>

              <div className="events-dropdown w-full">
                <button
                  onClick={() => setIsEventsDropdownOpen((prev) => !prev)}
                  aria-expanded={isEventsDropdownOpen}
                  aria-haspopup="true"
                  className={`${themeConfig.header.navLink} flex items-center w-full text-left`}
                >
                  {dict.header.nav.events}
                  <svg
                    className={`ml-1 h-4 w-4 transition-transform duration-200 ${isEventsDropdownOpen ? "rotate-180" : ""}`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>

                {isEventsDropdownOpen && (
                  <div
                    className="ml-4 mt-2 space-y-2 w-full"
                    onMouseEnter={() => setIsEventsDropdownOpen(true)}
                    onMouseLeave={() => setTimeout(() => setIsEventsDropdownOpen(false), 200)}
                  >
                    <Link
                      href={getUrl("", getTranslatedRoute("events", lang))}
                      onClick={(e) => handleNavigation(getUrl("", getTranslatedRoute("events", lang)), e)}
                      className={`block ${themeConfig.header.navLink} w-full text-left`}
                    >
                      {dict.header.nav.upcomingEvents}
                    </Link>
                    <Link
                      href={getUrl("", getTranslatedRoute("past-events", lang))}
                      onClick={(e) => handleNavigation(getUrl("", getTranslatedRoute("past-events", lang)), e)}
                      className={`block ${themeConfig.header.navLink} w-full text-left`}
                    >
                      {dict.header.nav.pastEvents}
                    </Link>
                  </div>
                )}
              </div>

              {/* <Link
                href={getUrl("", getTranslatedRoute("testimonies", lang))}
                onClick={(e) => handleNavigation(getUrl("", getTranslatedRoute("testimonies", lang)), e)}
                className={themeConfig.header.navLink}
              >
                {dict.header.nav.testimonies}
              </Link> */}

              <Link
                href={getUrl("", getTranslatedRoute("media", lang))}
                onClick={(e) => handleNavigation(getUrl("", getTranslatedRoute("media", lang)), e)}
                className={themeConfig.header.navLink}
              >
                {dict.header.nav.media}
              </Link>

              <Link
                href={getUrl("", "blog")}
                onClick={(e) => handleNavigation(getUrl("", "blog"), e)}
                className={themeConfig.header.navLink}
              >
                {dict.header.nav.blog}
              </Link>

              <div className="pt-4">
                <LanguageSelector currentLang={lang} />
              </div>

              <Link href={getUrl("", getTranslatedRoute("contact", lang))} onClick={handleScrollToContact}>
                <Button className={`${themeConfig.buttons.primary} mt-4 w-full`}>{dict.header.conversemos}</Button>
              </Link>
            </div>
          </nav>
        )}
      </div>
    </header>
  )
}
