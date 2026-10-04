import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
export function Servicios (){
    return(
        <div className="flex flex-col min-h-screen bg-slate-50 font-sans text-slate-800 antialiased">
      
      {/* Componente Header */}
      <Header activo="servicios" />

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

      {/* Componente Footer */}
      <Footer />

    </div>
    );
}