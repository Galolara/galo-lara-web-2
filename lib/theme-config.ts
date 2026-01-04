// Colores principales del sitio
export const colors = {
  brand: {
    primary: "#C5A572", // Dorado champagne
    secondary: "#000000", // Negro
  },
  text: {
    white: "text-white",
    muted: "text-gray-300",
    dark: "text-black",
  },
  background: {
    dark: "bg-black",
    overlay: "bg-black/90",
  },
  neutral: {
    white: "#FFFFFF",
    black: "#000000",
    gray: {
      50: "#F9FAFB",
      100: "#F3F4F6",
      200: "#E5E7EB",
      300: "#D1D5DB",
      400: "#9CA3AF",
      500: "#6B7280",
      600: "#4B5563",
      700: "#374151",
      800: "#1F2937",
      900: "#111827",
    },
  },
} as const

// Tipografía
export const typography = {
  hero: "text-8xl md:text-9xl lg:text-[12rem] xl:text-[14rem] font-bold mb-4 md:mb-6 leading-[0.9] text-left",
  h1: "text-4xl md:text-5xl lg:text-6xl font-bold leading-tight",
  h2: "text-3xl md:text-4xl lg:text-5xl font-bold leading-tight",
  h3: "text-2xl md:text-3xl lg:text-4xl font-bold leading-tight",
  body: "text-base md:text-lg lg:text-xl leading-relaxed",
  caption: "text-xs md:text-sm mb-2",
  stat: "text-xl md:text-2xl lg:text-3xl font-bold",
  brand: "font-bold text-white text-3xl tracking-normal",
} as const

// Espaciado
export const spacing = {
  xs: "0.5rem", // 8px
  sm: "0.75rem", // 12px
  md: "1rem", // 16px
  lg: "1.5rem", // 24px
  xl: "2rem", // 32px
  "2xl": "3rem", // 48px
  "3xl": "4rem", // 64px
  "4xl": "6rem", // 96px
  "5xl": "8rem", // 128px
  section: "py-12 md:py-16 lg:py-24",
  container: "container mx-auto px-4 md:px-6 lg:px-8",
} as const

// Bordes y radios
export const borders = {
  radius: {
    none: "0",
    sm: "0.125rem", // 2px
    md: "0.375rem", // 6px
    lg: "0.5rem", // 8px
    xl: "0.75rem", // 12px
    "2xl": "1rem", // 16px
    "3xl": "1.5rem", // 24px
    full: "9999px",
  },
  width: {
    thin: "1px",
    medium: "2px",
    thick: "4px",
  },
} as const

// Sombras
export const shadows = {
  sm: "0 1px 2px 0 rgba(0, 0, 0, 0.05)",
  md: "0 4px 6px -1px rgba(0, 0, 0, 0.1)",
  lg: "0 10px 15px -3px rgba(0, 0, 0, 0.1)",
  xl: "0 20px 25px -5px rgba(0, 0, 0, 0.1)",
  "2xl": "0 25px 50px -12px rgba(0, 0, 0, 0.25)",
} as const

// Breakpoints para responsive
export const breakpoints = {
  sm: "640px",
  md: "768px",
  lg: "1024px",
  xl: "1280px",
  "2xl": "1536px",
} as const

// Transiciones
export const transitions = {
  fast: "150ms ease-in-out",
  normal: "300ms ease-in-out",
  slow: "500ms ease-in-out",
} as const

// Configuración de secciones
export const sections = {
  container: "relative z-10 container mx-auto px-4 text-left h-full flex items-center",
  padding: "py-12 md:py-16 lg:py-24",
} as const

// Configuración del header
export const header = {
  base: "fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-sm border-b border-white/10",
  container: "mx-auto px-4 py-1 w-[98%]",
  navLink: "text-white hover:text-gray-300 transition-colors duration-200 font-medium",
  dropdown:
    "absolute top-full left-0 mt-2 w-48 bg-black/80 backdrop-blur-sm border border-white/10 rounded-lg shadow-lg",
  dropdownItem:
    "block px-4 py-3 text-white hover:bg-white/10 transition-colors duration-200 first:rounded-t-lg last:rounded-b-lg w-full text-left",
} as const

// Configuración de footer
export const footer = {
  base: "bg-black border-t border-white/10",
  container: "container mx-auto px-4 py-8",
  socialLink:
    "w-10 h-10 bg-white/10 rounded-full flex items-center justify-center text-white hover:bg-white/20 transition-colors duration-200",
} as const

// Configuración de botones
export const buttons = {
  primary: "bg-white text-black hover:bg-gray-200 font-semibold px-4 md:px-6 py-2 md:py-3 text-sm md:text-base",
  secondary:
    "border-white text-white hover:bg-white/10 font-semibold px-4 md:px-6 py-2 md:py-3 bg-transparent text-sm md:text-base",
} as const

// Configuración de cards
export const cards = {
  base: "bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 md:p-8 hover:bg-white/10 hover:border-white/20 transition-all",
} as const

// Exportar todo como un objeto de configuración
export const themeConfig = {
  colors,
  typography,
  spacing,
  borders,
  shadows,
  breakpoints,
  transitions,
  sections,
  header,
  footer,
  buttons,
  cards,
} as const

export default themeConfig
