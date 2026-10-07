const STORAGE_KEY = 'vsm_last_order'

export function saveLastOrder(order) {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(order))
  } catch {
    // localStorage no disponible: la pantalla de resultado mostrará un EmptyState
  }
}

export function readLastOrder() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY)
    return raw ? JSON.parse(raw) : null
  } catch {
    return null
  }
}
