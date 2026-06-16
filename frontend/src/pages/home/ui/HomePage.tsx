import { Banner } from '../../../widgets/banner'
import { TopSales } from '../../../widgets/top-sales'
import { ProductCatalog } from '../../../widgets/product-catalog'
import { MainContent } from '../../../shared/ui/layout'

export function HomePage() {
  return (
    <MainContent>
      <Banner />
      <TopSales />
      <ProductCatalog />
    </MainContent>
  )
}
