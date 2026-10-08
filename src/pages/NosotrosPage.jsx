export default function NosotrosPage() {
  return (
    <div className="space-y-12">
      <section className="bg-white rounded-2xl p-8 sm:p-10 shadow-sm border border-slate-100 space-y-6">
        <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 border-b border-slate-100 pb-4">
          Nosotros
        </h1>
        <div className="space-y-4 text-slate-600 leading-relaxed text-base sm:text-lg">
          <p>
            Veterinaria San Marcos es una clínica veterinaria ubicada en Rancagua,
            Región del Libertador General Bernardo O'Higgins. Fundada en 2009, atendemos
            mascotas domésticas — principalmente perros y gatos, aunque también conejos
            y aves — con servicios de consulta general, vacunación, cirugía menor,
            desparasitación y control de peso.
          </p>
          <p>
            Atendemos un promedio de 25 pacientes al día, con un equipo comprometido
            en entregar una atención cercana y de calidad a cada paciente y su familia.
          </p>
        </div>
      </section>

      <section className="space-y-6">
        <h2 className="text-2xl font-bold text-slate-900 border-b border-slate-200 pb-2">
          Nuestro equipo
        </h2>
        <ul className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <li className="bg-white rounded-2xl p-6 shadow-sm border border-slate-100 hover:shadow-md transition-shadow flex flex-col items-center text-center">
            <div className="w-full h-56 mb-4 overflow-hidden rounded-xl bg-slate-50 flex justify-center items-center">
              <img
                src="images/foto_veterinarios.png"
                alt="Foto del veterinario"
                className="w-full h-full object-cover"
              />
            </div>
            <h3 className="text-xl font-bold text-slate-900 mb-2">Médico veterinario</h3>
            <p className="text-sm text-slate-600 leading-relaxed">
              2 médicos veterinarios a cargo de las consultas y cirugías.
            </p>
          </li>

          <li className="bg-white rounded-2xl p-6 shadow-sm border border-slate-100 hover:shadow-md transition-shadow flex flex-col items-center text-center">
            <div className="w-full h-56 mb-4 overflow-hidden rounded-xl bg-slate-50 flex justify-center items-center">
              <img
                src="images/tecnico_veterinario.png"
                alt="Foto del técnico veterinario"
                className="w-full h-full object-cover"
              />
            </div>
            <h3 className="text-xl font-bold text-slate-900 mb-2">Técnico veterinario</h3>
            <p className="text-sm text-slate-600 leading-relaxed">
              Apoya en consultas, vacunación y administración de medicamentos.
            </p>
          </li>

          <li className="bg-white rounded-2xl p-6 shadow-sm border border-slate-100 hover:shadow-md transition-shadow flex flex-col items-center text-center">
            <div className="w-full h-56 mb-4 overflow-hidden rounded-xl bg-slate-50 flex justify-center items-center">
              <img
                src="images/recepsionista.png"
                alt="Foto de la recepcionista"
                className="w-full h-full object-cover"
              />
            </div>
            <h3 className="text-xl font-bold text-slate-900 mb-2">Recepcionista</h3>
            <p className="text-sm text-slate-600 leading-relaxed">
              Encargada de agendar y confirmar las citas de la clínica.
            </p>
          </li>
        </ul>
      </section>
    </div>
  )
}