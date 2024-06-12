import { SearchIcon } from "lucide-react"

import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { cn } from "@/lib/utils"

interface SearchBarProps {
  isSearchBarVisible: boolean
}

export const SearchBar = ({ isSearchBarVisible }: SearchBarProps) => {
  return (
    <div
      className={cn(
        "container absolute left-0 right-0 top-full mt-[1px] w-full border-b border-border/40 bg-background py-2",
        "md:show md:relative md:inset-0 md:m-0 md:block md:w-auto md:border-none md:bg-transparent md:p-0",
        isSearchBarVisible ? "show" : "hide",
      )}
    >
      <Label className="sr-only">Search</Label>
      <Input
        placeholder="Search"
        className="rounded-full pl-5 pr-[14%] md:pl-12 md:pr-6"
      />
      <SearchIcon className="absolute right-[10%] top-1/2 -translate-y-1/2 md:pointer-events-none md:left-4" />
    </div>
  )
}
