import {
  clearSession,
  notifySessionExpired,
  readSession,
} from './session.js'

const BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:8080/api/v1'
const AUTH_ENDPOINTS = ['/auth/login', '/auth/register']


function isAuthEndpoint(endpoint) {
  return AUTH_ENDPOINTS.some((path) => endpoint.startsWith(path))
}


function extractErrorMessage(data, fallback) {
  if (!data) return fallback
  if (data.detail) return data.detail
  if (data.message) return data.message
  if (data.error) return data.error

  if (Array.isArray(data.errors)) {
    const messages = data.errors.map((error) => error?.message).filter(Boolean)
    if (messages.length > 0) return messages.join('. ')
  }

  return fallback
}


async function readErrorMessage(response, fallback) {
  try {
    return extractErrorMessage(await response.json(), fallback)
  } catch {
    return fallback
  }
}


export async function apiClient(endpoint, options = {}) {
  const url = `${BASE_URL}${endpoint}`
  const session = readSession()
  const token = session?.token || null
  const isAuthRequest = isAuthEndpoint(endpoint)

  const headers = {
    'Content-Type': 'application/json',
    ...options.headers,
  }

  if (token && !isAuthRequest) {
    headers['Authorization'] = `Bearer ${token}`
  }

  const config = {
    ...options,
    headers,
  }

  try {
    const response = await fetch(url, config)

    if (response.status === 401) {
      const fallback =
        'Sesión expirada o no autorizada. Por favor, inicia sesión nuevamente.'
      const message = await readErrorMessage(response, fallback)

      if (token && !isAuthRequest) {
        clearSession()
        notifySessionExpired()
      }

      throw new Error(message)
    }

    if (!response.ok) {
      const fallback = `Error ${response.status}: ${response.statusText}`
      const message = await readErrorMessage(response, fallback)
      throw new Error(message)
    }

    if (response.status === 204 || response.headers.get('content-length') === '0') {
      return null
    }

    return await response.json()
  } catch (error) {
    if (error.name === 'TypeError') {
      throw new Error('No se pudo conectar con el servidor. Verifica que el backend esté activo.', { cause: error })
    }
    throw error
  }
}


export const get = (endpoint, options = {}) => apiClient(endpoint, { ...options, method: 'GET' })
export const post = (endpoint, body, options = {}) =>
  apiClient(endpoint, { ...options, method: 'POST', body: JSON.stringify(body) })
export const put = (endpoint, body, options = {}) =>
  apiClient(endpoint, { ...options, method: 'PUT', body: JSON.stringify(body) })
export const patch = (endpoint, body, options = {}) =>
  apiClient(endpoint, { ...options, method: 'PATCH', body: JSON.stringify(body) })
export const del = (endpoint, options = {}) => apiClient(endpoint, { ...options, method: 'DELETE' })
