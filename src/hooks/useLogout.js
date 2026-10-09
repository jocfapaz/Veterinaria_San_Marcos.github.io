import { useAuth } from '../contexts/AuthContext.jsx'
import { useCart } from '../contexts/CartContext.jsx'
import { useRequests } from '../contexts/RequestContext.jsx'

export function useLogout() {
  const { logout } = useAuth()
  const { clearCart } = useCart()
  const { clearRequests } = useRequests()

  return function handleLogout() {
    clearCart()
    clearRequests()
    logout()
  }
}
