import { Link, useNavigate } from 'react-router'
import {
  getProducts,
  deleteProduct,
} from '../../mockDB.js'
import AdminPageHeader from '../../components/admin/AdminPageHeader'
import AdminTable from '../../components/admin/AdminTable'

export default function AdminProductosPage() {
  const products = getProducts()
  const navigate = useNavigate()

  function handleDelete(id) {
    if (window.confirm('¿Estás seguro de eliminar este producto?')) {
      deleteProduct(id)
      navigate('/admin/productos')
    }
  }

  return (
    <div className="space-y-6">
      <AdminPageHeader
        title="Gestión de Productos"
        actionLabel="+ Nuevo producto"
        actionTo="/admin/productos/nuevo"
      />

      <AdminTable
        headers={[
          'ID',
          'Categoría',
          'Nombre',
          'Presentación',
          'Precio',
          'Descuento',
          'Acciones',
        ]}
      >
        {products.map((product) => (
          <tr key={product.id}>
            <td className="py-3 px-4 font-medium">{product.id}</td>
            <td className="py-3 px-4">{product.category}</td>
            <td className="py-3 px-4">{product.name}</td>
            <td className="py-3 px-4">{product.presentation}</td>
            <td className="py-3 px-4">
              ${product.price.toLocaleString('es-CL')}
            </td>
            <td className="py-3 px-4">
              {product.discount > 0 ? (
                <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-amber-100 text-amber-700">
                  -{product.discount}%
                </span>
              ) : (
                <span className="text-slate-400">—</span>
              )}
            </td>
            <td className="py-3 px-4">
              <div className="flex items-center gap-2">
                <Link
                  to={`/admin/productos/${product.id}/editar`}
                  className="text-xs font-semibold text-emerald-600 hover:text-emerald-700 bg-emerald-50 hover:bg-emerald-100 px-3 py-1.5 rounded-lg border border-emerald-200 transition-colors"
                >
                  Editar
                </Link>
                <button
                  type="button"
                  onClick={() => handleDelete(product.id)}
                  className="text-xs font-semibold text-rose-600 hover:text-rose-700 bg-rose-50 hover:bg-rose-100 px-3 py-1.5 rounded-lg border border-rose-200 transition-colors"
                >
                  Eliminar
                </button>
              </div>
            </td>
          </tr>
        ))}
      </AdminTable>
    </div>
  )
}
