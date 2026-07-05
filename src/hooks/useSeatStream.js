import { useState, useEffect, useRef, useCallback } from 'react'
import { fetchSeatData } from '../services/seatApi'

const POLL_INTERVAL = 30000

export default function useSeatStream() {
  const [data, setData] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const intervalRef = useRef(null)

  const load = useCallback(async () => {
    try {
      setError(null)
      const result = await fetchSeatData()
      setData(result)
    } catch (err) {
      setError(err.message || 'Failed to fetch seat data')
    } finally {
      setLoading(false)
    }
  }, [])

  useEffect(() => {
    load()
    intervalRef.current = setInterval(load, POLL_INTERVAL)
    return () => clearInterval(intervalRef.current)
  }, [load])

  const refresh = useCallback(() => {
    setLoading(true)
    load()
  }, [load])

  return { data, loading, error, refresh }
}
