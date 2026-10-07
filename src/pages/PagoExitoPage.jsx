import { Link } from 'react-router'
import { formatPrice } from '../mockDB.js'
import { readLastOrder } from '../utils/lastOrder.js'
import PageHeader from '../components/PageHeader'
import EmptyState from '../components/EmptyState'

export default function PagoExitoPage() {
  const order = readLastOrder()

  if (!order || order.status !== 'paid') {
    return (
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <PageHeader
          title="Pago Exitoso"
          subtitle="Aquí puedes revisar el resumen de tu compra."
        />
        <EmptyState
          title="No encontramos una compra reciente"
          message="Si finalizaste una compra, el resumen se muestra apenas terminas el pago."
          actionLabel="Ir a la tienda"
          actionTo="/tienda"
        />
      </div>
    )
  }

  const rows = [
    { label: 'Número de orden', value: order.orderNumber },
    { label: 'Fecha', value: new Date(order.createdAt).toLocaleString('es-CL') },
    { label: 'Cliente', value: `${order.customer.firstName} ${order.customer.lastName}` },
    { label: 'Correo', value: order.customer.email },
    { label: 'Teléfono', value: order.customer.phone },
    {
      label: order.deliveryType === 'retiro' ? 'Tipo de entrega' : 'Dirección de envío',
      value:
        order.deliveryType === 'retiro'
          ? 'Retiro en tienda'
          : order.shippingAddress,
    },
  ]

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-8">
      <PageHeader
        title="Pago Exitoso"
        subtitle="Tu compra fue procesada correctamente."
      />

      <section className="bg-white rounded-2xl shadow-sm border border-slate-100 overflow-hidden">
        <div className="bg-emerald-600 px-6 py-8 text-center text-white">
          <div className="text-5xl mb-3">✅</div>
          <h2 className="text-2xl font-extrabold">¡Gracias por tu compra!</h2>
          <p className="text-emerald-100 text-sm mt-1">
            Recibirás la confirmación en {order.customer.email}
          </p>
          <p className="mt-4 inline-block bg-white/15 border border-white/30 rounded-full px-4 py-1.5 text-sm font-semibold tracking-wide">
            Orden {order.orderNumber}
          </p>
        </div>

        <div className="p-6 space-y-6">
          <dl className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-4 text-sm">
            {rows.map((row) => (
              <div key={row.label}>
                <dt className="text-slate-500 font-medium">{row.label}</dt>
                <dd className="text-slate-900 font-semibold mt-0.5">
                  {row.value}
                </dd>
              </div>
            ))}
          </dl>

          <div className="border-t border-slate-100 pt-5 space-y-3">
            <h3 className="text-base font-bold text-slate-900">
              Productos adquiridos
            </h3>
            <ul className="divide-y divide-slate-100 text-sm">
              {order.items.map((item) => (
                <li
                  key={item.productId}
                  className="py-3 flex justify-between gap-4"
                >
                  <span className="text-slate-700">
                    {item.name}{' '}
                    <span className="text-slate-400">x{item.quantity}</span>
                  </span>
                  <span className="font-semibold text-slate-900 whitespace-nowrap">
                    {formatPrice(item.subtotal ?? item.price * item.quantity)}
                  </span>
                </li>
              ))}
            </ul>

            {order.instructions && (
              <div className="bg-slate-50 border border-slate-200 rounded-lg p-3 text-sm text-slate-600">
                <span className="font-semibold text-slate-700">
                  Indicaciones de entrega:{' '}
                </span>
                {order.instructions}
              </div>
            )}

            <div className="flex justify-between items-center border-t border-slate-100 pt-4">
              <span className="font-bold text-slate-900">Total pagado</span>
              <span className="text-2xl font-extrabold text-emerald-600">
                {formatPrice(order.total)}
              </span>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-3 pt-2">
            <Link
              to="/tienda"
              className="flex-1 text-center py-3 px-4 bg-emerald-600 hover:bg-emerald-700 text-white font-semibold text-sm rounded-lg transition-colors"
            >
              Seguir comprando
            </Link>
            <Link
              to="/"
              className="flex-1 text-center py-3 px-4 bg-emerald-50 hover:bg-emerald-100 text-emerald-700 border border-emerald-200 font-semibold text-sm rounded-lg transition-colors"
            >
              Volver al inicio
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
