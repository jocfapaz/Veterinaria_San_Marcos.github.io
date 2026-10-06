import { NavLink } from 'react-router'
import { NAV_LINKS } from '../constants/navLinks'

export default function Navbar() {
  return (
    <nav className="hidden md:flex">
      <ul className="flex space-x-6 text-sm font-medium text-slate-600">
        {NAV_LINKS.map((link) => (
          <li key={link.to}>
            <NavLink
              to={link.to}
              className={({ isActive }) =>
                isActive
                  ? 'text-emerald-600 font-semibold border-b-2 border-emerald-600 pb-1'
                  : 'hover:text-emerald-600 transition-colors'
              }
            >
              {link.label}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  )
}
