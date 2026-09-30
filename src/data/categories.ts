export interface Category {
  id: string
  label: string
}

export const categories: Category[] = [
  { id: 'todos', label: 'Todos' },
  { id: 'gelatinas', label: 'Gelatinas' },
  { id: 'pasteles', label: 'Pasteles' },
  { id: 'postres', label: 'Postres' },
]
