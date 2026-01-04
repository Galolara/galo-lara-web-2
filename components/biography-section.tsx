import { Award, Users, BookOpen } from "lucide-react"
import Image from "next/image"
import type { Locale } from "@/lib/i18n/config"

interface BiographySectionProps {
  lang: Locale
  dict: any
}

export default function BiographySection({ lang, dict }: BiographySectionProps) {
  const sectionId = lang === "es" ? "sobre-mi" : "about-me"

  const achievements = [
    {
      icon: <Award className="h-8 w-8" />,
      title: dict.aboutPage.biography.achievements.coach.title,
      description: dict.aboutPage.biography.achievements.coach.description,
    },
    {
      icon: <Users className="h-8 w-8" />,
      title: dict.aboutPage.biography.achievements.people.title,
      description: dict.aboutPage.biography.achievements.people.description,
    },
    {
      icon: <BookOpen className="h-8 w-8" />,
      title: dict.aboutPage.biography.achievements.books.title,
      description: dict.aboutPage.biography.achievements.books.description,
    },
  ]

  return (
    <section id={sectionId} className="py-20 bg-transparent">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <div className="relative">
            <div className="relative w-full h-[600px] rounded-2xl overflow-hidden">
              <Image
                src="/images/coach-biography.jpeg"
                alt="Galo Lara entrenando jóvenes jugadores de básquetbol"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
            </div>
          </div>

          <div className="space-y-8">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">{dict.aboutPage.biography.title}</h2>
              <div className="space-y-4 text-gray-300 text-lg">
                <p>{dict.aboutPage.biography.paragraph1}</p>
                <p>{dict.aboutPage.biography.paragraph2}</p>
                <p>{dict.aboutPage.biography.paragraph3}</p>
              </div>
            </div>

            {/* Achievements */}
            <div className="space-y-6">
              {achievements.map((achievement, index) => (
                <div key={index} className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-16 h-16 bg-white/10 rounded-xl flex items-center justify-center text-white">
                    {achievement.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-2">{achievement.title}</h3>
                    <p className="text-gray-300">{achievement.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
