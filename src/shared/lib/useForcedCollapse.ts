import { useEffect, useRef, useState } from 'react'

export function useForcedCollapse(
  query: string,
  onForced?: () => void
): boolean {
  const onForcedRef = useRef(onForced)
  onForcedRef.current = onForced

  const [forced, setForced] = useState(() => {
    if (typeof window === 'undefined') return false
    return window.matchMedia(query).matches
  })

  useEffect(() => {
    const mql = window.matchMedia(query)
    const apply = () => {
      const next = mql.matches
      setForced(next)
      if (next) onForcedRef.current?.()
    }

    mql.addEventListener('change', apply)
    return () => mql.removeEventListener('change', apply)
  }, [query])

  return forced
}
