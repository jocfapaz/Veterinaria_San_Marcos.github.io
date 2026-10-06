import { useState } from 'react'
import {
  getRequests,
  getOrders,
  getUserById,
  getServiceById,
  updateRequestStatus,
  updateOrderStatus,
} from '../../mockDB.js'
import AdminPageHeader from '../../components/admin/AdminPageHeader'
import AdminTable from '../../components/admin/AdminTable'
import StatusBadge from '../../components/admin/StatusBadge'

const REQUEST_STATUSES = [
  { value: 'pending', label: 'Pendiente' },
  { value: 'confirmed', label: 'Confirmada' },
  { value: 'completed', label: 'Completada' },
  { value: 'cancelled', label: 'Cancelada' },
]

const ORDER_STATUSES = [
  { value: 'paid', label: 'Pagada' },
  { value: 'processing', label: 'En preparación' },
  { value: 'shipped', label: 'Enviada' },
  { value: 'delivered', label: 'Entregada' },
  { value: 'cancelled', label: 'Cancelada' },
]

function formatDate(isoString) {
  if (!isoString) return '—'
  const date = new Date(isoString)
  return date.toLocaleDateString('es-CL', {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
  })
}

export default function AdminOrdenesPage() {
  const [requests, setRequests] = useState(getRequests())
  const [orders, setOrders] = useState(getOrders())

  function refreshRequests() {
    setRequests(getRequests())
  }

  function refreshOrders() {
    setOrders(getOrders())
  }

  function handleRequestStatusChange(id, status) {
    updateRequestStatus(id, status)
    refreshRequests()
  }

  function handleOrderStatusChange(id, status) {
    updateOrderStatus(id, status)
    refreshOrders()
  }

  return (
    <div className="space-y-8">
      <AdminPageHeader title="Órdenes y solicitudes" />

      <section>
        <h2 className="text-lg font-semibold text-slate-800 mb-4">
          Solicitudes de servicios
        </h2>
        <AdminTable
          headers={['ID', 'Cliente', 'Servicio', 'Mascota', 'Fecha', 'Estado']}
        >
          {requests.length === 0 ? (
            <tr>
              <td
                colSpan={6}
                className="py-6 px-4 text-center text-sm text-slate-500"
              >
                No hay solicitudes registradas.
              </td>
            </tr>
          ) : (
            requests.map((request) => {
              const user = getUserById(request.userId)
              const service = getServiceById(request.serviceId)
              return (
                <tr key={request.id}>
                  <td className="py-3 px-4 font-medium">{request.id}</td>
                  <td className="py-3 px-4">
                    {user ? `${user.firstName} ${user.lastName}` : request.userId}
                  </td>
                  <td className="py-3 px-4">
                    {service ? service.name : request.serviceId}
                  </td>
                  <td className="py-3 px-4">
                    {request.petName} ({request.species})
                  </td>
                  <td className="py-3 px-4">
                    {formatDate(request.requestedDate)}
                  </td>
                  <td className="py-3 px-4">
                    <div className="flex items-center gap-2">
                      <StatusBadge status={request.status} />
                      <select
                        value={request.status}
                        onChange={(e) =>
                          handleRequestStatusChange(request.id, e.target.value)
                        }
                        className="text-xs border border-slate-200 rounded-lg px-2 py-1 bg-white focus:outline-none focus:border-emerald-500"
                      >
                        {REQUEST_STATUSES.map((s) => (
                          <option key={s.value} value={s.value}>
                            {s.label}
                          </option>
                        ))}
                      </select>
                    </div>
                  </td>
                </tr>
              )
            })
          )}
        </AdminTable>
      </section>

      <section>
        <h2 className="text-lg font-semibold text-slate-800 mb-4">
          Órdenes de compra
        </h2>
        <AdminTable
          headers={['N° orden', 'Cliente', 'Total', 'Fecha', 'Estado']}
        >
          {orders.length === 0 ? (
            <tr>
              <td
                colSpan={5}
                className="py-6 px-4 text-center text-sm text-slate-500"
              >
                No hay órdenes registradas.
              </td>
            </tr>
          ) : (
            orders.map((order) => {
              const user = getUserById(order.userId)
              return (
                <tr key={order.id}>
                  <td className="py-3 px-4 font-medium">{order.orderNumber}</td>
                  <td className="py-3 px-4">
                    {user ? `${user.firstName} ${user.lastName}` : order.userId}
                  </td>
                  <td className="py-3 px-4">
                    ${order.total.toLocaleString('es-CL')}
                  </td>
                  <td className="py-3 px-4">{formatDate(order.createdAt)}</td>
                  <td className="py-3 px-4">
                    <div className="flex items-center gap-2">
                      <StatusBadge status={order.status} />
                      <select
                        value={order.status}
                        onChange={(e) =>
                          handleOrderStatusChange(order.id, e.target.value)
                        }
                        className="text-xs border border-slate-200 rounded-lg px-2 py-1 bg-white focus:outline-none focus:border-emerald-500"
                      >
                        {ORDER_STATUSES.map((s) => (
                          <option key={s.value} value={s.value}>
                            {s.label}
                          </option>
                        ))}
                      </select>
                    </div>
                  </td>
                </tr>
              )
            })
          )}
        </AdminTable>
      </section>
    </div>
  )
}
