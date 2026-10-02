import { useState } from 'react'
import Button from '../components/Button'

export default function ContactoPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    comment: '',
  })
  const [errors, setErrors] = useState({})
  const [success, setSuccess] = useState(false)

  function handleChange(e) {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: '' }))
    }
  }

  function validate() {
    const newErrors = {}
    const name = formData.name.trim()

    if (!name) {
      newErrors.name = 'El nombre completo es obligatorio.'
    } else if (name.length < 3) {
      newErrors.name = 'El nombre debe tener al menos 3 caracteres.'
    } else if (!/^[a-zA-ZáéíóúÁÉÍÓÚñÑüÜ\s\-']+$/.test(name)) {
      newErrors.name = 'El nombre solo puede contener letras y espacios.'
    }

    const email = formData.email.trim().toLowerCase()
    if (!email) {
      newErrors.email = 'El correo electrónico es obligatorio.'
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      newErrors.email = 'Ingresa un formato de correo electrónico válido.'
    } else {
      const domain = email.split('@')[1]
      if (
        domain !== 'duoc.cl' &&
        domain !== 'profesor.duoc.cl' &&
        domain !== 'gmail.com'
      ) {
        newErrors.email =
          'Solo se permiten correos @duoc.cl, @profesor.duoc.cl y @gmail.com.'
      }
    }

    const comment = formData.comment.trim()
    if (!comment) {
      newErrors.comment = 'El comentario es obligatorio.'
    } else if (comment.length < 10) {
      newErrors.comment =
        'El comentario debe ser más detallado (mínimo 10 caracteres).'
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  function handleSubmit(e) {
    e.preventDefault()
    if (validate()) {
      setSuccess(true)
      setFormData({ name: '', email: '', comment: '' })
      setTimeout(() => setSuccess(false), 5000)
    }
  }

  const inputClass = (hasError) =>
    `w-full px-3 py-2.5 bg-slate-50 border rounded-lg text-sm text-slate-800 focus:outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 transition-all ${
      hasError ? 'border-rose-500' : 'border-slate-200'
    }`

  return (
    <section className="space-y-8">
      <div className="border-b border-slate-200 pb-4">
        <h1 className="text-3xl font-extrabold text-slate-900">Contacto</h1>
        <p className="text-slate-500 text-sm mt-1">
          Ponte en contacto con nuestro equipo para dudas, consultas o emergencias.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
        <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 space-y-4">
          <h2 className="text-xl font-bold text-slate-900 border-b border-slate-100 pb-3">
            Información de la Clínica
          </h2>
          <div className="space-y-3 text-sm text-slate-600">
            <p className="flex items-start gap-3">
              <span className="text-base shrink-0">📍</span>
              <span>
                <strong>Dirección:</strong> Av. San Marcos #1234, Rancagua
              </span>
            </p>
            <p className="flex items-center gap-3">
              <span className="text-base shrink-0">📞</span>
              <span>
                <strong>Teléfono:</strong> +56 9 8765 4321
              </span>
            </p>
            <p className="flex items-center gap-3">
              <span className="text-base shrink-0">🕒</span>
              <span>
                <strong>Horario:</strong> Lunes a sábado, 09:00 a 19:00
              </span>
            </p>
          </div>
        </div>

        <div className="bg-white p-6 sm:p-8 rounded-2xl shadow-sm border border-slate-100">
          <form onSubmit={handleSubmit} noValidate className="space-y-4">
            {success && (
              <div
                className="mb-4 p-4 text-sm text-emerald-800 rounded-lg bg-emerald-50 border border-emerald-200"
                role="alert"
              >
                <span className="font-bold">¡Mensaje enviado!</span> Tus datos
                pasaron la validación correctamente.
              </div>
            )}

            <h2 className="text-xl font-bold text-slate-900 border-b border-slate-100 pb-3">
              Formulario de contacto
            </h2>

            <div className="flex flex-col gap-1.5">
              <label
                htmlFor="nombre-contacto"
                className="text-xs font-semibold text-slate-700"
              >
                Nombre completo*
              </label>
              <input
                type="text"
                id="nombre-contacto"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                minLength={3}
                maxLength={100}
                placeholder="Tu nombre y apellido"
                className={inputClass(!!errors.name)}
              />
              {errors.name && (
                <span className="text-xs text-rose-500">{errors.name}</span>
              )}
            </div>

            <div className="flex flex-col gap-1.5">
              <label
                htmlFor="correo-contacto"
                className="text-xs font-semibold text-slate-700"
              >
                Correo electrónico*
              </label>
              <input
                type="email"
                id="correo-contacto"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                maxLength={100}
                placeholder="ejemplo@duoc.cl"
                className={inputClass(!!errors.email)}
              />
              {errors.email && (
                <span className="text-xs text-rose-500">{errors.email}</span>
              )}
            </div>

            <div className="flex flex-col gap-1.5">
              <label
                htmlFor="comentario-contacto"
                className="text-xs font-semibold text-slate-700"
              >
                Comentario*
              </label>
              <textarea
                id="comentario-contacto"
                name="comment"
                value={formData.comment}
                onChange={handleChange}
                required
                minLength={10}
                maxLength={500}
                rows={4}
                placeholder="¿En qué te podemos ayudar?"
                className={`${inputClass(!!errors.comment)} resize-none`}
              />
              {errors.comment && (
                <span className="text-xs text-rose-500">{errors.comment}</span>
              )}
            </div>

            <Button type="submit" className="w-full mt-2">
              Enviar mensaje
            </Button>
          </form>
        </div>
      </div>
    </section>
  )
}