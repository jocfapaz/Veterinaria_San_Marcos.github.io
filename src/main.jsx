import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { HashRouter } from 'react-router'
import './index.css'
import App from './App.jsx'
import { AuthProvider } from './contexts/AuthContext.jsx'
import { CartProvider } from './contexts/CartContext.jsx'
import { RequestProvider } from './contexts/RequestContext.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <HashRouter>
      <AuthProvider>
        <CartProvider>
          <RequestProvider>
            <App />
          </RequestProvider>
        </CartProvider>
      </AuthProvider>
    </HashRouter>
  </StrictMode>,
)
