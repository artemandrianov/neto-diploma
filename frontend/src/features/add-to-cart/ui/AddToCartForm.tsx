import type { Product } from '../../../shared/types'
import { useAddToCart } from '../model'
import { useAppDispatch } from '../../../shared/store'
import { addToCart } from '../../../shared/store/cart'
import { useNavigate } from 'react-router-dom'
import { ROUTES } from '../../../shared/config'

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
    <div className="text-center">
      <p>
        Размеры в наличии:{' '}
        {availableSizes.map((s) => (
          <span
            key={s.size}
            className={`catalog-item-size${selectedSize === s.size ? ' selected' : ''}`}
            onClick={() => setSelectedSize(s.size)}
            role="button"
          >
            {s.size}
          </span>
        ))}
      </p>
      <p>
        Количество:{' '}
        <span className="btn-group btn-group-sm pl-2">
          <button
            className="btn btn-secondary"
            onClick={decrement}
            type="button"
          >
            −
          </button>
          <span className="btn btn-outline-primary">{count}</span>
          <button
            className="btn btn-secondary"
            onClick={increment}
            type="button"
          >
            +
          </button>
        </span>
      </p>
      <button
        className="btn btn-danger btn-block btn-lg"
        disabled={!canAddToCart}
        onClick={handleSubmit}
        type="button"
      >
        В корзину
      </button>
    </div>
  )
}
