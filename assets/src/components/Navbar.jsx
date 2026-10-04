const LINKS = [
  { clave: 'inicio', label: 'Inicio', href: 'index.html' },
  { clave: 'servicios', label: 'Servicios', href: 'servicios.html' },
  { clave: 'nosotros', label: 'Nosotros', href: 'nosotros.html' },
  { clave: 'blog', label: 'Blog', href: 'blogs.html' },
  { clave: 'contacto', label: 'Contacto', href: 'contacto.html' },
  { clave: 'tienda', label: 'Tienda', href: 'tienda.html' },
];

const ACTIVO = 'text-emerald-600 font-semibold border-b-2 border-emerald-600 pb-1';
const INACTIVO = 'hover:text-emerald-600 transition-colors';

export function Navbar({ activo = 'inicio' }) {
  return (
    <nav className="hidden md:flex">
      <ul className="flex space-x-6 text-sm font-medium text-slate-600">
        {LINKS.map((link) => (
          <li key={link.clave}>
            <a
              href={link.href}
              className={link.clave === activo ? ACTIVO : INACTIVO}
            >
              {link.label}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}