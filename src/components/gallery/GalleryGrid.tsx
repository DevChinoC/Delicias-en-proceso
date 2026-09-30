import { useState, useEffect, useCallback } from 'react'
import { galleryItems } from '../../data/gallery'

function GalleryGrid() {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null)

  const selectedItem = selectedIndex !== null ? galleryItems[selectedIndex] : null

  const handlePrev = useCallback(() => {
    if (selectedIndex === null) return
    setSelectedIndex((prev) => (prev! > 0 ? prev! - 1 : galleryItems.length - 1))
  }, [selectedIndex])

  const handleNext = useCallback(() => {
    if (selectedIndex === null) return
    setSelectedIndex((prev) => (prev! < galleryItems.length - 1 ? prev! + 1 : 0))
  }, [selectedIndex])

  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (selectedIndex === null) return
      if (e.key === 'Escape') setSelectedIndex(null)
      if (e.key === 'ArrowLeft') handlePrev()
      if (e.key === 'ArrowRight') handleNext()
    },
    [selectedIndex, handlePrev, handleNext]
  )

  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [handleKeyDown])

  return (
    <div>
      {/* Masonry Grid */}
      <div className="masonry">
        {galleryItems.map((item, idx) => (
          <div
            key={item.id}
            className="masonry-item"
            onClick={() => setSelectedIndex(idx)}
            role="button"
            tabIndex={0}
            aria-label={item.alt}
          >
            {item.type === 'video' ? (
              <>
                <video
                  src={item.src}
                  autoPlay
                  muted
                  loop
                  playsInline
                  aria-label={item.alt}
                  style={{
                    width: '100%',
                    display: 'block',
                    borderRadius: 'var(--radius-md)',
                    objectFit: 'cover',
                  }}
                />
                <div className="video-badge">
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor">
                    <polygon points="5 3 19 12 5 21 5 3" />
                  </svg>
                  Video
                </div>
              </>
            ) : (
              <img
                src={item.src}
                alt={item.alt}
                loading="lazy"
                style={{
                  width: '100%',
                  display: 'block',
                  borderRadius: 'var(--radius-md)',
                  objectFit: 'cover',
                }}
              />
            )}
            <div className="gallery-overlay">
              <span>{item.alt}</span>
            </div>
          </div>
        ))}
      </div>

      {/* Lightbox Modal */}
      {selectedItem && (
        <div className="lightbox-modal" onClick={() => setSelectedIndex(null)}>
          <div className="lightbox-content" onClick={(e) => e.stopPropagation()}>
            <button
              className="lightbox-close"
              onClick={() => setSelectedIndex(null)}
              aria-label="Cerrar vista previa"
            >
              ✕
            </button>

            {galleryItems.length > 1 && (
              <>
                <button
                  className="lightbox-nav lightbox-prev"
                  onClick={handlePrev}
                  aria-label="Anterior"
                >
                  ❮
                </button>
                <button
                  className="lightbox-nav lightbox-next"
                  onClick={handleNext}
                  aria-label="Siguiente"
                >
                  ❯
                </button>
              </>
            )}

            {selectedItem.type === 'video' ? (
              <video
                src={selectedItem.src}
                controls
                autoPlay
                muted
                loop
                playsInline
                className="lightbox-media"
              />
            ) : (
              <img
                src={selectedItem.src}
                alt={selectedItem.alt}
                className="lightbox-media"
              />
            )}

            <p style={{ color: 'rgba(255,255,255,0.85)', marginTop: '1rem', fontSize: '0.9rem' }}>
              {selectedItem.alt}
            </p>
          </div>
        </div>
      )}
    </div>
  )
}

export default GalleryGrid

