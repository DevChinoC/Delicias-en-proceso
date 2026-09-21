import type { Category } from '../../data/categories'

interface CategoryFilterProps {
  categories: Category[]
  active: string
  onChange: (id: string) => void
}

function CategoryFilter({ categories, active, onChange }: CategoryFilterProps) {
  return (
    <div
      style={{
        display: 'flex',
        flexWrap: 'wrap',
        gap: '.625rem',
        marginBottom: '2.5rem',
      }}
    >
      {categories.map((cat) => (
        <button
          key={cat.id}
          onClick={() => onChange(cat.id)}
          className={`pill ${active === cat.id ? 'pill-active' : 'pill-inactive'}`}
        >
          {cat.label}
        </button>
      ))}
    </div>
  )
}

export default CategoryFilter
