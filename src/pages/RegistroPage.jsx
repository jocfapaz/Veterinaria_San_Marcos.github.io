import { useState } from 'react'
import { Link } from 'react-router'
import {
  registerUser,
  validateRun,
  formatRun,
  REGIONS,
  COMMUNES_BY_REGION,
} from '../mockDB.js'
import Button from '../components/Button'

function isValidPhone(phone) {
  const cleaned = phone.replace(/\s+/g, '')
  return /^(\+?56)?[1-9]\d{8}$/.test(cleaned)
}

function isValidName(name) {
  return /^[a-zA-ZáéíóúÁÉÍÓÚñÑüÜ\s\-']+$/.test(name.trim())
}

function isValidEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
}

const ALLOWED_DOMAINS = [
  'duoc.cl',
  'profesor.duoc.cl',
  'gmail.com',
  'duocuc.cl',
  'veterinariasanmarcos.cl',
]

export default function RegistroPage() {
  const [formData, setFormData] = useState({
    run: '',
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: '',
    birthDate: '',
    phone: '',
    address: '',
    region: REGIONS[0],
    commune: COMMUNES_BY_REGION[REGIONS[0]][0],
    petName: '',
    petSpecies: '',
    petBreed: '',
  })
  const [errors, setErrors] = useState({})
  const [success, setSuccess] = useState(false)

  const communeOptions = COMMUNES_BY_REGION[formData.region] || []

  function handleChange(e) {
    const { name, value } = e.target
    setFormData((prev) => {
      const next = { ...prev, [name]: value }
      if (name === 'region') {
        next.commune = (COMMUNES_BY_REGION[value] || [])[0] || ''
      }
      return next
    })
    setErrors((prev) => ({ ...prev, [name]: '' }))
  }

  function validate() {
    const newErrors = {}
    const {
      run,
      firstName,
      lastName,
      email,
      password,
      confirmPassword,
      phone,
      address,
      region,
      commune,
    } = formData

    if (!run) newErrors.run = 'El RUN es obligatorio.'
    else if (!validateRun(run))
      newErrors.run = 'Ingresa un RUN válido (ej: 12.345.678-5).'

    if (!firstName) newErrors.firstName = 'El nombre es obligatorio.'
    else if (!isValidName(firstName))
      newErrors.firstName = 'El nombre solo puede contener letras y espacios.'

    if (!lastName) newErrors.lastName = 'Los apellidos son obligatorios.'
    else if (!isValidName(lastName))
      newErrors.lastName = 'Los apellidos solo pueden contener letras y espacios.'

    const emailLower = email.trim().toLowerCase()
    if (!emailLower) newErrors.email = 'El correo electrónico es obligatorio.'
    else if (!isValidEmail(emailLower))
      newErrors.email = 'Ingresa un formato de correo válido.'
    else {
      const domain = emailLower.split('@')[1]
      if (!ALLOWED_DOMAINS.includes(domain)) {
        newErrors.email =
          'Solo se permiten correos institucionales o Gmail.'
      }
    }

    if (!password) newErrors.password = 'La contraseña es obligatoria.'
    else if (password.length < 4 || password.length > 10)
      newErrors.password = 'La contraseña debe tener entre 4 y 10 caracteres.'

    if (!confirmPassword)
      newErrors.confirmPassword = 'Debes confirmar tu contraseña.'
    else if (confirmPassword !== password)
      newErrors.confirmPassword = 'Las contraseñas no coinciden.'

    if (phone && !isValidPhone(phone))
      newErrors.phone = 'Ingresa un teléfono chileno válido (ej: +56 9 1234 5678).'

    if (!address) newErrors.address = 'La dirección es obligatoria.'
    if (!region) newErrors.region = 'Debes seleccionar una región.'
    if (!commune) newErrors.commune = 'Debes seleccionar una comuna.'

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  function handleSubmit(e) {
    e.preventDefault()
    if (validate()) {
      try {
        const userData = {
          run: formatRun(formData.run),
          email: formData.email.trim().toLowerCase(),
          password: formData.password,
          firstName: formData.firstName.trim(),
          lastName: formData.lastName.trim(),
          birthDate: formData.birthDate,
          phone: formData.phone.trim(),
          address: formData.address.trim(),
          region: formData.region,
          commune: formData.commune,
        }

        if (formData.petName) {
          userData.pets = [
            {
              name: formData.petName,
              species: formData.petSpecies || 'Perro',
              breed: formData.petBreed,
            },
          ]
        }

        registerUser(userData)
        setSuccess(true)
        setFormData({
          run: '',
          firstName: '',
          lastName: '',
          email: '',
          password: '',
          confirmPassword: '',
          birthDate: '',
          phone: '',
          address: '',
          region: REGIONS[0],
          commune: COMMUNES_BY_REGION[REGIONS[0]][0],
          petName: '',
          petSpecies: '',
          petBreed: '',
        })
        setTimeout(() => setSuccess(false), 5000)
      } catch (err) {
        setErrors({ email: err.message })
      }
    }
  }

  const inputClass = (hasError) =>
    `w-full px-3 py-2 bg-slate-50 border rounded-lg text-sm text-slate-800 focus:outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 transition-all ${
      hasError ? 'border-rose-500' : 'border-slate-200'
    }`

  return (
    <div className="flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="bg-white shadow-xl relative z-10 w-full max-w-2xl space-y-6 rounded-2xl p-6 sm:p-8 border border-slate-100">
        <div>
          <h3 className="text-slate-900 mb-1.5 text-2xl font-semibold">
            Registro de Usuario
          </h3>
          <p className="text-slate-600 text-sm mb-4">
            Crea tu cuenta para gestionar tus citas e historial clínico.
          </p>
        </div>

        {success && (
          <div
            className="mb-4 p-4 text-sm text-emerald-800 rounded-lg bg-emerald-50 border border-emerald-200"
            role="alert"
          >
            <span className="font-bold">¡Registro exitoso!</span> Todos los datos
            son válidos y tu cuenta ha sido creada.
          </div>
        )}

        <form onSubmit={handleSubmit} noValidate className="space-y-4">
          <h4 className="text-sm font-bold uppercase tracking-wider text-emerald-600 border-b border-slate-100 pb-1">
            Datos del Dueño
          </h4>

          <div>
            <label
              htmlFor="run"
              className="block text-xs font-semibold text-slate-700 mb-1"
            >
              RUN*
            </label>
            <input
              type="text"
              id="run"
              name="run"
              value={formData.run}
              onChange={handleChange}
              placeholder="Ej: 12.345.678-5"
              required
              minLength={7}
              maxLength={12}
              className={inputClass(!!errors.run)}
            />
            {errors.run && (
              <span className="text-xs text-rose-500">{errors.run}</span>
            )}
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label
                htmlFor="firstName"
                className="block text-xs font-semibold text-slate-700 mb-1"
              >
                Nombre*
              </label>
              <input
                type="text"
                id="firstName"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                required
                maxLength={50}
                className={inputClass(!!errors.firstName)}
              />
              {errors.firstName && (
                <span className="text-xs text-rose-500">{errors.firstName}</span>
              )}
            </div>
            <div>
              <label
                htmlFor="lastName"
                className="block text-xs font-semibold text-slate-700 mb-1"
              >
                Apellidos*
              </label>
              <input
                type="text"
                id="lastName"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                required
                maxLength={100}
                className={inputClass(!!errors.lastName)}
              />
              {errors.lastName && (
                <span className="text-xs text-rose-500">{errors.lastName}</span>
              )}
            </div>
          </div>

          <div>
            <label
              htmlFor="email"
              className="block text-xs font-semibold text-slate-700 mb-1"
            >
              Correo Electrónico*
            </label>
            <input
              type="email"
              id="email"
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

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label
                htmlFor="password"
                className="block text-xs font-semibold text-slate-700 mb-1"
              >
                Contraseña*
              </label>
              <input
                type="password"
                id="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                required
                minLength={4}
                maxLength={10}
                placeholder="········"
                className={inputClass(!!errors.password)}
              />
              {errors.password && (
                <span className="text-xs text-rose-500">{errors.password}</span>
              )}
            </div>
            <div>
              <label
                htmlFor="confirmPassword"
                className="block text-xs font-semibold text-slate-700 mb-1"
              >
                Confirmar contraseña*
              </label>
              <input
                type="password"
                id="confirmPassword"
                name="confirmPassword"
                value={formData.confirmPassword}
                onChange={handleChange}
                required
                minLength={4}
                maxLength={10}
                placeholder="········"
                className={inputClass(!!errors.confirmPassword)}
              />
              {errors.confirmPassword && (
                <span className="text-xs text-rose-500">
                  {errors.confirmPassword}
                </span>
              )}
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label
                htmlFor="birthDate"
                className="block text-xs font-semibold text-slate-700 mb-1"
              >
                Fecha de nacimiento
              </label>
              <input
                type="date"
                id="birthDate"
                name="birthDate"
                value={formData.birthDate}
                onChange={handleChange}
                className={inputClass(false)}
              />
            </div>
            <div>
              <label
                htmlFor="phone"
                className="block text-xs font-semibold text-slate-700 mb-1"
              >
                Teléfono
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="+56 9 1234 5678"
                className={inputClass(!!errors.phone)}
              />
              {errors.phone && (
                <span className="text-xs text-rose-500">{errors.phone}</span>
              )}
            </div>
          </div>

          <div>
            <label
              htmlFor="address"
              className="block text-xs font-semibold text-slate-700 mb-1"
            >
              Dirección*
            </label>
            <input
              type="text"
              id="address"
              name="address"
              value={formData.address}
              onChange={handleChange}
              required
              maxLength={300}
              className={inputClass(!!errors.address)}
            />
            {errors.address && (
              <span className="text-xs text-rose-500">{errors.address}</span>
            )}
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label
                htmlFor="region"
                className="block text-xs font-semibold text-slate-700 mb-1"
              >
                Región*
              </label>
              <select
                id="region"
                name="region"
                value={formData.region}
                onChange={handleChange}
                required
                className={inputClass(!!errors.region)}
              >
                {REGIONS.map((r) => (
                  <option key={r} value={r}>
                    {r}
                  </option>
                ))}
              </select>
              {errors.region && (
                <span className="text-xs text-rose-500">{errors.region}</span>
              )}
            </div>
            <div>
              <label
                htmlFor="commune"
                className="block text-xs font-semibold text-slate-700 mb-1"
              >
                Comuna*
              </label>
              <select
                id="commune"
                name="commune"
                value={formData.commune}
                onChange={handleChange}
                required
                className={inputClass(!!errors.commune)}
              >
                {communeOptions.map((c) => (
                  <option key={c} value={c}>
                    {c}
                  </option>
                ))}
              </select>
              {errors.commune && (
                <span className="text-xs text-rose-500">{errors.commune}</span>
              )}
            </div>
          </div>

          <h4 className="text-sm font-bold uppercase tracking-wider text-emerald-600 border-b border-slate-100 pb-1 pt-2">
            Datos de la Mascota{' '}
            <span className="text-slate-400 font-normal lowercase">(opcional)</span>
          </h4>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div>
              <label
                htmlFor="petName"
                className="block text-xs font-semibold text-slate-700 mb-1"
              >
                Nombre
              </label>
              <input
                type="text"
                id="petName"
                name="petName"
                value={formData.petName}
                onChange={handleChange}
                maxLength={50}
                className={inputClass(false)}
              />
            </div>
            <div>
              <label
                htmlFor="petSpecies"
                className="block text-xs font-semibold text-slate-700 mb-1"
              >
                Especie
              </label>
              <select
                id="petSpecies"
                name="petSpecies"
                value={formData.petSpecies}
                onChange={handleChange}
                className={inputClass(false)}
              >
                <option value="">-- Seleccionar --</option>
                <option value="Perro">Perro</option>
                <option value="Gato">Gato</option>
                <option value="Conejo">Conejo</option>
                <option value="Ave">Ave</option>
              </select>
            </div>
            <div>
              <label
                htmlFor="petBreed"
                className="block text-xs font-semibold text-slate-700 mb-1"
              >
                Raza
              </label>
              <input
                type="text"
                id="petBreed"
                name="petBreed"
                value={formData.petBreed}
                onChange={handleChange}
                maxLength={50}
                className={inputClass(false)}
              />
            </div>
          </div>

          <Button type="submit" className="w-full mt-4">
            Crear Cuenta
          </Button>
        </form>

        <p className="text-slate-600 text-sm text-center">
          ¿Ya tienes una cuenta?{' '}
          <Link
            to="/login"
            className="text-emerald-600 hover:text-emerald-700 font-semibold hover:underline"
          >
            Iniciar sesión
          </Link>
        </p>
      </div>
    </div>
  )
}
