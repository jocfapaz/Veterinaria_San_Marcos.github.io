import { Link } from 'react-router'

export default function AdminPageHeader({ title, actionLabel, actionTo }) {
  return (
    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-6">
      <h1 className="text-2xl font-bold text-slate-900">{title}</h1>
      {actionLabel && actionTo && (
        <Link
          to={actionTo}
          className="inline-flex items-center justify-center px-4 py-2 bg-emerald-600 hover:bg-emerald-700 text-white text-sm font-semibold rounded-lg shadow-sm transition-colors"
        >
          {actionLabel}
        </Link>
      )}
    </div>
  )
}
