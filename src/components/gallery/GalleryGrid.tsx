import { galleryItems } from '../../data/gallery'

// Heights vary to create visual rhythm in masonry
const heights = [200, 260, 220, 280, 210, 240]

// Placeholder SVG for items without an image
function ImagePlaceholder({ height }: { height: number }) {
  return (
    <div
      style={{
        height,
        background: 'linear-gradient(135deg, #faebd6 0%, #f5d5d5 100%)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <svg
        width="40"
        height="40"
        viewBox="0 0 24 24"
        fill="none"
        stroke="var(--color-rose-light)"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <rect x="3" y="3" width="18" height="18" rx="3" />
        <circle cx="8.5" cy="8.5" r="1.5" />
        <path d="m21 15-5-5L5 21" />
      </svg>
    </div>
  )
}

function GalleryGrid() {
  return (
    <div className="masonry">
      {galleryItems.map((item, i) => (
        <div key={item.id} className="masonry-item">
          {item.src ? (
            <img
              src={item.src}
              alt={item.alt}
              style={{ width: '100%', display: 'block' }}
            />
          ) : (
            <ImagePlaceholder height={heights[i % heights.length]} />
          )}
        </div>
      ))}
    </div>
  )
}

export default GalleryGrid
