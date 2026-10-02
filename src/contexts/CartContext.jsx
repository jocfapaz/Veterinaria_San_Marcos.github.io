/* eslint-disable react-refresh/only-export-components */
import { createContext, useContext, useEffect, useState } from 'react'
import {
  getProductById,
  calculateDiscountedPrice,
  createOrder,
} from '../mockDB.js'

const CartContext = createContext(null)
const STORAGE_KEY = 'vsm_cart'

export function CartProvider({ children }) {
  const [items, setItems] = useState(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY)
      return saved ? JSON.parse(saved) : []
    } catch {
      return []
    }
  })

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(items))
  }, [items])

  function addToCart(productId, quantity = 1) {
    setItems((prev) => {
      const existing = prev.find((item) => item.productId === productId)
      if (existing) {
        return prev.map((item) =>
          item.productId === productId
            ? { ...item, quantity: item.quantity + quantity }
            : item,
        )
      }
      return [...prev, { productId, quantity }]
    })
  }

  function removeFromCart(productId) {
    setItems((prev) => prev.filter((item) => item.productId !== productId))
  }

  function updateQuantity(productId, quantity) {
    if (quantity <= 0) {
      removeFromCart(productId)
      return
    }
    setItems((prev) =>
      prev.map((item) =>
        item.productId === productId ? { ...item, quantity } : item,
      ),
    )
  }

  function clearCart() {
    setItems([])
  }

  function cartTotal() {
    return items.reduce((total, item) => {
      const product = getProductById(item.productId)
      if (!product) return total
      const price = calculateDiscountedPrice(product.price, product.discount)
      return total + price * item.quantity
    }, 0)
  }

  function checkout({ userId, shippingAddress, instructions = '' }) {
    const order = createOrder({
      userId,
      items,
      shippingAddress,
      instructions,
    })
    clearCart()
    return order
  }

  const value = {
    items,
    cartCount: items.reduce((sum, item) => sum + item.quantity, 0),
    cartTotal: cartTotal(),
    addToCart,
    removeFromCart,
    updateQuantity,
    clearCart,
    checkout,
    isReady: true,
  }

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>
}

export function useCart() {
  const ctx = useContext(CartContext)
  if (!ctx) throw new Error('useCart debe usarse dentro de CartProvider')
  return ctx
}
