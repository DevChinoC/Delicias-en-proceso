import type { CommentItem } from '../types/testimonials'

// ─────────────────────────────────────────────
// Testimonios por defecto (fallback cuando Supabase está vacío)
// Edita aquí para actualizar los comentarios fijos de la sección
// ─────────────────────────────────────────────

export const DEFAULT_TESTIMONIALS: CommentItem[] = [
  {
    id: 'def-1',
    comentario:
      'El pastel de boda fue absolutamente perfecto. Todos los invitados preguntaron por el contacto. ¡Definitivamente los recomiendo!',
    nombre: 'María G.',
    calificacion: 5,
  },
  {
    id: 'def-2',
    comentario:
      'Los cupcakes para el cumpleaños de mi hija quedaron hermosos y deliciosos. El diseño superó mis expectativas.',
    nombre: 'Laura M.',
    calificacion: 5,
  },
  {
    id: 'def-3',
    comentario:
      'Las galletas decoradas son una obra de arte. Pedimos cada quince días y nunca nos decepcionan.',
    nombre: 'Sofía R.',
    calificacion: 5,
  },
]
