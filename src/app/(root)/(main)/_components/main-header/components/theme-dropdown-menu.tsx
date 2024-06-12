"use client"

import { useTheme } from "next-themes"
import { Monitor, Moon, Sun } from "lucide-react"

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Button } from "@/components/ui/button"

export const ThemeDropdownMenu = () => {
  const { setTheme } = useTheme()

  return (
    <DropdownMenu modal={false}>
      <DropdownMenuTrigger asChild>
        <Button variant="secondary" size="icon">
          <Sun className="rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
          <Moon className="absolute rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
          <span className="sr-only">Toggle theme</span>
        </Button>
      </DropdownMenuTrigger>

      <DropdownMenuContent align="end">
        <DropdownMenuItem className="gap-x-2" onClick={() => setTheme("light")}>
          <Sun />
          <span>Light</span>
        </DropdownMenuItem>

        <DropdownMenuItem className="gap-x-2" onClick={() => setTheme("dark")}>
          <Moon />
          <span>Dark</span>
        </DropdownMenuItem>

        <DropdownMenuItem
          className="gap-x-2"
          onClick={() => setTheme("system")}
        >
          <Monitor />
          <span>System</span>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
