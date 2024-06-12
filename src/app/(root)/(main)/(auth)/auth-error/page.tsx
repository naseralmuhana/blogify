import Link from "next/link"

import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

export default async function AuthErrorPage() {
  return (
    <Card className="w-[380px]">
      <CardHeader className="space-y-4">
        <CardTitle>Unable to sign in</CardTitle>
        <CardDescription className="text-lg">
          The sign in link is no longer valid.
        </CardDescription>
      </CardHeader>
      <CardContent>
        It may have been used already or it may have expired.
      </CardContent>

      <CardFooter className="flex w-full justify-center">
        <Button className="p-0" variant="link" asChild>
          <Link href="/">Try to Sign in again</Link>
        </Button>
      </CardFooter>
    </Card>
  )
}
