import { useState } from 'react'
import { useTestimonialsData } from '../../hooks/useTestimonialsData'
import { useTestimonialsCarousel } from '../../hooks/useTestimonialsCarousel'
import { TestimonialCarousel } from './TestimonialCarousel'
import { TestimonialForm } from './TestimonialForm'

// ─────────────────────────────────────────────
// Sección: Testimonios
// Orquesta los hooks de datos y carrusel con los
// sub-componentes de UI. Sin lógica de negocio propia.
// ─────────────────────────────────────────────

function Testimonials() {
  const { comments, submitComment } = useTestimonialsData()
  const carousel = useTestimonialsCarousel(comments)
  const [showForm, setShowForm] = useState(false)

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

        {/* Botón de alternancia del formulario */}
        <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
          {!showForm ? (
            <button
              onClick={() => setShowForm(true)}
              className="btn btn-primary"
              style={{ padding: '0.75rem 1.75rem' }}
            >
              ✍️ Dejar un comentario
            </button>
          ) : (
            <button
              onClick={() => setShowForm(false)}
              className="btn btn-ghost"
              style={{ fontSize: '0.9rem' }}
            >
              ✕ Cerrar formulario
            </button>
          )}
        </div>

        {/* Formulario */}
        {showForm && (
          <TestimonialForm
            onSubmit={submitComment}
            onClose={() => setShowForm(false)}
          />
        )}

      </div>
    </section>
  )
}

export default Testimonials
