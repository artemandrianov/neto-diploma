export const ROUTES = {
  HOME: '/',
  CATALOG: '/catalog',
  PRODUCT: '/catalog/:id',
  CART: '/cart',
  ABOUT: '/about',
  CONTACTS: '/contacts',
  NOT_FOUND: '/404',
} as const

export type RoutePath = (typeof ROUTES)[keyof typeof ROUTES]

export const getProductRoute = (id: number | string) => `/catalog/${id}`

export const getCatalogRoute = (params?: {
  q?: string
  categoryId?: number
}) => {
  const qs = new URLSearchParams()
  if (params?.q) qs.set('q', params.q)
  if (params?.categoryId) qs.set('categoryId', String(params.categoryId))
  const s = qs.toString()
  return s ? `/catalog?${s}` : '/catalog'
}

export const NAV_LINKS = [
  { to: ROUTES.HOME, label: 'Главная' },
  { to: ROUTES.CATALOG, label: 'Каталог' },
  { to: ROUTES.ABOUT, label: 'О магазине' },
  { to: ROUTES.CONTACTS, label: 'Контакты' },
] as const
