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
    completed: {
      label: 'Completada',
      class: 'bg-blue-100 text-blue-700 border-blue-200',
    },
    cancelled: {
      label: 'Cancelada',
      class: 'bg-slate-100 text-slate-500 border-slate-200',
    },
    paid: {
      label: 'Pagada',
      class: 'bg-emerald-100 text-emerald-700 border-emerald-200',
    },
    processing: {
      label: 'En preparación',
      class: 'bg-amber-100 text-amber-700 border-amber-200',
    },
    shipped: {
      label: 'Enviada',
      class: 'bg-indigo-100 text-indigo-700 border-indigo-200',
    },
    delivered: {
      label: 'Entregada',
      class: 'bg-blue-100 text-blue-700 border-blue-200',
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
