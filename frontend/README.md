# React + TypeScript + Vite

# Bosa Noga — интернет-магазин обуви

Дипломный проект курса React от Netology. Интернет-магазин обуви с полным циклом покупки: от просмотра каталога до оформления заказа.

## Стек

- React 19 + TypeScript
- Redux Toolkit
- React Router
- Vite
- CSS

## Архитектура

Проект построен по методологии Feature-Sliced Design:

src/
├── shared/        # утилиты, типы, api-клиент, store, ui-примитивы
├── entities/      # product, category, cart
├── features/      # add-to-cart, place-order, remove-from-cart, search-header
├── widgets/       # header, footer, banner, top-sales, product-catalog
├── pages/         # home, catalog, product, cart, about, contacts, not-found
└── app/           # провайдеры, роутер, глобальные стили

## Функциональность

- Главная страница с хитами продаж и каталогом
- Каталог с фильтрацией по категориям, поиском и пагинацией («Загрузить ещё»)
- Поиск из шапки с редиректом на страницу каталога
- Страница товара с выбором размера и количества
- Корзина с хранением в `localStorage` и оформлением заказа
- Лоадер и обработка ошибок на каждом виджете независимо
- Страница 404

## Запуск

### Требования

- Node.js 19+
- pnpm 9+

### Бэкенд

```bash
cd backend
npm install
npm start
```

Сервер запустится на `http://localhost:7070`.

### Фронтенд

```bash
pnpm install
pnpm dev
```

Приложение откроется на `http://localhost:5173`.

### Сборка

```bash
pnpm build
pnpm preview
```

## Переменные окружения

Создайте `.env` в корне фронтенда если бэкенд запущен не локально:

VITE_API_BASE_URL=https://your-backend-url.com

По умолчанию используется `http://localhost:7070`.
