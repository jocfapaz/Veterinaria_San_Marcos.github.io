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
            <AdminRoute>
              <AdminLayout />
            </AdminRoute>
          }
        >
          <Route index element={<AdminDashboard />} />
          <Route path="servicios" element={<AdminServiciosPage />} />
          <Route path="servicios/nuevo" element={<AdminServicioForm />} />
          <Route path="servicios/:id/editar" element={<AdminServicioForm />} />
          <Route path="productos" element={<AdminProductosPage />} />
          <Route path="productos/nuevo" element={<AdminProductoForm />} />
          <Route path="productos/:id/editar" element={<AdminProductoForm />} />
          <Route path="usuarios" element={<AdminUsuariosPage />} />
          <Route path="usuarios/nuevo" element={<AdminUsuarioForm />} />
          <Route path="usuarios/:id/editar" element={<AdminUsuarioForm />} />
          <Route path="ordenes" element={<AdminOrdenesPage />} />
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
