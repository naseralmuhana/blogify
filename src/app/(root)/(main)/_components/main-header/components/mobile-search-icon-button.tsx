"use client"

import { SearchIcon } from "lucide-react"

import { Button } from "@/components/ui/button"

interface MobileSearchButtonProps {
  toggleIsSearchBarVisible: () => void
}

export const MobileSearchIconButton = ({
  toggleIsSearchBarVisible,
}: MobileSearchButtonProps) => {
  return (
    <Button
      variant="secondary"
      size="icon"
      onClick={toggleIsSearchBarVisible}
      className="md:hidden"
    >
      <SearchIcon />
    </Button>
  )
}
