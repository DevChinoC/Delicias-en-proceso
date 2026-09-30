export interface GalleryItem {
  id: string
  src: string
  type: 'image' | 'video'
  alt: string
}

// Dynamically import all images and videos from assets/galeria
const globModules = import.meta.glob<string>('../assets/galeria/*.{jpeg,jpg,png,mp4,webm,mov}', {
  eager: true,
  import: 'default',
})

const parseNumber = (path: string): number => {
  const match = path.match(/\((\d+)\)/)
  return match ? parseInt(match[1], 10) : 0
}

const seenVideoSrcs = new Set<string>()

export const galleryItems: GalleryItem[] = Object.keys(globModules)
  .sort((a, b) => {
    const numA = parseNumber(a)
    const numB = parseNumber(b)
    if (numA !== numB) return numA - numB
    const isVidA = a.endsWith('.mp4') || a.endsWith('.webm') || a.endsWith('.mov')
    const isVidB = b.endsWith('.mp4') || b.endsWith('.webm') || b.endsWith('.mov')
    if (isVidA !== isVidB) return isVidA ? 1 : -1
    return 0
  })
  .filter((path) => {
    const isVideo = path.endsWith('.mp4') || path.endsWith('.webm') || path.endsWith('.mov')
    if (isVideo) {
      const src = globModules[path]
      if (seenVideoSrcs.has(src)) return false
      seenVideoSrcs.add(src)
    }
    return true
  })
  .map((path, index) => {
    const isVideo = path.endsWith('.mp4') || path.endsWith('.webm') || path.endsWith('.mov')
    const num = parseNumber(path)
    
    return {
      id: `gallery-item-${index + 1}`,
      src: globModules[path],
      type: isVideo ? 'video' : 'image',
      alt: isVideo ? `Video de creación artesanal ${num || index + 1}` : `Fotografía de creación artesanal ${num || index + 1}`,
    }
  })

