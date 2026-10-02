import { Outlet } from 'react-router'
import Header from './Header'
import Footer from './Footer'

export default function Layout({ cartCount = 0, requestCount = 0 }) {
  return (
    <div className="flex flex-col min-h-screen bg-gray-50 text-gray-800 font-sans">
      <Header cartCount={cartCount} requestCount={requestCount} />

      <main className="flex-grow max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 w-full">
        <Outlet />
      </main>

      <Footer />
    </div>
  )
}