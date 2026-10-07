export default function RoleBadge({ role }) {
  const config = {
    admin: {
      label: 'Administrador',
      class: 'bg-emerald-100 text-emerald-700 border-emerald-200',
    },
    vendedor: {
      label: 'Vendedor',
      class: 'bg-blue-100 text-blue-700 border-blue-200',
    },
    veterinario: {
      label: 'Veterinario',
      class: 'bg-indigo-100 text-indigo-700 border-indigo-200',
    },
    client: {
      label: 'Cliente',
      class: 'bg-slate-100 text-slate-600 border-slate-200',
    },
  }

  const { label, class: styles } = config[role] || config.client

  return (
    <span
      className={`inline-block text-xs font-semibold px-2.5 py-0.5 rounded-full border ${styles}`}
    >
      {label}
    </span>
  )
}
