export default function StatusBadge({ status }) {
  const map = {
    pending: {
      label: 'Pendiente',
      class: 'bg-amber-100 text-amber-700 border-amber-200',
    },
    confirmed: {
      label: 'Confirmada',
      class: 'bg-emerald-100 text-emerald-700 border-emerald-200',
    },
    cancelled: {
      label: 'Cancelada',
      class: 'bg-slate-100 text-slate-500 border-slate-200',
    },
    paid: {
      label: 'Pagada',
      class: 'bg-emerald-100 text-emerald-700 border-emerald-200',
    },
  }
  const config = map[status] || map.pending
  return (
    <span
      className={`inline-block text-xs font-semibold px-2.5 py-0.5 rounded-full border ${config.class}`}
    >
      {config.label}
    </span>
  )
}
