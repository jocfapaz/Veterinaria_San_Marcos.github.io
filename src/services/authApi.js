import { post, get } from './api.js'


function mapUser(backendUser, token) {
  return {
    id: backendUser.id,
    run: backendUser.run,
    email: backendUser.email,
    firstName: backendUser.nombre,
    lastName: backendUser.apellido,
    role: (backendUser.rol || 'CLIENTE').toLowerCase(),
    active: backendUser.activo ?? true,
    token,
  }
}


export async function login({ email, password }) {
  const data = await post('/auth/login', { email, password })
  return mapUser(data.usuario, data.token)
}


export async function register(userData) {
  const body = {
    run: userData.run,
    email: userData.email,
    password: userData.password,
    nombre: userData.firstName,
    apellido: userData.lastName,
    fechaNacimiento: userData.birthDate || null,
    telefono: userData.phone || null,
    direccion: userData.address,
    region: userData.region,
    comuna: userData.commune,
  }
  await post('/auth/register', body)
  // Después de registrar, iniciamos sesión automáticamente
  return login({ email: userData.email, password: userData.password })
}


export async function me() {
  const data = await get('/auth/me')
  // /auth/me no devuelve token, lo recuperamos del storage más adelante
  return mapUser(data, null)
}