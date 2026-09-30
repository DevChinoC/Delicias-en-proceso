import type { CommentItem } from '../../types/testimonials'

// ─────────────────────────────────────────────
// Componente: TestimonialCarousel
// Renderiza el carrusel de testimonios con animaciones,
// controles de navegación y barra de progreso
// ─────────────────────────────────────────────

interface Props {
  comments: CommentItem[]
  activeIndex: number
  isAnimating: boolean
  animDir: 'next' | 'prev'
  carouselInterval: number
  onNext: () => void
  onPrev: () => void
  onGoTo: (index: number) => void
  onMouseEnter: () => void
  onMouseLeave: () => void
}

export function TestimonialCarousel({
  comments,
  activeIndex,
  isAnimating,
  animDir,
  carouselInterval,
  onNext,
  onPrev,
  onGoTo,
  onMouseEnter,
  onMouseLeave,
}: Props) {
  const current = comments[activeIndex] ?? comments[0]

  const cardClass = isAnimating
    ? animDir === 'next'
      ? 'testimonial-card anim-enter-next'
      : 'testimonial-card anim-enter-prev'
    : 'testimonial-card anim-active'

  return (
    <div className="testimonial-carousel">
      {/* Tarjeta activa */}
      <div className="testimonial-card-wrap">
        <div
          className={cardClass}
          onMouseEnter={onMouseEnter}
          onMouseLeave={onMouseLeave}
        >
          <div className="testimonial-quote-icon">"</div>
          <div className="testimonial-stars">
            {'★'.repeat(current.calificacion || 5)}
            {'☆'.repeat(Math.max(0, 5 - (current.calificacion || 5)))}
          </div>
          <p className="testimonial-text">{current.comentario}</p>
          <p className="testimonial-author">— {current.nombre || 'Cliente satisfecho'}</p>
        </div>
      </div>

      {/* Barra de progreso — key fuerza restart de animación CSS */}
      <div
        key={activeIndex}
        className="carousel-progress"
        style={{ animationDuration: `${carouselInterval}ms` }}
      />

      {/* Controles */}
      <div className="carousel-controls">
        <button className="carousel-btn" onClick={onPrev} aria-label="Comentario anterior">
          ‹
        </button>

        <div className="carousel-dots">
          {comments.map((_, i) => (
            <button
              key={i}
              className={`carousel-dot${i === activeIndex ? ' active' : ''}`}
              onClick={() => onGoTo(i)}
              aria-label={`Ir al comentario ${i + 1}`}
            />
          ))}
        </div>

        <button className="carousel-btn" onClick={onNext} aria-label="Siguiente comentario">
          ›
        </button>
      </div>
    </div>
  )
}
