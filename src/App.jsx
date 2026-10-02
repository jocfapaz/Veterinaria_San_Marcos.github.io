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

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="/nosotros" element={<NosotrosPage />} />
        <Route path="/servicios" element={<ServiciosPage />} />
        <Route path="/contacto" element={<ContactoPage />} />
        <Route path="/tienda" element={<TiendaPage />} />
        <Route path="/blog" element={<BlogPage />} />
        <Route path="/blog/:slug" element={<BlogDetallePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/registro" element={<RegistroPage />} />
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