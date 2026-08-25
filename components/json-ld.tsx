/**
 * Reemplaza "<" por su escape unicode: JSON.stringify no escapa "</script>"
 * dentro de un string, lo que podría cortar el tag si el JSON incluye texto
 * de una fuente externa (ej. un título de WordPress).
 */
export function JsonLd({ data }: { data: object }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data).replace(/</g, "\\u003c") }}
    />
  )
}
