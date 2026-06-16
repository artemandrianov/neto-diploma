import { useAsync } from '../../../shared/lib/hooks'
import { productApi } from '../../../entities/product'

export function useTopSales() {
  return useAsync(() => productApi.getTopSales(), [])
}
