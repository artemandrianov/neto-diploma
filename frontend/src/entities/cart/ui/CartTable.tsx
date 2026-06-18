import { Link } from 'react-router-dom'
import type { CartItem } from '../../../shared/types'
import { formatPrice } from '../../../shared/lib/utils'
import { getProductRoute } from '../../../shared/config'
import { Table } from '../../../shared/ui/table'
import { Button } from '../../../shared/ui/button'
import styles from './CartTable.module.css'

interface Props {
  items: CartItem[]
  onRemove: (id: number, size: string) => void
}

export function CartTable({ items, onRemove }: Props) {
  const total = items.reduce((sum, i) => sum + i.price * i.count, 0)

  return (
    <Table bordered>
      <thead>
        <tr>
          <th>#</th>
          <th>Название</th>
          <th>Размер</th>
          <th>Кол-во</th>
          <th>Стоимость</th>
          <th>Итого</th>
          <th>Действия</th>
        </tr>
      </thead>
      <tbody>
        {items.map((item, idx) => (
          <tr key={`${item.id}-${item.size}`}>
            <td>{idx + 1}</td>
            <td>
              <Link to={getProductRoute(item.id)}>{item.title}</Link>
            </td>
            <td>{item.size}</td>
            <td>{item.count}</td>
            <td>{formatPrice(item.price)}</td>
            <td>{formatPrice(item.price * item.count)}</td>
            <td>
              <Button
                variant="outline-danger"
                size="sm"
                onClick={() => onRemove(item.id, item.size)}
              >
                Удалить
              </Button>
            </td>
          </tr>
        ))}
        <tr>
          <td colSpan={5} className={styles.totalLabel}>
            Общая стоимость
          </td>
          <td className={styles.totalValue}>{formatPrice(total)}</td>
          <td />
        </tr>
      </tbody>
    </Table>
  )
}
