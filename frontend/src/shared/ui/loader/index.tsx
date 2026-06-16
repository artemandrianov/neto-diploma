interface Props {
  size?: 'sm' | 'md' | 'lg'
  text?: string
  className?: string
}

export function Loader({ size = 'md', text, className = '' }: Props) {
  const sizeClass = size === 'sm' ? 'spinner-border-sm' : ''
  return (
    <div
      className={`d-flex justify-content-center align-items-center p-3 ${className}`}
    >
      <div className="text-center">
        <div
          className={`spinner-border text-primary ${sizeClass}`}
          role="status"
        >
          <span className="sr-only">Загрузка...</span>
        </div>
        {text && <div className="mt-2 text-muted">{text}</div>}
      </div>
    </div>
  )
}
