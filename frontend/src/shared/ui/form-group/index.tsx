import { type ReactNode } from 'react'
import styles from './FormGroup.module.css'

interface Props {
  children: ReactNode
  className?: string
}

export function FormGroup({ children, className = '' }: Props) {
  return <div className={`${styles.group} ${className}`.trim()}>{children}</div>
}
