import { createClient } from '@supabase/supabase-js'

// ─────────────────────────────────────────────
// Cliente de Supabase
// Los tipos se encuentran en src/types/testimonials.ts
// ─────────────────────────────────────────────

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL || ''
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY || ''

/** true si las variables de entorno de Supabase están configuradas correctamente */
export const isSupabaseConfigured = Boolean(
  supabaseUrl &&
  supabaseAnonKey &&
  !supabaseUrl.includes('your-project-id') &&
  !supabaseAnonKey.includes('your-anon-key') &&
  !supabaseUrl.includes('TU_SUPABASE_URL') &&
  !supabaseAnonKey.includes('TU_SUPABASE_ANON_KEY')
)

export const supabase = createClient(
  supabaseUrl || 'https://placeholder.supabase.co',
  supabaseAnonKey || 'placeholder-key'
)

// Re-export del tipo para compatibilidad hacia atrás
export type { CommentItem } from '../types/testimonials'
