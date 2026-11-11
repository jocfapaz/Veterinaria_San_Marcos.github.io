

/* eslint-disable react-refresh/only-export-components */
import { createContext, useContext, useEffect, useState, useCallback } from 'react'
import * as authApi from '../services/authApi.js'


const AuthContext = createContext(null)
const STORAGE_KEY = 'vsm_user'


function hasRole(role, ...roles) {
  return roles.includes(role)
}


export function isStaffRole(role) {
  return hasRole(role, 'admin', 'vendedor', 'veterinario')
}


export function AuthProvider({ children }) {
  const [currentUser, setCurrentUser] = useState(null)
  const [isReady, setIsReady] = useState(false)


  const saveUser = useCallback((user) => {
    if (user) {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(user))
      setCurrentUser(user)
    } else {
      localStorage.removeItem(STORAGE_KEY)
      setCurrentUser(null)
    }
  }, [])


  useEffect(() => {
    let cancelled = false


    async function restoreSession() {
      const stored = localStorage.getItem(STORAGE_KEY)
      if (!stored) {
        setIsReady(true)
        return
      }


      try {
        const parsed = JSON.parse(stored)
        if (!parsed?.token) {
          localStorage.removeItem(STORAGE_KEY)
          setIsReady(true)
          return
        }


        const user = await authApi.me()
        if (!cancelled) {
          saveUser({ ...user, token: parsed.token })
        }
      } catch {
        if (!cancelled) {
          localStorage.removeItem(STORAGE_KEY)
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