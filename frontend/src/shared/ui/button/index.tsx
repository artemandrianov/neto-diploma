import { type ButtonHTMLAttributes, type ReactNode } from 'react'
import styles from './Button.module.css'

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?:
    | 'primary'
    | 'secondary'
    | 'outline-primary'
    | 'outline-danger'
    | 'outline-secondary'
    | 'danger'
  size?: 'sm' | 'md' | 'lg'
  loading?: boolean
  fullWidth?: boolean
  children: ReactNode
}

const VARIANT_CLASS: Record<NonNullable<Props['variant']>, keyof typeof styles> = {
  primary: 'primary',
  secondary: 'secondary',
  danger: 'danger',
  'outline-primary': 'outlinePrimary',
  'outline-secondary': 'outlineSecondary',
  'outline-danger': 'outlineDanger',
}

export function Button({
  variant = 'primary',
  size = 'md',
  loading = false,
  fullWidth = false,
  disabled,
  children,
  className = '',
  ...rest
}: Props) {
  const sizeClass = size === 'sm' ? styles.sm : size === 'lg' ? styles.lg : ''
  const cls = [
    styles.btn,
    styles[VARIANT_CLASS[variant]],
    sizeClass,
    fullWidth ? styles.block : '',
    className,
  ]
    .filter(Boolean)
    .join(' ')

  return (
    <button className={cls} disabled={loading || disabled} {...rest}>
      {loading && (
        <span
          className={`${styles.spinner} ${styles.spinnerSm}`}
          role="status"
          aria-hidden="true"
        />
      )}
      {children}
    </button>
  )
}
