"use client"

import Link from "next/link"
import { useSession } from "next-auth/react"

import { useToggle } from "@/hooks/use-toggle"
import { Header } from "@/components/shared/header"
import { Button } from "@/components/ui/button"
import { Skeleton } from "@/components/ui/skeleton"
import { SearchBar } from "./components/search-bar"
import { MobileSearchIconButton } from "./components/mobile-search-icon-button"
import { WriteButton } from "./components/write-button"
import { ThemeDropdownMenu } from "./components/theme-dropdown-menu"
import { NotificationButton } from "./components/notification-button"
import { UserDropdownMenu } from "./components/user-dropdown-menu"

export const MainHeader = () => {
  const { status, data } = useSession()
  const user = data?.user

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
        {status === "loading" && (
          <>
            <Skeleton className="h-10 w-10 rounded-full" />
            <Skeleton className="h-10 w-10 rounded-full" />
          </>
        )}

        {status === "unauthenticated" && (
          <>
            <Button size="md-rounded" asChild>
              <Link href="/login">Login</Link>
            </Button>
          </>
        )}

        {user && status === "authenticated" && (
          <>
            <NotificationButton />
            <UserDropdownMenu
              name={user.name}
              image={user.image}
              username={user.username}
            />
          </>
        )}
      </div>
    </Header>
  )
}
