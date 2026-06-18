import { type ReactNode } from 'react'
import styles from './Table.module.css'

interface Props {
  children: ReactNode
  bordered?: boolean
  className?: string
}

export function Table({ children, bordered = false, className = '' }: Props) {
  const cls = [styles.table, bordered ? styles.bordered : '', className]
    .filter(Boolean)
    .join(' ')
  return <table className={cls}>{children}</table>
}
