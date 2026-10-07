import { useState } from 'react'
import { useNavigate } from 'react-router'
import {
  getProductsByCategory,
  PRODUCT_CATEGORIES,
} from '../mockDB.js'
import { useAuth } from '../contexts/AuthContext.jsx'
import { useCart } from '../contexts/CartContext.jsx'
import PageHeader from '../components/PageHeader'
import EmptyState from '../components/EmptyState'
import ProductCard from '../components/ProductCard'

const CATEGORY_ICONS = {
  Antibióticos: '💊',
  Antiparasitarios: '🦟',
  Antiinflamatorios: '🌡️',
  Dermatología: '🧴',
  Digestivo: '🐾',
  Cardíaco: '❤️',
  Analgésicos: '💉',
  Vacunas: '🛡️',
  Suplementos: '✨',
}

export default function CategoriasPage() {
  const [selectedCategory, setSelectedCategory] = useState('Todas')
  const navigate = useNavigate()
  const { currentUser } = useAuth()
  const { addToCart } = useCart()

  const products = getProductsByCategory(selectedCategory)

  function handleAddToCart(productId) {
    if (!currentUser) {
      navigate('/login')
      return
    }
    addToCart(productId, 1)
    alert('Producto añadido al carrito')
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-8">
      <PageHeader
        title="Categorías de Productos"
        subtitle="Encuentra rápidamente los medicamentos y vacunas según el tipo de producto que necesitas."
      />

      <section aria-label="Listado de categorías">
        <ul className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
          <li>
            <button
              type="button"
              onClick={() => setSelectedCategory('Todas')}
              className={`w-full h-full p-4 rounded-xl border text-center transition-colors ${
                selectedCategory === 'Todas'
                  ? 'bg-emerald-600 border-emerald-600 text-white shadow-sm'
                  : 'bg-white border-slate-200 text-slate-700 hover:border-emerald-400 hover:text-emerald-700'
              }`}
            >
              <span className="block text-2xl mb-1">🛒</span>
              <span className="block text-sm font-bold">Todas</span>
              <span
                className={`block text-xs mt-1 ${
                  selectedCategory === 'Todas'
                    ? 'text-emerald-100'
                    : 'text-slate-500'
                }`}
              >
                {getProductsByCategory('Todas').length} productos
              </span>
            </button>
          </li>

          {PRODUCT_CATEGORIES.map((category) => {
            const count = getProductsByCategory(category).length
            const isActive = selectedCategory === category
            return (
              <li key={category}>
                <button
                  type="button"
                  onClick={() => setSelectedCategory(category)}
                  className={`w-full h-full p-4 rounded-xl border text-center transition-colors ${
                    isActive
                      ? 'bg-emerald-600 border-emerald-600 text-white shadow-sm'
                      : 'bg-white border-slate-200 text-slate-700 hover:border-emerald-400 hover:text-emerald-700'
                  }`}
                >
                  <span className="block text-2xl mb-1">
                    {CATEGORY_ICONS[category] || '📦'}
                  </span>
                  <span className="block text-sm font-bold">{category}</span>
                  <span
                    className={`block text-xs mt-1 ${
                      isActive ? 'text-emerald-100' : 'text-slate-500'
                    }`}
                  >
                    {count} {count === 1 ? 'producto' : 'productos'}
                  </span>
                </button>
              </li>
            )
          })}
        </ul>
      </section>

      <section aria-label="Productos de la categoría seleccionada" className="space-y-5">
        <div className="flex items-center justify-between border-b border-slate-200 pb-3">
          <h2 className="text-xl font-bold text-slate-900">
            {selectedCategory === 'Todas'
              ? 'Todos los productos'
              : selectedCategory}
          </h2>
          <span className="text-sm text-slate-500">
            {products.length} {products.length === 1 ? 'resultado' : 'resultados'}
          </span>
        </div>

        {products.length === 0 ? (
          <EmptyState
            title="Sin productos en esta categoría"
            message="Prueba con otra categoría o revisa el catálogo completo de la tienda."
            actionLabel="Ir a la tienda"
            actionTo="/tienda"
          />
        ) : (
          <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {products.map((product) => (
              <ProductCard
                key={product.id}
                {...product}
                onAdd={handleAddToCart}
              />
            ))}
          </ul>
        )}
      </section>
    </div>
  )
}
