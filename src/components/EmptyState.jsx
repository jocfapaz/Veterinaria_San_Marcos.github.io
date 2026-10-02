import { Link } from 'react-router'

export default function EmptyState({ title, message, actionLabel, actionTo }) {
  return (
    <div className="text-center py-16 px-4">
      <div className="text-5xl mb-4">🐾</div>
      <h3 className="text-xl font-semibold text-slate-900 mb-2">{title}</h3>
      <p className="text-slate-500 mb-6">{message}</p>
      {actionLabel && actionTo && (
        <Link
          to={actionTo}
          className="inline-flex items-center justify-center py-2.5 px-5 bg-emerald-600 hover:bg-emerald-700 text-white font-semibold text-sm rounded-lg shadow-sm transition-colors"
        >
          {actionLabel}
        </Link>
      )}
    </div>
  )
}
