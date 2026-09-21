import ProductGrid from '../components/products/ProductGrid'

function Products() {
  return (
    <main>
      {/* Page hero */}
      <div
        style={{
          background: 'linear-gradient(135deg, #faebd6 0%, #f5d5d5 100%)',
          padding: '8rem 1.5rem 4rem',
          textAlign: 'center',
        }}
      >
        <span className="section-label">Catálogo</span>
        <h1
          className="section-title"
          style={{ fontSize: 'clamp(2rem, 5vw, 3.25rem)', maxWidth: '500px', margin: '.5rem auto 1rem' }}
        >
          Nuestros productos
        </h1>
        <p
          style={{
            color: 'var(--color-text-muted)',
            maxWidth: '480px',
            margin: '0 auto',
            lineHeight: 1.7,
          }}
        >
          Explora nuestra variedad de deliciosas creaciones y escríbenos
          para hacer tu pedido personalizado.
        </p>
      </div>

      {/* Grid */}
      <section className="section">
        <div className="container">
          <ProductGrid />
        </div>
      </section>
    </main>
  )
}

export default Products