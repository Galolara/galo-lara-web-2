import Image from "next/image"
import { themeConfig } from "@/lib/theme-config"
import type { Locale } from "@/lib/i18n/config"

interface BiographyHeroProps {
  lang: Locale
  dict: any
}

export default function BiographyHero({ lang, dict }: BiographyHeroProps) {
  return (
    <section className={`${themeConfig.spacing.section} bg-black`}>
      <div className={themeConfig.spacing.container}>
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1">
            <div className="relative aspect-[3/4] w-full max-w-md mx-auto overflow-hidden rounded-lg">
              <Image
                src="/images/coach-chile-flag.jpg"
                alt="Coach con bandera de Chile"
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>

          <div className="space-y-8 order-1 lg:order-2">
            <div>
              <h1 className={`${themeConfig.typography.h1} ${themeConfig.colors.text.white} mb-8`}>
                {dict.aboutPage.hero.title}
              </h1>

              <div className="space-y-6 text-gray-300 leading-relaxed">
                <p className="text-lg">{dict.aboutPage.hero.paragraph1}</p>

                <p className="text-lg">{dict.aboutPage.hero.paragraph2}</p>

                <p className="text-lg">{dict.aboutPage.hero.paragraph3}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
