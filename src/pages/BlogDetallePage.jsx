import { Link, useParams } from 'react-router'
import { getPostBySlug } from '../mockDB.js'
import Breadcrumbs from '../components/Breadcrumbs'

export default function BlogDetallePage() {
  const { slug } = useParams()
  const post = getPostBySlug(slug)

  if (!post) {
    return (
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <Breadcrumbs
          items={[
            { label: 'Inicio', to: '/' },
            { label: 'Blog', to: '/blog' },
            { label: 'Artículo no encontrado' },
          ]}
        />
        <div className="mt-8 text-center py-16 bg-white rounded-2xl border border-slate-100 shadow-sm">
          <h1 className="text-2xl font-bold text-slate-900 mb-2">
            Artículo no encontrado
          </h1>
          <p className="text-slate-500 mb-6">
            El artículo que buscas no existe o fue eliminado.
          </p>
          <Link
            to="/blog"
            className="inline-flex items-center justify-center py-2.5 px-5 bg-emerald-600 hover:bg-emerald-700 text-white font-semibold text-sm rounded-lg shadow-sm transition-colors"
          >
            Volver al blog
          </Link>
        </div>
      </div>
    )
  }

  const formattedDate = new Date(post.date).toLocaleDateString('es-CL', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  })

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-6">
      <Breadcrumbs
        items={[
          { label: 'Inicio', to: '/' },
          { label: 'Blog', to: '/blog' },
          { label: post.title },
        ]}
      />

      <article className="bg-white p-6 sm:p-10 rounded-2xl shadow-sm border border-slate-100 space-y-6">
        <div className="space-y-2">
          <span className="text-xs font-semibold uppercase tracking-wider text-emerald-600 bg-emerald-50 px-2.5 py-1 rounded-md border border-emerald-100">
            {post.category}
          </span>
          <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 leading-tight">
            {post.title}
          </h1>
          <p className="text-slate-400 text-sm">{formattedDate}</p>
        </div>

        <div className="overflow-hidden rounded-xl border border-slate-100 shadow-inner">
          <img
            src={post.image}
            alt={post.alt}
            className="w-full h-auto max-h-96 object-cover"
          />
        </div>

        <div className="space-y-4 text-slate-600 leading-relaxed text-base sm:text-lg">
          {post.content.map((block, index) => {
            if (block.type === 'callout') {
              return (
                <div
                  key={index}
                  className="bg-emerald-50/60 border-l-4 border-emerald-500 p-4 rounded-r-lg text-emerald-900 text-sm sm:text-base"
                >
                  <p>{block.text}</p>
                  <Link
                    to="/servicios"
                    className="inline-block mt-2 font-semibold text-emerald-700 underline hover:text-emerald-800"
                  >
                    Ver servicios
                  </Link>
                </div>
              )
            }

            return <p key={index}>{block.text}</p>
          })}
        </div>
      </article>
    </div>
  )
}
