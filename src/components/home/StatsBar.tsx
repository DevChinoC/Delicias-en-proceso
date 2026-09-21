const stats = [
  { num: '+500', label: 'Pedidos entregados' },
  { num: '100%', label: 'Ingredientes naturales' },
  { num: 'Artesanal', label: 'Cada pieza, única' },
]

function StatsBar() {
  return (
    <div className="stats-bar">
      <div className="stats-grid">
        {stats.map((s) => (
          <div key={s.label}>
            <p className="stat-num">{s.num}</p>
            <p className="stat-label">{s.label}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default StatsBar
