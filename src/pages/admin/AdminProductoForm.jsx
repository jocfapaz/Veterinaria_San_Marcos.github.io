import { useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router'
import {
  getProductById,
  addProduct,
  updateProduct,
  PRODUCT_CATEGORIES,
} from '../../mockDB.js'
import AdminPageHeader from '../../components/admin/AdminPageHeader'
import FormInput from '../../components/admin/FormInput'
import FormSelect from '../../components/admin/FormSelect'
import FormTextarea from '../../components/admin/FormTextarea'

export default function AdminProductoForm() {
  const { id } = useParams()
  const navigate = useNavigate()
  const isEdit = Boolean(id)
  const product = isEdit ? getProductById(id) : null

  const [formData, setFormData] = useState({
    code: product?.code || '',
    name: product?.name || '',
    description: product?.description || '',
    category: product?.category || PRODUCT_CATEGORIES[0],
    presentation: product?.presentation || '',
    price: product?.price || '',
    stock: product?.stock ?? 0,
    stockCritical: product?.stockCritical ?? 0,
    image: product?.image || '',
    discount: product?.discount ?? 0,
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
    if (!formData.presentation.trim())
      newErrors.presentation = 'La presentación es obligatoria.'
    if (formData.price === '' || Number(formData.price) < 0)
      newErrors.price = 'Ingresa un precio válido.'
    if (formData.stock === '' || Number(formData.stock) < 0 || !Number.isInteger(Number(formData.stock)))
      newErrors.stock = 'El stock debe ser un entero mayor o igual a 0.'
    if (formData.stockCritical === '' || Number(formData.stockCritical) < 0 || !Number.isInteger(Number(formData.stockCritical)))
      newErrors.stockCritical = 'El stock crítico debe ser un entero mayor o igual a 0.'
    if (!formData.image.trim())
      newErrors.image = 'La ruta de la imagen es obligatoria.'
    const discount = Number(formData.discount)
    if (Number.isNaN(discount) || discount < 0 || discount > 100)
      newErrors.discount = 'El descuento debe estar entre 0 y 100.'
    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  function handleSubmit(e) {
    e.preventDefault()
    if (!validate()) return

    const data = {
      ...formData,
      price: Number(formData.price),
      stock: Number(formData.stock),
      stockCritical: Number(formData.stockCritical),
      discount: Number(formData.discount),
    }

    if (isEdit) {
      updateProduct(id, data)
    } else {
      addProduct(data)
    }

    navigate('/admin/productos')
  }

  return (
    <div className="max-w-2xl mx-auto">
      <AdminPageHeader
        title={isEdit ? 'Editar producto' : 'Nuevo producto'}
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
          label="Nombre del producto"
          value={formData.name}
          onChange={handleChange}
          error={errors.name}
          required
        />

        <FormSelect
          id="category"
          name="category"
          label="Categoría"
          value={formData.category}
          onChange={handleChange}
          options={PRODUCT_CATEGORIES.map((c) => ({ value: c, label: c }))}
        />

        <FormInput
          id="presentation"
          name="presentation"
          label="Presentación"
          value={formData.presentation}
          onChange={handleChange}
          error={errors.presentation}
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

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
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
            id="discount"
            name="discount"
            type="number"
            label="Descuento (%)"
            value={formData.discount}
            onChange={handleChange}
            error={errors.discount}
            min={0}
            max={100}
            step={1}
          />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          <FormInput
            id="stock"
            name="stock"
            type="number"
            label="Stock"
            value={formData.stock}
            onChange={handleChange}
            error={errors.stock}
            min={0}
            step={1}
            required
          />

          <FormInput
            id="stockCritical"
            name="stockCritical"
            type="number"
            label="Stock crítico"
            value={formData.stockCritical}
            onChange={handleChange}
            error={errors.stockCritical}
            min={0}
            step={1}
          />
        </div>

        <FormInput
          id="image"
          name="image"
          label="Imagen"
          value={formData.image}
          onChange={handleChange}
          error={errors.image}
          placeholder="/images/ejemplo.png"
          required
        />

        <div className="flex flex-col sm:flex-row gap-3 pt-2">
          <button
            type="submit"
            className="flex-1 py-2.5 px-4 bg-emerald-600 hover:bg-emerald-700 text-white font-semibold rounded-lg shadow-sm transition-colors"
          >
            {isEdit ? 'Guardar cambios' : 'Registrar'}
          </button>
          <Link
            to="/admin/productos"
            className="flex-1 text-center py-2.5 px-4 bg-slate-100 hover:bg-slate-200 text-slate-700 font-semibold rounded-lg transition-colors"
          >
            Cancelar
          </Link>
        </div>
      </form>
    </div>
  )
}
