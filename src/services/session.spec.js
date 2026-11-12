import {
  clearSession,
  readSession,
  saveSession,
  STORAGE_KEY,
} from './session.js'

describe('session', () => {
  beforeEach(() => {
    localStorage.clear()
  })

  it('guarda la sesión en localStorage', () => {
    saveSession({ token: 'abc123', role: 'client' })

    expect(readSession()).toEqual({ token: 'abc123', role: 'client' })
    expect(localStorage.getItem(STORAGE_KEY)).toBe(
      JSON.stringify({ token: 'abc123', role: 'client' })
    )
  })

  it('devuelve null si el JSON guardado es inválido', () => {
    localStorage.setItem(STORAGE_KEY, '{')

    expect(readSession()).toBeNull()
  })

  it('limpia la sesión persistida', () => {
    saveSession({ token: 'abc123' })

    clearSession()

    expect(localStorage.getItem(STORAGE_KEY)).toBeNull()
    expect(readSession()).toBeNull()
  })

  it('saveSession(null) elimina la sesión', () => {
    saveSession({ token: 'abc123' })

    saveSession(null)

    expect(readSession()).toBeNull()
  })
})
