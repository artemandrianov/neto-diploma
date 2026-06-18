import type { Category } from '../../../shared/types'
import styles from './CategoryTabs.module.css'

interface Props {
  categories: Category[]
  selected: number
  onSelect: (id: number) => void
}

export function CategoryTabs({ categories, selected, onSelect }: Props) {
  return (
    <ul className={styles.tabs}>
      <li className={styles.item}>
        <a
          className={`${styles.link} ${selected === 0 ? styles.linkActive : ''}`}
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
        <li key={cat.id} className={styles.item}>
          <a
            className={`${styles.link} ${selected === cat.id ? styles.linkActive : ''}`}
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
