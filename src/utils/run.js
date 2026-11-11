// ─── VALIDACIÓN DE RUN CHILENO ────────────────────────────────────────────────
// Utilidad pura, sin dependencias de datos. Fuente única de verdad para el RUN:
// coincide con la validación del backend (RunChilenoValidator).

export function validateRun(run) {
  if (!run) return false
  const clean = run.replace(/\./g, '').replace('-', '').toUpperCase()
  if (!/^\d{7,8}[0-9K]$/.test(clean)) return false

  const body = clean.slice(0, -1)
  const dv = clean.slice(-1)
  let sum = 0
  let multiplier = 2

  for (let i = body.length - 1; i >= 0; i--) {
    sum += Number(body[i]) * multiplier
    multiplier = multiplier === 7 ? 2 : multiplier + 1
  }

  const expectedDv = 11 - (sum % 11)
  let dvChar
  if (expectedDv === 11) dvChar = '0'
  else if (expectedDv === 10) dvChar = 'K'
  else dvChar = String(expectedDv)

  return dv === dvChar
}

export function formatRun(run) {
  if (!run) return ''
  const clean = run.replace(/\./g, '').replace('-', '').toUpperCase()
  if (!/^\d{7,8}[0-9K]$/.test(clean)) return run
  const body = clean.slice(0, -1)
  const dv = clean.slice(-1)
  return `${Number(body).toLocaleString('es-CL').replace(/,/g, '.')}-${dv}`
}
