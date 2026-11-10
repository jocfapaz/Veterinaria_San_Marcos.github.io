const BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:8080/api/v1'
const STORAGE_KEY = 'vsm_user'


function getStoredToken() {
  const stored = localStorage.getItem(STORAGE_KEY)
  if (!stored) return null
  try {
    const parsed = JSON.parse(stored)
    return parsed?.token || null
  } catch {
    return null
  }
}


export async function apiClient(endpoint, options = {}) {
  const url = ${BASE_URL}${endpoint}
  const token = getStoredToken()


  const headers = {
    'Content-Type': 'application/json',
    ...options.headers,
  }


  if (token) {
    headers['Authorization'] = Bearer ${token}
  }


  const config = {
    ...options,
    headers,
  }


  try {
    const response = await fetch(url, config)


    if (response.status === 401) {
      localStorage.removeItem(STORAGE_KEY)
      if (window.location.pathname !== '/login') {
        window.location.href = '/login'
      }
      throw new Error('Sesión expirada o no autorizada. Por favor, inicia sesión nuevamente.')
    }


    if (!response.ok) {
      let message = Error ${response.status}: ${response.statusText}
      try {
        const data = await response.json()
        message =
          data.detail ||
          data.message ||
          data.error ||
          (data.errors && data.errors.map((e) => e.message).join('. ')) ||
          message
      } catch {
        // respuesta no es JSON
      }
      throw new Error(message)
    }


    if (response.status === 204 || response.headers.get('content-length') === '0') {
      return null
    }


    return await response.json()
  } catch (error) {
    if (error.name === 'TypeError') {
      throw new Error('No se pudo conectar con el servidor. Verifica que el backend esté activo.')
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