import { useState } from 'react'
import { useAppSelector, useAppDispatch } from '../../../shared/store'
import { clearCart, removeFromCart } from '../../../shared/store/cart'
import { CartTable } from '../../../entities/cart'
import { OrderForm } from '../../../features/place-order'
import { Banner } from '../../../widgets/banner'
import { MainContent } from '../../../shared/ui/layout'
import { Alert } from '../../../shared/ui/alert'
import utils from '../../../shared/styles/utilities.module.css'
import styles from './CartPage.module.css'

export function CartPage() {
  const items = useAppSelector((s) => s.cart.items)
  const dispatch = useAppDispatch()
  const [ordered, setOrdered] = useState(false)

  const handleSuccess = () => {
    dispatch(clearCart())
    setOrdered(true)
  }

  return (
    <MainContent>
      <Banner />

      <section className={styles.section}>
        <h2 className={styles.title}>Корзина</h2>

        {ordered ? (
          <Alert variant="success" className={utils.textCenter}>
            Заказ успешно оформлен! Спасибо за покупку.
          </Alert>
        ) : items.length === 0 ? (
          <p className={`${utils.textCenter} ${utils.textMuted} ${utils.py4}`}>
            Корзина пуста
          </p>
        ) : (
          <CartTable
            items={items}
            onRemove={(id, size) => dispatch(removeFromCart({ id, size }))}
          />
        )}
      </section>

      {!ordered && items.length > 0 && (
        <OrderForm items={items} onSuccess={handleSuccess} />
      )}
    </MainContent>
  )
}
