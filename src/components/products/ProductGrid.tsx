import { products } from '../../data/products'
import ProductCard from './ProductCard'

function ProductGrid() {
  return (
    <div>
      {products.length === 0 ? (
        <div style={{ textAlign: 'center', padding: '5rem 0', color: 'var(--color-text-muted)' }}>
          <p>No hay productos disponibles por el momento.</p>
        </div>
      ) : (
        <div className="grid-3">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      )}
    </div>
  )
}

export default ProductGrid
