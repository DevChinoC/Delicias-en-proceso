-- Script SQL para configurar la tabla de comentarios sin necesidad de autenticación en Supabase

-- 1. Crear la tabla de comentarios
create table if not exists public.comments (
  id uuid default gen_random_uuid() primary key,
  author text not null default 'Cliente satisfecho',
  text text not null,
  stars integer not null default 5,
  created_at timestamp with time zone default timezone('utc'::text, now()) not null
);

-- 2. Habilitar la seguridad a nivel de fila (Row Level Security)
alter table public.comments enable row level security;

-- 3. Crear política para permitir que CUALQUIER usuario pueda LEER los comentarios
create policy "Permitir lectura publica de comentarios"
  on public.comments
  for select
  using (true);

-- 4. Crear política para permitir que CUALQUIER cliente (anonimo sin registro) pueda INSERTAR comentarios
create policy "Permitir insercion publica sin registro"
  on public.comments
  for insert
  with check (true);
