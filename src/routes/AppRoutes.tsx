import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Layout from '../components/layout/Layout'

import Home from '../pages/Home'
import Products from '../pages/Products'
import Gallery from '../pages/Gallery'
import About from '../pages/About'
import Contact from '../pages/Contact'

function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/productos" element={<Products />} />
          <Route path="/galeria" element={<Gallery />} />
          <Route path="/nosotros" element={<About />} />
          <Route path="/contacto" element={<Contact />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default AppRoutes