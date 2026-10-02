import { getPosts } from '../mockDB.js'
import BlogCard from '../components/BlogCard'
import PageHeader from '../components/PageHeader'

export default function BlogPage() {
  const posts = getPosts()

  return (
    <main className="flex-grow max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-8">
      <PageHeader
        title="Consejos de cuidado"
        subtitle="Artículos y recomendaciones de nuestro equipo profesional para la salud de tu mascota."
      />

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
    </main>
  )
}
