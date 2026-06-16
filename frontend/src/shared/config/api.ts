// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const API_BASE_URL: string =
  (import.meta as any).env?.VITE_API_BASE_URL ?? 'http://localhost:7070'
export const PAGE_SIZE = 6
