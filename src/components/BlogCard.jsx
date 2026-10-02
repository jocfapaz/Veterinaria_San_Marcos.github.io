import { Link } from 'react-router'

export default function BlogCard({ slug, title, category, excerpt, image }) {
  return (
    <article className="bg-white rounded-2xl overflow-hidden shadow-sm border border-slate-100 hover:shadow-md transition-all flex flex-col">
      <div className="w-full h-64 overflow-hidden bg-slate-100">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
        />
      </div>
      <div className="p-6 flex flex-col flex-grow justify-between space-y-4">
        <div className="space-y-2">
          <span className="text-xs font-semibold uppercase tracking-wider text-emerald-600 bg-emerald-50 px-2.5 py-1 rounded-md border border-emerald-100">
            {category}
          </span>
          <h2 className="text-xl font-bold text-slate-900 leading-snug">
            {title}
          </h2>
          <p className="text-slate-600 text-sm leading-relaxed">{excerpt}</p>
        </div>
        <Link
          to={`/blog/${slug}`}
          className="inline-flex items-center justify-center py-2.5 px-4 bg-emerald-600 hover:bg-emerald-700 text-white font-semibold text-sm rounded-lg shadow-sm transition-colors self-start"
        >
          Leer más
        </Link>
      </div>
    </article>
  )
}
