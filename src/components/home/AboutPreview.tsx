import { Link } from 'react-router-dom'
import logo from '../../assets/logo.png'

const features = [
  {
    icon: '✦',
    title: 'Ingredientes de calidad',
    desc: 'Usamos sólo ingredientes frescos y de la mejor calidad en cada preparación.',
  },
  {
    icon: '✦',
    title: 'Diseños únicos',
    desc: 'Cada pieza es una obra de arte. Adaptamos el diseño a tu gusto y ocasión.',
  },
  {
    icon: '✦',
    title: 'Hecho con amor',
    desc: 'La pasión por la repostería se nota en cada bocado. Es nuestra promesa.',
  },
]

function AboutPreview() {
  return (
    <section className="section" style={{ background: 'var(--color-cream-dark)' }}>
      <div className="container">
        <div className="grid-2" style={{ gap: '4rem' }}>
          {/* Visual — logo as the visual */}
          <div className="about-visual" style={{ background: 'transparent' }}>
            <img
              src={logo}
              alt="Delicias en proceso"
              style={{ width: '80%', maxWidth: 340, borderRadius: '50%', boxShadow: '0 12px 40px rgba(192,83,90,.15)' }}
            />
          </div>

          {/* Text */}
          <div>
            <span className="section-label">Quiénes somos</span>
            <h2 className="section-title">
              Una historia{' '}
              <em className="font-serif" style={{ fontStyle: 'italic', color: 'var(--color-rose)' }}>
                dulce
              </em>
            </h2>
            <p style={{ color: 'var(--color-text-muted)', lineHeight: 1.8, marginBottom: '2rem' }}>
              Nacimos de la pasión por la repostería y el deseo de
              compartir momentos únicos. Cada creación lleva horas de dedicación
              y los mejores ingredientes para que disfrutes una experiencia
              verdaderamente especial.
            </p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '.75rem', marginBottom: '2rem' }}>
              {features.map((f) => (
                <div key={f.title} className="feature-item">
                  <div
                    className="feature-icon"
                    style={{
                      fontFamily: 'serif',
                      fontSize: '1rem',
                      color: 'var(--color-rose)',
                      fontWeight: 700,
                    }}
                  >
                    {f.icon}
                  </div>
                  <div>
                    <p style={{ fontWeight: 600, color: 'var(--color-mocha)', marginBottom: '.2rem' }}>
                      {f.title}
                    </p>
                    <p style={{ fontSize: '.875rem', color: 'var(--color-text-muted)' }}>
                      {f.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <Link to="/nosotros" className="btn btn-primary">
              Conoce más
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutPreview
