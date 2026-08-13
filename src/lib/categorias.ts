export const CATEGORIAS = {
  derivativos: 'Derivativos',
  macro: 'Macro',
  'renda-e-carregamento': 'Renda e Carregamento',
  cases: 'Cases',
  filosofia: 'Filosofia',
} as const;

export type CategoriaSlug = keyof typeof CATEGORIAS;

export const CATEGORIA_SLUGS = Object.keys(CATEGORIAS) as CategoriaSlug[];
