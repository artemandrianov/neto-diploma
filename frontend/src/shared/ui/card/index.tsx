import { type ReactNode, type ImgHTMLAttributes } from 'react'
import styles from './Card.module.css'

interface CardProps {
  children: ReactNode
  className?: string
  style?: React.CSSProperties
}

export function Card({ children, className = '', style }: CardProps) {
  return (
    <div className={`${styles.card} ${className}`.trim()} style={style}>
      {children}
    </div>
  )
}

export function CardBody({ children, className = '' }: CardProps) {
  return <div className={`${styles.body} ${className}`.trim()}>{children}</div>
}

export function CardImg(props: ImgHTMLAttributes<HTMLImageElement>) {
  const { className = '', ...rest } = props
  return <img className={`${styles.imgTop} ${className}`.trim()} {...rest} />
}

export function CardText({ children, className = '' }: CardProps) {
  return <p className={`${styles.text} ${className}`.trim()}>{children}</p>
}
