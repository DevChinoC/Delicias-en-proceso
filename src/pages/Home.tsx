import Hero from '../components/home/Hero'
import StatsBar from '../components/home/StatsBar'
import FeaturedProducts from '../components/home/FeaturedProducts'
import AboutPreview from '../components/home/AboutPreview'
import Testimonials from '../components/home/Testimonials'

function Home() {
  return (
    <main>
      <Hero />
      <StatsBar />
      <FeaturedProducts />
      <div className="divider" />
      <AboutPreview />
      <div className="divider" />
      <Testimonials />
    </main>
  )
}

export default Home