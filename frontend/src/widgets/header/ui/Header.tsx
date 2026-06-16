import { NavLink, useNavigate } from 'react-router-dom'
import { NAV_LINKS, ROUTES } from '../../../shared/config'
import { useAppSelector } from '../../../shared/store'
import { HeaderSearch } from '../../../features/search-header'

export function Header() {
  const navigate = useNavigate()
  const cartCount = useAppSelector((s) => s.cart.items.length)

  return (
    <header className="container">
      <div className="row">
        <div className="col">
          <nav className="navbar navbar-expand-sm navbar-light bg-light">
            <NavLink className="navbar-brand" to={ROUTES.HOME}>
              <img src="/img/header-logo.png" alt="Bosa Noga" />
            </NavLink>
            <div className="collapse navbar-collapse" id="navbarMain">
              <ul className="navbar-nav mr-auto">
                {NAV_LINKS.map(({ to, label }) => (
                  <li key={to} className="nav-item">
                    <NavLink
                      className={({ isActive }) =>
                        `nav-link${isActive ? ' active' : ''}`
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
                <div className="header-controls-pics">
                  <HeaderSearch />
                  <div
                    className="header-controls-pic header-controls-cart"
                    onClick={() => navigate(ROUTES.CART)}
                    role="button"
                    aria-label="Корзина"
                    style={{ cursor: 'pointer' }}
                  >
                    {cartCount > 0 && (
                      <div className="header-controls-cart-full">
                        {cartCount}
                      </div>
                    )}
                    <div className="header-controls-cart-menu" />
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
