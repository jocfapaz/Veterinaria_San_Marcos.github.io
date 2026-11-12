import { render, screen, waitFor } from '@testing-library/react'
import { MemoryRouter, Route, Routes } from 'react-router'
import { AuthProvider } from './AuthContext.jsx'
import AdminRoute from './AdminRoute.jsx'
import { saveSession } from '../services/session.js'

const ROLE_MAP = {
  admin: 'ADMIN',
  vendedor: 'VENDEDOR',
  veterinario: 'VETERINARIO',
  client: 'CLIENTE',
}

function mockMe(role) {
  spyOn(window, 'fetch').and.returnValue(
    Promise.resolve({
      ok: true,
      status: 200,
      headers: new Map(),
      json: () =>
        Promise.resolve({
          id: 1,
          run: '1-9',
          email: 'user@b.cl',
          nombre: 'Usuario',
          apellido: 'Prueba',
          rol: ROLE_MAP[role],
          activo: true,
        }),
    })
  )
}

function renderAdmin({ session, role = 'client', allowedRoles = ['admin'] }) {
  if (session) {
    saveSession(session)
    mockMe(role)
  }

  return render(
    <MemoryRouter initialEntries={['/admin']}>
      <AuthProvider>
        <Routes>
          <Route
            path="/admin"
            element={
              <AdminRoute allowedRoles={allowedRoles}>
                <div>Panel admin</div>
              </AdminRoute>
            }
          />
          <Route path="/login" element={<div>Login</div>} />
          <Route path="/" element={<div>Inicio</div>} />
        </Routes>
      </AuthProvider>
    </MemoryRouter>
  )
}

describe('AdminRoute', () => {
  beforeEach(() => {
    localStorage.clear()
  })

  it('redirige al login cuando no hay sesión', async () => {
    renderAdmin({})

    await waitFor(() => expect(screen.getByText('Login')).toBeInTheDocument())
  })

  it('permite el acceso a un administrador', async () => {
    renderAdmin({ session: { token: 't1' }, role: 'admin' })

    await waitFor(() =>
      expect(screen.getByText('Panel admin')).toBeInTheDocument()
    )
  })

  it('permite el acceso a un vendedor en productos y órdenes', async () => {
    renderAdmin({
      session: { token: 't1' },
      role: 'vendedor',
      allowedRoles: ['admin', 'vendedor'],
    })

    await waitFor(() =>
      expect(screen.getByText('Panel admin')).toBeInTheDocument()
    )
  })

  it('redirige al inicio cuando un cliente intenta entrar al panel', async () => {
    renderAdmin({ session: { token: 't1' }, role: 'client' })

    await waitFor(() => expect(screen.getByText('Inicio')).toBeInTheDocument())
  })

  it('redirige al inicio cuando un veterinario intenta entrar a productos', async () => {
    renderAdmin({
      session: { token: 't1' },
      role: 'veterinario',
      allowedRoles: ['admin', 'vendedor'],
    })

    await waitFor(() => expect(screen.getByText('Inicio')).toBeInTheDocument())
  })
})
