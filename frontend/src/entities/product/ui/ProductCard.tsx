import { Link } from 'react-router-dom'
import type { ProductPreview } from '../../../shared/types'
import { formatPrice } from '../../../shared/lib/utils'
import { getProductRoute } from '../../../shared/config'
import { Card, CardBody, CardImg, CardText } from '../../../shared/ui/card'
import buttonStyles from '../../../shared/ui/button/Button.module.css'
import styles from './ProductCard.module.css'

interface Props {
  product: ProductPreview
}

export function ProductCard({ product }: Props) {
  return (
    <Card className={styles.card}>
      <CardImg src={product.images[0]} alt={product.title} />
      <CardBody>
        <CardText>{product.title}</CardText>
        <CardText>{formatPrice(product.price)}</CardText>
        <Link
          to={getProductRoute(product.id)}
          className={`${buttonStyles.btn} ${buttonStyles.outlinePrimary}`}
        >
          Заказать
        </Link>
      </CardBody>
    </Card>
  )
}
