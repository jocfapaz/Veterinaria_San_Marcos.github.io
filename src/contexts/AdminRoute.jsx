import { Navigate, useLocation } from 'react-router'
import { useAuth } from './AuthContext.jsx'

export default function AdminRoute({ children }) {
  const { currentUser, isReady } = useAuth()
  const location = useLocation()

  if (!isReady) return null

  if (!currentUser || currentUser.role !== 'admin') {
    return <Navigate to="/" state={{ from: location }} replace />
  }

  return children
}
