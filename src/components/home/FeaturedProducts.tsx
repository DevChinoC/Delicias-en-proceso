import { Link } from 'react-router-dom'

import { products } from '../../data/products'
import ProductCard from '../products/ProductCard'

function FeaturedProducts() {
  const featured = products.filter((p) => p.featured)

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
          {featured.map((product) => (
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
