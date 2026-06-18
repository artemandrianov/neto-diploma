import type { ProductPreview } from '../../../shared/types'
import { ProductCard } from './ProductCard'
import utils from '../../../shared/styles/utilities.module.css'

interface Props {
  products: ProductPreview[]
}

export function ProductGrid({ products }: Props) {
  if (products.length === 0) {
    return (
      <p className={`${utils.textCenter} ${utils.textMuted} ${utils.py4}`}>
        Товары не найдены
      </p>
    )
  }
  return (
    <div className={utils.row}>
      {products.map((product) => (
        <div key={product.id} className={utils.col4}>
          <ProductCard product={product} />
        </div>
      ))}
    </div>
  )
}
