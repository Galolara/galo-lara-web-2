import { ImageResponse } from "next/og"
import type { Locale } from "@/lib/i18n/config"

export const runtime = "edge"
export const alt = "Galo Lara"
export const size = { width: 1200, height: 630 }
export const contentType = "image/png"

export default async function Image({ params }: { params: { lang: Locale } }) {
  const isEs = params.lang === "es"

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#000000",
          color: "#ffffff",
        }}
      >
        <div style={{ display: "flex", fontSize: 100, fontWeight: 900, letterSpacing: -2 }}>Galo Lara</div>
        <div style={{ display: "flex", fontSize: 38, color: "#C5A572", marginTop: 24 }}>
          {isEs ? "Entrenador Profesional de Básquetbol" : "Professional Basketball Coach"}
        </div>
      </div>
    ),
    { ...size },
  )
}
