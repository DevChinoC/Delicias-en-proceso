import { useState, useRef } from 'react'
import { Link } from 'react-router-dom'
import type { Product } from '../../data/products'

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

      {/* Card Footer with stable 'Ver producto →' CTA */}
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
        <Link
          to="/contacto"
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '.35rem',
            fontSize: '.85rem',
            fontWeight: 600,
            color: 'var(--color-rose)',
            transform: isHovered ? 'translateX(3px)' : 'translateX(0)',
            transition: 'transform 0.2s ease, color 0.2s ease',
          }}
        >
          Ver producto <span style={{ transition: 'transform 0.2s ease', transform: isHovered ? 'translateX(2px)' : 'none' }}>→</span>
        </Link>
      </div>
    </article>
  )
}

export default ProductCard
