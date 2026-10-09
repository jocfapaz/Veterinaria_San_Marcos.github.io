import { useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router'
import {
  getServiceById,
  addService,
  updateService,
  SERVICE_CATEGORIES,
} from '../../mockDB.js'
import AdminPageHeader from '../../components/admin/AdminPageHeader'
import FormInput from '../../components/admin/FormInput'
import FormSelect from '../../components/admin/FormSelect'
import FormTextarea from '../../components/admin/FormTextarea'

const SPECIES_OPTIONS = [
  { value: 'Perro', label: 'Perro' },
  { value: 'Gato', label: 'Gato' },
  { value: 'Perro / Gato', label: 'Perro / Gato' },
  { value: 'Ave', label: 'Ave' },
  { value: 'Conejo', label: 'Conejo' },
  { value: 'Todas', label: 'Todas' },
]

export default function AdminServicioForm() {
  const { id } = useParams()
  const navigate = useNavigate()
  const isEdit = Boolean(id)
  const service = isEdit ? getServiceById(id) : null

  const [formData, setFormData] = useState({
    code: service?.code || '',
    name: service?.name || '',
    description: service?.description || '',
    category: service?.category || SERVICE_CATEGORIES[0],
    species: service?.species || 'Perro',
    duration: service?.duration || '',
    price: service?.price || '',
    note: service?.note || '',
    image: service?.image || '',
  })
  const [errors, setErrors] = useState({})

  function handleChange(e) {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
    setErrors((prev) => ({ ...prev, [name]: '' }))
  }

  function validate() {
    const newErrors = {}
    if (!formData.code.trim() || formData.code.length < 3)
      newErrors.code = 'El código es obligatorio y debe tener al menos 3 caracteres.'
    if (!formData.name.trim()) newErrors.name = 'El nombre es obligatorio.'
    if (!formData.duration.trim())
      newErrors.duration = 'La duración es obligatoria.'
    if (formData.price === '' || Number(formData.price) < 0)
      newErrors.price = 'Ingresa un precio válido.'
    if (!formData.image.trim())
      newErrors.image = 'La ruta de la imagen es obligatoria.'
    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  function handleSubmit(e) {
    e.preventDefault()
    if (!validate()) return

    const data = {
      ...formData,
      price: Number(formData.price),
    }

    if (isEdit) {
      updateService(id, data)
    } else {
      addService(data)
    }

    navigate('/admin/servicios')
  }

  return (
    <div className="max-w-2xl mx-auto">
      <AdminPageHeader
        title={isEdit ? 'Editar servicio' : 'Nuevo servicio'}
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
          id="code"
          name="code"
          label="Código"
          value={formData.code}
          onChange={handleChange}
          error={errors.code}
          required
        />

        <FormInput
          id="name"
          name="name"
          label="Nombre del servicio"
          value={formData.name}
          onChange={handleChange}
          error={errors.name}
          required
        />

        <FormTextarea
          id="description"
          name="description"
          label="Descripción"
          value={formData.description}
          onChange={handleChange}
          rows={3}
        />

        <FormSelect
          id="category"
          name="category"
          label="Categoría"
          value={formData.category}
          onChange={handleChange}
          options={SERVICE_CATEGORIES.map((c) => ({ value: c, label: c }))}
        />

        <FormSelect
          id="species"
          name="species"
          label="Especie"
          value={formData.species}
          onChange={handleChange}
          options={SPECIES_OPTIONS}
        />

        <FormInput
          id="duration"
          name="duration"
          label="Duración"
          value={formData.duration}
          onChange={handleChange}
          error={errors.duration}
          required
        />

        <FormInput
          id="price"
          name="price"
          type="number"
          label="Precio (CLP)"
          value={formData.price}
          onChange={handleChange}
          error={errors.price}
          min={0}
          step={500}
          required
        />

        <FormInput
          id="image"
          name="image"
          label="Imagen"
          value={formData.image}
          onChange={handleChange}
          error={errors.image}
          placeholder="images/ejemplo.png"
          required
        />

        <FormTextarea
          id="note"
          name="note"
          label="Observaciones"
          value={formData.note}
          onChange={handleChange}
          rows={3}
        />

        <div className="flex flex-col sm:flex-row gap-3 pt-2">
          <button
            type="submit"
            className="flex-1 py-2.5 px-4 bg-emerald-600 hover:bg-emerald-700 text-white font-semibold rounded-lg shadow-sm transition-colors"
          >
            {isEdit ? 'Guardar cambios' : 'Registrar'}
          </button>
          <Link
            to="/admin/servicios"
            className="flex-1 text-center py-2.5 px-4 bg-slate-100 hover:bg-slate-200 text-slate-700 font-semibold rounded-lg transition-colors"
          >
            Cancelar
          </Link>
        </div>
      </form>
    </div>
  )
}
