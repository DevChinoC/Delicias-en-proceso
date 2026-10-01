import { siteConfig } from '../config/site'

// ─────────────────────────────────────────────
// Utilidad: generación de links de WhatsApp
// ─────────────────────────────────────────────

/**
 * Genera un enlace de WhatsApp con un mensaje predeterminado para un producto.
 *
 * @param productName   - Nombre del producto
 * @param description   - Descripción corta del producto
 * @param price         - Precio del producto (número)
 * @param imageUrl      - URL absoluta de la imagen del producto
 */
export function buildWhatsAppLink({
  productName,
  description,
  imageUrl,
}: {
  productName: string
  description: string
  imageUrl: string
}): string {
  // Limpiar el número: quitar espacios, guiones y asegurarse de que tenga código de país
  const rawPhone = siteConfig.whatsapp.replace(/\D/g, '')
  // Si el número ya empieza con 52 (México) lo dejamos; si no, lo agregamos
  const phone = rawPhone.startsWith('52') ? rawPhone : `52${rawPhone}`

  // Emojis con secuencias Unicode escapadas para evitar corrupción de codificación (ANSI/UTF-8)
  const WAVE = '\u{1F44B}'       // 👋
  const CAKE = '\u{1F370}'       // 🍰
  const MEMO = '\u{1F4DD}'       // 📝
  const FRAME = '\u{1F5BC}\uFE0F' // 🖼️
  const SMILE = '\u{1F60A}'      // 😊

  // Mensaje predeterminado
  const message = [
    `¡Hola! ${WAVE} Me interesa este producto de *Delicias en Proceso*:`,
    ``,
    `${CAKE} *${productName}*`,
    `${MEMO} ${description}`,
    ``,
    `${FRAME} Imagen del producto: ${imageUrl}`,
    ``,
    `¿Está disponible? ¿Me pueden dar más información? ${SMILE}`,
  ].join('\n')

  return `https://api.whatsapp.com/send?phone=${phone}&text=${encodeURIComponent(message)}`
}
