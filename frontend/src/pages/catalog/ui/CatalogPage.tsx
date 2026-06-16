import { useSearchParams } from 'react-router-dom'
import { Banner } from '../../../widgets/banner'
import { ProductCatalog } from '../../../widgets/product-catalog'
import { MainContent } from '../../../shared/ui/layout'

export function CatalogPage() {
  const [searchParams] = useSearchParams()
  const initialQuery = searchParams.get('q') ?? ''

  return (
    <MainContent>
      <Banner />
      <ProductCatalog showSearch initialQuery={initialQuery} />
    </MainContent>
  )
}
