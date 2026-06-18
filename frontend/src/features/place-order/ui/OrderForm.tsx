import type { CartItem } from '../../../shared/types'
import { usePlaceOrder } from '../model'
import { Loader } from '../../../shared/ui/loader'
import { ErrorMessage } from '../../../shared/ui/error-message'
import { Card, CardBody } from '../../../shared/ui/card'
import { FormGroup } from '../../../shared/ui/form-group'
import { Input } from '../../../shared/ui/input'
import { Checkbox } from '../../../shared/ui/checkbox'
import { Button } from '../../../shared/ui/button'
import styles from './OrderForm.module.css'

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
    <section className={styles.section}>
      <h2 className={styles.title}>Оформить заказ</h2>
      <Card className={styles.card}>
        <form onSubmit={submit}>
          <CardBody>
            <FormGroup>
              <label htmlFor="order-phone">Телефон</label>
              <Input
                id="order-phone"
                placeholder="+7XXXXXXXXXX"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                required
                disabled={isLoading}
              />
            </FormGroup>
            <FormGroup>
              <label htmlFor="order-address">Адрес доставки</label>
              <Input
                id="order-address"
                placeholder="Адрес доставки"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
                required
                disabled={isLoading}
              />
            </FormGroup>
            <FormGroup>
              <Checkbox
                id="order-agreement"
                label="Согласен с правилами доставки"
                checked={agreed}
                onChange={(e) => setAgreed(e.target.checked)}
                disabled={isLoading}
              />
            </FormGroup>
            {isLoading && <Loader size="sm" text="Оформляем заказ..." />}
            {status === 'error' && <ErrorMessage message={error} />}
            <Button
              type="submit"
              variant="outline-secondary"
              disabled={isLoading || !agreed}
            >
              Оформить
            </Button>
          </CardBody>
        </form>
      </Card>
    </section>
  )
}
