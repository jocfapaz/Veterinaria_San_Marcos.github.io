import { Navigate, useLocation } from 'react-router'
import LoadingScreen from '../components/LoadingScreen.jsx'
import { useAuth } from './AuthContext.jsx'

export default function ProtectedRoute({ children }) {
  const { currentUser, isReady } = useAuth()
  const location = useLocation()

  if (!isReady) return <LoadingScreen />

  if (!currentUser) {
    return <Navigate to="/login" state={{ from: location }} replace />
  }

  return children
}
