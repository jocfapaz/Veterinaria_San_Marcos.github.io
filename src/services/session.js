export const STORAGE_KEY = 'vsm_user'
export const SESSION_EXPIRED_EVENT = 'vsm:session-expired'

export function readSession() {
  try {
    const stored = localStorage.getItem(STORAGE_KEY)
    return stored ? JSON.parse(stored) : null
  } catch {
    return null
  }
}

export function saveSession(session) {
  if (!session) {
    clearSession()
    return
  }

  localStorage.setItem(STORAGE_KEY, JSON.stringify(session))
}

export function clearSession() {
  localStorage.removeItem(STORAGE_KEY)
}

export function notifySessionExpired() {
  window.dispatchEvent(new CustomEvent(SESSION_EXPIRED_EVENT))
}
