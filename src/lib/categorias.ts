export const CATEGORIAS = {
  derivativos: 'Derivativos',
  macro: 'Macro',
  cripto: 'Cripto',
  exterior: 'Exterior',
  cases: 'Cases Brasil',
  'cases-exterior': 'Cases Exterior',
} as const;

export type CategoriaSlug = keyof typeof CATEGORIAS;

export const CATEGORIA_SLUGS = Object.keys(CATEGORIAS) as CategoriaSlug[];
