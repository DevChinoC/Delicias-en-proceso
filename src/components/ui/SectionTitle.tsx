interface SectionTitleProps {
  title: string
  subtitle?: string
  centered?: boolean
}

function SectionTitle({ title, subtitle, centered = false }: SectionTitleProps) {
  return (
    <div className={`mb-10 ${centered ? 'text-center' : ''}`}>
      <h2 className="text-3xl font-bold text-rose-700">{title}</h2>
      {subtitle && (
        <p className="mt-2 text-gray-500">{subtitle}</p>
      )}
    </div>
  )
}

export default SectionTitle
