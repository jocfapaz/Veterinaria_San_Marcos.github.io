export default function LoadingScreen({ message = 'Restaurando sesión...' }) {
  return (
    <div
      className="flex items-center justify-center py-16 px-4"
      role="status"
      aria-live="polite"
    >
      <div className="flex flex-col items-center gap-3 text-slate-500">
        <span
          className="w-8 h-8 border-2 border-emerald-200 border-t-emerald-600 rounded-full animate-spin"
          aria-hidden="true"
        />
        <span className="text-sm font-medium">{message}</span>
      </div>
    </div>
  )
}
