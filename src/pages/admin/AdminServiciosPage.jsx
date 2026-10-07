import { Link, useNavigate } from 'react-router'
import {
  getServices,
  deleteService,
} from '../../mockDB.js'
import { useAuth } from '../../contexts/AuthContext.jsx'
import AdminPageHeader from '../../components/admin/AdminPageHeader'
import AdminTable from '../../components/admin/AdminTable'

export default function AdminServiciosPage() {
  const services = getServices()
  const navigate = useNavigate()
  const { isAdmin } = useAuth()

  function handleDelete(id) {
    if (window.confirm('¿Estás seguro de eliminar este servicio?')) {
      deleteService(id)
      navigate('/admin/servicios')
    }
  }

  return (
    <div className="space-y-6">
      <AdminPageHeader
        title="Gestión de Servicios"
        actionLabel={isAdmin ? '+ Nuevo servicio' : undefined}
        actionTo={isAdmin ? '/admin/servicios/nuevo' : undefined}
      />

      <AdminTable
        headers={['ID', 'Código', 'Categoría', 'Nombre', 'Especie', 'Duración', 'Precio', isAdmin ? 'Acciones' : undefined].filter(Boolean)}
      >
        {services.map((service) => (
          <tr key={service.id}>
            <td className="py-3 px-4 font-medium">{service.id}</td>
            <td className="py-3 px-4">{service.code}</td>
            <td className="py-3 px-4">{service.category}</td>
            <td className="py-3 px-4">{service.name}</td>
            <td className="py-3 px-4">{service.species}</td>
            <td className="py-3 px-4">{service.duration}</td>
            <td className="py-3 px-4">
              ${service.price.toLocaleString('es-CL')}
            </td>
            {isAdmin && (
              <td className="py-3 px-4">
                <div className="flex items-center gap-2">
                  <Link
                    to={`/admin/servicios/${service.id}/editar`}
                    className="text-xs font-semibold text-emerald-600 hover:text-emerald-700 bg-emerald-50 hover:bg-emerald-100 px-3 py-1.5 rounded-lg border border-emerald-200 transition-colors"
                  >
                    Editar
                  </Link>
                  <button
                    type="button"
                    onClick={() => handleDelete(service.id)}
                    className="text-xs font-semibold text-rose-600 hover:text-rose-700 bg-rose-50 hover:bg-rose-100 px-3 py-1.5 rounded-lg border border-rose-200 transition-colors"
                  >
                    Eliminar
                  </button>
                </div>
              </td>
            )}
          </tr>
        ))}
      </AdminTable>
    </div>
  )
}
