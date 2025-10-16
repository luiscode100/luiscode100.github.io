import { defineConfig } from 'astro/config'
import tailwind from '@astrojs/tailwind'
import robotsTxt from 'astro-robots-txt'

// Detecta si estamos en producción (GitHub Pages) o en local
const isProd = process.env.NODE_ENV === 'production'

export default defineConfig({
  integrations: [tailwind(), robotsTxt()],
  site: 'https://luiscode100.github.io',
})
