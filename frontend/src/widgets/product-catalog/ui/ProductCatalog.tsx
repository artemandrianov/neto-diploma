import { useProductCatalog } from '../model'
import { CategoryTabs } from '../../../entities/category'
import { ProductGrid } from '../../../entities/product'
import { Loader } from '../../../shared/ui/loader'
import { ErrorMessage } from '../../../shared/ui/error-message'

interface Props {
  showSearch?: boolean
  initialQuery?: string
}

export function ProductCatalog({
  showSearch = false,
  initialQuery = '',
}: Props) {
  const {
    categories,
    catStatus,
    selectedCategory,
    setSelectedCategory,
    inputValue,
    setInputValue,
    submitSearch,
    items,
    itemsStatus,
    itemsError,
    hasMore,
    moreLoading,
    loadMore,
    retryItems,
  } = useProductCatalog(initialQuery)

  return (
    <section className="catalog">
      <h2 className="text-center">Каталог</h2>

      {showSearch && (
        <form
          className="catalog-search-form form-inline"
          onSubmit={submitSearch}
        >
          <input
            className="form-control"
            placeholder="Поиск"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
          />
        </form>
      )}

      {catStatus === 'loading' && <Loader size="sm" />}
      {catStatus === 'error' && (
        <ErrorMessage message="Не удалось загрузить категории" />
      )}
      {catStatus === 'idle' && (
        <CategoryTabs
          categories={categories}
          selected={selectedCategory}
          onSelect={setSelectedCategory}
        />
      )}

      {itemsStatus === 'loading' && <Loader />}
      {itemsStatus === 'error' && (
        <ErrorMessage message={itemsError} onRetry={retryItems} />
      )}
      {itemsStatus === 'idle' && <ProductGrid products={items} />}

      {itemsStatus === 'idle' && hasMore && (
        <div className="text-center mt-3">
          {moreLoading && <Loader size="sm" />}
          <button
            className="btn btn-outline-primary"
            onClick={loadMore}
            disabled={moreLoading}
            type="button"
          >
            Загрузить ещё
          </button>
        </div>
      )}
    </section>
  )
}
