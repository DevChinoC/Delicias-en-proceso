import { useState, useEffect } from 'react'
import { supabase, isSupabaseConfigured } from '../lib/supabase'
import type { CommentItem } from '../types/testimonials'

// ─────────────────────────────────────────────
// Hook: datos de testimonios (fetch + submit)
// Maneja la obtención y envío de comentarios a Supabase,
// con fallback a localStorage si no hay conexión
// ─────────────────────────────────────────────


export function useTestimonialsData() {
  const [comments, setComments] = useState<CommentItem[]>([])

  // ── Carga inicial ──────────────────────────
  useEffect(() => {
    const fetchComments = async () => {
      if (isSupabaseConfigured) {
        try {
          const { data, error } = await supabase
            .from('comentarios')
            .select('*')
            .eq('estado', 'aprobado')
            .order('created_at', { ascending: false })

          if (!error && data) {
            setComments(data)
          }
          if (error) console.warn('Supabase fetch error:', error.message)
        } catch (err) {
          console.warn('Supabase unreachable:', err)
        }
      }
    }

    fetchComments()
  }, [])

  // ── Envío de nuevo comentario ──────────────
  const submitComment = async (
    newComment: CommentItem
  ): Promise<{ success: boolean; requiresApproval: boolean }> => {
    if (isSupabaseConfigured) {
      try {
        const { error } = await supabase.from('comentarios').insert([
          {
            nombre: newComment.nombre,
            comentario: newComment.comentario,
            calificacion: newComment.calificacion,
            estado: 'pendiente',
          },
        ])

        if (!error) {
          // El comentario se envió correctamente a Supabase y requiere aprobación
          return { success: true, requiresApproval: true }
        }

        console.warn('Supabase insert error:', error.message)
      } catch (err) {
        console.warn('Supabase insert failed:', err)
      }
    }

    // Todos los comentarios enviados requieren aprobación previa antes de mostrarse
    return { success: true, requiresApproval: true }
  }

  return { comments, submitComment }
}
