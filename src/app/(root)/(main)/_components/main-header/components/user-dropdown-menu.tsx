"use client"

import Link from "next/link"
import { signOut } from "next-auth/react"
import {
  LayoutDashboard,
  LogOut,
  Settings,
  SquarePen,
  User,
} from "lucide-react"

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { UserAvatar } from "@/components/shared/user-avatar"

interface UserDropdownMenuProps {
  username?: string
  name?: string | null
  image?: string | null
}

export const UserDropdownMenu = ({
  username,
  image,
  name,
}: UserDropdownMenuProps) => {
  const handleSignOut = () => {
    signOut()
  }

  return (
    <DropdownMenu modal={false}>
      <DropdownMenuTrigger>
        <UserAvatar image={image} />
      </DropdownMenuTrigger>

      <DropdownMenuContent className="mr-1 w-44 md:w-52" sideOffset={8}>
        <DropdownMenuLabel>
          <div className="flex flex-col space-y-1">
            <p className="text-sm font-medium leading-none">{name}</p>
            <p className="text-xs leading-none text-muted-foreground">
              @{username}
            </p>
          </div>
        </DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuGroup>
          <DropdownMenuItem className="gap-x-2 md:hidden" asChild>
            <Link href="/editor">
              <SquarePen />
              <span>Write</span>
            </Link>
          </DropdownMenuItem>
          <DropdownMenuItem className="gap-x-2" asChild>
            <Link href="/dashboard/blogs">
              <LayoutDashboard />
              <span>Dashboard</span>
            </Link>
          </DropdownMenuItem>
        </DropdownMenuGroup>
        <DropdownMenuSeparator className="md:hidden" />
        <DropdownMenuGroup>
          <DropdownMenuItem className="gap-x-2" asChild>
            <Link href={`/user/${username}`}>
              <User />
              <span>Profile</span>
            </Link>
          </DropdownMenuItem>
          <DropdownMenuItem className="gap-x-2" asChild>
            <Link href="/settings/edit-profile">
              <Settings />
              <span>Settings</span>
            </Link>
          </DropdownMenuItem>
        </DropdownMenuGroup>
        <DropdownMenuSeparator />
        <DropdownMenuItem className="gap-x-2" onClick={handleSignOut}>
          <LogOut />
          <span>Logout</span>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
