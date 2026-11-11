import * as authApi from './authApi.js'

//Estas pruebas verifican que la conversión de datos entre front y backend sea correcta.
//Se mockea window.fetch (los exports de api.js son de solo lectura y no se pueden espiar).

describe('authApi', () => {
  const AUTH_RESPONSE = {
    token: 't1',
    usuario: {
      id: 1,
      run: '1-9',
      email: 'a@b.cl',
      nombre: 'Juan',
      apellido: 'Pérez',
      rol: 'CLIENTE',
      activo: true,
    },
  }


  beforeEach(() => {
    localStorage.clear()
    spyOn(window, 'fetch').and.returnValue(
      Promise.resolve({
        ok: true,
        status: 200,
        headers: new Map(),
        json: () => Promise.resolve(AUTH_RESPONSE),
      })
    )
  })


  function buildUserData(overrides = {}) {
    return {
      run: '1-9',
      email: 'a@b.cl',
      password: '12345678',
      firstName: 'Juan',
      lastName: 'Pérez',
      birthDate: '1990-01-01',
      phone: '+569',
      address: 'Calle',
      region: 'RM',
      commune: 'Stgo',
      pet: null,
      ...overrides,
    }
  }


  function lastCallUrl() {
    return window.fetch.calls.mostRecent().args[0]
  }


  function lastCallBody() {
    return JSON.parse(window.fetch.calls.mostRecent().args[1].body)
  }


  it('login maps backend user to frontend format', async () => {
    const user = await authApi.login({ email: 'a@b.cl', password: '12345678' })


    expect(lastCallUrl()).toMatch(/\/auth\/login$/)
    expect(lastCallBody()).toEqual({ email: 'a@b.cl', password: '12345678' })
    expect(user.token).toBe('t1')
    expect(user.role).toBe('client')
    expect(user.firstName).toBe('Juan')
  })


  it('maps uppercase backend roles to frontend convention', async () => {
    window.fetch.and.returnValue(
      Promise.resolve({
        ok: true,
        status: 200,
        headers: new Map(),
        json: () =>
          Promise.resolve({
            token: 't2',
            usuario: {
              id: 2,
              run: '2-7',
              email: 'b@b.cl',
              nombre: 'Ana',
              apellido: 'Gómez',
              rol: 'VENDEDOR',
              activo: true,
            },
          }),
      })
    )


    const user = await authApi.login({ email: 'b@b.cl', password: '12345678' })


    expect(user.role).toBe('vendedor')
  })


  it('register maps frontend fields to backend format', async () => {
    await authApi.register(buildUserData())


    const body = lastCallBody()
    expect(body.nombre).toBe('Juan')
    expect(body.apellido).toBe('Pérez')
    expect(body.run).toBe('1-9')
    expect(body.mascota).toBeNull()
  })


  it('register calls the API only once because the backend returns the JWT', async () => {
    const user = await authApi.register(buildUserData())


    expect(window.fetch.calls.count()).toBe(1)
    expect(lastCallUrl()).toMatch(/\/auth\/register$/)
    expect(user.token).toBe('t1')
    expect(user.role).toBe('client')
  })


  it('register sends mascota when pet data is provided', async () => {
    await authApi.register(
      buildUserData({
        pet: { name: 'Firulais', species: 'Perro', breed: 'Mestizo' },
      })
    )


    expect(lastCallBody().mascota).toEqual({
      nombre: 'Firulais',
      especie: 'Perro',
      raza: 'Mestizo',
    })
  })


  it('register sends mascota with raza null when breed is empty', async () => {
    await authApi.register(
      buildUserData({ pet: { name: 'Michi', species: 'Gato', breed: '' } })
    )


    const mascota = lastCallBody().mascota
    expect(mascota.nombre).toBe('Michi')
    expect(mascota.raza).toBeNull()
  })
})
