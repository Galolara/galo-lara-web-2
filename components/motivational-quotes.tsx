import { Quote } from "lucide-react"

export default function MotivationalQuotes() {
  const quotes = [
    {
      text: "El progreso es igual a la felicidad. Si no estás creciendo, estás muriendo.",
      author: "Poder Interior",
    },
    {
      text: "La calidad de tu vida está determinada por la calidad de las preguntas que te haces.",
      author: "Poder Interior",
    },
    {
      text: "No es lo que te sucede, sino cómo reaccionas a lo que te sucede lo que importa.",
      author: "Poder Interior",
    },
  ]

  return (
    <section className="py-20 bg-black relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-20 w-64 h-64 border border-[rgba(255,255,255,0.1)] rounded-full"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 border border-[rgba(255,255,255,0.1)] rounded-full"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Palabras que Transforman</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Frases poderosas que han inspirado a millones de personas a alcanzar su máximo potencial
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {quotes.map((quote, index) => (
            <div
              key={index}
              className="bg-gray-900/50 backdrop-blur-sm border border-[rgba(255,255,255,0.05)] rounded-2xl p-8 hover:bg-gray-800/50 transition-all duration-300 hover:scale-105"
            >
              <Quote className="h-12 w-12 text-white/20 mb-6" />
              <blockquote className="text-xl text-white mb-6 font-medium leading-relaxed">"{quote.text}"</blockquote>
              <cite className="text-gray-400 font-semibold">— {quote.author}</cite>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-white/10 to-transparent border border-[rgba(255,255,255,0.05)] rounded-2xl p-8 max-w-4xl mx-auto">
            <h3 className="text-3xl font-bold text-white mb-4">¿Listo para transformar tu vida?</h3>
            <p className="text-gray-300 text-lg mb-6">
              Únete a millones de personas que ya han descubierto su poder interior
            </p>
            <button className="bg-white text-black hover:bg-gray-200 font-semibold px-8 py-4 rounded-full text-lg transition-colors duration-200">
              Comenzar Mi Transformación
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
