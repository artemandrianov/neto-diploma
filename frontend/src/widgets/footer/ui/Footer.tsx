import { Link } from 'react-router-dom'
import { ROUTES } from '../../../shared/config'

const INFO_LINKS = [
  { to: ROUTES.ABOUT, label: 'О магазине' },
  { to: ROUTES.CATALOG, label: 'Каталог' },
  { to: ROUTES.CONTACTS, label: 'Контакты' },
]

const PAY_SYSTEMS = [
  'paypal',
  'master-card',
  'visa',
  'yandex',
  'webmoney',
  'qiwi',
]
const SOCIAL_LINKS = ['twitter', 'vk']

export function Footer() {
  return (
    <footer className="container bg-light footer">
      <div className="row">
        <div className="col">
          <section>
            <h5>Информация</h5>
            <ul className="nav flex-column">
              {INFO_LINKS.map(({ to, label }) => (
                <li key={to} className="nav-item">
                  <Link to={to} className="nav-link">
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </section>
        </div>

        <div className="col">
          <section>
            <h5>Принимаем к оплате:</h5>
            <div className="footer-pay">
              {PAY_SYSTEMS.map((sys) => (
                <div
                  key={sys}
                  className={`footer-pay-systems footer-pay-systems-${sys}`}
                />
              ))}
            </div>
          </section>
          <section>
            <div className="footer-copyright">
              2009-2019 © BosaNoga.ru — модный интернет-магазин обуви и
              аксессуаров. Все права защищены.
              <br />
              Доставка по всей России!
            </div>
          </section>
        </div>

        <div className="col text-right">
          <section className="footer-contacts">
            <h5>Контакты:</h5>
            <a className="footer-contacts-phone" href="tel:+74957903503">
              +7 495 79 03 5 03
            </a>
            <span className="footer-contacts-working-hours">
              Ежедневно: с 09-00 до 21-00
            </span>
            <a
              className="footer-contacts-email"
              href="mailto:office@bosanoga.ru"
            >
              office@bosanoga.ru
            </a>
            <div className="footer-social-links">
              {SOCIAL_LINKS.map((s) => (
                <div
                  key={s}
                  className={`footer-social-link footer-social-link-${s}`}
                />
              ))}
            </div>
          </section>
        </div>
      </div>
    </footer>
  )
}
