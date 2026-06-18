import styles from './Loader.module.css'

interface Props {
  size?: 'sm' | 'md' | 'lg'
  text?: string
  className?: string
}

export function Loader({ size = 'md', text, className = '' }: Props) {
  const sizeClass = size === 'sm' ? styles.spinnerSm : ''
  return (
    <div className={`${styles.wrap} ${className}`.trim()}>
      <div className={styles.center}>
        <div className={`${styles.spinner} ${sizeClass}`} role="status">
          <span className={styles.srOnly}>Загрузка...</span>
        </div>
        {text && <div className={styles.text}>{text}</div>}
      </div>
    </div>
  )
}
