import { type ReactNode } from 'react'
import styles from './Alert.module.css'

interface Props {
  variant?: 'success' | 'danger'
  children: ReactNode
  className?: string
}

export function Alert({ variant = 'success', children, className = '' }: Props) {
  const cls = [styles.alert, styles[variant], className].filter(Boolean).join(' ')
  return (
    <div className={cls} role="alert">
      {children}
    </div>
  )
}
