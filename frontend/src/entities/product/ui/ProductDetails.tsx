import type { Product } from '../../../shared/types'

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
    <table className="table table-bordered">
      <tbody>
        {DETAILS.map(({ label, key }) => (
          <tr key={key}>
            <td>{label}</td>
            <td>{String(product[key] ?? '')}</td>
          </tr>
        ))}
      </tbody>
    </table>
  )
}
