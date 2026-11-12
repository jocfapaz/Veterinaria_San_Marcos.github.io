import { apiClient } from './api.js'

//Prueba el cliente génerico apiClient
//Envia el bearer token cuando existe en el localStorage


describe('apiClient', () => {
  const STORAGE_KEY = 'vsm_user'


  beforeEach(() => {
    localStorage.clear()
    spyOn(window, 'fetch').and.returnValue(
      Promise.resolve({
        ok: true,
        status: 200,
        headers: new Map([['content-length', '10']]),
        json: () => Promise.resolve({ ok: true }),
      })
    )
  })


  it('should send Authorization header when token exists', async () => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify({ token: 'abc123' }))
    await apiClient('/test')
    const args = window.fetch.calls.mostRecent().args
    expect(args[1].headers['Authorization']).toBe('Bearer abc123')
  })


  it('should not send Authorization header when token is missing', async () => {
    await apiClient('/test')
    const args = window.fetch.calls.mostRecent().args
    expect(args[1].headers['Authorization']).toBeUndefined()
  })


  it('should throw on HTTP error with backend message', async () => {
    window.fetch.and.returnValue(
      Promise.resolve({
        status: 400,
        statusText: 'Bad Request',
        json: () => Promise.resolve({ detail: 'Email inválido' }),
      })
    )
    await expectAsync(apiClient('/test')).toBeRejectedWithError('Email inválido')
  })


  it('should handle 204 No Content', async () => {
    window.fetch.and.returnValue(
      Promise.resolve({
        ok: true,
        status: 204,
        headers: new Map([['content-length', '0']]),
      })
    )
    const result = await apiClient('/test', { method: 'DELETE' })
    expect(result).toBeNull()
  })

  it('should clear session and notify when a protected request returns 401', async () => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify({ token: 'expired' }))
    spyOn(window, 'dispatchEvent')
    window.fetch.and.returnValue(
      Promise.resolve({
        status: 401,
        statusText: 'Unauthorized',
        json: () => Promise.resolve({ detail: 'Token inválido' }),
      })
    )

    await expectAsync(apiClient('/auth/me')).toBeRejectedWithError('Token inválido')

    expect(localStorage.getItem(STORAGE_KEY)).toBeNull()
    expect(window.dispatchEvent).toHaveBeenCalled()
    const event = window.dispatchEvent.calls.mostRecent().args[0]
    expect(event.type).toBe('vsm:session-expired')
  })

  it('should not expire the session when login returns 401', async () => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify({ token: 'old' }))
    spyOn(window, 'dispatchEvent')
    window.fetch.and.returnValue(
      Promise.resolve({
        status: 401,
        statusText: 'Unauthorized',
        json: () => Promise.resolve({ detail: 'Credenciales inválidas' }),
      })
    )

    await expectAsync(
      apiClient('/auth/login', { method: 'POST', body: '{}' })
    ).toBeRejectedWithError('Credenciales inválidas')

    expect(localStorage.getItem(STORAGE_KEY)).not.toBeNull()
    expect(window.dispatchEvent).not.toHaveBeenCalled()
  })

  it('should not send the token to login or register endpoints', async () => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify({ token: 'old' }))
    await apiClient('/auth/login', { method: 'POST', body: '{}' })

    const args = window.fetch.calls.mostRecent().args
    expect(args[1].headers['Authorization']).toBeUndefined()
  })
})