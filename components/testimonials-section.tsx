import { Star } from "lucide-react"
import type { Locale } from "@/lib/i18n/config"

interface TestimonialsSectionProps {
  lang: Locale
  dict: any
}

export default function TestimonialsSection({ lang, dict }: TestimonialsSectionProps) {
  const testimonials = [
    {
      name: "María González",
      role: lang === "es" ? "Empresaria" : "Businesswoman",
      content:
        lang === "es"
          ? "Gracias a estas enseñanzas, transformé completamente mi negocio y mi vida personal. Ahora tengo la confianza y las herramientas para alcanzar cualquier meta que me proponga."
          : "Thanks to these teachings, I completely transformed my business and personal life. Now I have the confidence and tools to achieve any goal I set.",
      rating: 5,
    },
    {
      name: "Carlos Ruiz",
      role: lang === "es" ? "Atleta Profesional" : "Professional Athlete",
      content:
        lang === "es"
          ? "Las estrategias de mentalidad que aprendí me ayudaron a superar mis límites y alcanzar el más alto nivel en mi deporte. Esto va más allá del rendimiento físico."
          : "The mindset strategies I learned helped me push past my limits and reach the highest level in my sport. This goes beyond physical performance.",
      rating: 5,
    },
    {
      name: "Ana Martínez",
      role: lang === "es" ? "Coach Ejecutiva" : "Executive Coach",
      content:
        lang === "es"
          ? "Como coach, estas metodologías revolucionaron mi práctica. Ahora puedo ayudar a mis clientes a lograr resultados extraordinarios de manera consistente."
          : "As a coach, these methodologies revolutionized my practice. Now I can help my clients achieve extraordinary results consistently.",
      rating: 5,
    },
  ]

  const testimoniesHash = lang === "es" ? "testimonios" : "testimonies"

  return (
    <section id={testimoniesHash} className="py-20 bg-transparent">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">{dict.testimonies.title}</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">{dict.testimonies.subtitle}</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-black/20 border border-[rgba(255,255,255,0.03)] rounded-2xl p-8 hover:bg-black/30 transition-all duration-300 backdrop-blur-sm"
            >
              <div className="flex items-center mb-6">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                ))}
              </div>

              <blockquote className="text-gray-300 text-lg mb-6 leading-relaxed">"{testimonial.content}"</blockquote>

              <div className="flex items-center">
                <div className="relative w-12 h-12 rounded-full overflow-hidden mr-4 bg-gray-600">
                  <div className="w-full h-full bg-gradient-to-br from-gray-500 to-gray-700"></div>
                </div>
                <div>
                  <div className="text-white font-semibold">{testimonial.name}</div>
                  <div className="text-gray-400 text-sm">{testimonial.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
