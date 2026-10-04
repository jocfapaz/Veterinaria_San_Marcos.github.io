import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
export function Tienda (){
    return(
        <div className="flex flex-col min-h-screen bg-slate-50 font-sans text-slate-800 antialiased">

      {/* Componente Header */}
      <Header activo="tienda" />

      {/* Contenido Principal */}
      <main className="flex-grow max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-8 lg:py-12">
        <section className="space-y-8">

          {/* Encabezado de Sección */}
          <div className="border-b border-slate-200 pb-5">
            <h1 className="text-3xl font-extrabold text-slate-900 tracking-tight sm:text-4xl">Catálogo de Productos</h1>
            <p className="mt-2 text-base text-slate-600">Medicamentos y vacunas disponibles para venta directa en Veterinaria San Marcos.</p>
          </div>

          {/* Filtro por Categoría */}
          <div className="bg-white p-4 sm:p-6 rounded-xl shadow-sm border border-slate-200 max-w-xs">
            <form onSubmit={(e) => e.preventDefault()} className="space-y-2">
              <label htmlFor="filtro-categoria-producto" className="block text-sm font-semibold text-slate-700">Filtrar por Categoría</label>
              <select id="filtro-categoria-producto" name="categoria" className="block w-full rounded-lg border-slate-300 bg-slate-50 p-2.5 text-sm text-slate-800 focus:border-emerald-500 focus:ring-emerald-500 border">
                <option value="todas">Todas las categorías</option>
                <option value="antibioticos">Antibióticos</option>
                <option value="antiparasitarios">Antiparasitarios</option>
                <option value="antiinflamatorios">Antiinflamatorios</option>
                <option value="dermatologia">Dermatología</option>
                <option value="digestivo">Digestivo</option>
                <option value="cardiaco">Cardíaco</option>
                <option value="analgesicos">Analgésicos</option>
                <option value="vacunas">Vacunas</option>
                <option value="suplementos">Suplementos</option>
              </select>
            </form>
          </div>

          {/* Grid de Tarjetas de Producto */}
          <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6" id="lista-productos">

      {/* Tarjeta ME001 */}
      <li
        className="group bg-white rounded-2xl shadow-sm hover:shadow-md border border-slate-200 overflow-hidden flex flex-col transition-all duration-200"
        data-id="ME001"
      >
        <a
          href="producto-detalle.html?id=ME001"
          className="block overflow-hidden bg-slate-100 aspect-square flex items-center justify-center p-4"
        >
          <img
            src="/images/amoxilina.png"
            alt="Amoxibay 250mg"
            className="object-contain h-full w-full group-hover:scale-105 transition-transform duration-300"
          />
        </a>
        <div className="p-5 flex flex-col flex-grow">
          <a href="producto-detalle.html?id=ME001" className="block">
            <h2 className="text-lg font-bold text-slate-900 group-hover:text-emerald-600 transition-colors line-clamp-1">
              Amoxibay 250mg
            </h2>
          </a>
          <p className="text-xs text-slate-500 mt-1">Antibióticos · Blíster 10 comp.</p>
          <div className="mt-auto pt-4 flex items-center justify-between">
            <p className="text-xl font-extrabold text-emerald-700">$4.200</p>
            <button
              type="button"
              className="boton-anadir bg-emerald-600 hover:bg-emerald-700 text-white text-sm font-semibold px-4 py-2 rounded-lg shadow-sm transition-colors"
              data-id="ME001"
              data-storage="carritoVeterinaria"
              data-success="¡Agregado! :D"
            >
              Añadir
            </button>
          </div>
        </div>
      </li>

      {/* Tarjeta ME002 */}
      <li
        className="group bg-white rounded-2xl shadow-sm hover:shadow-md border border-slate-200 overflow-hidden flex flex-col transition-all duration-200"
        data-id="ME002"
      >
        <a
          href="producto-detalle.html?id=ME002"
          className="block overflow-hidden bg-slate-100 aspect-square flex items-center justify-center p-4"
        >
          <img
            src="/images/enrox.png"
            alt="Enrox 50mg"
            className="object-contain h-full w-full group-hover:scale-105 transition-transform duration-300"
          />
        </a>
        <div className="p-5 flex flex-col flex-grow">
          <a href="producto-detalle.html?id=ME002" className="block">
            <h2 className="text-lg font-bold text-slate-900 group-hover:text-emerald-600 transition-colors line-clamp-1">
              Enrox 50mg
            </h2>
          </a>
          <p className="text-xs text-slate-500 mt-1">Antibióticos · Blíster 10 comp.</p>
          <div className="mt-auto pt-4 flex items-center justify-between">
            <p className="text-xl font-extrabold text-emerald-700">$6.800</p>
            <button
              type="button"
              className="boton-anadir bg-emerald-600 hover:bg-emerald-700 text-white text-sm font-semibold px-4 py-2 rounded-lg shadow-sm transition-colors"
              data-id="ME002"
              data-storage="carritoVeterinaria"
              data-success="¡Agregado! :D"
            >
              Añadir
            </button>
          </div>
        </div>
      </li>

      {/* Tarjeta ME003 */}
      <li
        className="group bg-white rounded-2xl shadow-sm hover:shadow-md border border-slate-200 overflow-hidden flex flex-col transition-all duration-200"
        data-id="ME003"
      >
        <a
          href="producto-detalle.html?id=ME003"
          className="block overflow-hidden bg-slate-100 aspect-square flex items-center justify-center p-4"
        >
          <img
            src="/images/metrocare.png"
            alt="Metrobay 250mg"
            className="object-contain h-full w-full group-hover:scale-105 transition-transform duration-300"
          />
        </a>
        <div className="p-5 flex flex-col flex-grow">
          <a href="producto-detalle.html?id=ME003" className="block">
            <h2 className="text-lg font-bold text-slate-900 group-hover:text-emerald-600 transition-colors line-clamp-1">
              Metrobay 250mg
            </h2>
          </a>
          <p className="text-xs text-slate-500 mt-1">Antibióticos · Blíster 10 comp.</p>
          <div className="mt-auto pt-4 flex items-center justify-between">
            <p className="text-xl font-extrabold text-emerald-700">$3.900</p>
            <button
              type="button"
              className="boton-anadir bg-emerald-600 hover:bg-emerald-700 text-white text-sm font-semibold px-4 py-2 rounded-lg shadow-sm transition-colors"
              data-id="ME003"
              data-storage="carritoVeterinaria"
              data-success="¡Agregado! :D"
            >
              Añadir
            </button>
          </div>
        </div>
      </li>

      {/* Tarjeta ME004 */}
      <li
        className="group bg-white rounded-2xl shadow-sm hover:shadow-md border border-slate-200 overflow-hidden flex flex-col transition-all duration-200"
        data-id="ME004"
      >
        <a
          href="producto-detalle.html?id=ME004"
          className="block overflow-hidden bg-slate-100 aspect-square flex items-center justify-center p-4"
        >
          <img
            src="/images/nexgard.png"
            alt="Nexgard"
            className="object-contain h-full w-full group-hover:scale-105 transition-transform duration-300"
          />
        </a>
        <div className="p-5 flex flex-col flex-grow">
          <a href="producto-detalle.html?id=ME004" className="block">
            <h2 className="text-lg font-bold text-slate-900 group-hover:text-emerald-600 transition-colors line-clamp-1">
              Nexgard
            </h2>
          </a>
          <p className="text-xs text-slate-500 mt-1">Antiparasitarios · Masticable 1 unid.</p>
          <div className="mt-auto pt-4 flex items-center justify-between">
            <p className="text-xl font-extrabold text-emerald-700">$9.500</p>
            <button
              type="button"
              className="boton-anadir bg-emerald-600 hover:bg-emerald-700 text-white text-sm font-semibold px-4 py-2 rounded-lg shadow-sm transition-colors"
              data-id="ME004"
              data-storage="carritoVeterinaria"
              data-success="¡Agregado! :D"
            >
              Añadir
            </button>
          </div>
        </div>
      </li>

      {/* Tarjeta ME005 */}
      <li
        className="group bg-white rounded-2xl shadow-sm hover:shadow-md border border-slate-200 overflow-hidden flex flex-col transition-all duration-200"
        data-id="ME005"
      >
        <a
          href="producto-detalle.html?id=ME005"
          className="block overflow-hidden bg-slate-100 aspect-square flex items-center justify-center p-4"
        >
          <img
            src="/images/bravecto.png"
            alt="Bravecto"
            className="object-contain h-full w-full group-hover:scale-105 transition-transform duration-300"
          />
        </a>
        <div className="p-5 flex flex-col flex-grow">
          <a href="producto-detalle.html?id=ME005" className="block">
            <h2 className="text-lg font-bold text-slate-900 group-hover:text-emerald-600 transition-colors line-clamp-1">
              Bravecto
            </h2>
          </a>
          <p className="text-xs text-slate-500 mt-1">Antiparasitarios · Masticable 1 unid.</p>
          <div className="mt-auto pt-4 flex items-center justify-between">
            <p className="text-xl font-extrabold text-emerald-700">$18.900</p>
            <button
              type="button"
              className="boton-anadir bg-emerald-600 hover:bg-emerald-700 text-white text-sm font-semibold px-4 py-2 rounded-lg shadow-sm transition-colors"
              data-id="ME005"
              data-storage="carritoVeterinaria"
              data-success="¡Agregado! :D"
            >
              Añadir
            </button>
          </div>
        </div>
      </li>

      {/* Tarjeta ME006 */}
      <li
        className="group bg-white rounded-2xl shadow-sm hover:shadow-md border border-slate-200 overflow-hidden flex flex-col transition-all duration-200"
        data-id="ME006"
      >
        <a
          href="producto-detalle.html?id=ME006"
          className="block overflow-hidden bg-slate-100 aspect-square flex items-center justify-center p-4"
        >
          <img
            src="/images/Revolution.png"
            alt="Revolution Plus"
            className="object-contain h-full w-full group-hover:scale-105 transition-transform duration-300"
          />
        </a>
        <div className="p-5 flex flex-col flex-grow">
          <a href="producto-detalle.html?id=ME006" className="block">
            <h2 className="text-lg font-bold text-slate-900 group-hover:text-emerald-600 transition-colors line-clamp-1">
              Revolution Plus
            </h2>
          </a>
          <p className="text-xs text-slate-500 mt-1">Antiparasitarios · Pipeta 1 unid.</p>
          <div className="mt-auto pt-4 flex items-center justify-between">
            <p className="text-xl font-extrabold text-emerald-700">$14.500</p>
            <button
              type="button"
              className="boton-anadir bg-emerald-600 hover:bg-emerald-700 text-white text-sm font-semibold px-4 py-2 rounded-lg shadow-sm transition-colors"
              data-id="ME006"
              data-storage="carritoVeterinaria"
              data-success="¡Agregado! :D"
            >
              Añadir
            </button>
          </div>
        </div>
      </li>

      {/* Tarjeta ME007 */}
      <li
        className="group bg-white rounded-2xl shadow-sm hover:shadow-md border border-slate-200 overflow-hidden flex flex-col transition-all duration-200"
        data-id="ME007"
      >
        <a
          href="producto-detalle.html?id=ME007"
          className="block overflow-hidden bg-slate-100 aspect-square flex items-center justify-center p-4"
        >
          <img
            src="/images/drontal.png"
            alt="Drontal Plus"
            className="object-contain h-full w-full group-hover:scale-105 transition-transform duration-300"
          />
        </a>
        <div className="p-5 flex flex-col flex-grow">
          <a href="producto-detalle.html?id=ME007" className="block">
            <h2 className="text-lg font-bold text-slate-900 group-hover:text-emerald-600 transition-colors line-clamp-1">
              Drontal Plus
            </h2>
          </a>
          <p className="text-xs text-slate-500 mt-1">Antiparasitarios · Comprimido 1 unid.</p>
          <div className="mt-auto pt-4 flex items-center justify-between">
            <p className="text-xl font-extrabold text-emerald-700">$3.200</p>
            <button
              type="button"
              className="boton-anadir bg-emerald-600 hover:bg-emerald-700 text-white text-sm font-semibold px-4 py-2 rounded-lg shadow-sm transition-colors"
              data-id="ME007"
              data-storage="carritoVeterinaria"
              data-success="¡Agregado! :D"
            >
              Añadir
            </button>
          </div>
        </div>
      </li>

      {/* Tarjeta ME008 */}
      <li
        className="group bg-white rounded-2xl shadow-sm hover:shadow-md border border-slate-200 overflow-hidden flex flex-col transition-all duration-200"
        data-id="ME008"
      >
        <a
          href="producto-detalle.html?id=ME008"
          className="block overflow-hidden bg-slate-100 aspect-square flex items-center justify-center p-4"
        >
          <img
            src="/images/milbemax.png"
            alt="Milbemax Gato"
            className="object-contain h-full w-full group-hover:scale-105 transition-transform duration-300"
          />
        </a>
        <div className="p-5 flex flex-col flex-grow">
          <a href="producto-detalle.html?id=ME008" className="block">
            <h2 className="text-lg font-bold text-slate-900 group-hover:text-emerald-600 transition-colors line-clamp-1">
              Milbemax Gato
            </h2>
          </a>
          <p className="text-xs text-slate-500 mt-1">Antiparasitarios · Comprimido 2 unid.</p>
          <div className="mt-auto pt-4 flex items-center justify-between">
            <p className="text-xl font-extrabold text-emerald-700">$6.800</p>
            <button
              type="button"
              className="boton-anadir bg-emerald-600 hover:bg-emerald-700 text-white text-sm font-semibold px-4 py-2 rounded-lg shadow-sm transition-colors"
              data-id="ME008"
              data-storage="carritoVeterinaria"
              data-success="¡Agregado! :D"
            >
              Añadir
            </button>
          </div>
        </div>
      </li>

      {/* Tarjeta ME009 */}
      <li
        className="group bg-white rounded-2xl shadow-sm hover:shadow-md border border-slate-200 overflow-hidden flex flex-col transition-all duration-200"
        data-id="ME009"
      >
        <a
          href="producto-detalle.html?id=ME009"
          className="block overflow-hidden bg-slate-100 aspect-square flex items-center justify-center p-4"
        >
          <img
            src="/images/meloxivet.png"
            alt="Meloxicam 1mg"
            className="object-contain h-full w-full group-hover:scale-105 transition-transform duration-300"
          />
        </a>
        <div className="p-5 flex flex-col flex-grow">
          <a href="producto-detalle.html?id=ME009" className="block">
            <h2 className="text-lg font-bold text-slate-900 group-hover:text-emerald-600 transition-colors line-clamp-1">
              Meloxicam 1mg
            </h2>
          </a>
          <p className="text-xs text-slate-500 mt-1">Antiinflamatorios · Blíster 10 comp.</p>
          <div className="mt-auto pt-4 flex items-center justify-between">
            <p className="text-xl font-extrabold text-emerald-700">$4.500</p>
            <button
              type="button"
              className="boton-anadir bg-emerald-600 hover:bg-emerald-700 text-white text-sm font-semibold px-4 py-2 rounded-lg shadow-sm transition-colors"
              data-id="ME009"
              data-storage="carritoVeterinaria"
              data-success="¡Agregado! :D"
            >
              Añadir
            </button>
          </div>
        </div>
      </li>

      {/* Tarjeta ME010 */}
      <li
        className="group bg-white rounded-2xl shadow-sm hover:shadow-md border border-slate-200 overflow-hidden flex flex-col transition-all duration-200"
        data-id="ME010"
      >
        <a
          href="producto-detalle.html?id=ME010"
          className="block overflow-hidden bg-slate-100 aspect-square flex items-center justify-center p-4"
        >
          <img
            src="/images/Carprofelican.png"
            alt="Carprofen 50mg"
            className="object-contain h-full w-full group-hover:scale-105 transition-transform duration-300"
          />
        </a>
        <div className="p-5 flex flex-col flex-grow">
          <a href="producto-detalle.html?id=ME010" className="block">
            <h2 className="text-lg font-bold text-slate-900 group-hover:text-emerald-600 transition-colors line-clamp-1">
              Carprofen 50mg
            </h2>
          </a>
          <p className="text-xs text-slate-500 mt-1">Antiinflamatorios · Blíster 10 comp.</p>
          <div className="mt-auto pt-4 flex items-center justify-between">
            <p className="text-xl font-extrabold text-emerald-700">$9.800</p>
            <button
              type="button"
              className="boton-anadir bg-emerald-600 hover:bg-emerald-700 text-white text-sm font-semibold px-4 py-2 rounded-lg shadow-sm transition-colors"
              data-id="ME010"
              data-storage="carritoVeterinaria"
              data-success="¡Agregado! :D"
            >
              Añadir
            </button>
          </div>
        </div>
      </li>

      {/* Tarjeta ME011 */}
      <li
        className="group bg-white rounded-2xl shadow-sm hover:shadow-md border border-slate-200 overflow-hidden flex flex-col transition-all duration-200"
        data-id="ME011"
      >
        <a
          href="producto-detalle.html?id=ME011"
          className="block overflow-hidden bg-slate-100 aspect-square flex items-center justify-center p-4"
        >
          <img
            src="/images/champo.png"
            alt="Clorhexidina shampoo"
            className="object-contain h-full w-full group-hover:scale-105 transition-transform duration-300"
          />
        </a>
        <div className="p-5 flex flex-col flex-grow">
          <a href="producto-detalle.html?id=ME011" className="block">
            <h2 className="text-lg font-bold text-slate-900 group-hover:text-emerald-600 transition-colors line-clamp-1">
              Clorhexidina shampoo
            </h2>
          </a>
          <p className="text-xs text-slate-500 mt-1">Dermatología · Frasco 250ml</p>
          <div className="mt-auto pt-4 flex items-center justify-between">
            <p className="text-xl font-extrabold text-emerald-700">$8.900</p>
            <button
              type="button"
              className="boton-anadir bg-emerald-600 hover:bg-emerald-700 text-white text-sm font-semibold px-4 py-2 rounded-lg shadow-sm transition-colors"
              data-id="ME011"
              data-storage="carritoVeterinaria"
              data-success="¡Agregado! :D"
            >
              Añadir
            </button>
          </div>
        </div>
      </li>

      {/* Tarjeta ME012 */}
      <li
        className="group bg-white rounded-2xl shadow-sm hover:shadow-md border border-slate-200 overflow-hidden flex flex-col transition-all duration-200"
        data-id="ME012"
      >
        <a
          href="producto-detalle.html?id=ME012"
          className="block overflow-hidden bg-slate-100 aspect-square flex items-center justify-center p-4"
        >
          <img
            src="/images/malaseb.png"
            alt="Malaseb shampoo"
            className="object-contain h-full w-full group-hover:scale-105 transition-transform duration-300"
          />
        </a>
        <div className="p-5 flex flex-col flex-grow">
          <a href="producto-detalle.html?id=ME012" className="block">
            <h2 className="text-lg font-bold text-slate-900 group-hover:text-emerald-600 transition-colors line-clamp-1">
              Malaseb shampoo
            </h2>
          </a>
          <p className="text-xs text-slate-500 mt-1">Dermatología · Frasco 250ml</p>
          <div className="mt-auto pt-4 flex items-center justify-between">
            <p className="text-xl font-extrabold text-emerald-700">$12.500</p>
            <button
              type="button"
              className="boton-anadir bg-emerald-600 hover:bg-emerald-700 text-white text-sm font-semibold px-4 py-2 rounded-lg shadow-sm transition-colors"
              data-id="ME012"
              data-storage="carritoVeterinaria"
              data-success="¡Agregado! :D"
            >
              Añadir
            </button>
          </div>
        </div>
      </li>

      {/* Tarjeta ME013 */}
      <li
        className="group bg-white rounded-2xl shadow-sm hover:shadow-md border border-slate-200 overflow-hidden flex flex-col transition-all duration-200"
        data-id="ME013"
      >
        <a
          href="producto-detalle.html?id=ME013"
          className="block overflow-hidden bg-slate-100 aspect-square flex items-center justify-center p-4"
        >
          <img
            src="/images/apoquel.png"
            alt="Apoquel 16mg"
            className="object-contain h-full w-full group-hover:scale-105 transition-transform duration-300"
          />
        </a>
        <div className="p-5 flex flex-col flex-grow">
          <a href="producto-detalle.html?id=ME013" className="block">
            <h2 className="text-lg font-bold text-slate-900 group-hover:text-emerald-600 transition-colors line-clamp-1">
              Apoquel 16mg
            </h2>
          </a>
          <p className="text-xs text-slate-500 mt-1">Dermatología · Blíster 10 comp.</p>
          <div className="mt-auto pt-4 flex items-center justify-between">
            <p className="text-xl font-extrabold text-emerald-700">$22.000</p>
            <button
              type="button"
              className="boton-anadir bg-emerald-600 hover:bg-emerald-700 text-white text-sm font-semibold px-4 py-2 rounded-lg shadow-sm transition-colors"
              data-id="ME013"
              data-storage="carritoVeterinaria"
              data-success="¡Agregado! :D"
            >
              Añadir
            </button>
          </div>
        </div>
      </li>

      {/* Tarjeta ME014 */}
      <li
        className="group bg-white rounded-2xl shadow-sm hover:shadow-md border border-slate-200 overflow-hidden flex flex-col transition-all duration-200"
        data-id="ME014"
      >
        <a
          href="producto-detalle.html?id=ME014"
          className="block overflow-hidden bg-slate-100 aspect-square flex items-center justify-center p-4"
        >
          <img
            src="/images/probifor.png"
            alt="Probifor"
            className="object-contain h-full w-full group-hover:scale-105 transition-transform duration-300"
          />
        </a>
        <div className="p-5 flex flex-col flex-grow">
          <a href="producto-detalle.html?id=ME014" className="block">
            <h2 className="text-lg font-bold text-slate-900 group-hover:text-emerald-600 transition-colors line-clamp-1">
              Probifor
            </h2>
          </a>
          <p className="text-xs text-slate-500 mt-1">Digestivo · Sobre 5ml x10</p>
          <div className="mt-auto pt-4 flex items-center justify-between">
            <p className="text-xl font-extrabold text-emerald-700">$5.600</p>
            <button
              type="button"
              className="boton-anadir bg-emerald-600 hover:bg-emerald-700 text-white text-sm font-semibold px-4 py-2 rounded-lg shadow-sm transition-colors"
              data-id="ME014"
              data-storage="carritoVeterinaria"
              data-success="¡Agregado! :D"
            >
              Añadir
            </button>
          </div>
        </div>
      </li>

      {/* Tarjeta ME015 */}
      <li
        className="group bg-white rounded-2xl shadow-sm hover:shadow-md border border-slate-200 overflow-hidden flex flex-col transition-all duration-200"
        data-id="ME015"
      >
        <a
          href="producto-detalle.html?id=ME015"
          className="block overflow-hidden bg-slate-100 aspect-square flex items-center justify-center p-4"
        >
          <img
            src="/images/omeprazol.pmg.jpg"
            alt="Omeprazol 10mg vet"
            className="object-contain h-full w-full group-hover:scale-105 transition-transform duration-300"
          />
        </a>
        <div className="p-5 flex flex-col flex-grow">
          <a href="producto-detalle.html?id=ME015" className="block">
            <h2 className="text-lg font-bold text-slate-900 group-hover:text-emerald-600 transition-colors line-clamp-1">
              Omeprazol 10mg vet
            </h2>
          </a>
          <p className="text-xs text-slate-500 mt-1">Digestivo · Blíster 10 comp.</p>
          <div className="mt-auto pt-4 flex items-center justify-between">
            <p className="text-xl font-extrabold text-emerald-700">$3.800</p>
            <button
              type="button"
              className="boton-anadir bg-emerald-600 hover:bg-emerald-700 text-white text-sm font-semibold px-4 py-2 rounded-lg shadow-sm transition-colors"
              data-id="ME015"
              data-storage="carritoVeterinaria"
              data-success="¡Agregado! :D"
            >
              Añadir
            </button>
          </div>
        </div>
      </li>

      {/* Tarjeta ME016 */}
      <li
        className="group bg-white rounded-2xl shadow-sm hover:shadow-md border border-slate-200 overflow-hidden flex flex-col transition-all duration-200"
        data-id="ME016"
      >
        <a
          href="producto-detalle.html?id=ME016"
          className="block overflow-hidden bg-slate-100 aspect-square flex items-center justify-center p-4"
        >
          <img
            src="/images/vetmedin.png"
            alt="Vetmedin 2.5mg"
            className="object-contain h-full w-full group-hover:scale-105 transition-transform duration-300"
          />
        </a>
        <div className="p-5 flex flex-col flex-grow">
          <a href="producto-detalle.html?id=ME016" className="block">
            <h2 className="text-lg font-bold text-slate-900 group-hover:text-emerald-600 transition-colors line-clamp-1">
              Vetmedin 2.5mg
            </h2>
          </a>
          <p className="text-xs text-slate-500 mt-1">Cardíaco · Blíster 10 comp.</p>
          <div className="mt-auto pt-4 flex items-center justify-between">
            <p className="text-xl font-extrabold text-emerald-700">$28.000</p>
            <button
              type="button"
              className="boton-anadir bg-emerald-600 hover:bg-emerald-700 text-white text-sm font-semibold px-4 py-2 rounded-lg shadow-sm transition-colors"
              data-id="ME016"
              data-storage="carritoVeterinaria"
              data-success="¡Agregado! :D"
            >
              Añadir
            </button>
          </div>
        </div>
      </li>

      {/* Tarjeta ME017 */}
      <li
        className="group bg-white rounded-2xl shadow-sm hover:shadow-md border border-slate-200 overflow-hidden flex flex-col transition-all duration-200"
        data-id="ME017"
      >
        <a
          href="producto-detalle.html?id=ME017"
          className="block overflow-hidden bg-slate-100 aspect-square flex items-center justify-center p-4"
        >
          <img
            src="/images/tramadol.png"
            alt="Tramadol 50mg vet"
            className="object-contain h-full w-full group-hover:scale-105 transition-transform duration-300"
          />
        </a>
        <div className="p-5 flex flex-col flex-grow">
          <a href="producto-detalle.html?id=ME017" className="block">
            <h2 className="text-lg font-bold text-slate-900 group-hover:text-emerald-600 transition-colors line-clamp-1">
              Tramadol 50mg vet
            </h2>
          </a>
          <p className="text-xs text-slate-500 mt-1">Analgésicos · Blíster 10 comp.</p>
          <div className="mt-auto pt-4 flex items-center justify-between">
            <p className="text-xl font-extrabold text-emerald-700">$5.200</p>
            <button
              type="button"
              className="boton-anadir bg-emerald-600 hover:bg-emerald-700 text-white text-sm font-semibold px-4 py-2 rounded-lg shadow-sm transition-colors"
              data-id="ME017"
              data-storage="carritoVeterinaria"
              data-success="¡Agregado! :D"
            >
              Añadir
            </button>
          </div>
        </div>
      </li>

      {/* Tarjeta ME018 */}
      <li
        className="group bg-white rounded-2xl shadow-sm hover:shadow-md border border-slate-200 overflow-hidden flex flex-col transition-all duration-200"
        data-id="ME018"
      >
        <a
          href="producto-detalle.html?id=ME018"
          className="block overflow-hidden bg-slate-100 aspect-square flex items-center justify-center p-4"
        >
          <img
            src="/images/Nobivac.png"
            alt="Nobivac DHPPi"
            className="object-contain h-full w-full group-hover:scale-105 transition-transform duration-300"
          />
        </a>
        <div className="p-5 flex flex-col flex-grow">
          <a href="producto-detalle.html?id=ME018" className="block">
            <h2 className="text-lg font-bold text-slate-900 group-hover:text-emerald-600 transition-colors line-clamp-1">
              Nobivac DHPPi
            </h2>
          </a>
          <p className="text-xs text-slate-500 mt-1">Vacunas · Vial 1 dosis</p>
          <div className="mt-auto pt-4 flex items-center justify-between">
            <p className="text-xl font-extrabold text-emerald-700">$8.500</p>
            <button
              type="button"
              className="boton-anadir bg-emerald-600 hover:bg-emerald-700 text-white text-sm font-semibold px-4 py-2 rounded-lg shadow-sm transition-colors"
              data-id="ME018"
              data-storage="carritoVeterinaria"
              data-success="¡Agregado! :D"
            >
              Añadir
            </button>
          </div>
        </div>
      </li>

      {/* Tarjeta ME019 */}
      <li
        className="group bg-white rounded-2xl shadow-sm hover:shadow-md border border-slate-200 overflow-hidden flex flex-col transition-all duration-200"
        data-id="ME019"
      >
        <a
          href="producto-detalle.html?id=ME019"
          className="block overflow-hidden bg-slate-100 aspect-square flex items-center justify-center p-4"
        >
          <img
            src="/images/novibac.png"
            alt="Nobivac Rabies"
            className="object-contain h-full w-full group-hover:scale-105 transition-transform duration-300"
          />
        </a>
        <div className="p-5 flex flex-col flex-grow">
          <a href="producto-detalle.html?id=ME019" className="block">
            <h2 className="text-lg font-bold text-slate-900 group-hover:text-emerald-600 transition-colors line-clamp-1">
              Nobivac Rabies
            </h2>
          </a>
          <p className="text-xs text-slate-500 mt-1">Vacunas · Vial 1 dosis</p>
          <div className="mt-auto pt-4 flex items-center justify-between">
            <p className="text-xl font-extrabold text-emerald-700">$5.800</p>
            <button
              type="button"
              className="boton-anadir bg-emerald-600 hover:bg-emerald-700 text-white text-sm font-semibold px-4 py-2 rounded-lg shadow-sm transition-colors"
              data-id="ME019"
              data-storage="carritoVeterinaria"
              data-success="¡Agregado! :D"
            >
              Añadir
            </button>
          </div>
        </div>
      </li>

      {/* Tarjeta ME020 */}
      <li
        className="group bg-white rounded-2xl shadow-sm hover:shadow-md border border-slate-200 overflow-hidden flex flex-col transition-all duration-200"
        data-id="ME020"
      >
        <a
          href="producto-detalle.html?id=ME020"
          className="block overflow-hidden bg-slate-100 aspect-square flex items-center justify-center p-4"
        >
          <img
            src="/images/Felocell.png"
            alt="Felocell CVR"
            className="object-contain h-full w-full group-hover:scale-105 transition-transform duration-300"
          />
        </a>
        <div className="p-5 flex flex-col flex-grow">
          <a href="producto-detalle.html?id=ME020" className="block">
            <h2 className="text-lg font-bold text-slate-900 group-hover:text-emerald-600 transition-colors line-clamp-1">
              Felocell CVR
            </h2>
          </a>
          <p className="text-xs text-slate-500 mt-1">Vacunas · Vial 1 dosis</p>
          <div className="mt-auto pt-4 flex items-center justify-between">
            <p className="text-xl font-extrabold text-emerald-700">$7.200</p>
            <button
              type="button"
              className="boton-anadir bg-emerald-600 hover:bg-emerald-700 text-white text-sm font-semibold px-4 py-2 rounded-lg shadow-sm transition-colors"
              data-id="ME020"
              data-storage="carritoVeterinaria"
              data-success="¡Agregado! :D"
            >
              Añadir
            </button>
          </div>
        </div>
      </li>

      {/* Tarjeta ME021 */}
      <li
        className="group bg-white rounded-2xl shadow-sm hover:shadow-md border border-slate-200 overflow-hidden flex flex-col transition-all duration-200"
        data-id="ME021"
      >
        <a
          href="producto-detalle.html?id=ME021"
          className="block overflow-hidden bg-slate-100 aspect-square flex items-center justify-center p-4"
        >
          <img
            src="/images/omega.png"
            alt="Omega vet 3-6-9"
            className="object-contain h-full w-full group-hover:scale-105 transition-transform duration-300"
          />
        </a>
        <div className="p-5 flex flex-col flex-grow">
          <a href="producto-detalle.html?id=ME021" className="block">
            <h2 className="text-lg font-bold text-slate-900 group-hover:text-emerald-600 transition-colors line-clamp-1">
              Omega vet 3-6-9
            </h2>
          </a>
          <p className="text-xs text-slate-500 mt-1">Suplementos · Frasco 100ml</p>
          <div className="mt-auto pt-4 flex items-center justify-between">
            <p className="text-xl font-extrabold text-emerald-700">$9.900</p>
            <button
              type="button"
              className="boton-anadir bg-emerald-600 hover:bg-emerald-700 text-white text-sm font-semibold px-4 py-2 rounded-lg shadow-sm transition-colors"
              data-id="ME021"
              data-storage="carritoVeterinaria"
              data-success="¡Agregado! :D"
            >
              Añadir
            </button>
          </div>
        </div>
      </li>

      {/* Tarjeta ME022 */}
      <li
        className="group bg-white rounded-2xl shadow-sm hover:shadow-md border border-slate-200 overflow-hidden flex flex-col transition-all duration-200"
        data-id="ME022"
      >
        <a
          href="producto-detalle.html?id=ME022"
          className="block overflow-hidden bg-slate-100 aspect-square flex items-center justify-center p-4"
        >
          <img
            src="/images/condro.png"
            alt="Condrovet forte"
            className="object-contain h-full w-full group-hover:scale-105 transition-transform duration-300"
          />
        </a>
        <div className="p-5 flex flex-col flex-grow">
          <a href="producto-detalle.html?id=ME022" className="block">
            <h2 className="text-lg font-bold text-slate-900 group-hover:text-emerald-600 transition-colors line-clamp-1">
              Condrovet forte
            </h2>
          </a>
          <p className="text-xs text-slate-500 mt-1">Suplementos · Blíster 30 comp.</p>
          <div className="mt-auto pt-4 flex items-center justify-between">
            <p className="text-xl font-extrabold text-emerald-700">$14.500</p>
            <button
              type="button"
              className="boton-anadir bg-emerald-600 hover:bg-emerald-700 text-white text-sm font-semibold px-4 py-2 rounded-lg shadow-sm transition-colors"
              data-id="ME022"
              data-storage="carritoVeterinaria"
              data-success="¡Agregado! :D"
            >
              Añadir
            </button>
          </div>
        </div>
      </li>

        </ul>
        </section>
      </main>

      {/* Componente Footer */}
      <Footer />
    </div>
    );
}