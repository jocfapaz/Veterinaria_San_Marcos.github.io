import { Link } from 'react-router'
import { formatPrice } from '../mockDB.js'
import { readLastOrder } from '../utils/lastOrder.js'
import PageHeader from '../components/PageHeader'
import EmptyState from '../components/EmptyState'

export default function PagoErrorPage() {
  const attempt = readLastOrder()

  if (!attempt || attempt.status !== 'failed') {
    return (
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <PageHeader
          title="Pago con Error"
          subtitle="Aquí verás el detalle de la transacción fallida."
        />
        <EmptyState
          title="No hay transacciones fallidas"
          message="Cuando un pago no se concreta, el detalle aparece en esta pantalla."
          actionLabel="Ir a la tienda"
          actionTo="/tienda"
        />
      </div>
    )
  }

  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-8">
      <PageHeader
        title="Pago con Error"
        subtitle="La transacción no pudo completarse."
      />

      <section className="bg-white rounded-2xl shadow-sm border border-slate-100 overflow-hidden">
        <div className="bg-rose-600 px-6 py-8 text-center text-white">
          <div className="text-5xl mb-3">⛔</div>
          <h2 className="text-2xl font-extrabold">Pago no realizado</h2>
          <p className="text-rose-100 text-sm mt-1">
            {attempt.reason ||
              'La transacción fue rechazada. Tus productos siguen en el carrito.'}
          </p>
        </div>

        <div className="p-6 space-y-6">
          <div className="bg-rose-50 border border-rose-200 rounded-lg p-4 text-sm text-rose-800">
            No se realizó ningún cargo. El carrito mantiene tus productos para
            que puedas intentarlo nuevamente.
          </div>

          <dl className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-4 text-sm">
            <div>
              <dt className="text-slate-500 font-medium">Cliente</dt>
              <dd className="text-slate-900 font-semibold mt-0.5">
                {attempt.customer.firstName} {attempt.customer.lastName}
              </dd>
            </div>
            <div>
              <dt className="text-slate-500 font-medium">Fecha del intento</dt>
              <dd className="text-slate-900 font-semibold mt-0.5">
                {new Date(attempt.createdAt).toLocaleString('es-CL')}
              </dd>
            </div>
            <div>
              <dt className="text-slate-500 font-medium">
                {attempt.deliveryType === 'retiro'
                  ? 'Tipo de entrega'
                  : 'Dirección de envío'}
              </dt>
              <dd className="text-slate-900 font-semibold mt-0.5">
                {attempt.deliveryType === 'retiro'
                  ? 'Retiro en tienda'
                  : attempt.shippingAddress}
              </dd>
            </div>
            <div>
              <dt className="text-slate-500 font-medium">Monto rechazado</dt>
              <dd className="text-rose-600 font-extrabold mt-0.5">
                {formatPrice(attempt.total)}
              </dd>
            </div>
          </dl>

          <div className="border-t border-slate-100 pt-5 space-y-3">
            <h3 className="text-base font-bold text-slate-900">
              Productos afectados
            </h3>
            <ul className="divide-y divide-slate-100 text-sm">
              {attempt.items.map((item) => (
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
          </div>

          <div className="flex flex-col sm:flex-row gap-3 pt-2">
            <Link
              to="/checkout"
              className="flex-1 text-center py-3 px-4 bg-emerald-600 hover:bg-emerald-700 text-white font-semibold text-sm rounded-lg transition-colors"
            >
              Reintentar pago
            </Link>
            <Link
              to="/carrito"
              className="flex-1 text-center py-3 px-4 bg-emerald-50 hover:bg-emerald-100 text-emerald-700 border border-emerald-200 font-semibold text-sm rounded-lg transition-colors"
            >
              Volver al carrito
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
