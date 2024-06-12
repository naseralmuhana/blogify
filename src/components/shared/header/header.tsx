import { ReactNode } from "react"

import { Logo } from "./components/logo"

interface HeaderProps {
  children: ReactNode
}

export const Header = ({ children }: HeaderProps) => {
  return (
    <header className="sticky top-0 z-10 w-full border-b border-border/40 bg-background">
      <div className="container flex items-center gap-12">
        <Logo />
        {children}
      </div>
    </header>
  )
}
