import type { Category } from '../../../shared/types'

interface Props {
  categories: Category[]
  selected: number
  onSelect: (id: number) => void
}

export function CategoryTabs({ categories, selected, onSelect }: Props) {
  return (
    <ul className="catalog-categories nav justify-content-center">
      <li className="nav-item">
        <a
          className={`nav-link${selected === 0 ? ' active' : ''}`}
          href="#"
          onClick={(e) => {
            e.preventDefault()
            onSelect(0)
          }}
        >
          Все
        </a>
      </li>
      {categories.map((cat) => (
        <li key={cat.id} className="nav-item">
          <a
            className={`nav-link${selected === cat.id ? ' active' : ''}`}
            href="#"
            onClick={(e) => {
              e.preventDefault()
              onSelect(cat.id)
            }}
          >
            {cat.title}
          </a>
        </li>
      ))}
    </ul>
  )
}
