import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const blog = defineCollection({
  loader: glob({ base: './src/content/blog', pattern: '**/*.{md,mdx}' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    // data de publicacao (usar data real — nao projetar data futura)
    pubDate: z.coerce.date(),
    updatedDate: z.coerce.date().optional(),
    // categoria alinhada as pastas do vault (03- Cases, 3.8 Derivativos etc.)
    categoria: z.enum([
      'derivativos',
      'macro',
      'renda-e-carregamento',
      'cases',
      'filosofia',
    ]),
    tags: z.array(z.string()).default([]),
    // imagem de capa (reaproveitar o pipeline de ilustracao ja usado nos carrosseis/reels)
    heroImage: z.string().optional(),
    // marca posts com numero ilustrativo/exemplo — mesma logica dos PDFs de cliente
    contemDadosIlustrativos: z.boolean().default(false),
    draft: z.boolean().default(false),
  }),
});

export const collections = { blog };
