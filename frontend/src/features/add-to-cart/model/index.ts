import { useState } from 'react'
import type { Product } from '../../../shared/types'

export function useAddToCart(product: Product) {
  const availableSizes = product.sizes.filter((s) => s.available)
  const defaultSize = availableSizes.length > 0 ? availableSizes[0].size : ''
  const [selectedSize, setSelectedSize] = useState<string>(defaultSize)
  const [count, setCount] = useState(1)

  const canAddToCart = availableSizes.length > 0 && selectedSize !== ''

  const increment = () => setCount((c) => Math.min(10, c + 1))
  const decrement = () => setCount((c) => Math.max(1, c - 1))

  return {
    availableSizes,
    selectedSize,
    setSelectedSize,
    count,
    increment,
    decrement,
    canAddToCart,
  }
}
