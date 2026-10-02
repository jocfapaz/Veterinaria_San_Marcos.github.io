import { useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router'
import {
  getServiceById,
  getServicesByCategory,
  formatPrice,
} from '../mockDB.js'
import { useAuth } from '../contexts/AuthContext.jsx'
import { useRequests } from '../contexts/RequestContext.jsx'
import Breadcrumbs from '../components/Breadcrumbs'
import Button from '../components/Button'
import ServiceCard from '../components/ServiceCard'

export default function ServicioDetallePage() {
  const { id } = useParams()
  const navigate = useNavigate()
  const { currentUser } = useAuth()
  const { addRequest } = useRequests()
  const service = getServiceById(id)

  const [petOption, setPetOption] = useState('')
  const [newPetName, setNewPetName] = useState('')
  const [newPetSpecies, setNewPetSpecies] = useState('Perro')
  const [date, setDate] = useState('')
  const [errors, setErrors] = useState({})
  const [success, setSuccess] = useState(false)

  if (!service) {
    return (
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <Breadcrumbs
          items={[
            { label: 'Inicio', to: '/' },
            { label: 'Servicios', to: '/servicios' },
            { label: 'Servicio no encontrado' },
          ]}
        />
        <div className="mt-8 text-center py-16 bg-white rounded-2xl border border-slate-100 shadow-sm">
          <h1 className="text-2xl font-bold text-slate-900 mb-2">
            Servicio no encontrado
          </h1>
          <p className="text-slate-500 mb-6">
            El servicio que buscas no existe o fue eliminado.
          </p>
          <Link
            to="/servicios"
            className="inline-flex items-center justify-center py-2.5 px-5 bg-emerald-600 hover:bg-emerald-700 text-white font-semibold text-sm rounded-lg shadow-sm transition-colors"
          >
            Volver a servicios
          </Link>
        </div>
      </div>
    )
  }

  const pets = currentUser?.pets || []

  const relatedServices = getServicesByCategory(service.category)
    .filter((s) => s.id !== service.id)
    .slice(0, 3)

  function validate() {
    const newErrors = {}
    if (!petOption) newErrors.pet = 'Debes seleccionar una mascota.'
    if (petOption === 'nueva' && !newPetName.trim()) {
      newErrors.newPetName = 'Ingresa el nombre de la mascota.'
    }
    if (!date) newErrors.date = 'Selecciona una fecha preferida.'
    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  function handleSubmit(e) {
    e.preventDefault()
    if (!validate()) return

    if (!currentUser) {
      navigate('/login')
      return
    }

    const petName =
      petOption === 'nueva' ? newPetName.trim() : petOption.split('|')[0]
    const species =
      petOption === 'nueva'
        ? newPetSpecies
        : petOption.split('|')[1] || 'Perro'

    addRequest({
      userId: currentUser.id,
      serviceId: service.id,
      petName,
      species,
      requestedDate: date,
    })

    setSuccess(true)
    setPetOption('')
    setNewPetName('')
    setNewPetSpecies('Perro')
    setDate('')
    setTimeout(() => setSuccess(false), 5000)
  }

  function handleAddRelated(serviceId) {
    navigate(`/servicios/${serviceId}`)
  }

  const inputClass = (hasError) =>
    `w-full px-3 py-2.5 bg-slate-50 border rounded-lg text-sm text-slate-800 focus:outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 transition-all ${
      hasError ? 'border-rose-500' : 'border-slate-200'
    }`

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-10">
      <Breadcrumbs
        items={[
          { label: 'Inicio', to: '/' },
          { label: 'Servicios', to: '/servicios' },
          { label: service.name },
        ]}
      />

      <section className="bg-white rounded-2xl p-6 sm:p-8 shadow-sm border border-slate-100 grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
        <div className="flex justify-center bg-slate-50 rounded-xl p-4 border border-slate-100">
          <img
            src={service.image}
            alt={service.name}
            className="w-full max-w-md h-auto object-cover rounded-lg shadow-sm"
          />
        </div>

        <div className="space-y-5">
          <h1 className="text-3xl font-bold text-slate-900">{service.name}</h1>

          <p className="text-xs font-medium uppercase tracking-wider text-emerald-700 bg-emerald-50 inline-block px-3 py-1 rounded-full border border-emerald-200">
            Categoría: {service.category} &nbsp;|&nbsp; Especie: {service.species}{' '}
            &nbsp;|&nbsp; Duración: {service.duration}
          </p>

          <p className="text-3xl font-extrabold text-slate-900">
            {formatPrice(service.price)}
          </p>

          <p className="text-slate-600 leading-relaxed text-sm">
            Servicio profesional de {service.name.toLowerCase()} para{' '}
            {service.species.toLowerCase()}. Duración aproximada{' '}
            {service.duration}. Atención realizada por nuestro equipo médico
            veterinario con equipamiento especializado.
          </p>

          {service.note && (
            <p className="text-xs text-amber-600 font-medium bg-amber-50 p-3 rounded-lg border border-amber-200">
              {service.note}
            </p>
          )}

          <form
            onSubmit={handleSubmit}
            noValidate
            className="space-y-4 pt-4 border-t border-slate-100"
          >
            <div className="flex flex-col gap-1.5">
              <label htmlFor="mascota" className="text-xs font-semibold text-slate-700">
                Mascota*
              </label>
              <select
                id="mascota"
                value={petOption}
                onChange={(e) => {
                  setPetOption(e.target.value)
                  setErrors((prev) => ({ ...prev, pet: '' }))
                }}
                className={inputClass(!!errors.pet)}
              >
                <option value="">-- Seleccione su mascota --</option>
                {pets.map((pet, index) => (
                  <option
                    key={index}
                    value={`${pet.name}|${pet.species}`}
                  >
                    {pet.name} ({pet.species})
                  </option>
                ))}
                <option value="nueva">Agregar nueva mascota</option>
              </select>
              {errors.pet && (
                <span className="text-xs text-rose-500">{errors.pet}</span>
              )}
            </div>

            {petOption === 'nueva' && (
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="flex flex-col gap-1.5">
                  <label
                    htmlFor="nueva-mascota-nombre"
                    className="text-xs font-semibold text-slate-700"
                  >
                    Nombre de la mascota*
                  </label>
                  <input
                    id="nueva-mascota-nombre"
                    type="text"
                    value={newPetName}
                    onChange={(e) => {
                      setNewPetName(e.target.value)
                      setErrors((prev) => ({ ...prev, newPetName: '' }))
                    }}
                    className={inputClass(!!errors.newPetName)}
                  />
                  {errors.newPetName && (
                    <span className="text-xs text-rose-500">
                      {errors.newPetName}
                    </span>
                  )}
                </div>
                <div className="flex flex-col gap-1.5">
                  <label
                    htmlFor="nueva-mascota-especie"
                    className="text-xs font-semibold text-slate-700"
                  >
                    Especie*
                  </label>
                  <select
                    id="nueva-mascota-especie"
                    value={newPetSpecies}
                    onChange={(e) => setNewPetSpecies(e.target.value)}
                    className={inputClass(false)}
                  >
                    <option value="Perro">Perro</option>
                    <option value="Gato">Gato</option>
                    <option value="Ave">Ave</option>
                    <option value="Conejo">Conejo</option>
                    <option value="Otro">Otro</option>
                  </select>
                </div>
              </div>
            )}

            <div className="flex flex-col gap-1.5">
              <label
                htmlFor="fecha-preferida"
                className="text-xs font-semibold text-slate-700"
              >
                Fecha preferida*
              </label>
              <input
                type="date"
                id="fecha-preferida"
                value={date}
                onChange={(e) => {
                  setDate(e.target.value)
                  setErrors((prev) => ({ ...prev, date: '' }))
                }}
                className={inputClass(!!errors.date)}
              />
              {errors.date && (
                <span className="text-xs text-rose-500">{errors.date}</span>
              )}
            </div>

            {success && (
              <div className="p-3 text-sm text-emerald-800 rounded-lg bg-emerald-50 border border-emerald-200">
                ✅ Solicitud enviada. Revisa tu solicitud en "Mi solicitud".
              </div>
            )}

            <Button type="submit" className="w-full py-3">
              Solicitar este servicio
            </Button>
          </form>
        </div>
      </section>

      {relatedServices.length > 0 && (
        <section className="space-y-6">
          <h2 className="text-xl font-bold text-slate-900 border-b border-slate-200 pb-2">
            Otros servicios de {service.category.toLowerCase()}
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {relatedServices.map((s) => (
              <ServiceCard
                key={s.id}
                {...s}
                onAddToRequests={handleAddRelated}
              />
            ))}
          </div>
        </section>
      )}
    </div>
  )
}
