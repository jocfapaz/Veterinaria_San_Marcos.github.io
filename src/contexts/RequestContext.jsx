/* eslint-disable react-refresh/only-export-components */
import { createContext, useContext, useEffect, useState } from 'react'

const RequestContext = createContext(null)
const STORAGE_KEY = 'vsm_requests'

export function RequestProvider({ children }) {
  const [requests, setRequests] = useState(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY)
      return saved ? JSON.parse(saved) : []
    } catch {
      return []
    }
  })

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(requests))
  }, [requests])

  function addRequest({ userId, serviceId, petName, species, requestedDate }) {
    const request = {
      id: `REQ-${Date.now()}`,
      userId,
      serviceId,
      petName,
      species,
      requestedDate,
      status: 'pending',
      createdAt: new Date().toISOString(),
    }
    setRequests((prev) => [...prev, request])
    return request
  }

  function cancelRequest(id) {
    setRequests((prev) =>
      prev.map((r) => (r.id === id ? { ...r, status: 'cancelled' } : r)),
    )
  }

  function updateRequest(id, updates) {
    setRequests((prev) =>
      prev.map((r) => (r.id === id ? { ...r, ...updates } : r)),
    )
  }

  function clearRequests() {
    setRequests([])
  }

  const value = {
    requests,
    requestCount: requests.filter((r) => r.status !== 'cancelled').length,
    addRequest,
    cancelRequest,
    updateRequest,
    clearRequests,
    isReady: true,
  }

  return <RequestContext.Provider value={value}>{children}</RequestContext.Provider>
}

export function useRequests() {
  const ctx = useContext(RequestContext)
  if (!ctx) throw new Error('useRequests debe usarse dentro de RequestProvider')
  return ctx
}
