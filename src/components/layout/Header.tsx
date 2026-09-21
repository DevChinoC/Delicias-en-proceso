import { useState, useEffect } from 'react'
import { NavLink } from 'react-router-dom'
import logo from '../../assets/logo.png'

const links = [
  { to: '/',          label: 'Inicio' },
  { to: '/productos', label: 'Productos' },
  { to: '/galeria',   label: 'Galería' },
  { to: '/nosotros',  label: 'Nosotros' },
  { to: '/contacto',  label: 'Contacto' },
]

function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [menuOpen])

  return (
    <>
      <header className={`site-header${scrolled ? ' scrolled' : ''}`}>
        <div className="nav-inner">
          {/* Logo image */}
          <NavLink to="/" aria-label="Inicio" onClick={() => setMenuOpen(false)}>
            <img
              src={logo}
              alt="Delicias en proceso"
              style={{ height: 52, width: 52, borderRadius: '50%', display: 'block', objectFit: 'cover' }}
            />
          </NavLink>

          {/* Desktop links */}
          <nav className="nav-links" aria-label="Navegación principal">
            {links.map((l) => (
              <NavLink
                key={l.to}
                to={l.to}
                end={l.to === '/'}
                className={({ isActive }) =>
                  `nav-link${isActive ? ' active' : ''}`
                }
              >
                {l.label}
              </NavLink>
            ))}
          </nav>

          {/* Mobile toggle */}
          <button
            className="nav-toggle"
            aria-label={menuOpen ? 'Cerrar menú' : 'Abrir menú'}
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((v) => !v)}
          >
            <span style={{ transform: menuOpen ? 'rotate(45deg) translate(5px, 5px)' : 'none' }} />
            <span style={{ opacity: menuOpen ? 0 : 1 }} />
            <span style={{ transform: menuOpen ? 'rotate(-45deg) translate(5px, -5px)' : 'none' }} />
          </button>
        </div>
      </header>

      {/* Mobile drawer */}
      <nav className={`nav-drawer${menuOpen ? ' open' : ''}`} aria-hidden={!menuOpen}>
        <img
          src={logo}
          alt="Delicias en proceso"
          style={{ height: 80, width: 'auto', marginBottom: '1rem' }}
        />
        {links.map((l, i) => (
          <NavLink
            key={l.to}
            to={l.to}
            end={l.to === '/'}
            className={({ isActive }) =>
              `nav-link fade-up fade-up-${i + 1}${isActive ? ' active' : ''}`
            }
            onClick={() => setMenuOpen(false)}
          >
            {l.label}
          </NavLink>
        ))}
      </nav>
    </>
  )
}

export default Header