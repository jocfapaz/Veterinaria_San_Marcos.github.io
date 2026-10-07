import { Routes, Route } from 'react-router'
import Layout from './components/Layout'
import Home from './pages/Home'
import ServiciosPage from './pages/ServiciosPage'
import TiendaPage from './pages/TiendaPage'
import NosotrosPage from './pages/NosotrosPage'
import ContactoPage from './pages/ContactoPage'
import LoginPage from './pages/LoginPage'
import RegistroPage from './pages/RegistroPage'
import BlogPage from './pages/BlogPage'
import BlogDetallePage from './pages/BlogDetallePage'
import ServicioDetallePage from './pages/ServicioDetallePage'
import ProductoDetallePage from './pages/ProductoDetallePage'
import CarritoPage from './pages/CarritoPage'
import CategoriasPage from './pages/CategoriasPage'
import OfertasPage from './pages/OfertasPage'
import CheckoutPage from './pages/CheckoutPage'
import PagoExitoPage from './pages/PagoExitoPage'
import PagoErrorPage from './pages/PagoErrorPage'
import MiSolicitudPage from './pages/MiSolicitudPage'
import ProtectedRoute from './contexts/ProtectedRoute'
import AdminRoute from './contexts/AdminRoute'
import AdminLayout from './components/admin/AdminLayout'
import AdminDashboard from './pages/admin/AdminDashboard'
import AdminServiciosPage from './pages/admin/AdminServiciosPage'
import AdminServicioForm from './pages/admin/AdminServicioForm'
import AdminProductosPage from './pages/admin/AdminProductosPage'
import AdminProductoForm from './pages/admin/AdminProductoForm'
import AdminUsuariosPage from './pages/admin/AdminUsuariosPage'
import AdminUsuarioForm from './pages/admin/AdminUsuarioForm'
import AdminOrdenesPage from './pages/admin/AdminOrdenesPage'

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="/nosotros" element={<NosotrosPage />} />
        <Route path="/servicios" element={<ServiciosPage />} />
        <Route path="/servicios/:id" element={<ServicioDetallePage />} />
        <Route path="/contacto" element={<ContactoPage />} />
        <Route path="/tienda" element={<TiendaPage />} />
        <Route path="/tienda/:id" element={<ProductoDetallePage />} />
        <Route path="/categorias" element={<CategoriasPage />} />
        <Route path="/ofertas" element={<OfertasPage />} />
        <Route
          path="/checkout"
          element={
            <ProtectedRoute>
              <CheckoutPage />
            </ProtectedRoute>
          }
        />
        <Route path="/pago/exito" element={<PagoExitoPage />} />
        <Route path="/pago/error" element={<PagoErrorPage />} />
        <Route path="/blog" element={<BlogPage />} />
        <Route path="/blog/:slug" element={<BlogDetallePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/registro" element={<RegistroPage />} />
        <Route
          path="/carrito"
          element={
            <ProtectedRoute>
              <CarritoPage />
            </ProtectedRoute>
          }
        />
        <Route
          path="/mi-solicitud"
          element={
            <ProtectedRoute>
              <MiSolicitudPage />
            </ProtectedRoute>
          }
        />
        <Route
          path="/admin"
          element={
            <AdminRoute allowedRoles={['admin', 'vendedor', 'veterinario']}>
              <AdminLayout />
            </AdminRoute>
          }
        >
          <Route index element={<AdminDashboard />} />
          <Route
            path="servicios"
            element={
              <AdminRoute allowedRoles={['admin', 'vendedor', 'veterinario']}>
                <AdminServiciosPage />
              </AdminRoute>
            }
          />
          <Route
            path="servicios/nuevo"
            element={
              <AdminRoute allowedRoles={['admin']}>
                <AdminServicioForm />
              </AdminRoute>
            }
          />
          <Route
            path="servicios/:id/editar"
            element={
              <AdminRoute allowedRoles={['admin']}>
                <AdminServicioForm />
              </AdminRoute>
            }
          />
          <Route
            path="productos"
            element={
              <AdminRoute allowedRoles={['admin', 'vendedor']}>
                <AdminProductosPage />
              </AdminRoute>
            }
          />
          <Route
            path="productos/nuevo"
            element={
              <AdminRoute allowedRoles={['admin']}>
                <AdminProductoForm />
              </AdminRoute>
            }
          />
          <Route
            path="productos/:id/editar"
            element={
              <AdminRoute allowedRoles={['admin']}>
                <AdminProductoForm />
              </AdminRoute>
            }
          />
          <Route
            path="usuarios"
            element={
              <AdminRoute allowedRoles={['admin']}>
                <AdminUsuariosPage />
              </AdminRoute>
            }
          />
          <Route
            path="usuarios/nuevo"
            element={
              <AdminRoute allowedRoles={['admin']}>
                <AdminUsuarioForm />
              </AdminRoute>
            }
          />
          <Route
            path="usuarios/:id/editar"
            element={
              <AdminRoute allowedRoles={['admin']}>
                <AdminUsuarioForm />
              </AdminRoute>
            }
          />
          <Route
            path="ordenes"
            element={
              <AdminRoute allowedRoles={['admin', 'vendedor']}>
                <AdminOrdenesPage />
              </AdminRoute>
            }
          />
        </Route>
        <Route
          path="*"
          element={
            <div className="p-8 text-center">
              <h1 className="text-2xl font-bold text-gray-900">404</h1>
              <p className="text-gray-600">Página no encontrada</p>
            </div>
          }
        />
      </Route>
    </Routes>
  )
}
