export default function Button({
  children,
  onClick,
  type = 'button',
  variant = 'primary',
  className = '',
}) {
  const baseStyles =
    'inline-flex items-center justify-center font-semibold rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2'

  const variants = {
    primary: 'bg-emerald-600 hover:bg-emerald-700 text-white px-4 py-2',
    secondary:
      'bg-emerald-50 text-emerald-700 border border-emerald-200 hover:bg-emerald-100 px-3 py-2',
  }

  return (
    <button
      type={type}
      onClick={onClick}
      className={`${baseStyles} ${variants[variant]} ${className}`}
    >
      {children}
    </button>
  )
}