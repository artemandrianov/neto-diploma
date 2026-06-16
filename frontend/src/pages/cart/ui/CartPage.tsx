import { useState } from 'react'
import { useAppSelector, useAppDispatch } from '../../../shared/store'
import { clearCart } from '../../../shared/store/cart'
import { CartTable } from '../../../entities/cart'
import { OrderForm } from '../../../features/place-order'
import { Banner } from '../../../widgets/banner'
import { MainContent } from '../../../shared/ui/layout'
import { removeFromCart } from '../../../shared/store/cart'

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

      <section className="cart">
        <h2 className="text-center">Корзина</h2>

        {ordered ? (
          <div className="alert alert-success text-center" role="alert">
            Заказ успешно оформлен! Спасибо за покупку.
          </div>
        ) : items.length === 0 ? (
          <p className="text-center text-muted py-4">Корзина пуста</p>
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
