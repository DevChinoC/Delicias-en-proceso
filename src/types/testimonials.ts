// ─────────────────────────────────────────────
// Tipos globales para la sección de testimonios
// Refleja la estructura real de la tabla 'comentarios' en Supabase
// ─────────────────────────────────────────────

export interface CommentItem {
  id?: string | number
  nombre: string        // nombre del cliente
  comentario: string    // texto del comentario
  calificacion: number  // 1-5 estrellas
  estado?: string       // 'aprobado' | 'pendiente'
  created_at?: string
}
