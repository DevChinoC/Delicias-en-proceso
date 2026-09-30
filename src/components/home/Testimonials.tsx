import { useState, useEffect } from 'react'
import { useTestimonialsData } from '../../hooks/useTestimonialsData'
import { useTestimonialsCarousel } from '../../hooks/useTestimonialsCarousel'
import { TestimonialCarousel } from './TestimonialCarousel'
import { TestimonialForm } from './TestimonialForm'

// ─────────────────────────────────────────────
// Sección: Testimonios
// Orquesta los hooks de datos y carrusel con los
// sub-componentes de UI. El formulario se abre
// como popup/modal centrado en pantalla.
// ─────────────────────────────────────────────

function Testimonials() {
  const { comments, submitComment } = useTestimonialsData()
  const carousel = useTestimonialsCarousel(comments)
  const [showForm, setShowForm] = useState(false)

  // Bloquear scroll del body cuando el modal está abierto
  useEffect(() => {
    if (showForm) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => { document.body.style.overflow = '' }
  }, [showForm])

  // Cerrar con tecla Escape
  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setShowForm(false)
    }
    if (showForm) window.addEventListener('keydown', handleKey)
    return () => window.removeEventListener('keydown', handleKey)
  }, [showForm])

  return (
    <section className="section">
      <div className="container">

        {/* Encabezado */}
        <div className="section-header text-center">
          <span className="section-label">Lo que dicen nuestros clientes</span>
          <h2 className="section-title">Historias dulces</h2>
          <p className="section-sub" style={{ textAlign: 'center', margin: '0 auto' }}>
            Tu opinión es muy importante para nosotros.{' '}
            ¡Sin necesidad de registrarte, comparte tu experiencia!
          </p>
        </div>

        {/* Carrusel */}
        <TestimonialCarousel
          comments={comments}
          activeIndex={carousel.activeIndex}
          isAnimating={carousel.isAnimating}
          animDir={carousel.animDir}
          carouselInterval={carousel.CAROUSEL_INTERVAL}
          onNext={() => { carousel.stopAutoPlay(); carousel.goNext(); carousel.startAutoPlay() }}
          onPrev={() => { carousel.stopAutoPlay(); carousel.goPrev(); carousel.startAutoPlay() }}
          onGoTo={(i) => { carousel.stopAutoPlay(); carousel.goTo(i); carousel.startAutoPlay() }}
          onMouseEnter={carousel.stopAutoPlay}
          onMouseLeave={carousel.startAutoPlay}
        />

        {/* Botón abrir popup */}
        <div style={{ textAlign: 'center', marginTop: '2rem' }}>
          <button
            id="open-testimonial-form"
            onClick={() => setShowForm(true)}
            className="btn btn-primary"
            style={{ padding: '0.75rem 1.75rem' }}
          >
            ✍️ Dejar un comentario
          </button>
        </div>

      </div>

      {/* ── Modal / Popup ── */}
      {showForm && (
        <div
          className="testimonial-modal-backdrop"
          onClick={(e) => { if (e.target === e.currentTarget) setShowForm(false) }}
          role="dialog"
          aria-modal="true"
          aria-label="Formulario de comentario"
        >
          <div className="testimonial-modal">
            <button
              className="testimonial-modal-close"
              onClick={() => setShowForm(false)}
              aria-label="Cerrar"
            >
              ✕
            </button>
            <TestimonialForm
              onSubmit={submitComment}
              onClose={() => setShowForm(false)}
            />
          </div>
        </div>
      )}
    </section>
  )
}

export default Testimonials
