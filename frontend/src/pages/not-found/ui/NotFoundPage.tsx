import { Link } from 'react-router-dom'
import { Banner } from '../../../widgets/banner'
import { MainContent } from '../../../shared/ui/layout'
import { ROUTES } from '../../../shared/config'

export function NotFoundPage() {
  return (
    <MainContent>
      <Banner />
      <section className="top-sales text-center">
        <h2>404 — Страница не найдена</h2>
        <p className="text-muted">Такой страницы не существует.</p>
        <Link to={ROUTES.HOME} className="btn btn-outline-primary">
          На главную
        </Link>
      </section>
    </MainContent>
  )
}
