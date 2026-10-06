import { getPosts } from '../mockDB.js'
import BlogCard from '../components/BlogCard'

export default function BlogPage() {
  const posts = getPosts()

  return (
    <div className="flex flex-col min-h-screen font-sans bg-slate-50 text-slate-800 antialiased">
      <main className="flex-grow max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-8">
        <section className="seccion-blogs space-y-8">
          <div className="border-b border-slate-200 pb-4">
            <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900">
              Consejos de cuidado
            </h1>
            <p className="text-slate-500 text-sm mt-1">
              Artículos y recomendaciones de nuestro equipo profesional para la
              salud de tu mascota.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {posts.map((post) => (
              <BlogCard
                key={post.id}
                slug={post.slug}
                title={post.title}
                category={post.category}
                excerpt={post.excerpt}
                image={post.image}
              />
            ))}
          </div>
        </section>
      </main>
    </div>
  )
}
