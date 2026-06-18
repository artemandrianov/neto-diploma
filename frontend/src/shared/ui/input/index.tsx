import { type InputHTMLAttributes, forwardRef } from 'react'
import styles from './Input.module.css'

type Props = InputHTMLAttributes<HTMLInputElement>

export const Input = forwardRef<HTMLInputElement, Props>(function Input(
  { className = '', ...rest },
  ref,
) {
  return (
    <input ref={ref} className={`${styles.control} ${className}`.trim()} {...rest} />
  )
})
