import { useAppDispatch } from '../../../shared/store'
import { removeFromCart } from '../../../shared/store/cart'
import { Button } from '../../../shared/ui/button'

interface Props {
  id: number
  size: string
}

export function RemoveFromCart({ id, size }: Props) {
  const dispatch = useAppDispatch()
  return (
    <Button
      variant="outline-danger"
      size="sm"
      onClick={() => dispatch(removeFromCart({ id, size }))}
    >
      Удалить
    </Button>
  )
}
