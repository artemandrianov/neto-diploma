import type { ProductPreview } from '../../../shared/types'
import { ProductCard } from './ProductCard'

interface Props {
  products: ProductPreview[]
}

export function ProductGrid({ products }: Props) {
  if (products.length === 0) {
    return <p className="text-center text-muted py-4">Товары не найдены</p>
  }
  return (
    <div className="row">
      {products.map((product) => (
        <div key={product.id} className="col-4">
          <ProductCard product={product} />
        </div>
      ))}
    </div>
  )
}
