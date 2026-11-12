/* eslint-disable react-refresh/only-export-components */
import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useRef,
  useState,
} from 'react'
import { useLocation, useNavigate } from 'react-router'
import * as authApi from '../services/authApi.js'
import {
  clearSession,
  readSession,
  saveSession,
  SESSION_EXPIRED_EVENT,
  STORAGE_KEY,
} from '../services/session.js'


const AuthContext = createContext(null)


function hasRole(role, ...roles) {
  return roles.includes(role)
}


export function isStaffRole(role) {
  return hasRole(role, 'admin', 'vendedor', 'veterinario')
}


export function AuthProvider({ children }) {
  const [currentUser, setCurrentUser] = useState(null)
  const [isReady, setIsReady] = useState(false)
  const navigate = useNavigate()
  const location = useLocation()
  const locationRef = useRef(location)


  useEffect(() => {
    locationRef.current = location
  }, [location])


  const saveUser = useCallback((user) => {
    saveSession(user)
    setCurrentUser(user)
  }, [])


  useEffect(() => {
    let cancelled = false


    async function restoreSession() {
      const stored = readSession()
      if (!stored?.token) {
        clearSession()
        setIsReady(true)
        return
      }


      try {
        const user = await authApi.me()
        if (!cancelled) {
          saveUser({ ...user, token: stored.token })
        }
      } catch {
        if (!cancelled) {
          clearSession()
          setCurrentUser(null)
        }
      } finally {
        if (!cancelled) setIsReady(true)
      }
    }


    restoreSession()
    return () => {
      cancelled = true
    }
  }, [saveUser])


  useEffect(() => {
    function handleSessionExpired() {
      clearSession()
      setCurrentUser(null)

      if (locationRef.current.pathname !== '/login') {
        navigate('/login', {
          replace: true,
          state: { from: locationRef.current, reason: 'session-expired' },
        })
      }
    }


    window.addEventListener(SESSION_EXPIRED_EVENT, handleSessionExpired)
    return () =>
      window.removeEventListener(SESSION_EXPIRED_EVENT, handleSessionExpired)
  }, [navigate])


  useEffect(() => {
    function handleStorage(event) {
      if (event.key === STORAGE_KEY && !event.newValue) {
        setCurrentUser(null)
      }
    }


    window.addEventListener('storage', handleStorage)
    return () => window.removeEventListener('storage', handleStorage)
  }, [])


  async function login(email, password) {
    const user = await authApi.login({ email, password })
    saveUser(user)
    return user
  }


  async function register(userData) {
    const user = await authApi.register(userData)
    saveUser(user)
    return user
  }


  function logout() {
    saveUser(null)
  }


  const role = currentUser?.role


  const value = {
    currentUser,
    role,
    isAdmin: role === 'admin',
    isVendedor: role === 'vendedor',
    isVeterinario: role === 'veterinario',
    isClient: role === 'client',
    isStaff: isStaffRole(role),
    canManageServices: hasRole(role, 'admin', 'veterinario'),
    canManageProducts: hasRole(role, 'admin', 'vendedor'),
    canManageUsers: role === 'admin',
    canManageOrders: hasRole(role, 'admin', 'vendedor'),
    login,
    register,
    logout,
    isReady,
  }


  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}


export function useAuth() {
  const ctx = useContext(AuthContext)
  if (!ctx) throw new Error('useAuth debe usarse dentro de AuthProvider')
  return ctx
}
