import { useState } from 'react'
import { Link } from 'react-router-dom'

import { products, type Product } from '../../data/products'
import ProductCard from '../products/ProductCard'

// Función de mezcla aleatoria (Fisher-Yates)
function shuffleArray<T>(array: T[]): T[] {
  const arr = [...array]
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[arr[i], arr[j]] = [arr[j], arr[i]]
  }
  return arr
}

function FeaturedProducts() {
  // Inicializa con una selección aleatoria de 6 productos cada vez que se monta la página de inicio
  const [displayedProducts] = useState<Product[]>(() =>
    shuffleArray(products).slice(0, 6)
  )

  return (
    <section className="section">
      <div className="container">
        {/* Header */}
        <div className="section-header">
          <span className="section-label">Lo más pedido</span>
          <h2 className="section-title">Nuestras creaciones favoritas</h2>
          <p className="section-sub">
            Seleccionadas con cariño. Estas son las piezas que más enamoran
            a nuestros clientes.
          </p>
        </div>

        {/* Cards */}
        <div className="grid-3">
          {displayedProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        {/* CTA */}
        <div
          style={{
            textAlign: 'center',
            marginTop: '3rem',
          }}
        >
          <Link to="/productos" className="btn btn-outline">
            Ver catálogo completo →
          </Link>
        </div>
      </div>
    </section>
  )
}

export default FeaturedProducts

