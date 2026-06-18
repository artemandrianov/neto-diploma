import { type InputHTMLAttributes } from 'react'
import styles from './Checkbox.module.css'

interface Props extends Omit<InputHTMLAttributes<HTMLInputElement>, 'type'> {
  label: string
}

export function Checkbox({ label, id, className = '', ...rest }: Props) {
  return (
    <div className={styles.wrap}>
      <input
        type="checkbox"
        id={id}
        className={`${styles.input} ${className}`.trim()}
        {...rest}
      />
      <label className={styles.label} htmlFor={id}>
        {label}
      </label>
    </div>
  )
}
