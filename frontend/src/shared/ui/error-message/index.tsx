import { Alert } from '../alert'
import { Button } from '../button'
import styles from './ErrorMessage.module.css'

interface Props {
  message?: string
  onRetry?: () => void
  className?: string
}

export function ErrorMessage({
  message = 'Произошла ошибка',
  onRetry,
  className = '',
}: Props) {
  return (
    <Alert variant="danger" className={`${styles.row} ${className}`.trim()}>
      <span>{message}</span>
      {onRetry && (
        <Button
          variant="outline-danger"
          size="sm"
          className={styles.retry}
          onClick={onRetry}
        >
          Повторить
        </Button>
      )}
    </Alert>
  )
}
