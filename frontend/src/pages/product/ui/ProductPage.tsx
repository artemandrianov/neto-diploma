import { useParams } from 'react-router-dom'
import { useAsync } from '../../../shared/lib/hooks'
import { productApi } from '../../../entities/product'
import { ProductDetails } from '../../../entities/product'
import { AddToCartForm } from '../../../features/add-to-cart'
import { Banner } from '../../../widgets/banner'
import { Loader } from '../../../shared/ui/loader'
import { ErrorMessage } from '../../../shared/ui/error-message'
import { MainContent } from '../../../shared/ui/layout'
import utils from '../../../shared/styles/utilities.module.css'
import styles from './ProductPage.module.css'

export function ProductPage() {
  const { id } = useParams<{ id: string }>()
  const { state, retry } = useAsync(() => productApi.getOne(Number(id)), [id])

  return (
    <MainContent>
      <Banner />
      <section className={styles.section}>
        {(state.status === 'idle' || state.status === 'loading') && <Loader />}

        {state.status === 'error' && (
          <ErrorMessage
            message={state.error ?? 'Ошибка загрузки'}
            onRetry={retry}
          />
        )}

        {state.status === 'success' &&
          state.data &&
          (() => {
            const product = state.data
            return (
              <>
                <h2 className={styles.title}>{product.title}</h2>
                <div className={utils.row}>
                  <div className={utils.col5}>
                    <img
                      src={product.images[0]}
                      className={utils.imgFluid}
                      alt={product.title}
                    />
                  </div>
                  <div className={utils.col7}>
                    <ProductDetails product={product} />
                    <AddToCartForm product={product} />
                  </div>
                </div>
              </>
            )
          })()}
      </section>
    </MainContent>
  )
}
