import { MainHeader } from "./_components/main-header"

interface MainLayoutProps {
  children: React.ReactNode
}

export default function MainLayout({ children }: MainLayoutProps) {
  return (
    <>
      <MainHeader />
      <main className="min-h-cover container">{children}</main>
    </>
  )
}
