import { Link } from 'react-router'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-slate-900 text-slate-300 py-10 border-t border-slate-800 mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
        {/* Columna 1: Marca */}
        <div className="space-y-3">
          <div className="flex items-center justify-center md:justify-start gap-2 text-white font-bold text-lg">
            <svg
              className="w-6 h-6 text-emerald-500"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.684a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
              />
            </svg>
            <span>Veterinaria San Marcos</span>
          </div>
          <p className="text-xs text-slate-400">
            Atención médica profesional y consejos especializados para el bienestar constante de tus animales de compañía.
          </p>
        </div>

        {/* Columna 2: Secciones */}
        <div>
          <h5 className="text-white text-sm font-semibold mb-3">Secciones</h5>
          <ul className="space-y-2 text-xs text-slate-400">
            <li>
              <Link to="/servicios" className="hover:text-emerald-400 transition-colors">
                Servicios Médicos
              </Link>
            </li>
            <li>
              <Link to="/tienda" className="hover:text-emerald-400 transition-colors">
                Tienda y Farmacia
              </Link>
            </li>
            <li>
              <Link to="/contacto" className="hover:text-emerald-400 transition-colors">
                Contacto
              </Link>
            </li>
          </ul>
        </div>

        {/* Columna 3: Contacto */}
        <div>
          <h5 className="text-white text-sm font-semibold mb-3">Contacto</h5>
          <ul className="space-y-2 text-xs text-slate-400">
            <li>📍 Av. San Marcos #1234, Rancagua</li>
            <li>📞 +56 9 8765 4321</li>
            <li>✉️ contacto@veterinariasanmarcos.cl</li>
          </ul>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-8 pt-6 border-t border-slate-800 text-center text-xs text-slate-500">
        &copy; {currentYear} Veterinaria San Marcos. Todos los derechos reservados.
      </div>
    </footer>
  )
}