export interface Category {
  id: string
  label: string
}

export const categories: Category[] = [
  { id: 'todos', label: 'Todos' },
  { id: 'pasteles', label: 'Pasteles' },
  { id: 'cupcakes', label: 'Cupcakes' },
  { id: 'galletas', label: 'Galletas' },
  { id: 'postres', label: 'Postres' },
]
