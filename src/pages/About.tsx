import logo from '../assets/logo.png'

const values = [
  {
    title: 'Ingredientes naturales',
    desc: 'Seleccionamos con cuidado cada ingrediente. Priorizamos lo fresco y lo artesanal.',
  },
  {
    title: 'Diseño personalizado',
    desc: 'Cada pedido es único. Trabajamos contigo para que tu visión se vuelva realidad.',
  },
  {
    title: 'Trato cercano',
    desc: 'Nos importa tu satisfacción. Respondemos rápido y acompañamos tu pedido de inicio a fin.',
  },
  {
    title: 'Calidad garantizada',
    desc: 'Si no estás satisfecho, buscamos la solución. Tu felicidad es nuestra prioridad.',
  },
]


function About() {
  return (
    <main>
      {/* Hero */}
      <div
        style={{
          background: 'linear-gradient(135deg, #faebd6 0%, #f5d5d5 100%)',
          padding: '8rem 1.5rem 5rem',
          textAlign: 'center',
        }}
      >
        <span className="section-label">Nuestra historia</span>
        <h1
          className="section-title"
          style={{ fontSize: 'clamp(2rem, 5vw, 3.25rem)', margin: '.5rem auto 1rem' }}
        >
          Nosotros
        </h1>
        <p
          style={{
            color: 'var(--color-text-muted)',
            maxWidth: '540px',
            margin: '0 auto',
            lineHeight: 1.8,
          }}
        >
          Somos un emprendimiento de repostería nacido de la pasión por endulzar
          la vida de quienes nos rodean.
        </p>
      </div>

      {/* Story */}
      <section className="section">
        <div className="container" style={{ maxWidth: 860 }}>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '3rem', alignItems: 'center' }}>
            <div>
              <h2 className="section-title" style={{ marginBottom: '1rem' }}>El origen</h2>
              <p style={{ color: 'var(--color-text-muted)', lineHeight: 1.9, marginBottom: '1rem' }}>
                Todo comenzó en una cocina pequeña y con mucho amor. Lo que
                empezó como un pasatiempo se convirtió en una vocación: hacer
                feliz a cada persona con una pieza única, elaborada con los
                mejores ingredientes y dedicación genuina.
              </p>
              <p style={{ color: 'var(--color-text-muted)', lineHeight: 1.9 }}>
                Hoy atendemos pedidos personalizados para cumpleaños, bodas,
                baby showers y cualquier celebración que merezca ser endulzada
                con estilo.
              </p>
            </div>

            {/* Logo as visual */}
            <div style={{ display: 'flex', justifyContent: 'center' }}>
              <img
                src={logo}
                alt="Delicias en proceso"
                style={{
                  width: '80%',
                  maxWidth: 300,
                  borderRadius: '50%',
                  boxShadow: '0 12px 40px rgba(192,83,90,.15)',
                }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="section" style={{ background: 'var(--color-cream-dark)' }}>
        <div className="container">
          <div className="section-header text-center">
            <span className="section-label">Lo que nos define</span>
            <h2 className="section-title">Nuestros valores</h2>
          </div>

          <div className="grid-2" style={{ gap: '1.5rem' }}>
            {values.map((v) => (
              <div
                key={v.title}
                style={{
                  background: '#fff',
                  borderRadius: 'var(--radius-md)',
                  padding: '1.5rem 1.75rem',
                  borderLeft: '3px solid var(--color-gold)',
                  boxShadow: 'var(--shadow-sm)',
                }}
              >
                <p style={{ fontWeight: 600, color: 'var(--color-mocha)', marginBottom: '.35rem' }}>
                  {v.title}
                </p>
                <p style={{ fontSize: '.875rem', color: 'var(--color-text-muted)', lineHeight: 1.7 }}>
                  {v.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}

export default About