import { Link, useNavigate } from 'react-router'
import {
  getProductsOnSale,
  formatPrice,
  calculateDiscountedPrice,
} from '../mockDB.js'
import { useAuth } from '../contexts/AuthContext.jsx'
import { useCart } from '../contexts/CartContext.jsx'
import PageHeader from '../components/PageHeader'
import EmptyState from '../components/EmptyState'
import ProductCard from '../components/ProductCard'

export default function OfertasPage() {
  const navigate = useNavigate()
  const { currentUser } = useAuth()
  const { addToCart } = useCart()

  const offers = getProductsOnSale()
  const totalSavings = offers.reduce(
    (sum, product) =>
      sum + (product.price - calculateDiscountedPrice(product.price, product.discount)),
    0,
  )

  function handleAddToCart(productId) {
    if (!currentUser) {
      navigate('/login')
      return
    }
    addToCart(productId, 1)
    alert('Producto añadido al carrito')
  }

  if (offers.length === 0) {
    return (
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <PageHeader
          title="Ofertas de la Semana"
          subtitle="Ahorra en medicamentos, vacunas y suplementos seleccionados."
        />
        <EmptyState
          title="No hay ofertas disponibles"
          message="Vuelve pronto, estamos preparando nuevos descuentos para ti."
          actionLabel="Ver catálogo completo"
          actionTo="/tienda"
        />
      </div>
    )
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-8">
      <PageHeader
        title="Ofertas de la Semana"
        subtitle="Ahorra en medicamentos, vacunas y suplementos seleccionados."
      />

      <div className="flex flex-wrap gap-3">
        <Link
          to="/tienda"
          className="px-4 py-2 text-sm font-semibold rounded-lg bg-slate-50 text-slate-700 border border-slate-200 hover:bg-slate-100 transition-colors"
        >
          ← Volver a la tienda
        </Link>
        <Link
          to="/categorias"
          className="px-4 py-2 text-sm font-semibold rounded-lg bg-emerald-50 text-emerald-700 border border-emerald-200 hover:bg-emerald-100 transition-colors"
        >
          Ver por categoría
        </Link>
      </div>

      <section className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <div className="bg-emerald-600 rounded-2xl p-5 text-white shadow-sm">
          <p className="text-emerald-100 text-sm font-medium">
            Productos en oferta
          </p>
          <p className="text-3xl font-extrabold mt-1">{offers.length}</p>
        </div>
        <div className="bg-white rounded-2xl p-5 border border-slate-200 shadow-sm">
          <p className="text-slate-500 text-sm font-medium">Mayor descuento</p>
          <p className="text-3xl font-extrabold mt-1 text-rose-600">
            {Math.max(...offers.map((p) => p.discount))}%
          </p>
        </div>
        <div className="bg-white rounded-2xl p-5 border border-slate-200 shadow-sm">
          <p className="text-slate-500 text-sm font-medium">Ahorro potencial</p>
          <p className="text-3xl font-extrabold mt-1 text-emerald-700">
            {formatPrice(totalSavings)}
          </p>
        </div>
      </section>

      <section aria-label="Productos en oferta" className="space-y-5">
        <div className="flex items-center justify-between border-b border-slate-200 pb-3">
          <h2 className="text-xl font-bold text-slate-900">
            Productos en descuento
          </h2>
          <span className="text-sm text-slate-500">{offers.length} ofertas</span>
        </div>

        <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {offers.map((product) => (
            <ProductCard
              key={product.id}
              {...product}
              onAdd={handleAddToCart}
            />
          ))}
        </ul>
      </section>
    </div>
  )
}
