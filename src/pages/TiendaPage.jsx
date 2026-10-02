import { useState } from 'react'
import {
  getProducts,
  getProductsByCategory,
  PRODUCT_CATEGORIES,
  addToCart,
} from '../mockDB.js'
import ProductCard from '../components/ProductCard'
import Button from '../components/Button'

export default function TiendaPage() {
  const [selectedCategory, setSelectedCategory] = useState('Todas')
  const products =
    selectedCategory === 'Todas'
      ? getProducts()
      : getProductsByCategory(selectedCategory)

  function handleAddToCart(productId) {
    addToCart(productId, 1)
    alert('Producto añadido al carrito')
  }

  const categories = ['Todas', ...PRODUCT_CATEGORIES]

  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold text-gray-900">Tienda y farmacia</h1>

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