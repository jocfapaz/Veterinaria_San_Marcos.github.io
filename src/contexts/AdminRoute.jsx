import { Navigate, useLocation } from 'react-router'
import { useAuth } from './AuthContext.jsx'

export default function AdminRoute({ children, allowedRoles = ['admin'] }) {
  const { currentUser, isReady } = useAuth()
  const location = useLocation()

  if (!isReady) return null

  if (!currentUser || !allowedRoles.includes(currentUser.role)) {
    return <Navigate to="/" state={{ from: location }} replace />
  }

  return children
}
