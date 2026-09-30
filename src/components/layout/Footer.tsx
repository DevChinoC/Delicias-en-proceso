import { NavLink } from 'react-router-dom'
import { siteConfig } from '../../config/site'
import logo from '../../assets/logo.png'
import { FacebookIcon, WhatsAppIcon, MailIcon, MapPinIcon, InstagramIcon } from '../ui/SocialIcons'

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
              {siteConfig.whatsapp && (
                <a
                  href={`https://wa.me/${siteConfig.whatsapp}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-btn"
                  aria-label="WhatsApp"
                  title="Escríbenos en WhatsApp"
                >
                  <WhatsAppIcon size={18} />
                </a>
              )}
              {siteConfig.facebook && (
                <a
                  href={siteConfig.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-btn"
                  aria-label="Facebook"
                  title="Síguenos en Facebook"
                >
                  <FacebookIcon size={18} />
                </a>
              )}
              {siteConfig.instagram && (
                <a
                  href={siteConfig.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-btn"
                  aria-label="Instagram"
                  title="Síguenos en Instagram"
                >
                  <InstagramIcon size={18} />
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
                style={{ display: 'flex', alignItems: 'center', gap: '.5rem' }}
              >
                <WhatsAppIcon size={16} />
                <span>WhatsApp</span>
              </a>
            )}
            {siteConfig.facebook && (
              <a
                href={siteConfig.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="footer-link"
                style={{ display: 'flex', alignItems: 'center', gap: '.5rem' }}
              >
                <FacebookIcon size={16} />
                <span>Facebook</span>
              </a>
            )}
            {siteConfig.email && (
              <a 
                href={`mailto:${siteConfig.email}`} 
                className="footer-link"
                style={{ display: 'flex', alignItems: 'center', gap: '.5rem' }}
              >
                <MailIcon size={16} />
                <span>{siteConfig.email}</span>
              </a>
            )}
            <NavLink 
              to="/contacto" 
              className="footer-link"
              style={{ display: 'flex', alignItems: 'center', gap: '.5rem' }}
            >
              <MapPinIcon size={16} />
              <span>Encuéntranos</span>
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