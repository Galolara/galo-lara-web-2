import { Calendar, MapPin, Users, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import Image from "next/image"

export default function EventsSection() {
  const events = [
    {
      title: "Camp basketball internacional IBT",
      date: "17-26 Enero 2026",
      location: "Orlando, Florida",
      attendees: "100+",
      price: " desde 2.700USD",
      description:
        "Una experiencia que va más allá del deporte, con entrenamientos diarios junto a coaches internacionales, sesiones exclusivas con Carlos Morales Jr. (NBA) y Carlos Morales (ESPN/NBA TV), 1 práctica en el Kia Center (Orlando Magic), 2 entradas NBA, visita a la Universidad Central Florida (UCF), 2 parques temáticos (Universal Studios y SeaWorld), full outfit deportivo + mochila, tiempo para compras en malls y outlets, y asistencia completa durante todo el viaje… ¡además de opciones de becas deportivas para estudiar en EE. UU.!",
      image: "/images/ibt-camp-orlando.jpeg",
      featured: true,
    },
    {
      title: "Camp Galo Lara Chile 2026",
      date: "Junio/Julio 2026",
      location: "Chile",
      attendees: "1,200+",
      price: "desde 100.000CLP",
      description:
        "Es una gira nacional que mezcla entrenamientos intensivos, camps especializados y torneos con enfoque formativo. Aquí no solo entrenamos, sino que vivimos el basket, aprendemos disciplina, respeto y nos desafiamos a dar siempre lo mejor.",
      image: "/images/camp-galo-lara-chile.png",
    },
  ]

  return (
    <section id="ultimos-eventos" className="py-20 bg-black">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Próximos Eventos</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Únete a miles de personas en experiencias transformadoras que cambiarán tu vida para siempre
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {events.map((event, index) => (
            <div
              key={index}
              className={`bg-gray-900 border border-border-subtle rounded-2xl overflow-hidden hover:bg-gray-800 transition-all duration-300 hover:scale-105 ${
                event.featured ? "lg:col-span-2 lg:row-span-1" : ""
              }`}
            >
              {/* Event Image */}
              <div className="relative h-48 bg-gradient-to-br from-gray-700 to-gray-900">
                <Image src={event.image || "/placeholder.svg"} alt={event.title} fill className="object-cover" />
                <div className="absolute inset-0 bg-black/20" />
                <div className="absolute top-4 right-4 bg-white text-black px-3 py-1 rounded-full text-sm font-semibold">
                  {event.price}
                </div>
                {event.featured && (
                  <div className="absolute top-4 left-4 bg-[#C5A572] text-white px-3 py-1 rounded-full text-sm font-semibold">
                    ¡Destacado!
                  </div>
                )}
              </div>

              {/* Event Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-3">{event.title}</h3>

                <p className="text-gray-300 mb-4 text-sm leading-relaxed">{event.description}</p>

                <div className="space-y-2 mb-6">
                  <div className="flex items-center text-gray-400 text-sm">
                    <Calendar className="h-4 w-4 mr-2" />
                    {event.date}
                  </div>
                  <div className="flex items-center text-gray-400 text-sm">
                    <MapPin className="h-4 w-4 mr-2" />
                    {event.location}
                  </div>
                  <div className="flex items-center text-gray-400 text-sm">
                    <Users className="h-4 w-4 mr-2" />
                    {event.attendees} jugadores esperados
                  </div>
                </div>

                {event.title === "Camp basketball internacional IBT" ? (
                  <Button className="w-full bg-white text-black hover:bg-gray-200 font-semibold">
                    Reservar ya
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                ) : (
                  <Button disabled className="w-full bg-gray-600 text-gray-300 cursor-not-allowed font-semibold">
                    Inscripciones abren en Febrero 2026
                  </Button>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Virtual Events */}
        <div className="bg-gradient-to-r from-gray-900 to-black border border-border-subtle rounded-2xl p-8 text-center">
          <h3 className="text-3xl font-bold text-white mb-4">Eventos Virtuales Disponibles</h3>
          <p className="text-gray-300 text-lg mb-6 max-w-2xl mx-auto">
            No puedes asistir en persona? Únete a nuestros eventos virtuales y accede al mismo contenido transformador
            desde la comodidad de tu hogar.
          </p>
          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            <div className="bg-white/5 border border-border-subtle rounded-xl p-6">
              <h4 className="text-xl font-semibold text-white mb-2">Masterclass Virtual</h4>
              <p className="text-gray-300 text-sm mb-4">Sesiones en vivo de 3 horas cada fin de semana</p>
              <Button
                variant="outline"
                className="border-[rgba(255,255,255,0.05)] text-white hover:bg-white/10 bg-transparent"
              >
                Más Información
              </Button>
            </div>
            <div className="bg-white/5 border border-border-subtle rounded-xl p-6">
              <h4 className="text-xl font-semibold text-white mb-2">Programa Online</h4>
              <p className="text-gray-300 text-sm mb-4">Curso completo de 12 semanas con acceso de por vida</p>
              <Button
                variant="outline"
                className="border-[rgba(255,255,255,0.05)] text-white hover:bg-white/10 bg-transparent"
              >
                Comenzar Ahora
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
