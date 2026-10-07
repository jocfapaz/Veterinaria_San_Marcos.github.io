/* eslint-disable react-refresh/only-export-components */
import { createContext, useContext, useEffect, useState } from 'react'
import { login as mockLogin } from '../mockDB.js'

const AuthContext = createContext(null)
const STORAGE_KEY = 'vsm_user'

export function AuthProvider({ children }) {
  const [currentUser, setCurrentUser] = useState(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY)
      return saved ? JSON.parse(saved) : null
    } catch {
      return null
    }
  })

  useEffect(() => {
    if (currentUser) localStorage.setItem(STORAGE_KEY, JSON.stringify(currentUser))
    else localStorage.removeItem(STORAGE_KEY)
  }, [currentUser])

  function login(email, password) {
    const user = mockLogin(email, password)
    if (user) {
      setCurrentUser(user)
      return user
    }
    return null
  }

  function logout() {
    setCurrentUser(null)
  }

  const role = currentUser?.role

  const value = {
    currentUser,
    role,
    isAdmin: role === 'admin',
    isVendedor: role === 'vendedor',
    isVeterinario: role === 'veterinario',
    isStaff: role === 'admin' || role === 'vendedor' || role === 'veterinario',
    canManageServices: role === 'admin' || role === 'vendedor' || role === 'veterinario',
    canManageProducts: role === 'admin' || role === 'vendedor',
    canManageUsers: role === 'admin',
    canManageOrders: role === 'admin' || role === 'vendedor',
    login,
    logout,
    isReady: true,
  }

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}

export function useAuth() {
  const ctx = useContext(AuthContext)
  if (!ctx) throw new Error('useAuth debe usarse dentro de AuthProvider')
  return ctx
}
