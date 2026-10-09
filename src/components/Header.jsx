import { useState } from 'react'
import { Link, useNavigate } from 'react-router'
import { useAuth } from '../contexts/AuthContext.jsx'
import { useCart } from '../contexts/CartContext.jsx'
import { useRequests } from '../contexts/RequestContext.jsx'
import { useLogout } from '../hooks/useLogout.js'
import Navbar from './Navbar'
import MobileMenu from './MobileMenu'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const { currentUser, isStaff } = useAuth()
  const { cartCount } = useCart()
  const { requestCount } = useRequests()
  const navigate = useNavigate()
  const logout = useLogout()

  function handleLogout() {
    logout()
    navigate('/')
  }

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50 border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <Link
          to="/"
          className="flex items-center gap-2 text-emerald-600 font-bold text-lg md:text-xl hover:text-emerald-700 transition-colors"
        >
          <svg
            className="w-6 h-6 md:w-8 md:h-8 shrink-0"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.684a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
            />
          </svg>
          <span className="truncate">Veterinaria San Marcos</span>
        </Link>

        <Navbar />

        <div className="hidden md:flex items-center gap-3 text-sm font-semibold">
          {currentUser ? (
            <div className="flex items-center gap-2">
              <span className="text-slate-700">
                Hola, {currentUser.firstName}
              </span>
              {isStaff && (
                <Link
                  to="/admin"
                  className="text-emerald-700 hover:text-emerald-800 bg-emerald-50 hover:bg-emerald-100 px-3 py-1.5 rounded-lg border border-emerald-200 transition-colors"
                >
                  Panel Admin
                </Link>
              )}
              <button
                type="button"
                onClick={handleLogout}
                className="text-rose-600 hover:text-rose-700 px-2 py-1"
              >
                Salir
              </button>
            </div>
          ) : (
            <Link
              to="/login"
              title="Iniciar sesión / Registrarse"
              className="flex items-center justify-center w-10 h-10 bg-emerald-600 hover:bg-emerald-700 text-white rounded-lg shadow-sm transition-all mr-1"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                fill="currentColor"
                viewBox="0 0 256 256"
              >
                <path d="M230.92,212c-15.23-26.33-38.7-45.21-66.09-55.2a68,68,0,1,0-73.66,0C63.78,166.79,40.31,185.67,25.08,212a8,8,0,1,0,13.85,8c16-27.81,44.49-50.06,81.07-64.37a68,68,0,0,0,73.66,0c36.58,14.31,65.06,36.56,81.07,64.37a8,8,0,1,0,13.85-8ZM68,96a52,52,0,1,1,52,52A52.06,52.06,0,0,1,68,96Z" />
              </svg>
            </Link>
          )}

          <Link
            to="/mi-solicitud"
            className="bg-emerald-50 text-emerald-700 border border-emerald-200 hover:bg-emerald-100 px-3 py-2 rounded-lg transition-colors flex items-center gap-1 shadow-sm"
          >
            📋 Mi solicitud ({requestCount})
          </Link>

          <Link
            to="/carrito"
            className="bg-emerald-50 text-emerald-700 border border-emerald-200 hover:bg-emerald-100 px-3 py-2 rounded-lg transition-colors flex items-center gap-1 shadow-sm"
          >
            🛒 Carrito ({cartCount})
          </Link>
        </div>

        <button
          type="button"
          className="md:hidden text-slate-600 hover:text-emerald-600 focus:outline-none p-2"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label={isMenuOpen ? 'Cerrar menú' : 'Abrir menú'}
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
      </div>

      {isMenuOpen && (
        <MobileMenu onClose={() => setIsMenuOpen(false)} />
      )}
    </header>
  )
}
