import { apiClient } from '../../../shared/api'
import type { Category } from '../../../shared/types'

export const categoryApi = {
  getAll: () => apiClient.get<Category[]>('/api/categories'),
}
