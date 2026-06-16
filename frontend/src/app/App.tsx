import { AppProviders } from './providers'
import { AppRouter } from './router'
import { Header } from '../widgets/header'
import { Footer } from '../widgets/footer'
import { PageLayout } from '../shared/ui/layout'

export function App() {
  return (
    <AppProviders>
      <PageLayout>
        <Header />
        <AppRouter />
        <Footer />
      </PageLayout>
    </AppProviders>
  )
}
