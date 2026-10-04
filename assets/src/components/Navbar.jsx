export function Navbar() {
  return (
    <nav class="hidden md:flex">
                <ul class="flex space-x-6 text-sm font-medium text-slate-600">
                    <li><a href="index.html" class="text-emerald-600 font-semibold border-b-2 border-emerald-600 pb-1">Inicio</a></li>
                    <li><a href="servicios.html" class="hover:text-emerald-600 transition-colors">Servicios</a></li>
                    <li><a href="nosotros.html" class="hover:text-emerald-600 transition-colors">Nosotros</a></li>
                    <li><a href="blogs.html" class="hover:text-emerald-600 transition-colors">Blog</a></li>
                    <li><a href="contacto.html" class="hover:text-emerald-600 transition-colors">Contacto</a></li>
                    <li><a href="tienda.html" class="hover:text-emerald-600 transition-colors">Tienda</a></li>
                </ul>
            </nav>
  );
}