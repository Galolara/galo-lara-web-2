# Guía de Uso del Sistema de Estilos

Este documento explica cómo usar el archivo de configuración de estilos centralizado (`lib/theme-config.ts`) en tu proyecto.

## Importación

```typescript
import { themeConfig, colors, typography, buttons, cards } from '@/lib/theme-config'
import { cn } from '@/lib/cn'
```

## Ejemplos de Uso

### 1. Usando Colores

```tsx
import { colors } from '@/lib/theme-config'

// Colores de marca
<div style={{ backgroundColor: colors.brand.primary }}>
  Contenido con dorado
</div>

<div style={{ backgroundColor: colors.brand.secondary }}>
  Contenido con fondo negro
</div>

// En clases de Tailwind
<div className={colors.text.white}>
  Texto blanco
</div>

<div className={colors.background.dark}>
  Fondo negro
</div>
```

### 2. Usando Tipografía

```tsx
import { typography } from '@/lib/theme-config'

// Títulos
<h1 className={typography.hero}>
  Título Hero Gigante
</h1>

<h1 className={typography.h1}>
  Título Principal
</h1>

<h2 className={typography.h2}>
  Subtítulo
</h2>

// Texto del cuerpo
<p className={typography.body}>
  Contenido del cuerpo con espaciado óptimo
</p>

// Marca
<span className={typography.brand}>
  Nombre de Marca
</span>
```

### 3. Usando Configuración de Botones

```tsx
import { buttons } from '@/lib/theme-config'
import { Button } from '@/components/ui/button'

// Usando configuración actualizada de botones
<Button className={buttons.primary}>
  Botón Primario (Blanco)
</Button>

<Button className={buttons.secondary}>
  Botón Secundario (Transparente con borde)
</Button>
```

### 4. Usando Configuración de Cards

```tsx
import { cards } from '@/lib/theme-config'

<div className={cards.base}>
  Contenido de la tarjeta con efecto glass
</div>
```

### 5. Usando Configuración de Secciones

```tsx
import { sections, spacing } from '@/lib/theme-config'

<section className={spacing.section}>
  <div className={sections.container}>
    Contenido con espaciado consistente
  </div>
</section>
```

### 6. Header y Footer

```tsx
import { themeConfig } from '@/lib/theme-config'

// Header
<header className={themeConfig.header.base}>
  <nav className={themeConfig.header.container}>
    <a className={themeConfig.header.navLink}>Link de Navegación</a>
  </nav>
</header>

// Footer
<footer className={themeConfig.footer.base}>
  <div className={themeConfig.footer.container}>
    <a className={themeConfig.footer.socialLink}>
      Ícono Social
    </a>
  </div>
</footer>
```

### 7. Responsive Design

```tsx
// Usar clases de Tailwind responsive
<div className="text-base md:text-lg lg:text-xl">
  Texto responsive
</div>

<div className="py-4 md:py-8 lg:py-12">
  Espaciado responsive
</div>
```

## Paleta de Colores Actual

### Colores de Marca
- **Primary**: `#C5A572` - Dorado champagne
- **Secondary**: `#000000` - Negro

### Colores de Texto
- **White**: Blanco puro
- **Muted**: Gris claro (#D1D5DB)
- **Dark**: Negro

### Colores de Fondo
- **Dark**: Negro sólido
- **Overlay**: Negro semi-transparente (90%)

## Ventajas

1. **Consistencia**: Todos los componentes usan los mismos valores
2. **Mantenibilidad**: Cambios en un solo lugar afectan toda la aplicación
3. **Type Safety**: TypeScript proporciona autocompletado y verificación de tipos
4. **Documentación**: El código es auto-documentado con nombres descriptivos
5. **Escalabilidad**: Fácil de extender con nuevos valores

## Mejores Prácticas

1. Siempre importar las configuraciones necesarias al inicio del archivo
2. Usar la función `cn()` para combinar clases de manera eficiente
3. Preferir clases de Tailwind sobre estilos inline cuando sea posible
4. Usar las configuraciones predefinidas para mantener consistencia
5. Evitar valores hardcodeados de colores, tamaños o espaciados

## Actualización de Estilos

Para actualizar los estilos globalmente:

1. Modifica `lib/theme-config.ts` con los nuevos valores
2. Los cambios se reflejarán automáticamente en todos los componentes que usen la configuración
3. Verifica que no haya conflictos con estilos hardcodeados en componentes individuales

## Ejemplo Completo de Componente

```tsx
import { themeConfig, typography, buttons, cards, spacing } from '@/lib/theme-config'
import { Button } from '@/components/ui/button'

export function MiComponente() {
  return (
    <section className={spacing.section}>
      <div className={spacing.container}>
        <h2 className={typography.h2}>
          Mi Título
        </h2>
        <p className={typography.body}>
          Descripción del componente con tipografía consistente
        </p>
        <div className={cards.base}>
          <p>Contenido en una tarjeta</p>
        </div>
        <div className="flex gap-4 mt-6">
          <Button className={buttons.primary}>
            Acción Principal
          </Button>
          <Button className={buttons.secondary}>
            Acción Secundaria
          </Button>
        </div>
      </div>
    </section>
  )
}
