import React, { useState } from 'react';
export function Servicios (){
    const [menuAbierto, setMenuAbierto] = useState(false);
    return(
        <div className="flex flex-col min-h-screen bg-slate-50 font-sans text-slate-800 antialiased">
      
      {/* Header de navegación */}
      <header className="bg-white shadow-sm sticky top-0 z-50 border-b border-slate-100 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          
          {/* Logo Principal */}
          <div className="logo">
            <a href="index.html" className="flex items-center gap-2 text-emerald-600 font-bold text-lg md:text-xl hover:text-emerald-700 transition-colors">
              <svg className="w-6 h-6 md:w-8 md:h-8 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.684a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
              </svg>
              <span className="truncate">Veterinaria San Marcos</span>
            </a>
          </div>

          {/* Navegación web */}
          <nav className="hidden md:flex">
            <ul className="flex space-x-6 text-sm font-medium text-slate-600">
              <li><a href="index.html" className="hover:text-emerald-600 transition-colors">Inicio</a></li>
              <li><a href="servicios.html" className="text-emerald-600 font-semibold border-b-2 border-emerald-600 pb-1">Servicios</a></li>
              <li><a href="nosotros.html" className="hover:text-emerald-600 transition-colors">Nosotros</a></li>
              <li><a href="blogs.html" className="hover:text-emerald-600 transition-colors">Blog</a></li>
              <li><a href="contacto.html" className="hover:text-emerald-600 transition-colors">Contacto</a></li>
              <li><a href="tienda.html" className="hover:text-emerald-600 transition-colors">Tienda</a></li>
            </ul>
          </nav>

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
            onClick={() => setMenuAbierto(!menuAbierto)} 
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
              <a href="servicios.html" className="block px-3 py-2 rounded-md text-emerald-600 bg-emerald-50 font-semibold border-l-4 border-emerald-600">Servicios</a>
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

      {/* Contenido Principal */}
      <main className="flex-grow max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-8 lg:py-12">
        <section className="listado-productos space-y-8">
          <div className="border-b border-slate-200 pb-5">
            <h1 className="text-3xl font-extrabold text-slate-900 tracking-tight">Servicios</h1>
            <p className="mt-2 text-base text-slate-500">Catálogo de servicios disponibles en la clínica. Filtra por categoría o especie.</p>
          </div>

          {/* Filtro */}
          <form className="filtro-servicios bg-white p-4 rounded-xl border border-slate-200 shadow-sm flex flex-col sm:flex-row items-start sm:items-center gap-3 max-w-xs">
            <label htmlFor="filtro-categoria" className="text-sm font-semibold text-slate-700 shrink-0">Categoría:</label>
            <select id="filtro-categoria" name="categoria" className="w-full bg-slate-50 border border-slate-300 text-slate-800 text-sm rounded-lg focus:ring-emerald-500 focus:border-emerald-500 block p-2">
              <option value="todas">Todas</option>
              <option value="consultas">Consultas</option>
              <option value="vacunacion">Vacunación</option>
              <option value="cirugia">Cirugía</option>
              <option value="desparasitacion">Desparasitación</option>
              <option value="examenes">Exámenes</option>
              <option value="otros">Otros</option>
            </select>
          </form>

          {/* Grid de Servicios */}
          <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6" id="lista-servicios">
            
            {/* SERV001 */}
            <li className="tarjeta-producto group bg-white rounded-2xl shadow-sm hover:shadow-md border border-slate-200 overflow-hidden flex flex-col transition duration-200" data-id="SERV001">
              <a href="servicio_detalle.html" className="block overflow-hidden bg-slate-100 aspect-video">
                <img src="./assets/images/veterinario_gato.png" className="object-cover w-full h-full group-hover:scale-105 transition duration-300" alt="Consulta general" />
              </a>
              <div className="p-5 flex flex-col flex-grow">
                <a href="servicio_detalle.html" className="block">
                  <h2 className="text-lg font-bold text-slate-900 group-hover:text-emerald-600 transition">Consulta general</h2>
                </a>
                <p className="categoria text-xs text-slate-500 mt-1">Consultas · Perro / Gato · 30 min</p>
                <div className="mt-auto pt-4 flex items-center justify-between">
                  <p className="precio text-xl font-extrabold text-emerald-700">$15.000</p>
                  <button type="button" className="boton-solicitar bg-emerald-600 hover:bg-emerald-700 text-white text-sm font-semibold py-2 px-4 rounded-xl transition" data-id="SERV001" data-storage="solicitudesVeterinaria" data-success="¡Agendado! :)">Solicitar</button>
                </div>
              </div>
            </li>

            {/* SERV002 */}
            <li className="tarjeta-producto group bg-white rounded-2xl shadow-sm hover:shadow-md border border-slate-200 overflow-hidden flex flex-col transition duration-200" data-id="SERV002">
              <a href="servicio_detalle.html" className="block overflow-hidden bg-slate-100 aspect-video">
                <img src="assets/images/consulta_emergencia.png" className="object-cover w-full h-full group-hover:scale-105 transition duration-300" alt="Consulta urgencia" />
              </a>
              <div className="p-5 flex flex-col flex-grow">
                <a href="servicio_detalle.html" className="block">
                  <h2 className="text-lg font-bold text-slate-900 group-hover:text-emerald-600 transition">Consulta urgencia</h2>
                </a>
                <p className="categoria text-xs text-slate-500 mt-1">Consultas · Perro / Gato · 30 min</p>
                <p className="nota text-xs text-amber-600 font-medium mt-2 bg-amber-50 p-2 rounded-lg border border-amber-200">Nota: Fuera de horario + $10.000.</p>
                <div className="mt-auto pt-4 flex items-center justify-between">
                  <p className="precio text-xl font-extrabold text-emerald-700">$25.000</p>
                  <button type="button" className="boton-solicitar bg-emerald-600 hover:bg-emerald-700 text-white text-sm font-semibold py-2 px-4 rounded-xl transition" data-id="SERV002" data-storage="solicitudesVeterinaria" data-success="¡Agendado! :)">Solicitar</button>
                </div>
              </div>
            </li>

            {/* SERV003 */}
            <li className="tarjeta-producto group bg-white rounded-2xl shadow-sm hover:shadow-md border border-slate-200 overflow-hidden flex flex-col transition duration-200" data-id="SERV003">
              <a href="servicio_detalle.html" className="block overflow-hidden bg-slate-100 aspect-video">
                <img src="assets/images/post_operatorio.png" className="object-cover w-full h-full group-hover:scale-105 transition duration-300" alt="Control postoperatorio" />
              </a>
              <div className="p-5 flex flex-col flex-grow">
                <a href="servicio_detalle.html" className="block">
                  <h2 className="text-lg font-bold text-slate-900 group-hover:text-emerald-600 transition">Control postoperatorio</h2>
                </a>
                <p className="categoria text-xs text-slate-500 mt-1">Consultas · Perro / Gato · 20 min</p>
                <div className="mt-auto pt-4 flex items-center justify-between">
                  <p className="precio text-xl font-extrabold text-emerald-700">$10.000</p>
                  <button type="button" className="boton-solicitar bg-emerald-600 hover:bg-emerald-700 text-white text-sm font-semibold py-2 px-4 rounded-xl transition" data-id="SERV003" data-storage="solicitudesVeterinaria" data-success="¡Agendado! :)">Solicitar</button>
                </div>
              </div>
            </li>

            {/* SERV004 */}
            <li className="tarjeta-producto group bg-white rounded-2xl shadow-sm hover:shadow-md border border-slate-200 overflow-hidden flex flex-col transition duration-200" data-id="SERV004">
              <a href="servicio_detalle.html" className="block overflow-hidden bg-slate-100 aspect-video">
                <img src="./assets/images/ave_conejo.png" className="object-cover w-full h-full group-hover:scale-105 transition duration-300" alt="Consulta ave / conejo" />
              </a>
              <div className="p-5 flex flex-col flex-grow">
                <a href="servicio_detalle.html" className="block">
                  <h2 className="text-lg font-bold text-slate-900 group-hover:text-emerald-600 transition">Consulta ave / conejo</h2>
                </a>
                <p className="categoria text-xs text-slate-500 mt-1">Consultas · Ave / Conejo · 30 min</p>
                <div className="mt-auto pt-4 flex items-center justify-between">
                  <p className="precio text-xl font-extrabold text-emerald-700">$18.000</p>
                  <button type="button" className="boton-solicitar bg-emerald-600 hover:bg-emerald-700 text-white text-sm font-semibold py-2 px-4 rounded-xl transition" data-id="SERV004" data-storage="solicitudesVeterinaria" data-success="¡Agendado! :)">Solicitar</button>
                </div>
              </div>
            </li>

            {/* SERV005 */}
            <li className="tarjeta-producto group bg-white rounded-2xl shadow-sm hover:shadow-md border border-slate-200 overflow-hidden flex flex-col transition duration-200" data-id="SERV005">
              <a href="servicio_detalle.html" className="block overflow-hidden bg-slate-100 aspect-video">
                <img src="./assets/images/segunda_opcion.png" className="object-cover w-full h-full group-hover:scale-105 transition duration-300" alt="Segunda opinión médica" />
              </a>
              <div className="p-5 flex flex-col flex-grow">
                <a href="servicio_detalle.html" className="block">
                  <h2 className="text-lg font-bold text-slate-900 group-hover:text-emerald-600 transition">Segunda opinión médica</h2>
                </a>
                <p className="categoria text-xs text-slate-500 mt-1">Consultas · Todas · 40 min</p>
                <p className="nota text-xs text-amber-600 font-medium mt-2 bg-amber-50 p-2 rounded-lg border border-amber-200">Nota: Se requiere ficha previa.</p>
                <div className="mt-auto pt-4 flex items-center justify-between">
                  <p className="precio text-xl font-extrabold text-emerald-700">$20.000</p>
                  <button type="button" className="boton-solicitar bg-emerald-600 hover:bg-emerald-700 text-white text-sm font-semibold py-2 px-4 rounded-xl transition" data-id="SERV005" data-storage="solicitudesVeterinaria" data-success="¡Agendado! :)">Solicitar</button>
                </div>
              </div>
            </li>

            {/* SERV006 */}
            <li className="tarjeta-producto group bg-white rounded-2xl shadow-sm hover:shadow-md border border-slate-200 overflow-hidden flex flex-col transition duration-200" data-id="SERV006">
              <a href="servicio_detalle.html" className="block overflow-hidden bg-slate-100 aspect-video">
                <img src="./assets/images/vacuna_perro.png" className="object-cover w-full h-full group-hover:scale-105 transition duration-300" alt="Vacuna antirrábica canina" />
              </a>
              <div className="p-5 flex flex-col flex-grow">
                <a href="servicio_detalle.html" className="block">
                  <h2 className="text-lg font-bold text-slate-900 group-hover:text-emerald-600 transition">Vacuna antirrábica canina</h2>
                </a>
                <p className="categoria text-xs text-slate-500 mt-1">Vacunación · Perro · 10 min</p>
                <p className="nota text-xs text-amber-600 font-medium mt-2 bg-amber-50 p-2 rounded-lg border border-amber-200">Nota: Obligatoria por ley.</p>
                <div className="mt-auto pt-4 flex items-center justify-between">
                  <p className="precio text-xl font-extrabold text-emerald-700">$12.000</p>
                  <button type="button" className="boton-solicitar bg-emerald-600 hover:bg-emerald-700 text-white text-sm font-semibold py-2 px-4 rounded-xl transition" data-id="SERV006" data-storage="solicitudesVeterinaria" data-success="¡Agendado! :)">Solicitar</button>
                </div>
              </div>
            </li>

            {/* SERV007 */}
            <li className="tarjeta-producto group bg-white rounded-2xl shadow-sm hover:shadow-md border border-slate-200 overflow-hidden flex flex-col transition duration-200" data-id="SERV007">
              <a href="servicio_detalle.html" className="block overflow-hidden bg-slate-100 aspect-video">
                <img src="./assets/images/vacuna_sextuple.png" className="object-cover w-full h-full group-hover:scale-105 transition duration-300" alt="Vacuna sextuple canina" />
              </a>
              <div className="p-5 flex flex-col flex-grow">
                <a href="servicio_detalle.html" className="block">
                  <h2 className="text-lg font-bold text-slate-900 group-hover:text-emerald-600 transition">Vacuna sextuple canina</h2>
                </a>
                <p className="categoria text-xs text-slate-500 mt-1">Vacunación · Perro · 10 min</p>
                <p className="nota text-xs text-amber-600 font-medium mt-2 bg-amber-50 p-2 rounded-lg border border-amber-200">Nota: Refuerzo anual.</p>
                <div className="mt-auto pt-4 flex items-center justify-between">
                  <p className="precio text-xl font-extrabold text-emerald-700">$18.000</p>
                  <button type="button" className="boton-solicitar bg-emerald-600 hover:bg-emerald-700 text-white text-sm font-semibold py-2 px-4 rounded-xl transition" data-id="SERV007" data-storage="solicitudesVeterinaria" data-success="¡Agendado! :)">Solicitar</button>
                </div>
              </div>
            </li>

            {/* SERV008 */}
            <li className="tarjeta-producto group bg-white rounded-2xl shadow-sm hover:shadow-md border border-slate-200 overflow-hidden flex flex-col transition duration-200" data-id="SERV008">
              <a href="servicio_detalle.html" className="block overflow-hidden bg-slate-100 aspect-video">
                <img src="./assets/images/vacuna_felina.png" className="object-cover w-full h-full group-hover:scale-105 transition duration-300" alt="Vacuna bivalente felina" />
              </a>
              <div className="p-5 flex flex-col flex-grow">
                <a href="servicio_detalle.html" className="block">
                  <h2 className="text-lg font-bold text-slate-900 group-hover:text-emerald-600 transition">Vacuna bivalente felina</h2>
                </a>
                <p className="categoria text-xs text-slate-500 mt-1">Vacunación · Gato · 10 min</p>
                <p className="nota text-xs text-amber-600 font-medium mt-2 bg-amber-50 p-2 rounded-lg border border-amber-200">Nota: Refuerzo anual.</p>
                <div className="mt-auto pt-4 flex items-center justify-between">
                  <p className="precio text-xl font-extrabold text-emerald-700">$15.000</p>
                  <button type="button" className="boton-solicitar bg-emerald-600 hover:bg-emerald-700 text-white text-sm font-semibold py-2 px-4 rounded-xl transition" data-id="SERV008" data-storage="solicitudesVeterinaria" data-success="¡Agendado! :)">Solicitar</button>
                </div>
              </div>
            </li>

            {/* SERV009 */}
            <li className="tarjeta-producto group bg-white rounded-2xl shadow-sm hover:shadow-md border border-slate-200 overflow-hidden flex flex-col transition duration-200" data-id="SERV009">
              <a href="servicio_detalle.html" className="block overflow-hidden bg-slate-100 aspect-video">
                <img src="./assets/images/vacuna_triple_felina.png" className="object-cover w-full h-full group-hover:scale-105 transition duration-300" alt="Vacuna triple felina" />
              </a>
              <div className="p-5 flex flex-col flex-grow">
                <a href="servicio_detalle.html" className="block">
                  <h2 className="text-lg font-bold text-slate-900 group-hover:text-emerald-600 transition">Vacuna triple felina</h2>
                </a>
                <p className="categoria text-xs text-slate-500 mt-1">Vacunación · Gato · 10 min</p>
                <p className="nota text-xs text-amber-600 font-medium mt-2 bg-amber-50 p-2 rounded-lg border border-amber-200">Nota: Refuerzo anual.</p>
                <div className="mt-auto pt-4 flex items-center justify-between">
                  <p className="precio text-xl font-extrabold text-emerald-700">$17.000</p>
                  <button type="button" className="boton-solicitar bg-emerald-600 hover:bg-emerald-700 text-white text-sm font-semibold py-2 px-4 rounded-xl transition" data-id="SERV009" data-storage="solicitudesVeterinaria" data-success="¡Agendado! :)">Solicitar</button>
                </div>
              </div>
            </li>

            {/* SERV010 */}
            <li className="tarjeta-producto group bg-white rounded-2xl shadow-sm hover:shadow-md border border-slate-200 overflow-hidden flex flex-col transition duration-200" data-id="SERV010">
              <a href="servicio_detalle.html" className="block overflow-hidden bg-slate-100 aspect-video">
                <img src="./assets/images/vacuna_bordetella.png" className="object-cover w-full h-full group-hover:scale-105 transition duration-300" alt="Vacuna Bordetella canina" />
              </a>
              <div className="p-5 flex flex-col flex-grow">
                <a href="servicio_detalle.html" className="block">
                  <h2 className="text-lg font-bold text-slate-900 group-hover:text-emerald-600 transition">Vacuna Bordetella canina</h2>
                </a>
                <p className="categoria text-xs text-slate-500 mt-1">Vacunación · Perro · 10 min</p>
                <p className="nota text-xs text-amber-600 font-medium mt-2 bg-amber-50 p-2 rounded-lg border border-amber-200">Nota: Tos de las perreras.</p>
                <div className="mt-auto pt-4 flex items-center justify-between">
                  <p className="precio text-xl font-extrabold text-emerald-700">$14.000</p>
                  <button type="button" className="boton-solicitar bg-emerald-600 hover:bg-emerald-700 text-white text-sm font-semibold py-2 px-4 rounded-xl transition" data-id="SERV010" data-storage="solicitudesVeterinaria" data-success="¡Agendado! :)">Solicitar</button>
                </div>
              </div>
            </li>

            {/* SERV011 */}
            <li className="tarjeta-producto group bg-white rounded-2xl shadow-sm hover:shadow-md border border-slate-200 overflow-hidden flex flex-col transition duration-200" data-id="SERV011">
              <a href="servicio_detalle.html" className="block overflow-hidden bg-slate-100 aspect-video">
                <img src="./assets/images/vacuna_antirrabica_felina.png" className="object-cover w-full h-full group-hover:scale-105 transition duration-300" alt="Vacuna antirrábica felina" />
              </a>
              <div className="p-5 flex flex-col flex-grow">
                <a href="servicio_detalle.html" className="block">
                  <h2 className="text-lg font-bold text-slate-900 group-hover:text-emerald-600 transition">Vacuna antirrábica felina</h2>
                </a>
                <p className="categoria text-xs text-slate-500 mt-1">Vacunación · Gato · 10 min</p>
                <div className="mt-auto pt-4 flex items-center justify-between">
                  <p className="precio text-xl font-extrabold text-emerald-700">$12.000</p>
                  <button type="button" className="boton-solicitar bg-emerald-600 hover:bg-emerald-700 text-white text-sm font-semibold py-2 px-4 rounded-xl transition" data-id="SERV011" data-storage="solicitudesVeterinaria" data-success="¡Agendado! :)">Solicitar</button>
                </div>
              </div>
            </li>

            {/* SERV012 */}
            <li className="tarjeta-producto group bg-white rounded-2xl shadow-sm hover:shadow-md border border-slate-200 overflow-hidden flex flex-col transition duration-200" data-id="SERV012">
              <a href="servicio_detalle.html" className="block overflow-hidden bg-slate-100 aspect-video">
                <img src="./assets/images/esterilizacion_canina.png" className="object-cover w-full h-full group-hover:scale-105 transition duration-300" alt="Esterilización hembra canina" />
              </a>
              <div className="p-5 flex flex-col flex-grow">
                <a href="servicio_detalle.html" className="block">
                  <h2 className="text-lg font-bold text-slate-900 group-hover:text-emerald-600 transition">Esterilización hembra canina</h2>
                </a>
                <p className="categoria text-xs text-slate-500 mt-1">Cirugía · Perra · 90 min</p>
                <p className="nota text-xs text-amber-600 font-medium mt-2 bg-amber-50 p-2 rounded-lg border border-amber-200">Nota: Incluye anestesia y hospitalización 24h.</p>
                <div className="mt-auto pt-4 flex items-center justify-between">
                  <p className="precio text-xl font-extrabold text-emerald-700">$80.000</p>
                  <button type="button" className="boton-solicitar bg-emerald-600 hover:bg-emerald-700 text-white text-sm font-semibold py-2 px-4 rounded-xl transition" data-id="SERV012" data-storage="solicitudesVeterinaria" data-success="¡Agendado! :)">Solicitar</button>
                </div>
              </div>
            </li>

            {/* SERV013 */}
            <li className="tarjeta-producto group bg-white rounded-2xl shadow-sm hover:shadow-md border border-slate-200 overflow-hidden flex flex-col transition duration-200" data-id="SERV013">
              <a href="servicio_detalle.html" className="block overflow-hidden bg-slate-100 aspect-video">
                <img src="./assets/images/esterilizacion_canino.png" className="object-cover w-full h-full group-hover:scale-105 transition duration-300" alt="Esterilización macho canino" />
              </a>
              <div className="p-5 flex flex-col flex-grow">
                <a href="servicio_detalle.html" className="block">
                  <h2 className="text-lg font-bold text-slate-900 group-hover:text-emerald-600 transition">Esterilización macho canino</h2>
                </a>
                <p className="categoria text-xs text-slate-500 mt-1">Cirugía · Perro · 60 min</p>
                <p className="nota text-xs text-amber-600 font-medium mt-2 bg-amber-50 p-2 rounded-lg border border-amber-200">Nota: Incluye anestesia.</p>
                <div className="mt-auto pt-4 flex items-center justify-between">
                  <p className="precio text-xl font-extrabold text-emerald-700">$60.000</p>
                  <button type="button" className="boton-solicitar bg-emerald-600 hover:bg-emerald-700 text-white text-sm font-semibold py-2 px-4 rounded-xl transition" data-id="SERV013" data-storage="solicitudesVeterinaria" data-success="¡Agendado! :)">Solicitar</button>
                </div>
              </div>
            </li>

            {/* SERV014 */}
            <li className="tarjeta-producto group bg-white rounded-2xl shadow-sm hover:shadow-md border border-slate-200 overflow-hidden flex flex-col transition duration-200" data-id="SERV014">
              <a href="servicio_detalle.html" className="block overflow-hidden bg-slate-100 aspect-video">
                <img src="./assets/images/esterilizacion_felinaa.png" className="object-cover w-full h-full group-hover:scale-105 transition duration-300" alt="Esterilización hembra felina" />
              </a>
              <div className="p-5 flex flex-col flex-grow">
                <a href="servicio_detalle.html" className="block">
                  <h2 className="text-lg font-bold text-slate-900 group-hover:text-emerald-600 transition">Esterilización hembra felina</h2>
                </a>
                <p className="categoria text-xs text-slate-500 mt-1">Cirugía · Gata · 60 min</p>
                <p className="nota text-xs text-amber-600 font-medium mt-2 bg-amber-50 p-2 rounded-lg border border-amber-200">Nota: Incluye anestesia y hospitalización 24h.</p>
                <div className="mt-auto pt-4 flex items-center justify-between">
                  <p className="precio text-xl font-extrabold text-emerald-700">$65.000</p>
                  <button type="button" className="boton-solicitar bg-emerald-600 hover:bg-emerald-700 text-white text-sm font-semibold py-2 px-4 rounded-xl transition" data-id="SERV014" data-storage="solicitudesVeterinaria" data-success="¡Agendado! :)">Solicitar</button>
                </div>
              </div>
            </li>

          </ul>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-slate-900 text-slate-400 py-8 border-t border-slate-800 text-sm mt-auto">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center sm:flex sm:justify-between sm:text-left">
          <p>&copy; 2026 Veterinaria San Marcos. Todos los derechos reservados.</p>
          <p className="mt-2 sm:mt-0">Cuidando de tus mascotas con amor y profesionalismo.</p>
        </div>
      </footer>

    </div>
    );
}