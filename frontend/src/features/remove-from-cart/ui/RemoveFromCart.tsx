import { useAppDispatch } from '../../../shared/store'
import { removeFromCart } from '../../../shared/store/cart'

interface Props {
  id: number
  size: string
}

export function RemoveFromCart({ id, size }: Props) {
  const dispatch = useAppDispatch()
  return (
    <button
      type="button"
      className="btn btn-outline-danger btn-sm"
      onClick={() => dispatch(removeFromCart({ id, size }))}
    >
      Удалить
    </button>
  )
}
