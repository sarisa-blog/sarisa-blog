// @ts-check
import { defineConfig } from 'astro/config';

import sitemap from '@astrojs/sitemap';

// TODO: trocar pelo dominio definitivo assim que a Sarisa registrar
// (necessario pra sitemap/RSS/canonical gerarem URLs absolutas corretas)
const SITE_URL = 'https://blog.sarisa.com.br';

// https://astro.build/config
export default defineConfig({
  site: SITE_URL,
  integrations: [sitemap()],
});