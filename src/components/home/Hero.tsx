import { Link } from 'react-router-dom'
import logo from '../../assets/logo.png'

function Hero() {
  return (
    <section className="hero">
      <div className="hero-content">
        {/* Logo centered in hero */}
        <div
          className="fade-up fade-up-1"
          style={{ marginBottom: '2rem', display: 'flex', justifyContent: 'center' }}
        >
          <img
            src={logo}
            alt="Delicias en proceso"
            style={{
              height: 168,
              width: 168,
              borderRadius: '50%',
              display: 'block',
              objectFit: 'cover',
              boxShadow: '0 8px 32px rgba(44,20,10,.15)',
            }}
          />
        </div>

        <span className="hero-tag fade-up fade-up-2">
          Delicias en proceso · Aby
        </span>

        <h1 className="hero-title fade-up fade-up-3">
          Delicias creadas con<br />
          <em>amor y pasión</em>
        </h1>

        <p className="hero-subtitle fade-up fade-up-4">
          Cada pieza es única. Elaboramos pasteles, cupcakes y postres
          especiales para hacer tus momentos aún más memorables.
        </p>

        <div
          className="fade-up fade-up-4"
          style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}
        >
          <Link to="/productos" className="btn btn-primary">
            Ver catálogo
          </Link>
          <Link to="/contacto" className="btn btn-outline">
            Hacer un pedido
          </Link>
        </div>
      </div>
    </section>
  )
}

export default Hero
