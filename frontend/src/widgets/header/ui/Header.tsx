import { NavLink, useNavigate } from 'react-router-dom'
import { NAV_LINKS, ROUTES } from '../../../shared/config'
import { useAppSelector } from '../../../shared/store'
import { HeaderSearch } from '../../../features/search-header'
import utils from '../../../shared/styles/utilities.module.css'
import styles from './Header.module.css'

export function Header() {
  const navigate = useNavigate()
  const cartCount = useAppSelector((s) => s.cart.items.length)

  return (
    <header className={utils.container}>
      <div className={utils.row}>
        <div className={utils.col}>
          <nav className={styles.navbar}>
            <NavLink className={styles.brand} to={ROUTES.HOME}>
              <img src="/img/header-logo.png" alt="Bosa Noga" />
            </NavLink>
            <div className={styles.collapse} id="navbarMain">
              <ul className={styles.nav}>
                {NAV_LINKS.map(({ to, label }) => (
                  <li key={to} className={styles.navItem}>
                    <NavLink
                      className={({ isActive }) =>
                        `${styles.navLink} ${isActive ? styles.navLinkActive : ''}`
                      }
                      to={to}
                      end={to === ROUTES.HOME}
                    >
                      {label}
                    </NavLink>
                  </li>
                ))}
              </ul>

              <div>
                <div className={styles.controlsPics}>
                  <HeaderSearch />
                  <div
                    className={styles.cartIcon}
                    onClick={() => navigate(ROUTES.CART)}
                    role="button"
                    aria-label="Корзина"
                    style={{ cursor: 'pointer' }}
                  >
                    {cartCount > 0 && (
                      <div className={styles.cartBadge}>{cartCount}</div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </nav>
        </div>
      </div>
    </header>
  )
}
