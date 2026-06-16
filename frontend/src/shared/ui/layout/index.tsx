import { type ReactNode } from 'react'

export function PageLayout({ children }: { children: ReactNode }) {
  return <div className="min-vh-100 d-flex flex-column">{children}</div>
}

export function MainContent({ children }: { children: ReactNode }) {
  return (
    <main className="flex-grow-1">
      <div className="container">
        <div className="row">
          <div className="col">{children}</div>
        </div>
      </div>
    </main>
  )
}
