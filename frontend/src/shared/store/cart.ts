import { createSlice, type PayloadAction } from '@reduxjs/toolkit'
import type { CartItem } from '../types'

const STORAGE_KEY = 'bosa-noga-cart'

const loadCart = (): CartItem[] => {
  try {
    const raw = localStorage.getItem(STORAGE_KEY)
    return raw ? (JSON.parse(raw) as CartItem[]) : []
  } catch {
    return []
  }
}

const persist = (items: CartItem[]) => {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(items))
}

interface CartState {
  items: CartItem[]
}

const cartSlice = createSlice({
  name: 'cart',
  initialState: (): CartState => ({ items: loadCart() }),
  reducers: {
    addToCart(state, action: PayloadAction<CartItem>) {
      const { id, size } = action.payload
      const existing = state.items.find((i) => i.id === id && i.size === size)
      if (existing) {
        existing.count = Math.min(10, existing.count + action.payload.count)
      } else {
        state.items.push(action.payload)
      }
      persist(state.items)
    },
    removeFromCart(state, action: PayloadAction<{ id: number; size: string }>) {
      state.items = state.items.filter(
        (i) => !(i.id === action.payload.id && i.size === action.payload.size),
      )
      persist(state.items)
    },
    updateCount(
      state,
      action: PayloadAction<{ id: number; size: string; count: number }>,
    ) {
      const item = state.items.find(
        (i) => i.id === action.payload.id && i.size === action.payload.size,
      )
      if (item) {
        item.count = Math.max(1, Math.min(10, action.payload.count))
        persist(state.items)
      }
    },
    clearCart(state) {
      state.items = []
      localStorage.removeItem(STORAGE_KEY)
    },
  },
})

export const { addToCart, removeFromCart, updateCount, clearCart } =
  cartSlice.actions
export default cartSlice.reducer
