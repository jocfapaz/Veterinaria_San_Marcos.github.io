import { NavLink, Link } from 'react-router'
import { useAuth } from '../../contexts/AuthContext.jsx'

export default function AdminSidebar() {
  const {
    canManageServices,
    canManageProducts,
    canManageUsers,
    canManageOrders,
  } = useAuth()

  const links = [
    { label: 'Dashboard', to: '/admin', visible: true },
    {
      label: 'Servicios',
      to: '/admin/servicios',
      visible: canManageServices,
    },
    {
      label: 'Productos',
      to: '/admin/productos',
      visible: canManageProducts,
    },
    {
      label: 'Usuarios',
      to: '/admin/usuarios',
      visible: canManageUsers,
    },
    {
      label: 'Órdenes',
      to: '/admin/ordenes',
      visible: canManageOrders,
    },
  ].filter((link) => link.visible)

  return (
    <aside className="bg-slate-900 text-slate-300 w-full md:w-64 md:min-h-screen flex-shrink-0">
      <div className="p-6">
        <Link
          to="/"
          className="text-xl font-bold text-white hover:text-emerald-400"
        >
          Veterinaria San Marcos
        </Link>
        <p className="text-xs text-slate-500 mt-1">Panel administrativo</p>
      </div>
      <nav className="px-4 pb-4 space-y-1">
        {links.map((link) => (
          <NavLink
            key={link.to}
            to={link.to}
            end={link.to === '/admin'}
            className={({ isActive }) =>
              `block px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                isActive
                  ? 'bg-emerald-600 text-white'
                  : 'hover:bg-slate-800 hover:text-white'
              }`
            }
          >
            {link.label}
          </NavLink>
        ))}
      </nav>
      <div className="px-6 py-4 mt-auto border-t border-slate-800">
        <Link
          to="/"
          className="text-sm text-slate-400 hover:text-emerald-400 transition-colors"
        >
          ← Volver al sitio
        </Link>
      </div>
    </aside>
  )
}
