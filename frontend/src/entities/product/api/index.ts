import { apiClient } from '../../../shared/api'
import type { ProductPreview, Product } from '../../../shared/types'
import { PAGE_SIZE } from '../../../shared/config'

export interface GetItemsParams {
  categoryId?: number
  offset?: number
  q?: string
}

export const productApi = {
  getTopSales: () => apiClient.get<ProductPreview[]>('/api/top-sales'),

  getItems: (params: GetItemsParams = {}) => {
    const qs = new URLSearchParams()
    if (params.categoryId) qs.set('categoryId', String(params.categoryId))
    if (params.offset) qs.set('offset', String(params.offset))
    if (params.q) qs.set('q', params.q)
    const s = qs.toString()
    return apiClient.get<ProductPreview[]>(`/api/items${s ? `?${s}` : ''}`)
  },

  getOne: (id: number) => apiClient.get<Product>(`/api/items/${id}`),

  isLastPage: (count: number) => count < PAGE_SIZE,
}
