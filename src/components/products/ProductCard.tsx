import { useState, useRef } from 'react'
import type { Product } from '../../data/products'
import { buildWhatsAppLink } from '../../lib/whatsapp'

interface ProductCardProps {
  product: Product
}

function ProductCard({ product }: ProductCardProps) {
  const [transform, setTransform] = useState('')
  const [imgTransform, setImgTransform] = useState('')
  const [glarePosition, setGlarePosition] = useState({ x: 50, y: 50, opacity: 0 })
  const [shadow, setShadow] = useState('')
  const [isHovered, setIsHovered] = useState(false)
  const [isTouched, setIsTouched] = useState(false)
  const cardRef = useRef<HTMLDivElement>(null)

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return
    const rect = cardRef.current.getBoundingClientRect()
    const width = rect.width
    const height = rect.height
    
    // Calculate cursor position relative to card center (-1 to 1)
    const mouseX = e.clientX - rect.left
    const mouseY = e.clientY - rect.top
    const xPct = (mouseX / width - 0.5) * 2
    const yPct = (mouseY / height - 0.5) * 2

    // 3D tilt of the card container (smooth 10 deg max)
    const rotateY = xPct * 10
    const rotateX = -yPct * 10

    // Photo displacement in OPPOSITE direction (-10px to +10px) to create deep parallax
    const imgX = -xPct * 10
    const imgY = -yPct * 10

    // Dynamic adaptive shadow
    const shadowX = -xPct * 18
    const shadowY = yPct * 22 + 12

    setTransform(`perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.02, 1.02, 1.02)`)
    setImgTransform(`scale(1.08) translate3d(${imgX}px, ${imgY}px, 0px)`)
    setShadow(`${shadowX}px ${shadowY}px 28px rgba(74, 48, 32, 0.16)`)
    setGlarePosition({
      x: (mouseX / width) * 100,
      y: (mouseY / height) * 100,
      opacity: 0.18,
    })
    setIsHovered(true)
  }

  const handleMouseLeave = () => {
    setTransform('perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)')
    setImgTransform('scale(1) translate3d(0px, 0px, 0px)')
    setShadow('')
    setGlarePosition({ x: 50, y: 50, opacity: 0 })
    setIsHovered(false)
  }

  const handleTouchStart = () => {
    setIsTouched(true)
  }

  const handleTouchEnd = () => {
    setTimeout(() => setIsTouched(false), 300)
  }

  return (
    <article
      ref={cardRef}
      className={`card card-3d ${isTouched ? 'card-touch-active' : ''}`}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
      style={{
        transform: transform || undefined,
        boxShadow: shadow || undefined,
        transition: transform ? 'transform 0.1s ease-out, box-shadow 0.1s ease-out' : 'transform 0.5s cubic-bezier(0.25, 1, 0.5, 1), box-shadow 0.5s ease',
        transformStyle: 'preserve-3d',
        position: 'relative',
        willChange: 'transform, box-shadow',
      }}
    >
      {/* Subtle premium light glare layer on the image frame */}
      <div
        aria-hidden="true"
        style={{
          position: 'absolute',
          inset: 0,
          borderRadius: 'var(--radius-lg)',
          background: `radial-gradient(circle at ${glarePosition.x}% ${glarePosition.y}%, rgba(255, 255, 255, 0.35) 0%, transparent 65%)`,
          opacity: glarePosition.opacity,
          transition: 'opacity 0.2s ease',
          pointerEvents: 'none',
          zIndex: 10,
        }}
      />

      {/* Photography frame */}
      <div
        className="card-img"
        style={{
          overflow: 'hidden',
          position: 'relative',
        }}
      >
        {product.image ? (
          <img
            src={product.image}
            alt={product.name}
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              transform: imgTransform || 'scale(1)',
              transition: imgTransform ? 'transform 0.1s ease-out' : 'transform 0.5s cubic-bezier(0.25, 1, 0.5, 1)',
              willChange: 'transform',
            }}
          />
        ) : (
          <div
            style={{
              width: '100%',
              height: '100%',
              background: 'linear-gradient(135deg, #faebd6 0%, #f5d5d5 100%)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              transform: imgTransform || 'scale(1)',
              transition: imgTransform ? 'transform 0.1s ease-out' : 'transform 0.5s cubic-bezier(0.25, 1, 0.5, 1)',
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

      {/* Stable Text Content (Kept stable in place without 3D translation) */}
      <div className="card-body">
        <h3 className="card-title">{product.name}</h3>
        <p className="card-desc line-clamp-2">{product.description}</p>
      </div>

      {/* Card Footer con CTA a WhatsApp */}
      <div className="card-footer" style={{ justifyContent: 'space-between', alignItems: 'center' }}>
        <span
          style={{
            fontSize: '.8rem',
            color: 'var(--color-text-muted)',
            fontStyle: 'italic',
          }}
        >
          Consulta disponibilidad
        </span>
        <a
          href={buildWhatsAppLink({
            productName: product.name,
            description: product.description,
            imageUrl: new URL(product.image, window.location.origin).href,
          })}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`Pedir ${product.name} por WhatsApp`}
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '.4rem',
            fontSize: '.85rem',
            fontWeight: 600,
            color: '#25d366',
            transform: isHovered ? 'translateX(3px)' : 'translateX(0)',
            transition: 'transform 0.2s ease, color 0.2s ease',
            textDecoration: 'none',
          }}
        >
          {/* WhatsApp icon */}
          <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
            <path d="M12 0C5.373 0 0 5.373 0 12c0 2.123.554 4.116 1.524 5.843L.057 23.486a.5.5 0 0 0 .611.611l5.638-1.467A11.945 11.945 0 0 0 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.818a9.794 9.794 0 0 1-5.017-1.381l-.36-.214-3.733.971.993-3.634-.235-.374A9.794 9.794 0 0 1 2.182 12C2.182 6.57 6.57 2.182 12 2.182S21.818 6.57 21.818 12 17.43 21.818 12 21.818z"/>
          </svg>
          Consultar →
        </a>
      </div>
    </article>
  )
}

export default ProductCard
