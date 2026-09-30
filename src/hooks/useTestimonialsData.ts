import { useState, useEffect } from 'react'
import { supabase, isSupabaseConfigured } from '../lib/supabase'
import { DEFAULT_TESTIMONIALS } from '../data/testimonials'
import type { CommentItem } from '../types/testimonials'

// ─────────────────────────────────────────────
// Hook: datos de testimonios (fetch + submit)
// Maneja la obtención y envío de comentarios a Supabase,
// con fallback a localStorage si no hay conexión
// ─────────────────────────────────────────────

const LOCAL_STORAGE_KEY = 'delicias_comments'

export function useTestimonialsData() {
  const [comments, setComments] = useState<CommentItem[]>(DEFAULT_TESTIMONIALS)

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

          if (!error && data && data.length > 0) {
            setComments([...data, ...DEFAULT_TESTIMONIALS])
            return
          }
          if (error) console.warn('Supabase fetch error:', error.message)
        } catch (err) {
          console.warn('Supabase unreachable, using fallback:', err)
        }
      }

      // Fallback: localStorage
      try {
        const raw = localStorage.getItem(LOCAL_STORAGE_KEY)
        if (raw) {
          const parsed: CommentItem[] = JSON.parse(raw)
          setComments([...parsed, ...DEFAULT_TESTIMONIALS])
        }
      } catch (e) {
        console.error('Error loading local comments:', e)
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
          },
        ])

        if (!error) {
          // El comentario requiere aprobación, no se muestra inmediatamente
          return { success: true, requiresApproval: true }
        }

        console.warn('Supabase insert error:', error.message)
      } catch (err) {
        console.warn('Supabase insert failed, using local fallback:', err)
      }
    }

    // Fallback: agregar localmente
    setComments((prev) => [newComment, ...prev])
    try {
      const raw = localStorage.getItem(LOCAL_STORAGE_KEY)
      const existing: CommentItem[] = raw ? JSON.parse(raw) : []
      localStorage.setItem(
        LOCAL_STORAGE_KEY,
        JSON.stringify([newComment, ...existing])
      )
    } catch (e) {
      console.error('LocalStorage write error:', e)
    }

    return { success: true, requiresApproval: false }
  }

  return { comments, submitComment }
}
