import { NavLink, useNavigate } from 'react-router'
import { useAuth } from '../contexts/AuthContext.jsx'
import { useCart } from '../contexts/CartContext.jsx'
import { useRequests } from '../contexts/RequestContext.jsx'
import { NAV_LINKS } from './Navbar'

const linkBase =
  'block px-3 py-2 rounded-md text-slate-700 hover:text-emerald-600 hover:bg-emerald-50'
const linkActive = 'text-emerald-600 bg-emerald-50 border-l-4 border-emerald-600'

export default function MobileMenu({ onClose }) {
  const { currentUser, logout } = useAuth()
  const { cartCount } = useCart()
  const { requestCount } = useRequests()
  const navigate = useNavigate()

  function handleLogout() {
    logout()
    onClose()
    navigate('/')
  }

  return (
    <div className="md:hidden absolute top-full left-0 w-full bg-white border-t border-slate-100 shadow-lg pb-4 z-50">
      <div className="px-4 py-3 space-y-2 font-medium">
        {NAV_LINKS.map((link) => (
          <NavLink
            key={link.to}
            to={link.to}
            className={({ isActive }) =>
              isActive ? `${linkBase} ${linkActive}` : linkBase
            }
            onClick={onClose}
          >
            {link.label}
          </NavLink>
        ))}

        <hr className="border-slate-100 my-2" />

        {currentUser ? (
          <>
            <span className="block px-3 py-2 text-slate-500 text-sm">
              {currentUser.firstName} {currentUser.lastName}
            </span>
            <button
              type="button"
              onClick={handleLogout}
              className="block w-full text-left px-3 py-2 text-rose-600 hover:bg-rose-50 rounded-md"
            >
              Cerrar sesión
            </button>
          </>
        ) : (
          <NavLink to="/login" className={linkBase} onClick={onClose}>
            Iniciar sesión / Registrarse
          </NavLink>
        )}

        <NavLink to="/mi-solicitud" className={linkBase} onClick={onClose}>
          📋 Mi solicitud ({requestCount})
        </NavLink>

        <NavLink to="/carrito" className={linkBase} onClick={onClose}>
          🛒 Carrito ({cartCount})
        </NavLink>
      </div>
    </div>
  )
}