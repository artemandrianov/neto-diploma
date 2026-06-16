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
    <div
      className={`alert alert-danger d-flex justify-content-between align-items-center ${className}`}
      role="alert"
    >
      <span>{message}</span>
      {onRetry && (
        <button
          type="button"
          className="btn btn-outline-danger btn-sm ms-3"
          onClick={onRetry}
        >
          Повторить
        </button>
      )}
    </div>
  )
}
