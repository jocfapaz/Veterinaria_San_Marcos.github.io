import { useState } from 'react'
import { Link, useNavigate } from 'react-router'
import {
  getProducts,
  getProductsByCategory,
  PRODUCT_CATEGORIES,
} from '../mockDB.js'
import { useAuth } from '../contexts/AuthContext.jsx'
import { useCart } from '../contexts/CartContext.jsx'
import ProductCard from '../components/ProductCard'

const CATEGORY_MAP = {
  todas: 'Todas',
  antibioticos: 'Antibióticos',
  antiparasitarios: 'Antiparasitarios',
  antiinflamatorios: 'Antiinflamatorios',
  dermatologia: 'Dermatología',
  digestivo: 'Digestivo',
  cardiaco: 'Cardíaco',
  analgesicos: 'Analgésicos',
  vacunas: 'Vacunas',
  suplementos: 'Suplementos',
}

export default function TiendaPage() {
  const [selectedCategory, setSelectedCategory] = useState('todas')
  const navigate = useNavigate()
  const { currentUser } = useAuth()
  const { addToCart } = useCart()

  const categoryLabel = CATEGORY_MAP[selectedCategory] || 'Todas'
  const products =
    categoryLabel === 'Todas'
      ? getProducts()
      : getProductsByCategory(categoryLabel)

  function handleAddToCart(productId) {
    if (!currentUser) {
      navigate('/login')
      return
    }
    addToCart(productId, 1)
    alert('Producto añadido al carrito')
  }

  return (
    <div className="flex flex-col min-h-screen bg-slate-50 font-sans text-slate-800 antialiased">
      <main className="flex-grow max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-8 lg:py-12">
        <section className="space-y-8">
          <div className="border-b border-slate-200 pb-5 flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4">
            <div>
              <h1 className="text-3xl font-extrabold text-slate-900 tracking-tight sm:text-4xl">
                Catálogo de Productos
              </h1>
              <p className="mt-2 text-base text-slate-600">
                Medicamentos y vacunas disponibles para venta directa en
                Veterinaria San Marcos.
              </p>
            </div>
            <div className="flex flex-wrap gap-2">
              <Link
                to="/categorias"
                className="px-4 py-2 text-sm font-semibold rounded-lg bg-emerald-50 text-emerald-700 border border-emerald-200 hover:bg-emerald-100 transition-colors"
              >
                Ver por categoría
              </Link>
              <Link
                to="/ofertas"
                className="px-4 py-2 text-sm font-semibold rounded-lg bg-rose-50 text-rose-700 border border-rose-200 hover:bg-rose-100 transition-colors"
              >
                Ver ofertas
              </Link>
            </div>
          </div>

          <div className="bg-white p-4 sm:p-6 rounded-xl shadow-sm border border-slate-200 max-w-xs">
            <form onSubmit={(e) => e.preventDefault()} className="space-y-2">
              <label
                htmlFor="filtro-categoria-producto"
                className="block text-sm font-semibold text-slate-700"
              >
                Filtrar por Categoría
              </label>
              <select
                id="filtro-categoria-producto"
                name="categoria"
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="block w-full rounded-lg border-slate-300 bg-slate-50 p-2.5 text-sm text-slate-800 focus:border-emerald-500 focus:ring-emerald-500 border"
              >
                <option value="todas">Todas las categorías</option>
                {PRODUCT_CATEGORIES.map((category) => {
                  const value = category
                    .toLowerCase()
                    .normalize('NFD')
                    .replace(/[\u0300-\u036f]/g, '')
                  return (
                    <option key={category} value={value}>
                      {category}
                    </option>
                  )
                })}
              </select>
            </form>
          </div>

          <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {products.map((product) => (
              <ProductCard
                key={product.id}
                {...product}
                onAdd={handleAddToCart}
              />
            ))}
          </ul>
        </section>
      </main>
    </div>
  )
}
