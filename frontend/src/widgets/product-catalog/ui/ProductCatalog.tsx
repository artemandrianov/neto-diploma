import { useProductCatalog } from '../model'
import { CategoryTabs } from '../../../entities/category'
import { ProductGrid } from '../../../entities/product'
import { Loader } from '../../../shared/ui/loader'
import { ErrorMessage } from '../../../shared/ui/error-message'
import { Input } from '../../../shared/ui/input'
import { Button } from '../../../shared/ui/button'
import styles from './ProductCatalog.module.css'

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
    <section className={styles.section}>
      <h2 className={styles.title}>Каталог</h2>

      {showSearch && (
        <form className={styles.searchForm} onSubmit={submitSearch}>
          <Input
            className={styles.searchInput}
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
        <div className={styles.loadMore}>
          {moreLoading && <Loader size="sm" />}
          <Button
            variant="outline-primary"
            onClick={loadMore}
            disabled={moreLoading}
            type="button"
          >
            Загрузить ещё
          </Button>
        </div>
      )}
    </section>
  )
}
