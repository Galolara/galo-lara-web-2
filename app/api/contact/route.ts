import { NextResponse } from "next/server"

const MAKE_WEBHOOK_URL =
  process.env.MAKE_WEBHOOK_URL || "https://hook.us2.make.com/oehvf6ngy6hqsfn6widvagoimq54bunn"

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const { name, email, phone, message, newsletter, website } = body

    // Honeypot: un visitante real nunca completa este campo (está oculto).
    // Devolvemos éxito falso para no darle pistas a un bot que lo intente.
    if (website) {
      return NextResponse.json({ success: true })
    }

    if (!name || !email || !message) {
      return NextResponse.json({ error: "Faltan campos requeridos" }, { status: 400 })
    }

    const response = await fetch(MAKE_WEBHOOK_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name, email, phone, message, newsletter }),
    })

    if (!response.ok) {
      if (process.env.NODE_ENV === "development") {
        console.error(`[contact API] Make webhook error: ${response.status}`)
      }
      return NextResponse.json({ error: "No se pudo enviar el formulario" }, { status: 502 })
    }

    return NextResponse.json({ success: true })
  } catch (error) {
    if (process.env.NODE_ENV === "development") {
      console.error("[contact API] error:", error)
    }
    return NextResponse.json({ error: "Error interno" }, { status: 500 })
  }
}
