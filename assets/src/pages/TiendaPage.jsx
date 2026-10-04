import React from 'react';
export function Tienda (){
    return(
        <>
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

      {/* Footer */}
      <footer className="bg-slate-900 text-slate-300 py-10 border-t border-slate-800 mt-auto">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="footer-info space-y-3">
            <div className="flex items-center gap-2 text-white font-bold text-lg">
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

          <div>
            <h5 className="text-white text-sm font-semibold mb-3">Secciones</h5>
            <ul className="space-y-2 text-xs text-slate-400">
              <li>
                <a href="servicios.html" className="hover:text-emerald-400 transition-colors">
                  Servicios Médicos
                </a>
              </li>
              <li>
                <a href="tienda.html" className="hover:text-emerald-400 transition-colors">
                  Tienda y Farmacia
                </a>
              </li>
              <li>
                <a href="contacto.html" className="hover:text-emerald-400 transition-colors">
                  Contacto
                </a>
              </li>
            </ul>
          </div>

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
          &copy; 2026 Veterinaria San Marcos. Todos los derechos reservados.
        </div>
      </footer>
    </>
    );
}