import type { CartItem } from '../../../shared/types'
import { usePlaceOrder } from '../model'
import { Loader } from '../../../shared/ui/loader'
import { ErrorMessage } from '../../../shared/ui/error-message'

interface Props {
  items: CartItem[]
  onSuccess: () => void
}

export function OrderForm({ items, onSuccess }: Props) {
  const {
    phone,
    setPhone,
    address,
    setAddress,
    agreed,
    setAgreed,
    status,
    error,
    submit,
  } = usePlaceOrder(items, onSuccess)

  const isLoading = status === 'loading'

  return (
    <section className="order">
      <h2 className="text-center">Оформить заказ</h2>
      <div className="card" style={{ maxWidth: '30rem', margin: '0 auto' }}>
        <form className="card-body" onSubmit={submit}>
          <div className="form-group">
            <label htmlFor="order-phone">Телефон</label>
            <input
              id="order-phone"
              className="form-control"
              placeholder="+7XXXXXXXXXX"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              required
              disabled={isLoading}
            />
          </div>
          <div className="form-group">
            <label htmlFor="order-address">Адрес доставки</label>
            <input
              id="order-address"
              className="form-control"
              placeholder="Адрес доставки"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              required
              disabled={isLoading}
            />
          </div>
          <div className="form-group form-check">
            <input
              type="checkbox"
              className="form-check-input"
              id="order-agreement"
              checked={agreed}
              onChange={(e) => setAgreed(e.target.checked)}
              disabled={isLoading}
            />
            <label className="form-check-label" htmlFor="order-agreement">
              Согласен с правилами доставки
            </label>
          </div>
          {isLoading && <Loader size="sm" text="Оформляем заказ..." />}
          {status === 'error' && <ErrorMessage message={error} />}
          <button
            type="submit"
            className="btn btn-outline-secondary"
            disabled={isLoading || !agreed}
          >
            Оформить
          </button>
        </form>
      </div>
    </section>
  )
}
