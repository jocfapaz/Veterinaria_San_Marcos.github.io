import * as authApi from './authApi.js'
import * as api from './api.js'

//Este prueba que la conversión de datos entre front y backend sea correcta

describe('authApi', () => {
  beforeEach(() => {
    spyOn(api, 'post').and.returnValue(Promise.resolve({}))
    spyOn(api, 'get').and.returnValue(Promise.resolve({}))
  })


  it('login maps backend user to frontend format', async () => {
    api.post.and.returnValue(
      Promise.resolve({
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
      })
    )


    const user = await authApi.login({ email: 'a@b.cl', password: '1234' })


    expect(user.token).toBe('t1')
    expect(user.role).toBe('client')
    expect(user.firstName).toBe('Juan')
  })


  it('register maps frontend fields to backend format', async () => {
    await authApi.register({
      run: '1-9',
      email: 'a@b.cl',
      password: '1234',
      firstName: 'Juan',
      lastName: 'Pérez',
      birthDate: '1990-01-01',
      phone: '+569',
      address: 'Calle',
      region: 'RM',
      commune: 'Stgo',
    })


    const body = api.post.calls.mostRecent().args[1]
    expect(body.nombre).toBe('Juan')
    expect(body.apellido).toBe('Pérez')
    expect(body.run).toBe('1-9')
  })
})