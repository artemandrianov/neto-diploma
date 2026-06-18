import { Link } from 'react-router-dom'
import { Banner } from '../../../widgets/banner'
import { MainContent } from '../../../shared/ui/layout'
import { ROUTES } from '../../../shared/config'
import buttonStyles from '../../../shared/ui/button/Button.module.css'
import utils from '../../../shared/styles/utilities.module.css'
import styles from './NotFoundPage.module.css'

export function NotFoundPage() {
  return (
    <MainContent>
      <Banner />
      <section className={styles.section}>
        <h2>404 — Страница не найдена</h2>
        <p className={utils.textMuted}>Такой страницы не существует.</p>
        <Link
          to={ROUTES.HOME}
          className={`${buttonStyles.btn} ${buttonStyles.outlinePrimary}`}
        >
          На главную
        </Link>
      </section>
    </MainContent>
  )
}
