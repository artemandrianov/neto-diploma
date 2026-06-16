import { Banner } from '../../../widgets/banner'
import { MainContent } from '../../../shared/ui/layout'

export function ContactsPage() {
  return (
    <MainContent>
      <Banner />
      <section className="top-sales">
        <h2 className="text-center">Контакты</h2>
        <p>
          <strong>Телефон:</strong>{' '}
          <a href="tel:+74957903503">+7 495 79 03 5 03</a>
        </p>
        <p>
          <strong>Email:</strong>{' '}
          <a href="mailto:office@bosanoga.ru">office@bosanoga.ru</a>
        </p>
        <p>
          <strong>Режим работы:</strong> Ежедневно с 09:00 до 21:00
        </p>
      </section>
    </MainContent>
  )
}
