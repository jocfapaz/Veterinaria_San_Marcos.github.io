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
})