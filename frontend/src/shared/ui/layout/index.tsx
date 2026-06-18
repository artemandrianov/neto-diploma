import { type ReactNode } from 'react'
import utils from '../../styles/utilities.module.css'

export function PageLayout({ children }: { children: ReactNode }) {
  return (
    <div className={`${utils.minVh100} ${utils.dFlex} ${utils.flexColumn}`}>
      {children}
    </div>
  )
}

export function MainContent({ children }: { children: ReactNode }) {
  return (
    <main className={utils.flexGrow1}>
      <div className={utils.container}>
        <div className={utils.row}>
          <div className={utils.col}>{children}</div>
        </div>
      </div>
    </main>
  )
}
