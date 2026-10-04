
import { Navbar } from './Navbar';export function Header() {
  return (
    <header className="bg-white shadow-sm sticky top-0 z-50 border-b border-slate-100 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        
        {/* Logo Principal */}
        <div className="logo">
          <a href="/" className="flex items-center gap-2 text-emerald-600 font-bold text-lg md:text-xl">
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
                d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" 
              />
            </svg>
            <span className="truncate">Veterinaria San Marcos</span>
          </a>
        </div>
    {/* Componente Navegación */}
        <Navbar />
      </div>
    </header>
  );
}