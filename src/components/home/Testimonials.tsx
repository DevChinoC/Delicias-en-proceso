const testimonials = [
  {
    text: 'El pastel de boda fue absolutamente perfecto. Todos los invitados preguntaron por el contacto. ¡Definitivamente los recomiendo!',
    author: 'María G.',
    stars: 5,
  },
  {
    text: 'Los cupcakes para el cumpleaños de mi hija quedaron hermosos y deliciosos. El diseño superó mis expectativas.',
    author: 'Laura M.',
    stars: 5,
  },
  {
    text: 'Las galletas decoradas son una obra de arte. Pedimos cada quince días y nunca nos decepcionan.',
    author: 'Sofía R.',
    stars: 5,
  },
]


function Testimonials() {
  return (
    <section className="section">
      <div className="container">
        <div className="section-header text-center">
          <span className="section-label">Lo que dicen nuestros clientes</span>
          <h2 className="section-title">Historias dulces</h2>
        </div>

        <div className="grid-3">
          {testimonials.map((t, i) => (
            <div key={i} className="quote-card">
              <div className="quote-stars">{'★'.repeat(t.stars)}</div>
              <p className="quote-text">"{t.text}"</p>
              <p className="quote-author">— {t.author}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Testimonials
