import { Link } from 'react-router'

export default function Breadcrumbs({ items }) {
  return (
    <nav
      aria-label="Ruta de navegación"
      className="text-xs sm:text-sm text-slate-500 flex items-center gap-2 flex-wrap"
    >
      {items.map((item, index) => {
        const isLast = index === items.length - 1
        return (
          <span key={`${item.label}-${index}`} className="flex items-center gap-2">
            {item.to ? (
              <Link
                to={item.to}
                className="hover:text-emerald-600 transition-colors"
              >
                {item.label}
              </Link>
            ) : (
              <span className="text-slate-800 font-medium truncate">
                {item.label}
              </span>
            )}
            {!isLast && <span>&gt;</span>}
          </span>
        )
      })}
    </nav>
  )
}
