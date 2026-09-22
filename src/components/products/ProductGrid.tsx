import { useState } from 'react'
import { products } from '../../data/products'
import { categories } from '../../data/categories'
import ProductCard from './ProductCard'

function ProductGrid() {
  const [selectedCategory, setSelectedCategory] = useState('todos')

  const filteredProducts = selectedCategory === 'todos'
    ? products
    : products.filter((p) => p.category === selectedCategory)

  return (
    <div>
      {/* Category filter pills */}
      <div
        style={{
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'center',
          gap: '0.75rem',
          marginBottom: '2.5rem',
        }}
      >
        {categories.map((cat) => {
          const isActive = selectedCategory === cat.id
          return (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id)}
              style={{
                padding: '0.5rem 1.25rem',
                borderRadius: '9999px',
                border: isActive ? '1px solid var(--color-rose, #d87093)' : '1px solid rgba(0,0,0,0.1)',
                background: isActive ? 'var(--color-rose, #d87093)' : '#fff',
                color: isActive ? '#fff' : 'var(--color-text, #333)',
                fontWeight: isActive ? 600 : 400,
                cursor: 'pointer',
                transition: 'all 0.2s ease',
                fontSize: '0.9rem',
                boxShadow: isActive ? '0 4px 12px rgba(216, 112, 147, 0.25)' : 'none',
              }}
            >
              {cat.label}
            </button>
          )
        })}
      </div>

      {filteredProducts.length === 0 ? (
        <div style={{ textAlign: 'center', padding: '5rem 0', color: 'var(--color-text-muted)' }}>
          <p>No hay productos disponibles en esta categoría por el momento.</p>
        </div>
      ) : (
        <div className="grid-3">
          {filteredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      )}
    </div>
  )
}

export default ProductGrid

