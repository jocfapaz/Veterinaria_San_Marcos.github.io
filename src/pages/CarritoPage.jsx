import { useState } from 'react'
import { Link } from 'react-router'
import {
  getProductById,
  formatPrice,
  calculateDiscountedPrice,
} from '../mockDB.js'
import { useAuth } from '../contexts/AuthContext.jsx'
import { useCart } from '../contexts/CartContext.jsx'
import PageHeader from '../components/PageHeader'
import EmptyState from '../components/EmptyState'
import QuantitySelector from '../components/QuantitySelector'
import Button from '../components/Button'

export default function CarritoPage() {
  const { currentUser } = useAuth()
  const { items, cartTotal, updateQuantity, removeFromCart, checkout } =
    useCart()
  const [order, setOrder] = useState(null)

  function handleCheckout() {
    const created = checkout({
      userId: currentUser.id,
      shippingAddress: currentUser.address,
      instructions: '',
    })
    setOrder(created)
  }

  if (items.length === 0) {
    return (
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <PageHeader
          title="Tu Carrito de Compras"
          subtitle="Revisa los artículos seleccionados antes de finalizar tu orden."
        />
        {order && (
          <div className="mb-6 p-4 text-sm text-emerald-800 rounded-lg bg-emerald-50 border border-emerald-200">
            ✅ Tu orden <strong>#{order.orderNumber}</strong> fue creada con éxito.
          </div>
        )}
        <EmptyState
          title="Tu carrito está vacío"
          message="Agrega productos desde la tienda para comenzar tu compra."
          actionLabel="Seguir comprando"
          actionTo="/tienda"
        />
      </div>
    )
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      <PageHeader
        title="Tu Carrito de Compras"
        subtitle="Revisa los artículos seleccionados antes de finalizar tu orden."
      />

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start mt-8">
        <div className="lg:col-span-2 bg-white rounded-2xl shadow-sm border border-slate-100 overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-slate-50 border-b border-slate-100 text-xs font-semibold text-slate-500 uppercase tracking-wider">
                  <th className="py-4 px-6">Producto</th>
                  <th className="py-4 px-4 text-center">Precio</th>
                  <th className="py-4 px-4 text-center">Cantidad</th>
                  <th className="py-4 px-4 text-right">Subtotal</th>
                  <th className="py-4 px-6 text-center">Acción</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 text-sm text-slate-700">
                {items.map((item) => {
                  const product = getProductById(item.productId)
                  if (!product) return null
                  const price = calculateDiscountedPrice(
                    product.price,
                    product.discount,
                  )
                  const subtotal = price * item.quantity

                  return (
                    <tr
                      key={item.productId}
                      className="hover:bg-slate-50/50 transition-colors"
                    >
                      <td className="py-4 px-6 font-medium text-slate-900">
                        {product.name}
                      </td>
                      <td className="py-4 px-4 text-center whitespace-nowrap">
                        {formatPrice(price)}
                      </td>
                      <td className="py-4 px-4 text-center">
                        <div className="inline-block">
                          <QuantitySelector
                            value={item.quantity}
                            onChange={(qty) =>
                              updateQuantity(item.productId, qty)
                            }
                          />
                        </div>
                      </td>
                      <td className="py-4 px-4 text-right font-semibold text-slate-900 whitespace-nowrap">
                        {formatPrice(subtotal)}
                      </td>
                      <td className="py-4 px-6 text-center whitespace-nowrap">
                        <button
                          type="button"
                          onClick={() => removeFromCart(item.productId)}
                          className="text-xs font-semibold text-rose-600 hover:text-rose-700 bg-rose-50 hover:bg-rose-100 px-3 py-1.5 rounded-lg border border-rose-200 transition-colors"
                        >
                          Eliminar
                        </button>
                      </td>
                    </tr>
                  )
                })}
              </tbody>
            </table>
          </div>
        </div>

        <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 space-y-6">
          <h2 className="text-xl font-bold text-slate-900 border-b border-slate-100 pb-3">
            Resumen del pedido
          </h2>

          <div className="space-y-3 text-sm text-slate-600">
            <div className="flex justify-between">
              <span>Subtotal</span>
              <span className="font-medium text-slate-800">
                {formatPrice(cartTotal)}
              </span>
            </div>
            <div className="flex justify-between">
              <span>Envío</span>
              <span className="text-emerald-600 font-medium">Gratis</span>
            </div>
            <div className="border-t border-slate-100 pt-3 flex justify-between items-center">
              <h3 className="text-base font-bold text-slate-900">
                Total a Pagar
              </h3>
              <span className="text-2xl font-extrabold text-emerald-600">
                {formatPrice(cartTotal)}
              </span>
            </div>
          </div>

          <div className="space-y-3 pt-2">
            <Button onClick={handleCheckout} className="w-full py-3">
              Proceder al Pago
            </Button>
            <Link
              to="/tienda"
              className="block text-center text-xs font-semibold text-emerald-600 hover:text-emerald-700 hover:underline py-1"
            >
              ← Seguir comprando
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
