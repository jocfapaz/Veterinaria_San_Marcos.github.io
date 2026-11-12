import { act, fireEvent, render, screen, waitFor } from '@testing-library/react'
import { MemoryRouter, Route, Routes } from 'react-router'
import { AuthProvider, useAuth } from './AuthContext.jsx'
import {
  readSession,
  saveSession,
  SESSION_EXPIRED_EVENT,
} from '../services/session.js'

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

function SessionProbe() {
  const { currentUser, isReady, logout } = useAuth()

  return (
    <div>
      {isReady ? <span>listo</span> : <span>cargando</span>}
      {currentUser && <span>{currentUser.firstName}</span>}
      <button type="button" onClick={logout}>
        Salir
      </button>
    </div>
  )
}

function renderProbe() {
  return render(
    <MemoryRouter initialEntries={['/privada']}>
      <AuthProvider>
        <Routes>
          <Route path="/privada" element={<SessionProbe />} />
          <Route path="/login" element={<div>Login</div>} />
        </Routes>
      </AuthProvider>
    </MemoryRouter>
  )
}

describe('AuthContext', () => {
  beforeEach(() => {
    localStorage.clear()
  })

  it('logout limpia token y usuario', async () => {
    saveSession({ token: 't1' })
    mockMe()
    renderProbe()

    await waitFor(() => expect(screen.getByText('Ana')).toBeInTheDocument())
    fireEvent.click(screen.getByText('Salir'))

    expect(readSession()).toBeNull()
    expect(screen.queryByText('Ana')).not.toBeInTheDocument()
  })

  it('redirige al login cuando la sesión expira', async () => {
    saveSession({ token: 't1' })
    mockMe()
    renderProbe()

    await waitFor(() => expect(screen.getByText('Ana')).toBeInTheDocument())
    act(() => {
      window.dispatchEvent(new CustomEvent(SESSION_EXPIRED_EVENT))
    })

    await waitFor(() => expect(screen.getByText('Login')).toBeInTheDocument())
    expect(readSession()).toBeNull()
  })
})
