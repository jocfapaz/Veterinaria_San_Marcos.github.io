import { useState } from 'react';
import { Navbar } from './Navbar';

export function Header({ activo = 'inicio' }) {
  const [menuAbierto, setMenuAbierto] = useState(false);

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50 border-b border-slate-100 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">

        {/* Logo Principal */}
        <div className="logo">
          <a href="index.html" className="flex items-center gap-2 text-emerald-600 font-bold text-lg md:text-xl hover:text-emerald-700 transition-colors">
            <svg
              className="w-6 h-6 md:w-8 md:h-8 shrink-0"
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
            <span className="truncate">Veterinaria San Marcos</span>
          </a>
        </div>

        {/* Componente Navegación */}
        <Navbar activo={activo} />

        {/* Acciones web */}
        <div className="hidden md:flex acciones-usuario items-center gap-3 text-sm font-semibold">
          <a href="login.html" title="Iniciar sesión / Registrarse" className="flex items-center justify-center w-10 h-10 bg-emerald-600 hover:bg-emerald-700 text-white rounded-lg shadow-sm transition-all mr-1">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="#ffffff" viewBox="0 0 256 256">
              <path d="M239.71,125l-16.42-88a16,16,0,0,0-19.61-12.58l-.31.09L150.85,40h-45.7L52.63,24.56l-.31-.09A16,16,0,0,0,32.71,37.05L16.29,125a15.77,15.77,0,0,0,9.12,17.52A16.26,16.26,0,0,0,32.12,144,15.48,15.48,0,0,0,40,141.84V184a40,40,0,0,0,40,40h96a40,40,0,0,0,40-40V141.85a15.5,15.5,0,0,0,7.87,2.16,16.31,16.31,0,0,0,6.72-1.47A15.77,15.77,0,0,0,239.71,125ZM32,128h0L48.43,40,90.5,52.37Zm144,80H136V195.31l13.66-13.65a8,8,0,0,0-11.32-11.32L128,180.69l-10.34-10.35a8,8,0,0,0-11.32,11.32L120,195.31V208H80a24,24,0,0,1-24-24V123.11L107.92,56h40.15L200,123.11V184A24,24,0,0,1,176,208Zm48-80L165.5,52.37,207.57,40,224,128ZM104,140a12,12,0,1,1-12-12A12,12,0,0,1,104,140Zm72,0a12,12,0,1,1-12-12A12,12,0,0,1,176,140Z" />
            </svg>
          </a>

          <a href="mi_solicitud.html" className="bg-emerald-50 text-emerald-700 border border-emerald-200 hover:bg-emerald-100 px-3 py-2 rounded-lg transition-colors flex items-center gap-1 shadow-sm">
            📋 Mi solicitud (<span className="contador-header" data-storage="solicitudesVeterinaria" data-success="¡Agendado! :)">0</span>)
          </a>
          <a href="carrito.html" className="bg-emerald-50 text-emerald-700 border border-emerald-200 hover:bg-emerald-100 px-3 py-2 rounded-lg transition-colors flex items-center gap-1 shadow-sm">
            🛒 Carrito (<span className="contador-header" data-storage="carritoVeterinaria">0</span>)
          </a>
        </div>

        {/* Botón Hamburguesa */}
        <button
          type="button"
          onClick={() => setMenuAbierto(!menuAbierto)}
          aria-label={menuAbierto ? 'Cerrar menú' : 'Abrir menú'}
          className="md:hidden text-slate-600 hover:text-emerald-600 focus:outline-none p-2"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>

      {/* Menú Móvil */}
      {menuAbierto && (
        <div className="md:hidden absolute top-full left-0 w-full bg-white border-t border-slate-100 shadow-lg pb-4 z-50">
          <div className="px-4 py-3 space-y-2 font-medium">
            <a href="index.html" className="block px-3 py-2 rounded-md text-slate-700 hover:text-emerald-600 hover:bg-emerald-50">Inicio</a>
            <a href="servicios.html" className="block px-3 py-2 rounded-md text-slate-700 hover:text-emerald-600 hover:bg-emerald-50">Servicios</a>
            <a href="nosotros.html" className="block px-3 py-2 rounded-md text-slate-700 hover:text-emerald-600 hover:bg-emerald-50">Nosotros</a>
            <a href="blogs.html" className="block px-3 py-2 rounded-md text-slate-700 hover:text-emerald-600 hover:bg-emerald-50">Blog</a>
            <a href="contacto.html" className="block px-3 py-2 rounded-md text-slate-700 hover:text-emerald-600 hover:bg-emerald-50">Contacto</a>
            <a href="tienda.html" className="block px-3 py-2 rounded-md text-slate-700 hover:text-emerald-600 hover:bg-emerald-50">Tienda</a>

            <hr className="border-slate-100 my-3" />

            <div className="flex flex-col gap-3 px-3">
              <a href="login.html" className="flex items-center justify-center gap-2 px-4 py-2 bg-emerald-600 text-white rounded-lg hover:bg-emerald-700">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="#ffffff" viewBox="0 0 256 256">
                  <path d="M239.71,125l-16.42-88a16,16,0,0,0-19.61-12.58l-.31.09L150.85,40h-45.7L52.63,24.56l-.31-.09A16,16,0,0,0,32.71,37.05L16.29,125a15.77,15.77,0,0,0,9.12,17.52A16.26,16.26,0,0,0,32.12,144,15.48,15.48,0,0,0,40,141.84V184a40,40,0,0,0,40,40h96a40,40,0,0,0,40-40V141.85a15.5,15.5,0,0,0,7.87,2.16,16.31,16.31,0,0,0,6.72-1.47A15.77,15.77,0,0,0,239.71,125ZM32,128h0L48.43,40,90.5,52.37Zm144,80H136V195.31l13.66-13.65a8,8,0,0,0-11.32-11.32L128,180.69l-10.34-10.35a8,8,0,0,0-11.32,11.32L120,195.31V208H80a24,24,0,0,1-24-24V123.11L107.92,56h40.15L200,123.11V184A24,24,0,0,1,176,208Zm48-80L165.5,52.37,207.57,40,224,128ZM104,140a12,12,0,1,1-12-12A12,12,0,0,1,104,140Zm72,0a12,12,0,1,1-12-12A12,12,0,0,1,176,140Z" />
                </svg>
                <span>Ingresar a mi cuenta</span>
              </a>

              <div className="flex gap-2 mt-1">
                <a href="mi_solicitud.html" className="w-1/2 flex justify-center items-center gap-1 px-2 py-2 bg-emerald-50 text-emerald-700 border border-emerald-200 hover:bg-emerald-100 rounded-lg text-sm font-semibold">
                  📋 Solicitud (<span className="contador-header" data-storage="solicitudesVeterinaria" data-success="¡Agendado! :)">0</span>)
                </a>
                <a href="carrito.html" className="w-1/2 flex justify-center items-center gap-1 px-2 py-2 bg-emerald-50 text-emerald-700 border border-emerald-200 hover:bg-emerald-100 rounded-lg text-sm font-semibold">
                  🛒 Carrito (<span className="contador-header" data-storage="carritoVeterinaria">0</span>)
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}