import { Navigate, useLocation } from 'react-router'
import LoadingScreen from '../components/LoadingScreen.jsx'
import { useAuth } from './AuthContext.jsx'


const ADMIN_ONLY = ['admin']


export default function AdminRoute({ children, allowedRoles = ADMIN_ONLY }) {
  const { currentUser, isReady } = useAuth()
  const location = useLocation()


  if (!isReady) return <LoadingScreen />


  if (!currentUser) {
    return <Navigate to="/login" state={{ from: location }} replace />
  }


  if (!allowedRoles.includes(currentUser.role)) {
    return <Navigate to="/" replace />
  }


  return children
}
