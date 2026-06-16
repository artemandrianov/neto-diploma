import { Link } from 'react-router-dom'
import type { ProductPreview } from '../../../shared/types'
import { formatPrice } from '../../../shared/lib/utils'
import { getProductRoute } from '../../../shared/config'

interface Props {
  product: ProductPreview
}

export function ProductCard({ product }: Props) {
  return (
    <div className="card catalog-item-card">
      <img
        src={product.images[0]}
        className="card-img-top img-fluid"
        alt={product.title}
      />
      <div className="card-body">
        <p className="card-text">{product.title}</p>
        <p className="card-text">{formatPrice(product.price)}</p>
        <Link
          to={getProductRoute(product.id)}
          className="btn btn-outline-primary"
        >
          Заказать
        </Link>
      </div>
    </div>
  )
}
