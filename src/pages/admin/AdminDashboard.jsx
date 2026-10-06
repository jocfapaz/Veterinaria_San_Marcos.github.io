import {
  getOrders,
  getRequests,
  getUsers,
  getProducts,
  formatPrice,
} from '../../mockDB.js'
import AdminTable from '../../components/admin/AdminTable'
import StatusBadge from '../../components/admin/StatusBadge'

export default function AdminDashboard() {
  const orders = getOrders()
  const requests = getRequests()
  const users = getUsers()
  const products = getProducts()

  const recentOrders = [...orders].reverse().slice(0, 5)
  const recentRequests = [...requests].reverse().slice(0, 5)

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-2xl font-bold text-slate-900">Dashboard</h1>
        <p className="text-slate-500 text-sm mt-1">
          Resumen general de la veterinaria.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="bg-white p-5 rounded-2xl shadow-sm border border-slate-200">
          <p className="text-xs font-semibold text-slate-500 uppercase">
            Órdenes de compra
          </p>
          <p className="text-3xl font-extrabold text-emerald-600 mt-1">
            {orders.length}
          </p>
        </div>
        <div className="bg-white p-5 rounded-2xl shadow-sm border border-slate-200">
          <p className="text-xs font-semibold text-slate-500 uppercase">
            Solicitudes de servicio
          </p>
          <p className="text-3xl font-extrabold text-emerald-600 mt-1">
            {requests.length}
          </p>
        </div>
        <div className="bg-white p-5 rounded-2xl shadow-sm border border-slate-200">
          <p className="text-xs font-semibold text-slate-500 uppercase">
            Usuarios registrados
          </p>
          <p className="text-3xl font-extrabold text-emerald-600 mt-1">
            {users.length}
          </p>
        </div>
        <div className="bg-white p-5 rounded-2xl shadow-sm border border-slate-200">
          <p className="text-xs font-semibold text-slate-500 uppercase">
            Productos en catálogo
          </p>
          <p className="text-3xl font-extrabold text-emerald-600 mt-1">
            {products.length}
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="space-y-4">
          <h2 className="text-lg font-bold text-slate-900">
            Últimas órdenes de compra
          </h2>
          {recentOrders.length === 0 ? (
            <p className="text-slate-500 text-sm">No hay órdenes registradas.</p>
          ) : (
            <AdminTable headers={['Nº Orden', 'Total', 'Fecha']}>
              {recentOrders.map((order) => (
                <tr key={order.id}>
                  <td className="py-3 px-4 font-medium">{order.orderNumber}</td>
                  <td className="py-3 px-4">{formatPrice(order.total)}</td>
                  <td className="py-3 px-4 text-slate-500">
                    {new Date(order.createdAt).toLocaleDateString('es-CL')}
                  </td>
                </tr>
              ))}
            </AdminTable>
          )}
        </div>

        <div className="space-y-4">
          <h2 className="text-lg font-bold text-slate-900">
            Últimas solicitudes de servicio
          </h2>
          {recentRequests.length === 0 ? (
            <p className="text-slate-500 text-sm">
              No hay solicitudes registradas.
            </p>
          ) : (
            <AdminTable headers={['Servicio', 'Mascota', 'Estado']}>
              {recentRequests.map((request) => (
                <tr key={request.id}>
                  <td className="py-3 px-4 font-medium">{request.serviceId}</td>
                  <td className="py-3 px-4">
                    {request.petName} ({request.species})
                  </td>
                  <td className="py-3 px-4">
                    <StatusBadge status={request.status} />
                  </td>
                </tr>
              ))}
            </AdminTable>
          )}
        </div>
      </div>
    </div>
  )
}
