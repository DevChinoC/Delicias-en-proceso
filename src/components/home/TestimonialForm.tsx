import { useState } from 'react'

// ─────────────────────────────────────────────
// Componente: TestimonialForm
// Formulario para enviar un nuevo comentario/testimonio
// ─────────────────────────────────────────────

interface FormData {
  nombre: string
  comentario: string
  calificacion: number
}

interface Props {
  onSubmit: (data: FormData) => Promise<{ success: boolean; requiresApproval: boolean }>
  onClose: () => void
}

export function TestimonialForm({ onSubmit, onClose }: Props) {
  const [author, setAuthor] = useState('')
  const [text, setText] = useState('')
  const [stars, setStars] = useState(5)
  const [hoverStars, setHoverStars] = useState(0)
  const [submitting, setSubmitting] = useState(false)
  const [submitted, setSubmitted] = useState(false)
  const [requiresApproval, setRequiresApproval] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!text.trim()) return

    setSubmitting(true)
    const result = await onSubmit({
      nombre: author.trim() || 'Cliente satisfecho',
      comentario: text.trim(),
      calificacion: stars,
    })

    setSubmitting(false)
    if (result.success) {
      setSubmitted(true)
      setRequiresApproval(result.requiresApproval)
      setText('')
      setAuthor('')
      setStars(5)
      setTimeout(() => {
        setSubmitted(false)
        onClose()
      }, 5000)
    }
  }

  return (
    <div
      className="card"
      style={{
        maxWidth: '600px',
        margin: '0 auto 3rem',
        padding: '2rem',
        background: '#ffffff',
        border: '1px solid rgba(184, 76, 107, 0.15)',
        boxShadow: '0 8px 30px rgba(44, 20, 10, 0.08)',
        borderRadius: 'var(--radius-lg)',
      }}
    >
      <h3
        style={{
          fontFamily: 'var(--font-serif)',
          fontSize: '1.4rem',
          color: 'var(--color-mocha)',
          marginBottom: '0.5rem',
          textAlign: 'center',
        }}
      >
        Escribe tu experiencia
      </h3>
      <p
        style={{
          fontSize: '0.85rem',
          color: 'var(--color-text-muted)',
          marginBottom: '1.5rem',
          textAlign: 'center',
        }}
      >
        No necesitas crear una cuenta. Tu comentario aparecerá tras una revisión rápida.
      </p>

      {submitted ? (
        <div
          style={{
            background: 'rgba(37, 211, 102, 0.1)',
            border: '1px solid #25d366',
            color: '#1b7a3a',
            padding: '1rem',
            borderRadius: 'var(--radius-md)',
            textAlign: 'center',
            fontWeight: 500,
          }}
        >
          🎉 ¡Muchas gracias por tu opinión!{' '}
          {requiresApproval
            ? 'Tu comentario está pendiente de aprobación y aparecerá pronto.'
            : 'Tu comentario ha sido guardado.'}
        </div>
      ) : (
        <form
          onSubmit={handleSubmit}
          style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}
        >
          {/* Calificación con estrellas */}
          <div>
            <label
              style={{
                display: 'block',
                fontSize: '0.85rem',
                fontWeight: 600,
                color: 'var(--color-mocha)',
                marginBottom: '0.4rem',
              }}
            >
              Calificación
            </label>
            <div style={{ display: 'flex', gap: '0.25rem', fontSize: '1.5rem', cursor: 'pointer' }}>
              {[1, 2, 3, 4, 5].map((starVal) => {
                const isFilled = (hoverStars || stars) >= starVal
                return (
                  <span
                    key={starVal}
                    onClick={() => setStars(starVal)}
                    onMouseEnter={() => setHoverStars(starVal)}
                    onMouseLeave={() => setHoverStars(0)}
                    style={{
                      display: 'inline-block',
                      color: isFilled ? 'var(--color-gold, #c9961f)' : '#e0e0e0',
                      transition: 'color 0.15s ease, transform 0.15s ease',
                      transform: isFilled ? 'scale(1.1)' : 'scale(1)',
                    }}
                  >
                    ★
                  </span>
                )
              })}
            </div>
          </div>

          {/* Nombre (opcional) */}
          <div>
            <label
              htmlFor="comment-author"
              style={{
                display: 'block',
                fontSize: '0.85rem',
                fontWeight: 600,
                color: 'var(--color-mocha)',
                marginBottom: '0.4rem',
              }}
            >
              Tu nombre (opcional)
            </label>
            <input
              id="comment-author"
              type="text"
              value={author}
              onChange={(e) => setAuthor(e.target.value)}
              placeholder="Ej. María G. (o déjalo en blanco)"
              style={{
                width: '100%',
                padding: '0.75rem 1rem',
                borderRadius: 'var(--radius-md)',
                border: '1px solid rgba(0,0,0,0.12)',
                fontSize: '0.9rem',
                outline: 'none',
                fontFamily: 'inherit',
                boxSizing: 'border-box',
              }}
            />
          </div>

          {/* Comentario */}
          <div>
            <label
              htmlFor="comment-text"
              style={{
                display: 'block',
                fontSize: '0.85rem',
                fontWeight: 600,
                color: 'var(--color-mocha)',
                marginBottom: '0.4rem',
              }}
            >
              Tu comentario *
            </label>
            <textarea
              id="comment-text"
              required
              rows={4}
              value={text}
              onChange={(e) => setText(e.target.value)}
              placeholder="¿Qué te parecieron nuestros postres o el servicio?"
              style={{
                width: '100%',
                padding: '0.75rem 1rem',
                borderRadius: 'var(--radius-md)',
                border: '1px solid rgba(0,0,0,0.12)',
                fontSize: '0.9rem',
                outline: 'none',
                resize: 'vertical',
                fontFamily: 'inherit',
                boxSizing: 'border-box',
              }}
            />
          </div>

          <button
            type="submit"
            disabled={submitting}
            className="btn btn-primary"
            style={{
              width: '100%',
              justifyContent: 'center',
              marginTop: '0.5rem',
              opacity: submitting ? 0.7 : 1,
            }}
          >
            {submitting ? 'Publicando...' : 'Publicar comentario'}
          </button>
        </form>
      )}
    </div>
  )
}
