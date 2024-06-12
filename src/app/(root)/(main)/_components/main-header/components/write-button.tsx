import Link from "next/link"
import { SquarePen } from "lucide-react"

import { Button } from "@/components/ui/button"

export const WriteButton = () => {
  return (
    <Button className="hidden md:flex" variant="ghost" asChild>
      <Link
        href="/editor"
        className="flex items-center justify-center gap-[0.3rem]"
      >
        <SquarePen />
        <span>Write</span>
      </Link>
    </Button>
  )
}
