import React from 'react';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
export function Nosotros (){
    const equipo = [
    {
      id: 1,
      titulo: 'Médico veterinario',
      descripcion: '2 médicos veterinarios a cargo de las consultas y cirugías.',
      imagen: './assets/images/foto_veterinarios.png',
      alt: 'Foto del veterinario',
    },
    {
      id: 2,
      titulo: 'Técnico veterinario',
      descripcion: 'Apoya en consultas, vacunación y administración de medicamentos.',
      imagen: './assets/images/tecnico_veterinario.png',
      alt: 'Foto del técnico veterinario',
    },
    {
      id: 3,
      titulo: 'Recepcionista',
      descripcion: 'Encargada de agendar y confirmar las citas de la clínica.',
      imagen: './assets/images/recepsionista.png',
      alt: 'Foto de la recepcionista',
    },
  ];
    return(
        <div className="flex flex-col min-h-screen font-sans bg-slate-50 text-slate-800 antialiased">
      {/* Header reutilizable */}
      <Header activo="nosotros" />

      {/* Contenido principal */}
      <main className="flex-grow max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-12">
        {/* Sección Nosotros */}
        <section className="seccion-nosotros bg-white rounded-2xl p-8 sm:p-10 shadow-sm border border-slate-100 space-y-6">
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

        {/* Sección Equipo */}
        <section className="seccion-equipo space-y-6">
          <h2 className="text-2xl font-bold text-slate-900 border-b border-slate-200 pb-2">
            Nuestro equipo
          </h2>
          <ul className="lista-equipo grid grid-cols-1 md:grid-cols-3 gap-8">
            {equipo.map((miembro) => (
              <li
                key={miembro.id}
                className="bg-white rounded-2xl p-6 shadow-sm border border-slate-100 hover:shadow-md transition-shadow flex flex-col items-center text-center"
              >
                <div className="w-full h-56 mb-4 overflow-hidden rounded-xl bg-slate-50 flex justify-center items-center">
                  <img
                    src={miembro.imagen}
                    alt={miembro.alt}
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-2">
                  {miembro.titulo}
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  {miembro.descripcion}
                </p>
              </li>
            ))}
          </ul>
        </section>
      </main>

      {/* Footer reutilizable */}
      <Footer />
    </div>
    );
}