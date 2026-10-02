import { Routes, Route } from 'react-router'
import Layout from './components/Layout'
import Home from './pages/Home'
import ServiciosPage from './pages/ServiciosPage'
import TiendaPage from './pages/TiendaPage'

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="/servicios" element={<ServiciosPage />} />
        <Route path="/tienda" element={<TiendaPage />} />
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