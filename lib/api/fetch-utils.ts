/**
 * Safe fetch wrapper with error handling and validation
 */
export async function safeFetch<T>(
  url: string,
  options?: RequestInit,
): Promise<{ data: T | null; error: string | null }> {
  try {
    const response = await fetch(url, options)

    if (!response.ok) {
      // Log detailed error in development only
      if (process.env.NODE_ENV === "development") {
        console.error(`[API Error] ${response.status}: ${response.statusText}`)
      }

      return {
        data: null,
        error: "No se pudo cargar el contenido. Por favor, intenta nuevamente.",
      }
    }

    const data = await response.json()
    return { data, error: null }
  } catch (error) {
    // Log detailed error in development only
    if (process.env.NODE_ENV === "development") {
      console.error("[Fetch Error]", error)
    }

    return {
      data: null,
      error: "Error de conexión. Por favor, verifica tu conexión a internet.",
    }
  }
}

/**
 * Validate WordPress API response
 */
export function isValidWordPressPost(post: any): boolean {
  return (
    post &&
    typeof post === "object" &&
    typeof post.id === "number" &&
    typeof post.title?.rendered === "string" &&
    typeof post.content?.rendered === "string"
  )
}
