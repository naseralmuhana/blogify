"use client"

import Link from "next/link"

import { useToggle } from "@/hooks/use-toggle"
import { Header } from "@/components/shared/header"
import { Button } from "@/components/ui/button"
import { SearchBar } from "./components/search-bar"
import { MobileSearchIconButton } from "./components/mobile-search-icon-button"
import { WriteButton } from "./components/write-button"
import { ThemeDropdownMenu } from "./components/theme-dropdown-menu"

export const MainHeader = () => {
  const { value: isSearchBarVisible, toggle: toggleIsSearchBarVisible } =
    useToggle()

  return (
    <Header>
      <SearchBar isSearchBarVisible={isSearchBarVisible} />
      <div className="ml-auto flex items-center gap-2 md:gap-3">
        <MobileSearchIconButton
          toggleIsSearchBarVisible={toggleIsSearchBarVisible}
        />
        <WriteButton />

        <ThemeDropdownMenu />
        <Button size="md-rounded" asChild>
          <Link href="/login">Login</Link>
        </Button>
      </div>
    </Header>
  )
}
