import Link from "next/link"

// Fallback de último recurso: cuando la URL no llega a resolver ni siquiera
// el segmento [lang] (no coincide con ninguna ruta definida), Next.js usa
// este archivo en vez de app/[lang]/not-found.tsx (ese último solo se activa
// con un notFound() explícito, ej. un slug de blog inexistente). Como
// app/layout.tsx es un pass-through sin <html>/<body>, este archivo los
// provee él mismo.
export default function RootNotFound() {
  return (
    <html lang="es">
      <body style={{ margin: 0 }}>
        <div
          style={{
            minHeight: "100vh",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            textAlign: "center",
            padding: "0 1rem",
            backgroundColor: "#000",
            color: "#fff",
            fontFamily: "system-ui, sans-serif",
          }}
        >
          <p style={{ color: "#C5A572", fontSize: "1.5rem", fontWeight: 700, marginBottom: "0.5rem" }}>404</p>
          <h1 style={{ fontSize: "2rem", fontWeight: 700, marginBottom: "1rem" }}>
            Página no encontrada / Page not found
          </h1>
          <p style={{ color: "#d1d5db", marginBottom: "2rem", maxWidth: 480 }}>
            La página que buscás no existe. / The page you're looking for doesn't exist.
          </p>
          <Link
            href="/es"
            style={{
              backgroundColor: "#fff",
              color: "#000",
              fontWeight: 600,
              padding: "0.75rem 1.5rem",
              borderRadius: "0.5rem",
              textDecoration: "none",
            }}
          >
            Volver al inicio / Back to home
          </Link>
        </div>
      </body>
    </html>
  )
}
