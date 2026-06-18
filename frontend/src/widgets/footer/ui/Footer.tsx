import { Link } from 'react-router-dom'
import { ROUTES } from '../../../shared/config'
import utils from '../../../shared/styles/utilities.module.css'
import styles from './Footer.module.css'

const INFO_LINKS = [
  { to: ROUTES.ABOUT, label: 'О магазине' },
  { to: ROUTES.CATALOG, label: 'Каталог' },
  { to: ROUTES.CONTACTS, label: 'Контакты' },
]

const PAY_SYSTEMS = [
  { id: 'paypal', className: styles.paySystemPaypal },
  { id: 'master-card', className: styles.paySystemMasterCard },
  { id: 'visa', className: styles.paySystemVisa },
  { id: 'yandex', className: styles.paySystemYandex },
  { id: 'webmoney', className: styles.paySystemWebmoney },
  { id: 'qiwi', className: styles.paySystemQiwi },
]

const SOCIAL_LINKS = [
  { id: 'twitter', className: styles.socialLinkTwitter },
  { id: 'vk', className: styles.socialLinkVk },
]

export function Footer() {
  return (
    <footer className={`${utils.container} ${styles.footer}`}>
      <div className={utils.row}>
        <div className={utils.col}>
          <section>
            <h5>Информация</h5>
            <ul className={styles.nav}>
              {INFO_LINKS.map(({ to, label }) => (
                <li key={to} className={styles.navItem}>
                  <Link to={to} className={styles.navLink}>
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </section>
        </div>

        <div className={utils.col}>
          <section>
            <h5>Принимаем к оплате:</h5>
            <div className={styles.pay}>
              {PAY_SYSTEMS.map(({ id, className }) => (
                <div key={id} className={`${styles.paySystem} ${className}`} />
              ))}
            </div>
          </section>
          <section>
            <div className={styles.copyright}>
              2009-2019 © BosaNoga.ru — модный интернет-магазин обуви и
              аксессуаров. Все права защищены.
              <br />
              Доставка по всей России!
            </div>
          </section>
        </div>

        <div className={`${utils.col} ${utils.textRight}`}>
          <section className={styles.contacts}>
            <h5>Контакты:</h5>
            <a className={styles.contactsPhone} href="tel:+74957903503">
              +7 495 79 03 5 03
            </a>
            <span className={styles.contactsWorkingHours}>
              Ежедневно: с 09-00 до 21-00
            </span>
            <a className={styles.contactsEmail} href="mailto:office@bosanoga.ru">
              office@bosanoga.ru
            </a>
            <div className={styles.socialLinks}>
              {SOCIAL_LINKS.map(({ id, className }) => (
                <div key={id} className={`${styles.socialLink} ${className}`} />
              ))}
            </div>
          </section>
        </div>
      </div>
    </footer>
  )
}
