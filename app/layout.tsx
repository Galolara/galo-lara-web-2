import type React from "react"

// Next.js exige que exista un layout raíz para que app/not-found.tsx sea
// válido, pero el <html>/<body> real vive en app/[lang]/layout.tsx (para
// poder setear el lang correcto por idioma). Este layout es un simple
// pass-through: no agrega ningún elemento propio al árbol.
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return children
}
