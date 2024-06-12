import Link from "next/link"
import { Bell } from "lucide-react"

import { Button } from "@/components/ui/button"

export const NotificationButton = () => {
  return (
    <Button variant="secondary" size="icon" asChild>
      <Link href="/dashboard/notification">
        <Bell />
      </Link>
    </Button>
  )
}
