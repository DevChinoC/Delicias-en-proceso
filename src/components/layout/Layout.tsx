import { Outlet } from 'react-router-dom'

import Header from './Header'
import Footer from './Footer'
import WhatsAppButton from './WhatsAppButton'

function Layout() {
  return (
    <>
      <Header />

      {/* Main content — no extra <main> wrapper here; pages own their semantic structure */}
      <Outlet />

      <WhatsAppButton />

      <Footer />
    </>
  )
}

export default Layout