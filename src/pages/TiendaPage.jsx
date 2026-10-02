import { useState } from 'react'
import { useNavigate } from 'react-router'
import {
  getProducts,
  getProductsByCategory,
  PRODUCT_CATEGORIES,
} from '../mockDB.js'
import { useAuth } from '../contexts/AuthContext.jsx'
import { useCart } from '../contexts/CartContext.jsx'
import ProductCard from '../components/ProductCard'
import Button from '../components/Button'
import PageHeader from '../components/PageHeader'

export default function TiendaPage() {
  const [selectedCategory, setSelectedCategory] = useState('Todas')
  const navigate = useNavigate()
  const { currentUser } = useAuth()
  const { addToCart } = useCart()
  const products =
    selectedCategory === 'Todas'
      ? getProducts()
      : getProductsByCategory(selectedCategory)

  function handleAddToCart(productId) {
    if (!currentUser) {
      navigate('/login')
      return
    }
    addToCart(productId, 1)
    alert('Producto añadido al carrito')
  }

  const categories = ['Todas', ...PRODUCT_CATEGORIES]

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-6">
      <PageHeader
        title="Tienda y farmacia"
        subtitle="Medicamentos, suplementos y productos de cuidado para tu mascota."
      />

      <div className="flex flex-wrap gap-2">
        {categories.map((category) => (
          <Button
            key={category}
            variant={selectedCategory === category ? 'primary' : 'secondary'}
            onClick={() => setSelectedCategory(category)}
          >
            {category}
          </Button>
        ))}
      </div>

      <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {products.map((product) => (
          <ProductCard
            key={product.id}
            {...product}
            onAdd={handleAddToCart}
          />
        ))}
      </section>
    </div>
  )
}
