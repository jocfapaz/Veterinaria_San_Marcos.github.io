import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import calendarioVacunasImg from '../assets/images/calendario_vacunas.png';
import signosDolorImg from '../assets/images/signos_dolor.png';
export function Blogs (){
    return(
        <div className="flex flex-col min-h-screen font-sans bg-slate-50 text-slate-800 antialiased">
      {/* Componente Header */}
      <Header activo="blog" />

      {/* Contenido principal del Blog */}
      <main className="flex-grow max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-8">
        <section className="seccion-blogs space-y-8">
          <div className="border-b border-slate-200 pb-4">
            <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900">
              Consejos de cuidado
            </h1>
            <p className="text-slate-500 text-sm mt-1">
              Artículos y recomendaciones de nuestro equipo profesional para la salud de tu mascota.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Artículo 1 */}
            <article className="tarjeta-blog bg-white rounded-2xl overflow-hidden shadow-sm border border-slate-100 hover:shadow-md transition-all flex flex-col">
              <div className="w-full h-80 overflow-hidden bg-slate-100">
                <img 
                  src={calendarioVacunasImg} 
                  alt="Calendario de vacunación" 
                  className="w-full h-full object-contain p-2 transition-transform duration-300 hover:scale-105"
                />
              </div>
              <div className="contenido-blog p-6 flex flex-col flex-grow justify-between space-y-4">
                <div className="space-y-2">
                  <span className="text-xs font-semibold uppercase tracking-wider text-emerald-600 bg-emerald-50 px-2.5 py-1 rounded-md border border-emerald-100">
                    Salud & Prevención
                  </span>
                  <h2 className="text-xl font-bold text-slate-900 leading-snug">
                    Calendario de vacunación para cachorros
                  </h2>
                  <p className="text-slate-600 text-sm leading-relaxed">
                    Qué vacunas necesita tu cachorro y en qué momento aplicarlas para garantizar su inmunidad.
                  </p>
                </div>
                <a 
                  href="/blog/calendario-vacunacion" 
                  className="boton inline-flex items-center justify-center py-2.5 px-4 bg-emerald-600 hover:bg-emerald-700 text-white font-semibold text-sm rounded-lg shadow-sm transition-colors self-start"
                >
                  Leer más
                </a>
              </div>
            </article>

            {/* Artículo 2 */}
            <article className="tarjeta-blog bg-white rounded-2xl overflow-hidden shadow-sm border border-slate-100 hover:shadow-md transition-all flex flex-col">
              <div className="w-full h-64 overflow-hidden bg-slate-100">
                <img 
                  src={signosDolorImg} 
                  alt="Signos de dolor en mascotas" 
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                />
              </div>
              <div className="contenido-blog p-6 flex flex-col flex-grow justify-between space-y-4">
                <div className="space-y-2">
                  <span className="text-xs font-semibold uppercase tracking-wider text-emerald-600 bg-emerald-50 px-2.5 py-1 rounded-md border border-emerald-100">
                    Bienestar Animal
                  </span>
                  <h2 className="text-xl font-bold text-slate-900 leading-snug">
                    Cómo identificar signos de dolor en tu mascota
                  </h2>
                  <p className="text-slate-600 text-sm leading-relaxed">
                    Señales comportamentales y físicas sutiles que pueden indicar que tu mascota necesita una consulta urgente.
                  </p>
                </div>
                <a 
                  href="/blog/signos-de-dolor" 
                  className="boton inline-flex items-center justify-center py-2.5 px-4 bg-emerald-600 hover:bg-emerald-700 text-white font-semibold text-sm rounded-lg shadow-sm transition-colors self-start"
                >
                  Leer más
                </a>
              </div>
            </article>
          </div>
        </section>
      </main>

      {/* Componente Footer */}
      <Footer />
    </div>
    );
}