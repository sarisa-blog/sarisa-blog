// @ts-check
import { defineConfig } from 'astro/config';

import sitemap from '@astrojs/sitemap';

// Dominio registrado em 12/08/2026 (GoDaddy/.com.br) — usado como raiz do site,
// nao subdominio, pra concentrar toda a autoridade de SEO num lugar so.
const SITE_URL = 'https://sarisa.com.br';

// https://astro.build/config
export default defineConfig({
  site: SITE_URL,
  integrations: [sitemap()],
});