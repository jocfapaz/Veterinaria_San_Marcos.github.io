import { useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router'
import {
  getUserById,
  registerUser,
  updateUser,
  validateRun,
  formatRun,
  REGIONS,
  COMMUNES_BY_REGION,
  USER_ROLES,
} from '../../mockDB.js'
import AdminPageHeader from '../../components/admin/AdminPageHeader'
import FormInput from '../../components/admin/FormInput'
import FormSelect from '../../components/admin/FormSelect'

const ROLE_OPTIONS = USER_ROLES.map((role) => {
  const labels = {
    admin: 'Administrador',
    vendedor: 'Vendedor',
    veterinario: 'Veterinario',
    client: 'Cliente',
  }
  return { value: role, label: labels[role] }
})

export default function AdminUsuarioForm() {
  const { id } = useParams()
  const navigate = useNavigate()
  const isEdit = Boolean(id)
  const user = isEdit ? getUserById(id) : null

  const [formData, setFormData] = useState({
    run: user?.run || '',
    email: user?.email || '',
    password: '',
    firstName: user?.firstName || '',
    lastName: user?.lastName || '',
    role: user?.role || 'client',
    birthDate: user?.birthDate || '',
    phone: user?.phone || '',
    address: user?.address || '',
    region: user?.region || REGIONS[0],
    commune: user?.commune || '',
  })
  const [errors, setErrors] = useState({})
  const [submitError, setSubmitError] = useState('')

  const communeOptions = (COMMUNES_BY_REGION[formData.region] || []).map((c) => ({
    value: c,
    label: c,
  }))

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
    setSubmitError('')
  }

  function validate() {
    const newErrors = {}
    if (!formData.run.trim()) {
      newErrors.run = 'El RUN es obligatorio.'
    } else if (!validateRun(formData.run)) {
      newErrors.run = 'Ingresa un RUN válido.'
    }
    if (!formData.email.trim()) newErrors.email = 'El correo es obligatorio.'
    if (!isEdit && !formData.password.trim())
      newErrors.password = 'La contraseña es obligatoria.'
    if (!formData.firstName.trim())
      newErrors.firstName = 'El nombre es obligatorio.'
    if (!formData.lastName.trim())
      newErrors.lastName = 'El apellido es obligatorio.'
    if (!formData.phone.trim())
      newErrors.phone = 'El teléfono es obligatorio.'
    if (!formData.address.trim())
      newErrors.address = 'La dirección es obligatoria.'
    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  function handleSubmit(e) {
    e.preventDefault()
    if (!validate()) return

    const data = {
      run: formatRun(formData.run),
      firstName: formData.firstName,
      lastName: formData.lastName,
      role: formData.role,
      birthDate: formData.birthDate,
      phone: formData.phone,
      address: formData.address,
      region: formData.region,
      commune: formData.commune,
    }

    if (isEdit) {
      if (formData.email !== user.email) {
        data.email = formData.email
      }
      if (formData.password.trim()) {
        data.password = formData.password
      }
      updateUser(id, data)
      navigate('/admin/usuarios')
    } else {
      try {
        registerUser({
          email: formData.email,
          password: formData.password,
          ...data,
        })
        navigate('/admin/usuarios')
      } catch (error) {
        setSubmitError(error.message)
      }
    }
  }

  return (
    <div className="max-w-2xl mx-auto">
      <AdminPageHeader
        title={isEdit ? 'Editar usuario' : 'Nuevo usuario'}
      />

      <form
        onSubmit={handleSubmit}
        className="bg-white p-6 sm:p-8 rounded-2xl shadow-sm border border-slate-200 space-y-5"
      >
        {isEdit && (
          <FormInput
            id="id"
            name="id"
            label="ID"
            value={id}
            readOnly
            className="bg-slate-100"
          />
        )}

        <FormInput
          id="run"
          name="run"
          label="RUN"
          value={formData.run}
          onChange={handleChange}
          error={errors.run}
          placeholder="12.345.678-5"
          required
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          <FormInput
            id="firstName"
            name="firstName"
            label="Nombre"
            value={formData.firstName}
            onChange={handleChange}
            error={errors.firstName}
            required
          />
          <FormInput
            id="lastName"
            name="lastName"
            label="Apellido"
            value={formData.lastName}
            onChange={handleChange}
            error={errors.lastName}
            required
          />
        </div>

        <FormInput
          id="email"
          name="email"
          type="email"
          label="Correo electrónico"
          value={formData.email}
          onChange={handleChange}
          error={errors.email}
          required
        />

        <FormInput
          id="password"
          name="password"
          type="password"
          label={isEdit ? 'Contraseña (dejar en blanco para mantener)' : 'Contraseña'}
          value={formData.password}
          onChange={handleChange}
          error={errors.password}
          required={!isEdit}
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          <FormSelect
            id="role"
            name="role"
            label="Rol"
            value={formData.role}
            onChange={handleChange}
            options={ROLE_OPTIONS}
          />
          <FormInput
            id="birthDate"
            name="birthDate"
            type="date"
            label="Fecha de nacimiento"
            value={formData.birthDate}
            onChange={handleChange}
          />
        </div>

        <FormInput
          id="phone"
          name="phone"
          label="Teléfono"
          value={formData.phone}
          onChange={handleChange}
          error={errors.phone}
          required
        />

        <FormInput
          id="address"
          name="address"
          label="Dirección"
          value={formData.address}
          onChange={handleChange}
          error={errors.address}
          required
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          <FormSelect
            id="region"
            name="region"
            label="Región"
            value={formData.region}
            onChange={handleChange}
            options={REGIONS.map((r) => ({ value: r, label: r }))}
          />
          <FormSelect
            id="commune"
            name="commune"
            label="Comuna"
            value={formData.commune}
            onChange={handleChange}
            options={communeOptions}
          />
        </div>

        {submitError && (
          <p className="text-sm text-rose-600 bg-rose-50 p-3 rounded-lg">
            {submitError}
          </p>
        )}

        <div className="flex flex-col sm:flex-row gap-3 pt-2">
          <button
            type="submit"
            className="flex-1 py-2.5 px-4 bg-emerald-600 hover:bg-emerald-700 text-white font-semibold rounded-lg shadow-sm transition-colors"
          >
            {isEdit ? 'Guardar cambios' : 'Registrar'}
          </button>
          <Link
            to="/admin/usuarios"
            className="flex-1 text-center py-2.5 px-4 bg-slate-100 hover:bg-slate-200 text-slate-700 font-semibold rounded-lg transition-colors"
          >
            Cancelar
          </Link>
        </div>
      </form>
    </div>
  )
}
