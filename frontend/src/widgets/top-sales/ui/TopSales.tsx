import { useTopSales } from '../model'
import { ProductGrid } from '../../../entities/product'
import { Loader } from '../../../shared/ui/loader'
import { ErrorMessage } from '../../../shared/ui/error-message'

export function TopSales() {
  const { state, retry } = useTopSales()

  if (state.status === 'idle' || state.status === 'loading') {
    return (
      <section className="top-sales">
        <h2 className="text-center">Хиты продаж!</h2>
        <Loader />
      </section>
    )
  }

  if (state.status === 'error') {
    return (
      <section className="top-sales">
        <h2 className="text-center">Хиты продаж!</h2>
        <ErrorMessage
          message={state.error ?? 'Ошибка загрузки'}
          onRetry={retry}
        />
      </section>
    )
  }

  if (!state.data || state.data.length === 0) return null

  return (
    <section className="top-sales">
      <h2 className="text-center">Хиты продаж!</h2>
      <ProductGrid products={state.data} />
    </section>
  )
}
