import { NavLink } from 'react-router-dom'
import { siteConfig } from '../../config/site'
import logo from '../../assets/logo.png'

const navLinks = [
  { to: '/productos', label: 'Productos' },
  { to: '/galeria',   label: 'Galería' },
  { to: '/nosotros',  label: 'Nosotros' },
  { to: '/contacto',  label: 'Contacto' },
]

function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="site-footer">
      <div className="footer-inner">
        <div className="footer-grid">
          {/* Brand */}
          <div>
            <img
              src={logo}
              alt="Delicias en proceso"
              style={{ height: 80, width: 'auto', marginBottom: '1rem', borderRadius: '50%' }}
            />
            <p className="footer-tagline">{siteConfig.tagline}</p>
            <div className="footer-social">
              {siteConfig.facebook && (
                <a
                  href={siteConfig.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-btn"
                  aria-label="Facebook"
                >
                  f
                </a>
              )}
              {siteConfig.whatsapp && (
                <a
                  href={`https://wa.me/${siteConfig.whatsapp}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-btn"
                  aria-label="WhatsApp"
                >
                  W
                </a>
              )}
            </div>
          </div>

          {/* Navigation */}
          <div>
            <p className="footer-heading">Secciones</p>
            {navLinks.map((l) => (
              <NavLink key={l.to} to={l.to} className="footer-link">
                {l.label}
              </NavLink>
            ))}
          </div>

          {/* Contact */}
          <div>
            <p className="footer-heading">Contacto</p>
            {siteConfig.whatsapp && (
              <a
                href={`https://wa.me/${siteConfig.whatsapp}`}
                target="_blank"
                rel="noopener noreferrer"
                className="footer-link"
              >
                WhatsApp
              </a>
            )}
            {siteConfig.email && (
              <a href={`mailto:${siteConfig.email}`} className="footer-link">
                {siteConfig.email}
              </a>
            )}
            {siteConfig.facebook && (
              <a
                href={siteConfig.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="footer-link"
              >
                Facebook
              </a>
            )}
            <NavLink to="/contacto" className="footer-link">
              Encuéntranos
            </NavLink>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="footer-bottom">
          <span>© {year} {siteConfig.name}. Todos los derechos reservados.</span>
          <span>Hecho con amor</span>
        </div>
      </div>
    </footer>
  )
}

export default Footer