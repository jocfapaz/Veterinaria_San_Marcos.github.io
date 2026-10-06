import { Link } from 'react-router'

export default function Home() {
  return (
    <div className="bg-gray-50 text-gray-800 font-sans flex flex-col min-h-screen">
      {/* Contenido principal de la pǭgina de inicio */}
      <main className="max-w-7xl mx-auto px-4 py-8 space-y-12 flex-grow">

        {/* BANNER/Hero*/}
        <section className="grid md:grid-cols-2 gap-8 items-center bg-white p-6 rounded-lg shadow-sm">
          <div className="space-y-4 text-center md:text-left">
            <h1 className="text-3xl md:text-4xl font-extrabold text-gray-900 leading-tight">
              Veterinaria San Marcos
            </h1>
            <p className="text-gray-600 text-base md:text-lg">
              Clínica veterinaria en Rancagua, Región de O'Higgins, con más de 15 años
              de experiencia atendiendo perros, gatos, aves y conejos.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 sm:space-x-4 pt-2">
              <Link
                to="/servicios"
                className="text-white bg-emerald-600 hover:bg-emerald-700 px-4 py-3 md:py-2 rounded-lg shadow-sm transition-all text-center"
              >
                Ver servicios
              </Link>
              <Link
                to="/registro"
                className="text-white bg-emerald-600 hover:bg-emerald-700 px-4 py-3 md:py-2 rounded-lg shadow-sm transition-all text-center"
              >
                Solicitar hora
              </Link>
            </div>
          </div>
          <div className="overflow-hidden rounded-lg shadow mt-4 md:mt-0">
            <img 
              src={"/images/veterinaria.png"} 
              alt="Imagen veterinaria San Marcos" 
              className="w-full h-auto object-cover"
            />
          </div>
        </section>

        {/* SERVICIOS DESTACADOS */}
        <section className="space-y-6">
          <h2 className="text-2xl font-bold text-center text-gray-900">
            Servicios más solicitados
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
            {/* Tarjeta 1 */}
            <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-100 text-center flex flex-col items-center">
              <img 
                src={"/images/corte_pelo.png"} 
                alt="Consulta general" 
                className="w-full h-48 object-cover rounded-lg mb-3"
              />
              <h3 className="font-semibold text-lg text-gray-800">Consulta general</h3>
              <p className="text-sm text-gray-500">Perro / Gato · 30 min</p>
              <p className="precio text-xl font-extrabold text-emerald-700 mt-2">$15.000</p>
            </div>

            {/* Tarjeta 2 */}
            <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-100 text-center flex flex-col items-center">
              <img 
                src={"/images/vacuna.png"} 
                alt="Vacuna antirrábica" 
                className="w-full h-48 object-cover rounded-lg mb-3"
              />
              <h3 className="font-semibold text-lg text-gray-800">Vacuna antirrábica</h3>
              <p className="text-sm text-gray-500">Perro / Gato · 10 min</p>
              <p className="precio text-xl font-extrabold text-emerald-700 mt-2">$12.000</p>
            </div>

            {/* Tarjeta 3 */}
            <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-100 text-center flex flex-col items-center">
              <img 
                src={"/images/desparacitacion_perro_cachorro.png"} 
                alt="Desparasitación interna" 
                className="w-full h-48 object-cover rounded-lg mb-3"
              />
              <h3 className="font-semibold text-lg text-gray-800">Desparasitación interna</h3>
              <p className="text-sm text-gray-500">Perro / Gato · 5 min</p>
              <p className="precio text-xl font-extrabold text-emerald-700 mt-2">Desde $8.000</p>
            </div>

            {/* Tarjeta 4 */}
            <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-100 text-center flex flex-col items-center">
              <img 
                src={"/images/limpieza_dental.png"} 
                alt="Limpieza dental" 
                className="w-full h-48 object-cover rounded-lg mb-3"
              />
              <h3 className="font-semibold text-lg text-gray-800">Limpieza dental</h3>
              <p className="text-sm text-gray-500">Perro / Gato · 45 min</p>
              <p className="precio text-xl font-extrabold text-emerald-700 mt-2">$55.000</p>
            </div>
          </div>
        </section>

        {/* BLOQUE DE CONFIANZA */}
        <section className="bg-blue-50 p-6 rounded-xl border border-blue-100 space-y-4">
          <h2 className="text-xl font-extrabold text-center text-emerald-700">
            ¿Por qué elegirnos?
          </h2>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 max-w-2xl mx-auto text-gray-700 list-disc list-inside">
            <li>Atendemos en promedio 25 pacientes al día</li>
            <li>3 médicos veterinarios y 1 técnico veterinario</li>
            <li>Historial clínico y de vacunación siempre disponible</li>
            <li>Confirmación de cita antes de tu visita</li>
          </ul>
        </section>

      </main>

    </div>
  )
}