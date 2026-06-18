import styles from './Banner.module.css'

export function Banner() {
  return (
    <div className={styles.banner}>
      <img src="/img/banner.jpg" alt="К весне готовы!" />
      <h2 className={styles.header}>К весне готовы!</h2>
    </div>
  )
}
