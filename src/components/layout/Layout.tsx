import { useEffect } from 'react'
import { Outlet, useLocation } from 'react-router-dom'

import Header from './Header'
import Footer from './Footer'
import WhatsAppButton from './WhatsAppButton'

function Layout() {
  const { pathname } = useLocation()

  // Desplazar automáticamente al inicio al cambiar de sección
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' })
  }, [pathname])

  return (
    <>
      <Header />

      {/* Contenedor animado suave con animación de entrada en cada cambio de ruta */}
      <div key={pathname} className="page-wrapper page-fade-in">
        <Outlet />
      </div>

      <WhatsAppButton />

      <Footer />
    </>
  )
}

export default Layout