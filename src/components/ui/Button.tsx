import type { ReactNode } from 'react'

interface ButtonProps {
  children: ReactNode
  onClick?: () => void
  variant?: 'primary' | 'outline'
  className?: string
  type?: 'button' | 'submit' | 'reset'
}

function Button({
  children,
  onClick,
  variant = 'primary',
  className = '',
  type = 'button',
}: ButtonProps) {
  const base =
    'inline-flex items-center justify-center rounded-full px-6 py-2.5 font-semibold transition-colors duration-200 focus:outline-none'

  const variants = {
    primary: 'bg-rose-600 text-white hover:bg-rose-700',
    outline: 'border-2 border-rose-600 text-rose-600 hover:bg-rose-50',
  }

  return (
    <button
      type={type}
      onClick={onClick}
      className={`${base} ${variants[variant]} ${className}`}
    >
      {children}
    </button>
  )
}

export default Button
