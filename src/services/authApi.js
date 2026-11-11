import { post, get } from './api.js'

// Roles del backend (en mayúsculas) -> convención del frontend (minúsculas)
const ROLE_MAP = {
  ADMIN: 'admin',
  VENDEDOR: 'vendedor',
  VETERINARIO: 'veterinario',
  CLIENTE: 'client',
}

function mapUser(backendUser, token) {
  return {
    id: backendUser.id,
    run: backendUser.run,
    email: backendUser.email,
    firstName: backendUser.nombre,
    lastName: backendUser.apellido,
    role: ROLE_MAP[(backendUser.rol || 'CLIENTE').toUpperCase()] || 'client',
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
    mascota: userData.pet
      ? {
          nombre: userData.pet.name,
          especie: userData.pet.species,
          raza: userData.pet.breed || null,
        }
      : null,
  }
  // El backend devuelve AuthResponse con el JWT: una sola llamada basta
  const data = await post('/auth/register', body)
  return mapUser(data.usuario, data.token)
}


export async function me() {
  const data = await get('/auth/me')
  // /auth/me no devuelve token, lo recuperamos del storage más adelante
  return mapUser(data, null)
}
