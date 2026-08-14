import type { CategoriaSlug } from './categorias';

// Subtópicos por categoria (os "retângulos" dentro da página da categoria).
// Só categorias listadas aqui ganham o acordeão; as demais continuam com a
// lista simples de posts (comportamento antigo, sem regressão).
// Ordem do array = ordem de exibição (numeração 1, 2, 3...).
export interface Subtopico {
  slug: string;
  label: string;
}

export const SUBTOPICOS: Partial<Record<CategoriaSlug, Subtopico[]>> = {
  derivativos: [
    { slug: 'opcoes', label: 'Opções' },
    { slug: 'opcoes-na-pratica', label: 'Opções na prática' },
  ],
};
