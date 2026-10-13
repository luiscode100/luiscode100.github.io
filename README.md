
### Portfolio de Luis

## Estructura

```text
src/
├── components/
│   ├── layout/   # Estructura global y contenedores
│   ├── sections/ # Secciones completas de la página
│   ├── ui/       # Piezas visuales reutilizables
│   └── icons/    # Iconos SVG
├── data/         # Contenido tipado del portfolio
├── layouts/      # Estructura común de las páginas
└── pages/        # Rutas de Astro
```

Los datos editables están separados de la presentación:

- [`src/data/projects.ts`](./src/data/projects.ts) contiene proyectos y tecnologías.
- [`src/data/experience.ts`](./src/data/experience.ts) contiene la experiencia profesional.

Para añadir contenido nuevo, modifica esos archivos sin mezclarlo con la plantilla visual de los componentes.