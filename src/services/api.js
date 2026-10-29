// 1. Leer la URL base desde las variables de entorno
const BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:8080';
const STORAGE_KEY = 'vsm_user';

export const apiClient = async (endpoint, options = {}) => {
  // Obtener la sesión guardada en localStorage
  const storedUser = localStorage.getItem(STORAGE_KEY);
  let token = null;

  if (storedUser) {
    try {
      const parsedUser = JSON.parse(storedUser);
      token = parsedUser?.token || null;
    } catch (error) {
      console.error('Error al parsear el usuario almacenado:', error);
    }
  }

  // Configurar los encabezados por defecto
  const headers = {
    'Content-Type': 'application/json',
    ...options.headers,
  };

  // Asignar Header Authorization: Bearer <token>
  if (token) {
    headers['Authorization'] = `Bearer ${token}`;
  }

  const config = {
    ...options,
    headers,
  };

  try {
    const response = await fetch(`${BASE_URL}${endpoint}`, config);

    // MANEJO GLOBAL DE 401 (UNAUTHORIZED)
    if (response.status === 401) {
      localStorage.removeItem(STORAGE_KEY); // Limpia la sesión expirada
      // Redirige al login de forma limpia si la sesión expiró
      if (window.location.pathname !== '/login') {
        window.location.href = '/login';
      }
      throw new Error('Sesión expirada o no autorizada. Por favor, inicia sesión nuevamente.');
    }

    // PARSEO DE ERRORES DEL BACKEND (4xx, 5xx)
    if (!response.ok) {
      let errorMessage = `Error HTTP ${response.status}: ${response.statusText}`;
      
      try {
        const errorData = await response.json();
        // Extrae el mensaje de error estructurado devuelto por Spring Boot (ProblemDetail o DTO custom)
        errorMessage = errorData.message || errorData.detail || errorData.error || errorMessage;
      } catch {
        // Si el cuerpo de la respuesta no es JSON válido
      }

      throw new Error(errorMessage);
    }

    // Retorna el JSON si la respuesta fue exitosa (200 OK, 201 Created, etc.)
    return await response.json();

  } catch (error) {
    console.error(`[API Client Error]: ${error.message}`);
    throw error;
  }
};