export interface Category {
  id: number
  title: string
}

export interface ProductSize {
  size: string
  available: boolean
}

export interface ProductPreview {
  id: number
  category: number
  title: string
  price: number
  images: string[]
}

export interface Product extends ProductPreview {
  sku: string
  manufacturer: string
  color: string
  material: string
  season: string
  reason: string
  sizes: ProductSize[]
}

export interface CartItem {
  id: number
  title: string
  size: string
  price: number
  count: number
  image?: string
}

export interface OrderPayload {
  owner: { phone: string; address: string }
  items: { id: number; price: number; count: number }[]
}
