export default function PageHeader({ title, subtitle }) {
  return (
    <div className="border-b border-slate-200 pb-4">
      <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900">
        {title}
      </h1>
      {subtitle && (
        <p className="text-slate-500 text-sm mt-1">{subtitle}</p>
      )}
    </div>
  )
}
