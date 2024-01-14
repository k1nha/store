import { Header } from '@/components'
import LoggedProvider from '@/shared/context/session'

export default function SessionLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <LoggedProvider>
      <Header />
      {children}
    </LoggedProvider>
  )
}
