export default function FormInput({ label, error, ...props }) {
  return (
    <div className="flex flex-col gap-1.5">
      {label && (
        <label
          htmlFor={props.id}
          className="text-sm font-semibold text-slate-700"
        >
          {label}
        </label>
      )}
      <input
        {...props}
        className={`w-full px-3 py-2.5 bg-slate-50 border rounded-lg text-sm text-slate-800 focus:outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 transition-all ${
          error ? 'border-rose-500' : 'border-slate-200'
        } ${props.className || ''}`}
      />
      {error && <span className="text-xs text-rose-500">{error}</span>}
    </div>
  )
}
