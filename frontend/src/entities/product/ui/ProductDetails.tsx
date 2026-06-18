import type { Product } from '../../../shared/types'
import { Table } from '../../../shared/ui/table'

interface Props {
  product: Product
}

const DETAILS: { label: string; key: keyof Product }[] = [
  { label: 'Артикул', key: 'sku' },
  { label: 'Производитель', key: 'manufacturer' },
  { label: 'Цвет', key: 'color' },
  { label: 'Материалы', key: 'material' },
  { label: 'Сезон', key: 'season' },
  { label: 'Повод', key: 'reason' },
]

export function ProductDetails({ product }: Props) {
  return (
    <Table bordered>
      <tbody>
        {DETAILS.map(({ label, key }) => (
          <tr key={key}>
            <td>{label}</td>
            <td>{String(product[key] ?? '')}</td>
          </tr>
        ))}
      </tbody>
    </Table>
  )
}
