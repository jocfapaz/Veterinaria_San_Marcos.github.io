import { useState } from 'react'
import { Link } from 'react-router'
import { getServiceById, formatPrice } from '../mockDB.js'
import { useAuth } from '../contexts/AuthContext.jsx'
import { useRequests } from '../contexts/RequestContext.jsx'
import PageHeader from '../components/PageHeader'
import EmptyState from '../components/EmptyState'
import Button from '../components/Button'

export default function MiSolicitudPage() {
  const { currentUser } = useAuth()
  const { requests, cancelRequest, updateRequest } = useRequests()
  const [formData, setFormData] = useState({
    date: '',
    time: '',
    comment: '',
  })
  const [errors, setErrors] = useState({})
  const [success, setSuccess] = useState(false)

  const userRequests = requests.filter((r) => r.userId === currentUser.id)
  const pendingRequests = userRequests.filter((r) => r.status === 'pending')

  const totalEstimated = pendingRequests.reduce((sum, request) => {
    const service = getServiceById(request.serviceId)
    return sum + (service?.price || 0)
  }, 0)

  function getStatusBadge(status) {
    const styles = {
      pending: 'bg-amber-50 text-amber-700 border-amber-200',
      confirmed: 'bg-emerald-50 text-emerald-700 border-emerald-200',
      cancelled: 'bg-slate-100 text-slate-500 border-slate-200',
    }
    const labels = {
      pending: 'Pendiente',
      confirmed: 'Confirmada',
      cancelled: 'Cancelada',
    }
    return (
      <span
        className={`text-xs font-semibold px-2.5 py-1 rounded-full border ${styles[status] || styles.pending}`}
      >
        {labels[status] || status}
      </span>
    )
  }

  function handleChange(e) {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
    setErrors((prev) => ({ ...prev, [name]: '' }))
    setSuccess(false)
  }

  function validate() {
    const newErrors = {}
    if (!formData.date) newErrors.date = 'Selecciona una fecha.'
    if (!formData.time) newErrors.time = 'Selecciona una hora.'
    if (formData.comment.length > 300) {
      newErrors.comment = 'El comentario no puede superar los 300 caracteres.'
    }
    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  function handleSubmit(e) {
    e.preventDefault()
    if (!validate()) return

    pendingRequests.forEach((request) => {
      updateRequest(request.id, {
        appointmentDate: formData.date,
        appointmentTime: formData.time,
        comment: formData.comment,
        status: 'confirmed',
      })
    })

    setSuccess(true)
    setFormData({ date: '', time: '', comment: '' })
    setTimeout(() => setSuccess(false), 5000)
  }

  const inputClass = (hasError) =>
    `w-full px-3 py-2.5 bg-slate-50 border rounded-lg text-sm text-slate-800 focus:outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 transition-all ${
      hasError ? 'border-rose-500' : 'border-slate-200'
    }`

  if (userRequests.length === 0) {
    return (
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <PageHeader
          title="Mi solicitud de cita"
          subtitle="Revisa los servicios que quieres solicitar y confirma los datos de la cita."
        />
        <EmptyState
          title="No tienes solicitudes"
          message="Agrega servicios desde la sección de servicios para solicitar una cita."
          actionLabel="Ver servicios"
          actionTo="/servicios"
        />
      </div>
    )
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      <PageHeader
        title="Mi solicitud de cita"
        subtitle="Revisa los servicios que quieres solicitar y confirma los datos de la cita."
      />

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start mt-8">
        <div className="lg:col-span-2 space-y-4">
          {userRequests.map((request) => {
            const service = getServiceById(request.serviceId)
            return (
              <div
                key={request.id}
                className="bg-white p-4 sm:p-5 rounded-2xl shadow-sm border border-slate-100 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4"
              >
                <div className="space-y-1">
                  <h2 className="text-lg font-bold text-slate-900">
                    {service?.name || 'Servicio no disponible'}
                  </h2>
                  <p className="text-xs font-medium text-emerald-700 bg-emerald-50 border border-emerald-100 px-2.5 py-0.5 rounded-full inline-block">
                    Mascota: {request.petName} ({request.species})
                  </p>
                  <p className="text-xs text-slate-400">
                    Solicitado:{' '}
                    {new Date(request.createdAt).toLocaleDateString('es-CL')}
                  </p>
                  {request.appointmentDate && (
                    <p className="text-xs text-slate-500">
                      Cita: {request.appointmentDate} a las{' '}
                      {request.appointmentTime}
                    </p>
                  )}
                  <div className="pt-1">{getStatusBadge(request.status)}</div>
                </div>
                <div className="flex items-center justify-between w-full sm:w-auto sm:justify-end gap-6">
                  <p className="font-extrabold text-slate-900 text-lg">
                    {formatPrice(service?.price || 0)}
                  </p>
                  {request.status === 'pending' && (
                    <button
                      type="button"
                      onClick={() => cancelRequest(request.id)}
                      className="text-xs font-semibold text-rose-600 hover:text-rose-700 bg-rose-50 hover:bg-rose-100 border border-rose-100 px-3 py-1.5 rounded-lg transition-colors"
                    >
                      Quitar
                    </button>
                  )}
                </div>
              </div>
            )
          })}
        </div>

        <aside className="bg-white p-6 sm:p-8 rounded-2xl shadow-sm border border-slate-100 space-y-6 sticky top-20">
          <div className="border-b border-slate-100 pb-4">
            <p className="text-xl font-extrabold text-slate-900 flex justify-between items-center">
              <span>Total estimado:</span>
              <span className="text-emerald-600 text-2xl">
                {formatPrice(totalEstimated)}
              </span>
            </p>
          </div>

          {pendingRequests.length > 0 ? (
            <form
              onSubmit={handleSubmit}
              noValidate
              className="space-y-4"
            >
              <div className="flex flex-col gap-1.5">
                <label
                  htmlFor="fecha-cita"
                  className="text-xs font-semibold text-slate-700"
                >
                  Fecha preferida*
                </label>
                <input
                  type="date"
                  id="fecha-cita"
                  name="date"
                  value={formData.date}
                  onChange={handleChange}
                  className={inputClass(!!errors.date)}
                />
                {errors.date && (
                  <span className="text-xs text-rose-500">{errors.date}</span>
                )}
              </div>

              <div className="flex flex-col gap-1.5">
                <label
                  htmlFor="hora-cita"
                  className="text-xs font-semibold text-slate-700"
                >
                  Hora preferida*
                </label>
                <input
                  type="time"
                  id="hora-cita"
                  name="time"
                  value={formData.time}
                  onChange={handleChange}
                  className={inputClass(!!errors.time)}
                />
                {errors.time && (
                  <span className="text-xs text-rose-500">{errors.time}</span>
                )}
              </div>

              <div className="flex flex-col gap-1.5">
                <label
                  htmlFor="comentario-cita"
                  className="text-xs font-semibold text-slate-700"
                >
                  Comentario (opcional)
                </label>
                <textarea
                  id="comentario-cita"
                  name="comment"
                  maxLength={300}
                  rows={3}
                  value={formData.comment}
                  onChange={handleChange}
                  placeholder="Ej: Mi mascota está nerviosa..."
                  className={`${inputClass(!!errors.comment)} resize-none`}
                />
                {errors.comment && (
                  <span className="text-xs text-rose-500">
                    {errors.comment}
                  </span>
                )}
              </div>

              {success && (
                <div className="p-3 text-sm text-emerald-800 rounded-lg bg-emerald-50 border border-emerald-200">
                  ✅ Tu solicitud de cita fue enviada con éxito.
                </div>
              )}

              <Button type="submit" className="w-full py-3">
                Enviar solicitud de cita
              </Button>
            </form>
          ) : (
            <div className="text-center py-6">
              <p className="text-slate-500 text-sm">
                No tienes solicitudes pendientes.
              </p>
              <Link
                to="/servicios"
                className="inline-block mt-3 text-sm font-semibold text-emerald-600 hover:text-emerald-700 hover:underline"
              >
                Ver servicios
              </Link>
            </div>
          )}
        </aside>
      </div>
    </div>
  )
}
