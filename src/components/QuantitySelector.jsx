export default function QuantitySelector({
  value,
  onChange,
  min = 1,
  max = 99,
}) {
  function handleDecrement() {
    if (value > min) onChange(value - 1)
  }

  function handleIncrement() {
    if (value < max) onChange(value + 1)
  }

  function handleInputChange(e) {
    const newValue = parseInt(e.target.value, 10)
    if (Number.isNaN(newValue)) {
      onChange(min)
      return
    }
    if (newValue < min) {
      onChange(min)
      return
    }
    if (newValue > max) {
      onChange(max)
      return
    }
    onChange(newValue)
  }

  return (
    <div className="flex items-center border border-slate-200 rounded-lg overflow-hidden bg-white">
      <button
        type="button"
        onClick={handleDecrement}
        disabled={value <= min}
        className="px-3 py-2 text-slate-600 hover:bg-slate-50 disabled:text-slate-300 disabled:cursor-not-allowed"
        aria-label="Disminuir cantidad"
      >
        −
      </button>
      <input
        type="number"
        value={value}
        onChange={handleInputChange}
        min={min}
        max={max}
        className="w-12 text-center text-sm text-slate-800 border-x border-slate-200 py-2 focus:outline-none"
      />
      <button
        type="button"
        onClick={handleIncrement}
        disabled={value >= max}
        className="px-3 py-2 text-slate-600 hover:bg-slate-50 disabled:text-slate-300 disabled:cursor-not-allowed"
        aria-label="Aumentar cantidad"
      >
        +
      </button>
    </div>
  )
}
