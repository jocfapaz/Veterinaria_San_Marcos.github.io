import { Link, useNavigate } from 'react-router'
import {
  getUsers,
  deleteUser,
  formatRun,
} from '../../mockDB.js'
import AdminPageHeader from '../../components/admin/AdminPageHeader'
import AdminTable from '../../components/admin/AdminTable'
import RoleBadge from '../../components/admin/RoleBadge'

export default function AdminUsuariosPage() {
  const users = getUsers()
  const navigate = useNavigate()

  function handleDelete(id) {
    if (window.confirm('¿Estás seguro de eliminar este usuario?')) {
      deleteUser(id)
      navigate('/admin/usuarios')
    }
  }

  return (
    <div className="space-y-6">
      <AdminPageHeader
        title="Gestión de Usuarios"
        actionLabel="+ Nuevo usuario"
        actionTo="/admin/usuarios/nuevo"
      />

      <AdminTable
        headers={['ID', 'RUN', 'Email', 'Nombre', 'Rol', 'Teléfono', 'Acciones']}
      >
        {users.map((user) => (
          <tr key={user.id}>
            <td className="py-3 px-4 font-medium">{user.id}</td>
            <td className="py-3 px-4">{formatRun(user.run)}</td>
            <td className="py-3 px-4">{user.email}</td>
            <td className="py-3 px-4">
              {user.firstName} {user.lastName}
            </td>
            <td className="py-3 px-4">
              <RoleBadge role={user.role} />
            </td>
            <td className="py-3 px-4">{user.phone}</td>
            <td className="py-3 px-4">
              <div className="flex items-center gap-2">
                <Link
                  to={`/admin/usuarios/${user.id}/editar`}
                  className="text-xs font-semibold text-emerald-600 hover:text-emerald-700 bg-emerald-50 hover:bg-emerald-100 px-3 py-1.5 rounded-lg border border-emerald-200 transition-colors"
                >
                  Editar
                </Link>
                <button
                  type="button"
                  onClick={() => handleDelete(user.id)}
                  className="text-xs font-semibold text-rose-600 hover:text-rose-700 bg-rose-50 hover:bg-rose-100 px-3 py-1.5 rounded-lg border border-rose-200 transition-colors"
                >
                  Eliminar
                </button>
              </div>
            </td>
          </tr>
        ))}
      </AdminTable>
    </div>
  )
}
