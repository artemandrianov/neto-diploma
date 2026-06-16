import { useState } from 'react'
import { apiClient } from '../../../shared/api'
import type { CartItem, OrderPayload } from '../../../shared/types'

type Status = 'idle' | 'loading' | 'success' | 'error'

export function usePlaceOrder(items: CartItem[], onSuccess: () => void) {
  const [phone, setPhone] = useState('')
  const [address, setAddress] = useState('')
  const [agreed, setAgreed] = useState(false)
  const [status, setStatus] = useState<Status>('idle')
  const [error, setError] = useState('')

  const submit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!phone || !address || !agreed) return

    const payload: OrderPayload = {
      owner: { phone, address },
      items: items.map((i) => ({ id: i.id, price: i.price, count: i.count })),
    }

    setStatus('loading')
    setError('')

    try {
      await apiClient.post<void>('/api/order', payload)
      setStatus('success')
      onSuccess()
    } catch {
      setStatus('error')
      setError('Не удалось оформить заказ. Попробуйте ещё раз.')
    }
  }

  return {
    phone,
    setPhone,
    address,
    setAddress,
    agreed,
    setAgreed,
    status,
    error,
    submit,
  }
}
