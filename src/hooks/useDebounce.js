import { useEffect, useState } from 'react'

export const useDebounce = (value, ms) => {
  const [debounceValue, setDebounceValue] = useState(value)

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setDebounceValue(value)
    }, ms)
    return () => {
      clearTimeout(timeoutId)
    }
  }, [value])
  return debounceValue
}
