import type { Product } from '../../../shared/types'
import { useAddToCart } from '../model'
import { useAppDispatch } from '../../../shared/store'
import { addToCart } from '../../../shared/store/cart'
import { useNavigate } from 'react-router-dom'
import { ROUTES } from '../../../shared/config'
import { Button } from '../../../shared/ui/button'
import styles from './AddToCartForm.module.css'

interface Props {
  product: Product
}

export function AddToCartForm({ product }: Props) {
  const dispatch = useAppDispatch()
  const navigate = useNavigate()
  const {
    availableSizes,
    selectedSize,
    setSelectedSize,
    count,
    increment,
    decrement,
    canAddToCart,
  } = useAddToCart(product)

  if (availableSizes.length === 0) return null

  const handleSubmit = () => {
    if (!canAddToCart) return
    dispatch(
      addToCart({
        id: product.id,
        title: product.title,
        size: selectedSize,
        price: product.price,
        count,
        image: product.images[0],
      }),
    )
    navigate(ROUTES.CART)
  }

  return (
    <div className={styles.wrap}>
      <p>
        Размеры в наличии:{' '}
        {availableSizes.map((s) => (
          <span
            key={s.size}
            className={`${styles.size} ${selectedSize === s.size ? styles.sizeSelected : ''}`}
            onClick={() => setSelectedSize(s.size)}
            role="button"
          >
            {s.size}
          </span>
        ))}
      </p>
      <p>
        Количество:{' '}
        <span className={styles.counter}>
          <Button
            variant="secondary"
            size="sm"
            className={styles.counterBtn}
            onClick={decrement}
            type="button"
          >
            −
          </Button>
          <span className={styles.counterValue}>{count}</span>
          <Button
            variant="secondary"
            size="sm"
            className={styles.counterBtn}
            onClick={increment}
            type="button"
          >
            +
          </Button>
        </span>
      </p>
      <Button
        variant="danger"
        size="lg"
        fullWidth
        disabled={!canAddToCart}
        onClick={handleSubmit}
        type="button"
      >
        В корзину
      </Button>
    </div>
  )
}
