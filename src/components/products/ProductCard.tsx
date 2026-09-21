import type { Product } from '../../data/products'

interface ProductCardProps {
  product: Product
}

function ProductCard({ product }: ProductCardProps) {

  return (
    <article className="card">
      {/* Image / gradient placeholder */}
      <div className="card-img">
        {product.image ? (
          <img
            src={product.image}
            alt={product.name}
            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
          />
        ) : (
          /* Soft gradient placeholder when no image is available */
          <div
            style={{
              width: '100%',
              height: '100%',
              background: 'linear-gradient(135deg, #faebd6 0%, #f5d5d5 100%)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <svg
              width="48"
              height="48"
              viewBox="0 0 24 24"
              fill="none"
              stroke="var(--color-rose-light)"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <rect x="3" y="3" width="18" height="18" rx="3" />
              <circle cx="8.5" cy="8.5" r="1.5" />
              <path d="m21 15-5-5L5 21" />
            </svg>
          </div>
        )}
      </div>

      {/* Body */}
      <div className="card-body">
        <h3 className="card-title">{product.name}</h3>
        <p className="card-desc line-clamp-2">{product.description}</p>
      </div>

      {/* Footer */}
      <div className="card-footer">
        <span
          style={{
            fontSize: '.8rem',
            color: 'var(--color-text-muted)',
            fontStyle: 'italic',
          }}
        >
          Consulta disponibilidad
        </span>
      </div>
    </article>
  )
}

export default ProductCard
