import { Outlet } from 'react-router'
import AdminSidebar from './AdminSidebar'

export default function AdminLayout() {
  return (
    <div className="min-h-screen flex flex-col md:flex-row bg-slate-50">
      <AdminSidebar />
      <main className="flex-1 p-4 sm:p-6 lg:p-8 overflow-x-auto">
        <Outlet />
      </main>
    </div>
  )
}
