import { useState, useEffect, useCallback, useRef } from 'react'

export type AsyncStatus = 'idle' | 'loading' | 'success' | 'error'

export interface AsyncState<T> {
  status: AsyncStatus
  data: T | null
  error: string | null
}

export function useAsync<T>(fn: () => Promise<T>, deps: unknown[]) {
  const [state, setState] = useState<AsyncState<T>>({
    status: 'idle',
    data: null,
    error: null,
  })

  const fnRef = useRef(fn)
  fnRef.current = fn

  const execute = useCallback(async () => {
    setState({ status: 'loading', data: null, error: null })
    try {
      const data = await fnRef.current()
      setState({ status: 'success', data, error: null })
    } catch (e) {
      setState({
        status: 'error',
        data: null,
        error: e instanceof Error ? e.message : 'Ошибка',
      })
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, deps)

  useEffect(() => {
    execute()
  }, [execute])

  return { state, retry: execute }
}
