export default function RoleBadge({ role }) {
  const styles =
    role === 'admin'
      ? 'bg-emerald-100 text-emerald-700 border-emerald-200'
      : 'bg-slate-100 text-slate-600 border-slate-200'
  return (
    <span
      className={`inline-block text-xs font-semibold px-2.5 py-0.5 rounded-full border ${styles}`}
    >
      {role === 'admin' ? 'Administrador' : 'Cliente'}
    </span>
  )
}
