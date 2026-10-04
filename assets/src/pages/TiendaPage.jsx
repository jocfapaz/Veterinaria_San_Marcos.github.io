import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
export function Tienda (){
    return(
        <div className="flex flex-col min-h-screen bg-slate-50 font-sans text-slate-800 antialiased">

      {/* Componente Header */}
      <Header activo="tienda" />

      {/* Contenido Principal */}
      <main className="flex-grow max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-8 lg:py-12">
        <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6" id="lista-productos">
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
            src="./assets/images/probifor.png"
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
            src="./assets/images/omeprazol.pmg.jpg"
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
            src="./assets/images/vetmedin.png"
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
            src="./assets/images/tramadol.png"
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
            src="./assets/images/Nobivac.png"
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
            src="./assets/images/novibac.png"
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
            src="./assets/images/Felocell.png"
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
            src="./assets/images/omega.png"
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
            src="./assets/images/condro.png"
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
      </main>

      {/* Componente Footer */}
      <Footer />
    </div>
    );
}