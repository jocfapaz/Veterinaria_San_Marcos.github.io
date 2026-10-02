import { Navigate, useLocation } from 'react-router'
import { useAuth } from './AuthContext.jsx'

export default function ProtectedRoute({ children }) {
  const { currentUser, isReady } = useAuth()
  const location = useLocation()

  if (!isReady) return null

  if (!currentUser) {
    return <Navigate to="/login" state={{ from: location }} replace />
  }

  return children
}
