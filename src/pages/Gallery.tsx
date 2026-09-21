import GalleryGrid from '../components/gallery/GalleryGrid'

function Gallery() {
  return (
    <main>
      {/* Page hero */}
      <div
        style={{
          background: 'linear-gradient(135deg, #f5d5d5 0%, #faebd6 100%)',
          padding: '8rem 1.5rem 4rem',
          textAlign: 'center',
        }}
      >
        <span className="section-label">Trabajos recientes</span>
        <h1
          className="section-title"
          style={{ fontSize: 'clamp(2rem, 5vw, 3.25rem)', maxWidth: '500px', margin: '.5rem auto 1rem' }}
        >
          Nuestra galería
        </h1>
        <p
          style={{
            color: 'var(--color-text-muted)',
            maxWidth: '460px',
            margin: '0 auto',
            lineHeight: 1.7,
          }}
        >
          Cada fotografía cuenta una historia dulce. Inspírate y cuéntanos
          qué quieres crear juntos.
        </p>
      </div>

      {/* Gallery */}
      <section className="section">
        <div className="container">
          <GalleryGrid />
        </div>
      </section>
    </main>
  )
}

export default Gallery