export default function Home() {
  return (
    <div className="space-y-8">
      <section className="grid md:grid-cols-2 gap-8 items-center bg-white p-6 rounded-lg shadow-sm">
        <div className="space-y-4 text-center md:text-left">
          <h1 className="text-3xl md:text-4xl font-extrabold text-gray-900 leading-tight">
            Veterinaria San Marcos
          </h1>
          <p className="text-gray-600 text-base md:text-lg">
            Clínica veterinaria en Rancagua, Región de O'Higgins, con más de 15 años
            de experiencia atendiendo perros, gatos, aves y conejos.
          </p>
        </div>
        <div className="overflow-hidden rounded-lg shadow">
          <img
            src="/images/veterinaria.png"
            alt="Veterinaria San Marcos"
            className="w-full h-auto object-cover"
          />
        </div>
      </section>
    </div>
  )
}