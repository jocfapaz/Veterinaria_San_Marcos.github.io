import { act, render, screen, waitFor } from '@testing-library/react'
import { MemoryRouter, Route, Routes } from 'react-router'
import { AuthProvider } from './AuthContext.jsx'
import ProtectedRoute from './ProtectedRoute.jsx'
import { saveSession } from '../services/session.js'

const BACKEND_USER = {
  id: 1,
  run: '1-9',
  email: 'ana@b.cl',
  nombre: 'Ana',
  apellido: 'Pérez',
  rol: 'CLIENTE',
  activo: true,
}

function mockMe() {
  spyOn(window, 'fetch').and.returnValue(
    Promise.resolve({
      ok: true,
      status: 200,
      headers: new Map(),
      json: () => Promise.resolve(BACKEND_USER),
    })
  )
}

function renderProtected() {
  return render(
    <MemoryRouter initialEntries={['/privada']}>
      <AuthProvider>
        <Routes>
          <Route
            path="/privada"
            element={
              <ProtectedRoute>
                <div>Ruta privada</div>
              </ProtectedRoute>
            }
          />
          <Route path="/login" element={<div>Login</div>} />
        </Routes>
      </AuthProvider>
    </MemoryRouter>
  )
}

describe('ProtectedRoute', () => {
  beforeEach(() => {
    localStorage.clear()
  })

  it('redirige al login cuando no hay sesión', async () => {
    renderProtected()

    await waitFor(() => expect(screen.getByText('Login')).toBeInTheDocument())
  })

  it('permite el acceso cuando la sesión es válida', async () => {
    saveSession({ token: 't1' })
    mockMe()
    renderProtected()

    await waitFor(() =>
      expect(screen.getByText('Ruta privada')).toBeInTheDocument()
    )
  })

  it('muestra el loader mientras restaura la sesión', async () => {
    saveSession({ token: 't1' })
    let resolveFetch
    spyOn(window, 'fetch').and.returnValue(
      new Promise((resolve) => {
        resolveFetch = resolve
      })
    )

    renderProtected()

    expect(screen.getByRole('status')).toHaveTextContent('Restaurando sesión')

    await waitFor(() => expect(resolveFetch).toBeDefined())
    await act(async () => {
      resolveFetch({
        ok: true,
        status: 200,
        headers: new Map(),
        json: () => Promise.resolve(BACKEND_USER),
      })
    })

    await waitFor(() =>
      expect(screen.getByText('Ruta privada')).toBeInTheDocument()
    )
  })
})
